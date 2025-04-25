import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar: React.FC = () => {
  const { 
    isCartOpen, 
    toggleCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      toggleCart();
    }, 2000);
  };

  if (!isCartOpen) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex">
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative w-full max-w-md ml-auto bg-white h-full shadow-xl flex items-center justify-center">
          <div className="text-center p-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
            <p className="text-gray-600">Thank you for your purchase.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      <div 
        className="bg-black bg-opacity-50 absolute inset-0"
        onClick={toggleCart}
      ></div>
      
      <div className="relative w-full max-w-md ml-auto bg-white h-full shadow-xl overflow-y-auto p-5">
        <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button 
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <button 
              onClick={toggleCart}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-20 h-20 object-cover rounded mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <div className="flex items-center mt-1 mb-2">
                      <span className="text-blue-500 font-semibold">${item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="text-gray-400 text-xs line-through ml-2">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-500 hover:text-blue-500"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-2 py-1 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-500 hover:text-blue-500"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full mt-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition text-center font-semibold"
              >
                Pay Now
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;