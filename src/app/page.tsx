import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { Star } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import ProductOffers from "@/components/ProductOffers";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <div className="relative h-[400px]">
                <ImageCarousel />
                <div className="absolute inset-0 flex items-center z-10">
                  <div className="px-8 py-12 rounded-xl bg-gradient-to-r from-black/30 via-black/20 to-transparent backdrop-blur-[1px] w-full max-w-2xl animate-gradient-x">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 animate-text-shimmer">
                      Welcome to Shopping Complex
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-white/90 font-medium animate-fade-in">
                      Your One-Stop Shop for Quality Products
                    </p>
                    <Link
                      href="/products"
                      className="group relative px-8 py-4 text-white text-lg font-semibold rounded-full 
                               overflow-hidden transition-transform hover:scale-105 inline-block"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-xy"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative flex items-center">
                        Shop Now
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 h-[400px]">
              <ProductOffers />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.stock < 10 && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                      Low Stock
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating} ({product.reviews.length} reviews)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <span className="text-sm text-gray-500">{product.stock} in stock</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySection />
    </div>
  );
}
