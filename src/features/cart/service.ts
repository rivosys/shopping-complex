import { Order, CartItem, Address } from './types';

// Simulate API response delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class OrderService {
  private static instance: OrderService;
  private orders: Order[];

  private constructor() {
    this.orders = [];
  }

  public static getInstance(): OrderService {
    if (!OrderService.instance) {
      OrderService.instance = new OrderService();
    }
    return OrderService.instance;
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    await delay(500);
    return this.orders.filter(o => o.userId === userId);
  }

  async getOrderById(orderId: string): Promise<Order | null> {
    await delay(300);
    return this.orders.find(o => o.id === orderId) || null;
  }

  async createOrder(userId: string, items: CartItem[], shippingAddress: Address): Promise<Order> {
    await delay(700);
    
    const total = items.reduce((sum, item) => sum + item.quantity * 10, 0); // Replace with actual price calculation
    
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      items,
      total,
      status: 'pending',
      createdAt: new Date().toISOString(),
      shippingAddress,
    };

    this.orders.push(newOrder);
    return newOrder;
  }

  async updateOrderStatus(orderId: string, status: Order['status']): Promise<Order> {
    await delay(500);
    const order = await this.getOrderById(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    order.status = status;
    return order;
  }
}