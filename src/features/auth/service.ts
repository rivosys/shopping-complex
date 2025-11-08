import { User, LoginCredentials } from './types';
import bcrypt from 'bcryptjs';

// Simulate API response delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class AuthService {
  private static instance: AuthService;
  private users: User[];

  private constructor() {
    this.users = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user'
      }
    ];
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(credentials: LoginCredentials): Promise<User | null> {
    await delay(500);
    
    const user = this.users.find(u => u.email === credentials.email);
    if (!user) {
      return null;
    }

    // In a real application, you would verify the password here
    // This is just for demo purposes
    if (credentials.password === 'password123') {
      return user;
    }

    return null;
  }

  async getUserById(userId: string): Promise<User | null> {
    await delay(300);
    return this.users.find(u => u.id === userId) || null;
  }

  async getCurrentUser(): Promise<User | null> {
    // This would typically check session/token
    await delay(300);
    return this.users[0] || null;
  }

  async isAdmin(userId: string): Promise<boolean> {
    const user = await this.getUserById(userId);
    return user?.role === 'admin';
  }
}