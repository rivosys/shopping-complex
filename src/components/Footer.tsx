'use client';

import Link from 'next/link';
import { FiArrowUp, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { useState, useEffect } from 'react';

interface FooterLink {
  name: string;
  href: string;
  icon?: IconType;
}

interface FooterLinksSection {
  [key: string]: FooterLink[];
}

const footerLinks: FooterLinksSection = {
  "Get to Know Us": [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press Releases", href: "/press" },
    { name: "Blog", href: "/blog" }
  ],
  "Connect with Us": [
    { name: "Facebook", href: "#", icon: FiFacebook },
    { name: "Twitter", href: "#", icon: FiTwitter },
    { name: "Instagram", href: "#", icon: FiInstagram },
    { name: "YouTube", href: "#", icon: FiYoutube }
  ],
  "Make Money with Us": [
    { name: "Sell on MultiShop", href: "/sell" },
    { name: "Become an Affiliate", href: "/affiliate" },
    { name: "Advertise Your Products", href: "/advertise" },
    { name: "MultiShop Global Selling", href: "/global-selling" }
  ],
  "Let Us Help You": [
    { name: "Your Account", href: "/account" },
    { name: "Returns Centre", href: "/returns" },
    { name: "100% Purchase Protection", href: "/protection" },
    { name: "Help", href: "/help" },
    { name: "App Download", href: "/app" }
  ]
};

const paymentMethods = [
  { name: "Visa", image: "/images/payment/visa.png" },
  { name: "Mastercard", image: "/images/payment/mastercard.png" },
  { name: "PayPal", image: "/images/payment/paypal.png" },
  { name: "Apple Pay", image: "/images/payment/apple-pay.png" }
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Back to top button */}
      {mounted ? (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-full bg-gray-800 hover:bg-gray-700 transition-colors py-4 text-sm font-medium flex items-center justify-center gap-2 group"
        >
          <span>Back to top</span>
          <FiArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      ) : (
        <div className="w-full bg-gray-800 py-4 text-sm font-medium flex items-center justify-center gap-2">
          <span>Back to top</span>
          <FiArrowUp className="w-4 h-4" />
        </div>
      )}

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link: FooterLink) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle section with app download and newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Download Our Mobile App</h3>
              <p className="text-gray-300">Get access to exclusive offers!</p>
              <div className="flex gap-4">
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-2 rounded-lg">
                  App Store
                </Link>
                <Link href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors px-6 py-2 rounded-lg">
                  Play Store
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Newsletter</h3>
              <p className="text-gray-300">Subscribe to receive updates, access to exclusive deals, and more.</p>
              {mounted ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-800 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button 
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-2 rounded-lg font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="flex gap-2">
                  <div className="flex-1 h-10 bg-gray-800 rounded-lg" />
                  <div className="w-24 h-10 bg-orange-500 rounded-lg" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom section with payment methods and copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-300">We accept:</span>
              <div className="flex gap-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="bg-white p-2 rounded-md h-8 w-12 flex items-center justify-center"
                  >
                    {/* Replace with actual payment method images */}
                    <span className="text-xs text-gray-900">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right space-y-2">
              <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} Shopping Complex. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}