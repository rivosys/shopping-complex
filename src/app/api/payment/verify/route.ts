import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    // Create the signature verification string
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;

    // Create HMAC SHA256 hash
    const signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex');

    // Verify signature
    const isValid = signature === razorpay_signature;

    if (!isValid) {
      return NextResponse.json(
        { message: 'Invalid signature' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Payment verified successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Payment verification failed' },
      { status: 500 }
    );
  }
}