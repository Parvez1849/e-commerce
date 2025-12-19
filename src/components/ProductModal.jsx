import React from 'react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl text-gray-400">&times;</button>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
            <img src={product.image} alt={product.title} className="max-h-72 object-contain" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">{product.description}</p>
            <div className="mt-auto">
              <p className="text-3xl font-bold mb-6">₹{product.price}</p>
              <button onClick={() => { addToCart(product); alert('Added to cart!'); }} className="w-full bg-green-600 text-white py-3 rounded-xl font-bold">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;