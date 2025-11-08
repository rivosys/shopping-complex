import { User } from '@/features/auth/types';
import { CartItem, Address } from '@/features/cart/types';

export type PaymentMethod = 'online' | 'cod';

export interface PaymentOption {
  id: PaymentMethod;
  title: string;
  description: string;
  icon: string;
  gateway: 'razorpay' | 'cod';
}

export interface UserAddress extends Address {}

// Extend the base User type with our custom fields
export interface ExtendedUser extends User {
  address?: UserAddress;
}