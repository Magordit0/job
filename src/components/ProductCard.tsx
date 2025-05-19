import React from 'react';
import { Star, Plus, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();
  
  const isInCart = cartItems.some(item => item.product.id === product.id);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };
  
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const discountedPrice = product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
        
        <div className="mt-auto pt-2 flex items-end justify-between">
          <div>
            {product.discount ? (
              <div>
                <span className="text-lg font-bold text-blue-700">${discountedPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-blue-700">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className={`rounded-full p-2 transition-colors ${
              isInCart 
                ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
            aria-label={isInCart ? 'Added to cart' : 'Add to cart'}
          >
            {isInCart ? <Check size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;