import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Projector } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Projector size={28} className="text-blue-700" />
          <span className="text-xl font-bold text-blue-700">POCKETBEAM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.path ? 'text-blue-700' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-blue-100 transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={22} className="text-blue-700" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <Link
            to={isAuthenticated ? '/account' : '/login'}
            className="p-2 rounded-full hover:bg-blue-100 transition-colors"
            aria-label="User Account"
          >
            <User size={22} className="text-blue-700" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden rounded-full hover:bg-blue-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-blue-700" />
            ) : (
              <Menu size={22} className="text-blue-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-2 transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-700' : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated && (
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-sm text-gray-600">Logged in as: {user?.name}</p>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;