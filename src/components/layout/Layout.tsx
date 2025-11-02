import Link from 'next/link';
import { ReactNode, useState, useEffect } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAppSelector } from '@/lib/hooks/reduxHooks';
import { selectCartItemCount } from '@/store/features/cartSlice';

interface LayoutProps {
  children: ReactNode;
}

const Header = () => {
  const totalItems = useAppSelector(selectCartItemCount);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Shopping Complex
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
            <Link href="/cart" className="relative inline-flex items-center gap-1 text-gray-700 hover:text-blue-600">
              <div className="relative flex items-center">
                <ShoppingCartOutlinedIcon sx={{ fontSize: 24 }} />
                {mounted && totalItems > 0 && (
                  <div 
                    className="absolute -top-2 -right-2 bg-[#ff6b00] text-white text-xs min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ transform: 'translate(25%, -25%)' }}
                  >
                    {totalItems}
                  </div>
                )}
              </div>
              <span className="font-medium">Cart</span>
            </Link>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} Shopping Complex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;