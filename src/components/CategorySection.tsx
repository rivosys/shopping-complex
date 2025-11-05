'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Category {
  name: string;
  image: string;
  description: string;
  itemCount: number;
  color: string;
  icon: string;
  subcategories: string[];
}

const categories: Category[] = [
  {
    name: "Fashion & Apparel",
    image: "/images/categories/fashion.jpg",
    description: "Latest trends in clothing and accessories",
    itemCount: 2500,
    color: "from-purple-600 to-pink-500",
    icon: "👕",
    subcategories: ["Men's Wear", "Women's Wear", "Kids' Fashion", "Accessories"]
  },
  {
    name: "Electronics",
    image: "/images/categories/electronics.jpg",
    description: "Cutting-edge gadgets and smart devices",
    itemCount: 1800,
    color: "from-blue-600 to-cyan-500",
    icon: "📱",
    subcategories: ["Smartphones", "Laptops", "Gaming", "Smart Home"]
  },
  {
    name: "Home & Living",
    image: "/images/categories/home.jpg",
    description: "Transform your living space",
    itemCount: 1200,
    color: "from-amber-500 to-orange-600",
    icon: "🏠",
    subcategories: ["Furniture", "Decor", "Kitchen", "Lighting"]
  },
  {
    name: "Sports & Outdoors",
    image: "/images/categories/sports.jpg",
    description: "Equipment for every adventure",
    itemCount: 950,
    color: "from-green-600 to-emerald-500",
    icon: "⚽",
    subcategories: ["Fitness", "Outdoor", "Team Sports", "Equipment"]
  }
];

export default function CategorySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-3"
            >
              Shop by Category
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-base sm:text-lg"
            >
              Discover our curated collection of premium products
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center sm:justify-end"
          >
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg transition-all text-gray-900 font-semibold text-sm sm:text-base"
            >
              <span>View All Categories</span>
              <motion.svg 
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 min-[550px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative h-[400px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <motion.div 
                className="absolute inset-0 z-0"
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1
                }}
                transition={{ duration: 0.6 }}
              >
                {/* <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  priority
                /> */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-85 mix-blend-overlay transition-opacity group-hover:opacity-90`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent backdrop-blur-[2px] transition-opacity group-hover:opacity-30" />
              </motion.div>
              
              <div className="relative h-full z-10 p-5 sm:p-6 md:p-8 flex flex-col">
                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      y: hoveredIndex === index ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl filter drop-shadow-lg inline-block bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-sm"
                  >
                    {category.icon}
                  </motion.div>
                  
                  <motion.p
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.8
                    }}
                    className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-medium"
                  >
                    {category.description}
                  </motion.p>

                  <div className="relative h-20 sm:h-24 mt-2 sm:mt-4">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: hoveredIndex === index ? 0 : 1,
                        scale: hoveredIndex === index ? 0.8 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl sm:text-3xl font-bold text-white text-center">
                        {category.itemCount.toLocaleString()}+
                        <span className="block text-sm sm:text-base font-medium text-white/80 mt-1">Items</span>
                      </span>
                    </motion.div>

                    <motion.div 
                      className="absolute inset-0 flex flex-wrap gap-1.5 sm:gap-2 content-center justify-center overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.subcategories.map((subcategory, idx) => (
                        <motion.span
                          key={subcategory}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-xs sm:text-sm font-medium bg-white/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm text-white transition-all duration-300 hover:scale-105 hover:bg-white/30"
                        >
                          {subcategory}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>

                <div className="mt-auto mb-6 sm:mb-8 md:mb-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center"
                  >
                    <Link 
                      href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-white/30 to-white/20 hover:from-white/40 hover:to-white/30 backdrop-blur-md transition-all px-4 sm:px-5 py-2 rounded-full text-white font-semibold text-sm whitespace-nowrap group relative"
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                      >
                        Explore Category
                      </motion.div>
                      <motion.div
                        className="relative z-10 flex items-center"
                        animate={hoveredIndex === index ? 
                          { x: [0, 5, 0] } : 
                          { x: 0 }
                        }
                        transition={{ 
                          duration: 1, 
                          repeat: hoveredIndex === index ? Infinity : 0
                        }}
                      >
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: -45 }}
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <span className="text-xl sm:text-2xl">{category.icon}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}