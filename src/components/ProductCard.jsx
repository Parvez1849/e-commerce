import React from 'react';

const ProductCard = ({ product, onOpen }) => (
  <div className="bg-white p-4 rounded-xl shadow border border-gray-100 flex flex-col hover:shadow-lg transition-all h-full">
    <div className="h-40 flex items-center justify-center mb-4">
      <img src={product.image} alt={product.title} className="max-h-full object-contain" />
    </div>
    <h3 className="font-bold text-sm line-clamp-2 h-10 mb-2">{product.title}</h3>
    <div className="mt-auto">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xl font-bold text-gray-900">${product.price}</span>
        <span className="text-xs font-bold text-yellow-500">⭐ {product.rating?.rate}</span>
      </div>
      <button 
        onClick={onOpen} 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
      >
        View Details
      </button>
    </div>
  </div>
);

export default ProductCard;