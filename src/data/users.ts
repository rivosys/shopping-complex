import { User } from '@/types';

interface UserWithPassword extends User {
  hashedPassword: string;
}

// In a real application, this would be stored in a database
export const users: UserWithPassword[] = [
  {
    id: 'u1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    hashedPassword: '$2a$10$8Vcu7JmZt0LzNP6JNXzQqeQUBCQOXcY1Yw.s/q.QQwR0g6DWMH3jS', // password123
  },
  {
    id: 'u2',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    hashedPassword: '$2a$10$8Vcu7JmZt0LzNP6JNXzQqeQUBCQOXcY1Yw.s/q.QQwR0g6DWMH3jS', // password123
  },
];