
import React, { useState } from 'react';
import { Menu, X, Utensils, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from '../context/CartContext';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Plans', href: '/plans' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Optimiser', href: '/optimiser' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="bg-moriso-teal p-1.5 rounded-lg">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-moriso-navy tracking-tight">MORISO</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href) 
                    ? 'text-moriso-teal font-bold' 
                    : 'text-gray-600 hover:text-moriso-teal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Cart Button */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-moriso-teal transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-moriso-teal rounded-full min-w-[18px]">
                  {cartCount}
                </span>
              )}
            </button>

            <Link to="/plans" className="bg-moriso-navy text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md transform hover:-translate-y-0.5">
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Cart Button */}
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-moriso-teal transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-moriso-teal rounded-full min-w-[18px]">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-moriso-teal focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'text-moriso-teal bg-moriso-light'
                    : 'text-gray-700 hover:text-moriso-teal hover:bg-moriso-grey'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/plans"
              className="w-full text-left block px-3 py-2 text-moriso-teal font-bold"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
