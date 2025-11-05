'use client';

import { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

function OrderSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Order Successful!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <div className="mt-8 space-x-4">
          <Button onClick={() => router.push('/orders')} variant="secondary">
            View Orders
          </Button>
          <Button onClick={() => router.push('/')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <OrderSuccess />
      </Layout>
    </Suspense>
  );
}