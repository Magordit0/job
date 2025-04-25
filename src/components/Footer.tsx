import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-gray-700 pb-8">
          <div className="flex items-center justify-center md:justify-start">
            <div className="mr-4 text-blue-400">
              <Truck size={28} />
            </div>
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-400">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="mr-4 text-blue-400">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-400">100% secure payment</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <div className="mr-4 text-blue-400">
              <CreditCard size={28} />
            </div>
            <div>
              <h3 className="font-semibold">Money-Back Guarantee</h3>
              <p className="text-sm text-gray-400">30-day return policy</p>
            </div>
          </div>
        </div>
        
        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Bestsellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Flash Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Daily Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Clearance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Returns Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">My Account</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Order History</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Wish List</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Newsletter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-blue-400" />
                <span className="text-gray-400">123 Shopping St, Commerce City, 10101</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-blue-400" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-blue-400" />
                <span className="text-gray-400">support@temulike.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} TemuLike. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;