import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import CartSidebar from './CartSidebar';
import logo from '../img/Logo.jpg';

const Header: React.FC = () => {
  const { cartCount, toggleCart } = useCart();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-2 text-gray-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex w-10">
              <img src={logo} alt="Logo" />
              <span className="ml-3 mt-2 items-center text-lm text-blue-900">POCKETBEAM</span>
            </div>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
                <Search size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User size={24} className="text-gray-700" />
              <span className="text-sm text-gray-700 hidden md:inline">{user?.email}</span>
              <button 
                onClick={signOut}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                <LogOut size={24} />
              </button>
            </div>
            <button 
              className="relative text-gray-700 hover:text-blue-500 transition-colors"
              onClick={toggleCart}
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="mt-2 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full z-50 p-4">
          <ul className="space-y-3">
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="block text-gray-800 hover:text-blue-500">Home</a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="block text-gray-800 hover:text-blue-500">Categories</a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="block text-gray-800 hover:text-blue-500">Flash Deals</a>
            </li>
            <li className="py-2 border-b border-gray-100">
              <a href="#" className="block text-gray-800 hover:text-blue-500">New Arrivals</a>
            </li>
            <li className="py-2">
              <a href="#" className="block text-gray-800 hover:text-blue-500">Account</a>
            </li>
          </ul>
        </div>
      )}

      <CartSidebar />
    </header>
  );
};

export default Header;