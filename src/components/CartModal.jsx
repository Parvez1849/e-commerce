import React from 'react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-end z-[150]">
      <div className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold">Cart ({cart.length})</h2>
          <button onClick={onClose} className="text-3xl">&times;</button>
        </div>
        <div className="flex-grow overflow-y-auto">
          {cart.map(item => (
            <div key={item.id} className="flex gap-4 border-b py-4 items-center">
              <img src={item.image} className="w-12 h-12 object-contain" alt="" />
              <div className="flex-grow">
                <p className="text-sm font-bold line-clamp-1">{item.title}</p>
                <p className="text-blue-600 font-bold">₹{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs">Remove</button>
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <p className="text-xl font-bold flex justify-between mb-4">
            Total: <span>₹{cart.reduce((total, item) => total + item.price, 0)}</span>
          </p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;