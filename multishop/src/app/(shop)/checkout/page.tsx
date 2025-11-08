'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import { CartItem } from '@/features/cart/types';
import { useSession } from 'next-auth/react';
import { PaymentMethod, PaymentOption, ExtendedUser } from '@/features/checkout/types';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import Layout from '@/components/layout/Layout';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface CartProduct extends CartItem {
  product: any;
}

const paymentOptions: PaymentOption[] = [
  {
    id: 'online',
    title: 'Online Payment',
    description: 'Pay securely with Credit/Debit Card, UPI, Net Banking, or Wallet',
    icon: '💳',
    gateway: 'razorpay'
  },
  {
    id: 'cod',
    title: 'Cash on Delivery',
    description: 'Pay when you receive your order',
    icon: '💰',
    gateway: 'cod'
  }
];

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const cart = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('online');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  // Map cart items to include product details
  const cartProducts = cart.items.map((item: CartItem) => {
    const product = products.find(p => p.id === item.productId);
    if (!product) return null;
    return {
      ...item,
      product
    };
  }).filter(Boolean) as CartProduct[];

  // Calculate cart totals
  const subtotal = cartProducts.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping for orders over $100
  const total = subtotal + shipping;

  useEffect(() => {
    // If user is not logged in, redirect to login
    if (status === 'unauthenticated') {
      router.push('/(auth)/login?redirect=/(shop)/checkout');
    }
    // If cart is empty, redirect to cart
    if (cart.items.length === 0) {
      router.push('/cart');
    }
  }, [status, cart.items.length, router]);

  // Show loading state while checking authentication
  if (!session && status === 'loading' || cart.items.length === 0) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  // Show login prompt if not authenticated
  if (!session) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Please Log In to Continue</h1>
          <p className="text-gray-600 mb-6">You need to be logged in to complete your purchase.</p>
          <div className="space-x-4">
            <Button
              variant="primary"
              onClick={() => router.push('/(auth)/login?redirect=/(shop)/checkout')}
            >
              Log In
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push('/(auth)/register?redirect=/(shop)/checkout')}
            >
              Register
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const initializeRazorpay = async () => {
    try {
      // First create order on the server
      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const order = await response.json();

      // Load Razorpay script
      if (!window.Razorpay) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'Shopping Complex',
        description: 'Purchase from Shopping Complex',
        order_id: order.id,
        handler: async function (response: any) {
          // Verify payment on success
          const verificationResponse = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          if (verificationResponse.ok) {
            handlePaymentSuccess(response);
          } else {
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: (session?.user as ExtendedUser)?.name || '',
          email: (session?.user as ExtendedUser)?.email || '',
        },
        theme: {
          color: '#3B82F6',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert('Failed to initialize payment. Please try again.');
    }
  };

  const handlePaymentSuccess = async (response: any) => {
    try {
      // Here you would typically make an API call to your backend
      // to verify the payment and create the order
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/(shop)/checkout/success');
    } catch (error) {
      alert('Error processing payment. Please try again.');
    }
  };

  const createOrder = async () => {
    try {
      // Here you would typically make an API call to your backend
      // to create an order in your database
      const orderData = {
        items: cartProducts,
        total,
        shipping,
        address: userAddress,
        paymentMethod: selectedPayment,
        userId: session?.user?.id
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return orderData;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  };

  const handlePayment = async () => {
    setPaymentError('');
    if (!selectedPayment) {
      setPaymentError('Please select a payment method to continue');
      return;
    }
    if (!session?.user) {
      setPaymentError('Please log in to continue');
      return;
    }

    setIsProcessing(true);
    try {
      const selectedOption = paymentOptions.find(opt => opt.id === selectedPayment);

      if (selectedOption?.gateway === 'cod') {
        // Create order for Cash on Delivery
        await createOrder();
        alert('Order placed successfully! You can pay on delivery.');
        router.push('/(shop)/checkout/success');
        return;
      }

      // For Online payments (Razorpay)
      if (selectedOption?.gateway === 'razorpay') {
        // Initialize Razorpay for online payments
        await initializeRazorpay();
      }
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Get user's registered address from session
  const userAddress = (session?.user as ExtendedUser)?.address;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Card className="p-6 space-y-6">
              {/* Delivery Address */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
                <div className="p-4 border rounded bg-gray-50">
                  <p className="font-medium">{session?.user?.name}</p>
                  <p>{session?.user?.email}</p>
                  {userAddress && userAddress.street ? (
                    <p className="mt-2">
                      {userAddress.street}<br />
                      {userAddress.city}, {userAddress.zipCode}<br />
                      {userAddress.country}
                    </p>
                  ) : (
                    <p className="mt-2 text-gray-500">
                      No address found. Please add a delivery address.
                    </p>
                  )}
                  <Button 
                    variant="outline"
                    className="mt-4"
                    onClick={() => router.push('/profile/address')}
                  >
                    Update Address
                  </Button>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
                {paymentError && (
                  <div className="mb-4 p-3 text-red-600 bg-red-50 border border-red-200 rounded-md">
                    {paymentError}
                  </div>
                )}
                <div className="space-y-3">
                  {paymentOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center space-x-4 p-4 border-2 rounded cursor-pointer transition-colors ${
                        selectedPayment === option.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === option.id}
                        onChange={() => setSelectedPayment(option.id)}
                        className="w-4 h-4 text-primary cursor-pointer"
                      />
                      <span className="text-2xl">{option.icon}</span>
                      <div className="flex-grow">
                        <div className="font-medium">{option.title}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Order Items</h2>
                <div className="space-y-4">
                  {cartProducts.map((item: CartProduct) => (
                    <div key={item.product.id} className="flex items-center gap-4 py-4 border-b">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        width={80}
                        height={80}
                        className="rounded"
                      />
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.product.name}</h3>
                        <p className="text-gray-600">
                          Quantity: {item.quantity} × ${item.product.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Order Total */}
          <div className="md:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Total</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                className="w-full mt-6"
                onClick={handlePayment}
                isLoading={isProcessing}
                disabled={isProcessing || !selectedPayment}
              >
                {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
