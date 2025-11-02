'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselImage {
  src: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=1080&q=100&fit=crop",
    alt: "Luxury Shopping Mall"
  },
  {
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1920&h=1080&q=100&fit=crop",
    alt: "Modern Fashion Store"
  },
  {
    src: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=1920&h=1080&q=100&fit=crop",
    alt: "Premium Electronics"
  },
  {
    src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1920&h=1080&q=100&fit=crop",
    alt: "Luxury Interior"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&h=1080&q=100&fit=crop",
    alt: "Premium Home Decor"
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[5000ms] ease-in-out transform ${
            index === currentIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={100}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
    </div>
  );
}