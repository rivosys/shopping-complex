import NextAuth from 'next-auth';
import type { User } from '@/types';

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: string;
    };
  }

  interface JWT {
    id: string;
    role: string;
  }
}