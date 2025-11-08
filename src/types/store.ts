import { User, CartItem } from './index';

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}