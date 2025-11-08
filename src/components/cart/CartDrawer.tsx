'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/reduxHooks';
import { selectCartItems, selectCartIsOpen, selectCartItemCount, removeFromCart, updateQuantity, toggleCart } from '@/features/cart/cartSlice';
import { products } from '@/data/products';
import { Product } from '@/features/products/types';
import Image from 'next/image';
import Link from 'next/link';

export default function CartDrawer() {
  const cartItems = useAppSelector(selectCartItems);
  const isOpen = useAppSelector(selectCartIsOpen);
  const totalItems = useAppSelector(selectCartItemCount);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Get the cart products with full details
  const cartProducts = cartItems.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)!
  }));

  const cartTotal = cartProducts.reduce((total, item) => 
    total + (item.quantity * item.product.price), 0);
  

  const dispatch = useAppDispatch();

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(productId));
    }
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      <div className="relative inline-block group">
        <button
          onClick={() => dispatch(toggleCart())}
          className="relative"
          aria-label="Shopping cart"
        >
          <div className="relative h-[21px]">
            <Image
              src="/images/cart-icon.png"
              alt="Cart"
              width={59}
              height={21}
              priority
            />
            {mounted && totalItems > 0 && (
              <div className="absolute -top-2 -right-8 bg-[#ff6b00] text-white text-xs min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] font-bold">
                {totalItems}
              </div>
            )}
          </div>
          
        </button>
      </div>


      {mounted && (
        <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => dispatch(toggleCart())}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping Cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => dispatch(toggleCart())}
                            >
                              <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                              <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
                              <h3 className="mt-2 text-sm font-medium text-gray-900">
                                Your cart is empty
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Start adding some items to your cart!
                              </p>
                            </div>
                          ) : (
                            <div className="flow-root">
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {cartProducts.map((item) => (
                                  <li key={item.productId} className="flex py-6">
                                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                      <Image
                                        src={item.product.image}
                                        alt={item.product.name}
                                        fill
                                        className="object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <Link 
                                              href={`/products/${item.productId}`}
                                              onClick={() => dispatch(toggleCart())}>
                                              {item.product.name}
                                            </Link>
                                          </h3>
                                          <p className="ml-4">
                                            ${item.product.price.toFixed(2)}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex items-center space-x-2">
                                          <button
                                            onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                                            className="p-1 text-gray-500 hover:text-gray-700"
                                          >
                                            <Minus className="w-4 h-4" />
                                          </button>
                                          <span className="font-medium">{item.quantity}</span>
                                          <button
                                            onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                                            className="p-1 text-gray-500 hover:text-gray-700"
                                          >
                                            <Plus className="w-4 h-4" />
                                          </button>
                                        </div>
                                        <button
                                          onClick={() => handleRemoveItem(item.productId)}
                                          className="text-red-600 hover:text-red-500"
                                        >
                                          <Trash2 className="w-5 h-5" />
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {cartItems.length > 0 && (
                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${cartTotal.toFixed(2)}</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                                            <Link
                              href="/checkout"
                              onClick={() => dispatch(toggleCart())}
                              className="w-full flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                            >
                              Checkout
                            </Link>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <button
                              type="button"
                              className="font-medium text-blue-600 hover:text-blue-500"
                              onClick={() => dispatch(toggleCart())}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> →</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      )}
    </>
  );
}