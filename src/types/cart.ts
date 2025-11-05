import { CartItem, Product } from './index';

export interface CartProduct extends CartItem {
  product: Product;
}