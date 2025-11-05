import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // This is where you would typically validate against a database
        if (credentials.email === "john@example.com" && credentials.password === "password123") {
          return {
            id: "1",
            email: credentials.email,
            name: "John Doe"
          };
        }
        
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/(auth)/login",
    error: "/(auth)/login",
    signOut: "/"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };