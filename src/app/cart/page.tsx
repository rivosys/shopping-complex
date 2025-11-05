'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Layout from '@/components/layout/Layout';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/reduxHooks';
import { removeItem, updateQuantity, clearCart } from '@/store/features/cartSlice';
import { products } from '@/data/products';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Product, CartItem } from '@/types';
import { CartProduct } from '@/types/cart';
import Image from 'next/image';
import RelatedProducts from '@/components/cart/RelatedProducts';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const cartProducts: CartProduct[] = cartItems.map((item: CartItem) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!
  }));

  const totalAmount = cartProducts.reduce(
    (total: number, item: CartProduct) => total + item.product.price * item.quantity,
    0
  );

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeItem(productId));
    } else {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  const router = useRouter();

  const { data: session } = useSession();

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Check if user is logged in
    if (!session) {
      // Redirect to login with return URL
      router.push('/login?redirect=/cart');
      setIsCheckingOut(false);
      return;
    }
    // If logged in, proceed to checkout
    router.push('/checkout');
    setIsCheckingOut(false);
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">Add some products to your cart to continue shopping.</p>
          <Button href="/products" variant="primary">
            Continue Shopping
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartProducts.map(({ product, quantity }) => (
              <Card key={product.id} variant="bordered">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="object-cover rounded"
                        fill
                        sizes="(max-width: 96px) 100vw, 96px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-gray-600">${product.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => handleUpdateQuantity(product.id, quantity - 1)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(product.id, quantity + 1)}
                          className="p-1 rounded hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${(product.price * quantity).toFixed(2)}</p>
                      <button
                        onClick={() => dispatch(removeItem(product.id))}
                        className="text-red-600 text-sm mt-2 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card variant="bordered">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-2 font-bold flex justify-between">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full"
                  isLoading={isCheckingOut}
                >
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts cartItems={cartItems} />
      </div>
    </Layout>
  );
}