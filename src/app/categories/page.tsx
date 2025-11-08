'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
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
    description: "Gadgets and smart devices",
    itemCount: 1800,
    color: "from-blue-600 to-cyan-500",
    icon: "📱",
    subcategories: ["Smartphones", "Laptops", "Gaming", "Accessories"]
  },
  {
    name: "Home & Living",
    image: "/images/categories/home.jpg",
    description: "Furniture and home decor",
    itemCount: 1200,
    color: "from-amber-500 to-orange-600",
    icon: "🏠",
    subcategories: ["Furniture", "Decor", "Kitchen", "Lighting"]
  },
  {
    name: "Sports & Outdoors",
    image: "/images/categories/sports.jpg",
    description: "Sports equipment and outdoor gear",
    itemCount: 950,
    color: "from-green-600 to-emerald-500",
    icon: "⚽",
    subcategories: ["Fitness", "Outdoor Sports", "Team Sports", "Equipment"]
  },
  {
    name: "Beauty & Personal Care",
    image: "/images/categories/beauty.jpg",
    description: "Cosmetics and personal care products",
    itemCount: 1500,
    color: "from-pink-500 to-rose-500",
    icon: "💄",
    subcategories: ["Skincare", "Makeup", "Haircare", "Fragrances"]
  },
  {
    name: "Books & Stationery",
    image: "/images/categories/books.jpg",
    description: "Books, art supplies, and office essentials",
    itemCount: 3200,
    color: "from-yellow-500 to-amber-600",
    icon: "📚",
    subcategories: ["Fiction", "Non-Fiction", "Art Supplies", "Office"]
  }
];

export default function CategoriesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">All Categories</h1>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories.map((category) => (
              <motion.div
                key={category.name}
                variants={item}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-75 transition-opacity group-hover:opacity-85`} />
                </div>
                
                <div className="relative h-full flex flex-col justify-between p-8 text-white">
                  <div>
                    <span className="text-5xl mb-6 block filter drop-shadow-lg">
                      {category.icon}
                    </span>
                    <h2 className="text-3xl font-bold mb-3">
                      {category.name}
                    </h2>
                    <p className="text-lg text-white/90 mb-4">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {category.subcategories.map((sub) => (
                        <span 
                          key={sub}
                          className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                    <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
                      {category.itemCount.toLocaleString()}+ items
                    </span>
                  </div>
                  
                  <Link 
                    href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-base font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all px-6 py-3 rounded-full group-hover:translate-x-2"
                  >
                    <span>Explore {category.name}</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </Link>
                </div>

                <motion.div
                  className="absolute top-6 right-6 bg-white w-16 h-16 rounded-full flex items-center justify-center transform rotate-12 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <span className="text-2xl">{category.icon}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}