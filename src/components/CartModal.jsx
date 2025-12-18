import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-end z-[150]">
      <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart ({cart.length})</h2>
          <button onClick={onClose} className="text-3xl text-gray-400 hover:text-red-500">&times;</button>
        </div>

        <div className="flex-grow overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-4xl mb-4">🛒</p>
              <p>Your cart is empty!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4 items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain bg-gray-50 p-1 rounded" />
                  <div className="flex-grow">
                    <h4 className="text-sm font-bold line-clamp-1">{item.title}</h4>
                    <p className="text-blue-600 font-bold">${item.price}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total:</span>
            <span>${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
          </div>
          <button 
            disabled={cart.length === 0}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;