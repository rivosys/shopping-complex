import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    // Validate environment variables
    if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Razorpay credentials not found');
      return NextResponse.json(
        { error: 'Payment gateway configuration missing' },
        { status: 500 }
      );
    }

    const { amount } = await req.json();

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Convert amount to INR if needed (assuming input is in USD)
    const amountInINR = Math.round(amount * 82.5); // 1 USD = ~82.5 INR

    const options = {
      amount: amountInINR * 100, // Convert to paise
      currency: 'INR',
      receipt: `order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json(order, { status: 200 });
  } catch (error: any) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Error creating order',
        details: error.error?.description || error.stack,
      },
      { status: 500 }
    );
  }
}