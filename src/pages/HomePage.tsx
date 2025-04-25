import React, { useState } from 'react';
import { products } from '../data/products';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-4">
        <CategoryNav />
        
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product.id)}
              />
            ))}
          </div>
        </div>

        {selectedProduct && (
          <ProductModal
            product={products.find(p => p.id === selectedProduct)!}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-purple-800 mb-3">Join Our Community</h2>
          <p className="text-purple-700 mb-4">Get exclusive deals, updates and more!</p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 py-3 px-4 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white py-3 px-6 rounded-r-full hover:bg-purple-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;