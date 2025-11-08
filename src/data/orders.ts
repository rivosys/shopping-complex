import { Order } from '@/features/cart/types';

export const orders: Order[] = [
  {
    id: 'o1',
    userId: 'u1',
    items: [
      { productId: '1', quantity: 1 },
      { productId: '2', quantity: 2 }
    ],
    total: 499.97,
    status: 'delivered',
    createdAt: '2023-10-20',
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10001'
    }
  },
  {
    id: 'o2',
    userId: 'u1',
    items: [
      { productId: '3', quantity: 1 }
    ],
    total: 299.99,
    status: 'processing',
    createdAt: '2023-10-25',
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10001'
    }
  }
];