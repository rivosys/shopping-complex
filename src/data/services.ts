import { products } from './products';
import { categories } from './categories';
import { orders } from './orders';
import { Product, Category, Order } from '@/types';

// Simulate API response delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const ProductService = {
  async getAll(): Promise<Product[]> {
    await delay(500);
    return products;
  },

  async getById(id: string): Promise<Product | null> {
    await delay(300);
    const product = products.find(p => p.id === id);
    return product || null;
  },

  async getByCategory(categoryId: string): Promise<Product[]> {
    await delay(500);
    return products.filter(p => p.category === categoryId);
  }
};

export const CategoryService = {
  async getAll(): Promise<Category[]> {
    await delay(300);
    return categories;
  },

  async getById(id: string): Promise<Category | null> {
    await delay(200);
    const category = categories.find(c => c.id === id);
    return category || null;
  }
};

export const OrderService = {
  async getUserOrders(userId: string): Promise<Order[]> {
    await delay(500);
    return orders.filter(o => o.userId === userId);
  },

  async getById(orderId: string): Promise<Order | null> {
    await delay(300);
    const order = orders.find(o => o.id === orderId);
    return order || null;
  }
};