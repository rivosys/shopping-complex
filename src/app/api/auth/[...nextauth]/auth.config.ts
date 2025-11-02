import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { users } from '@/data/users';
import { User } from '@/types';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/(auth)/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnProtectedRoute = nextUrl.pathname.startsWith('/cart') || 
                                nextUrl.pathname.startsWith('/profile');
      
      if (isOnProtectedRoute) {
        if (isLoggedIn) return true;
        return false;
      }
      
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = (user as User).id;
        token.role = (user as User).role;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as 'user' | 'admin';
      }
      return session;
    },
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = users.find(u => u.email === email);
        
        if (!user) return null;
        
        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
        
        if (!isPasswordValid) return null;
        
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
};