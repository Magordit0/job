import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Projector, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Projector size={24} className="text-blue-400" />
              <span className="text-xl font-bold text-white">POCKETBEAM</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transform any space into your personal cinema with our cutting-edge projectors.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.tiktok.com/@thepocketbeamoficial?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/pocketbeam?igsh=Mml0bHk5czE5cXh2" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-blue-400 transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-blue-400 transition-colors">Dashboard</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-blue-400 transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-blue-400 transition-colors">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Projection Ave, Suite 100<br />Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-400 mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-400 mr-2" />
                <span className="text-gray-400">support@proscreen.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} ProScreen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;