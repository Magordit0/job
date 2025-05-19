import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartSummary: React.FC = () => {
  const { totalItems, totalPrice, cartItems } = useCart();
  const navigate = useNavigate();
  
  const subtotal = totalPrice;
  const shipping = 0; // Free shipping
  const taxes = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + taxes;
  
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal ({totalItems} items)</span>
          <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Tax</span>
          <span className="text-gray-800 font-medium">${taxes.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between">
            <span className="text-gray-800 font-bold">Total</span>
            <span className="text-blue-700 font-bold text-xl">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
        className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center transition-colors ${
          cartItems.length > 0 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <CreditCard size={20} className="mr-2" />
        Proceed to Checkout
      </button>
      
      <div className="mt-6">
        <button
          onClick={() => navigate('/products')}
          className="w-full py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold flex items-center justify-center transition-colors"
        >
          <ShoppingBag size={20} className="mr-2" />
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartSummary;