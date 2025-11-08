import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: 'Razorpay credentials are not configured' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Razorpay credentials are valid' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to verify credentials' },
      { status: 500 }
    );
  }
}
