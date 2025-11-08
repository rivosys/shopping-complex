import { OrderService } from '@/features/cart/service';
import { PaymentMethod } from '@/features/checkout/types';

const orderService = OrderService.getInstance();

export async function createOrder(data: {
  items: any[];
  total: number;
  shipping: number;
  address: any;
  paymentMethod: PaymentMethod;
  userId: string;
}) {
  try {
    const order = await orderService.createOrder(
      data.userId,
      data.items.map(item => ({
        productId: item.product.id,
        quantity: item.quantity
      })),
      data.address
    );
    return order;
  } catch (error) {
    throw new Error('Failed to create order');
  }
}