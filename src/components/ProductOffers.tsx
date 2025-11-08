'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

// Create dynamic offers with different themes
const transitions = [
  {
    entering: 'transform -translate-x-full opacity-0 ease-in-out',
    leaving: 'transform translate-x-0 opacity-100 ease-in-out'
  },
  {
    entering: 'transform translate-y-full opacity-0 ease-out',
    leaving: 'transform translate-y-0 opacity-100 ease-in'
  },
  {
    entering: 'transform scale-50 opacity-0 ease-in-out',
    leaving: 'transform scale-100 opacity-100 ease-out'
  },
  {
    entering: 'transform rotate-90 opacity-0 ease-in',
    leaving: 'transform rotate-0 opacity-100 ease-out'
  },
  {
    entering: 'transform -translate-y-full -rotate-12 opacity-0 ease-in-out',
    leaving: 'transform translate-y-0 rotate-0 opacity-100 ease-in'
  }
];

const offers = [
  {
    title: "Flash Sale! 🔥",
    product: products[0],
    discount: 40,
    tag: "Limited Time",
    color: "from-red-600 to-orange-500"
  },
  {
    title: "Deal of the Day ⭐",
    product: products[1],
    discount: 30,
    tag: "Today Only",
    color: "from-blue-600 to-purple-600"
  },
  {
    title: "Clearance Sale! 🏷️",
    product: products[2],
    discount: 50,
    tag: "While Stocks Last",
    color: "from-green-600 to-teal-500"
  },
  {
    title: "Special Offer 🎁",
    product: products[3],
    discount: 35,
    tag: "Premium Deal",
    color: "from-purple-600 to-pink-500"
  }
];

export default function ProductOffers() {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(1);
  const [isTopTransitioning, setIsTopTransitioning] = useState(false);
  const [isBottomTransitioning, setIsBottomTransitioning] = useState(false);
  const [topTransitionIndex, setTopTransitionIndex] = useState(0);
  const [bottomTransitionIndex, setBottomTransitionIndex] = useState(2);

  // Function to get next index while avoiding showing same offer in both cards
  const getNextIndex = (currentIndex: number, otherIndex: number) => {
    let nextIndex = (currentIndex + 1) % offers.length;
    if (nextIndex === otherIndex) {
      nextIndex = (nextIndex + 1) % offers.length;
    }
    return nextIndex;
  };

  // Function to get next transition effect
  const getNextTransition = (currentIndex: number) => {
    return (currentIndex + 1) % transitions.length;
  };

  useEffect(() => {
    // Top card transition every 7 seconds
    const topInterval = setInterval(() => {
      setIsTopTransitioning(true);
      setTimeout(() => {
        setTopIndex((prev) => getNextIndex(prev, bottomIndex));
        setTopTransitionIndex(prev => getNextTransition(prev));
        setIsTopTransitioning(false);
      }, 700);
    }, 7000);

    // Bottom card transition every 5 seconds
    const bottomInterval = setInterval(() => {
      setIsBottomTransitioning(true);
      setTimeout(() => {
        setBottomIndex((prev) => getNextIndex(prev, topIndex));
        setBottomTransitionIndex(prev => getNextTransition(prev));
        setIsBottomTransitioning(false);
      }, 700);
    }, 5000);

    return () => {
      clearInterval(topInterval);
      clearInterval(bottomInterval);
    };
  }, []);

  return (
    <div className="grid grid-rows-2 gap-4 h-full">
      {/* Top Card */}
      <div className="relative overflow-hidden rounded-xl shadow-lg h-[190px] group">
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            isTopTransitioning 
              ? transitions[topTransitionIndex].entering
              : transitions[topTransitionIndex].leaving
          }`}
        >
          {/* Content for top card */}
          <div className="relative h-full">
            <Image
              src={offers[topIndex].product.image}
              alt={offers[topIndex].product.name}
              fill
              className="object-cover"
              priority
            />

            <div className={`absolute inset-0 bg-gradient-to-r ${offers[topIndex].color} opacity-75 transition-opacity group-hover:opacity-70`}>
              <div className="absolute top-1/2 -translate-y-1/2 left-6 text-white z-10">
                <div className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-2">
                  {offers[topIndex].tag}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {offers[topIndex].title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl font-bold">
                    ${(offers[topIndex].product.price * (1 - offers[topIndex].discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-sm line-through opacity-75">
                    ${offers[topIndex].product.price.toFixed(2)}
                  </span>
                </div>
                <Link
                  href={`/products/${offers[topIndex].product.id}`}
                  className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all px-4 py-2 rounded-full text-sm font-semibold group-hover:translate-x-2"
                >
                  <span>Shop Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white text-gray-900 font-bold w-16 h-16 rounded-full flex items-center justify-center transform rotate-12 transition-transform group-hover:rotate-0 shadow-lg">
              <div className="text-center">
                <span className="text-xl block -mb-1">{offers[topIndex].discount}%</span>
                <span className="text-xs">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="relative overflow-hidden rounded-xl shadow-lg h-[190px] group">
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            isBottomTransitioning 
              ? transitions[bottomTransitionIndex].entering
              : transitions[bottomTransitionIndex].leaving
          }`}
        >
          <div className="relative h-full">
            <Image
              src={offers[bottomIndex].product.image}
              alt={offers[bottomIndex].product.name}
              fill
              className="object-cover"
              priority
            />

            <div className={`absolute inset-0 bg-gradient-to-r ${offers[bottomIndex].color} opacity-75 transition-opacity group-hover:opacity-70`}>
              <div className="absolute top-1/2 -translate-y-1/2 left-6 text-white z-10">
                <div className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm inline-block mb-2">
                  {offers[bottomIndex].tag}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {offers[bottomIndex].title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl font-bold">
                    ${(offers[bottomIndex].product.price * (1 - offers[bottomIndex].discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-sm line-through opacity-75">
                    ${offers[bottomIndex].product.price.toFixed(2)}
                  </span>
                </div>
                <Link
                  href={`/products/${offers[bottomIndex].product.id}`}
                  className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all px-4 py-2 rounded-full text-sm font-semibold group-hover:translate-x-2"
                >
                  <span>Shop Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white text-gray-900 font-bold w-16 h-16 rounded-full flex items-center justify-center transform rotate-12 transition-transform group-hover:rotate-0 shadow-lg">
              <div className="text-center">
                <span className="text-xl block -mb-1">{offers[bottomIndex].discount}%</span>
                <span className="text-xs">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}