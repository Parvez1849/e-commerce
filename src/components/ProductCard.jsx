import React from 'react';

const ProductCard = ({ product, onOpen }) => (
  <div 
    className="group bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col 
               transition-all duration-300 ease-in-out cursor-pointer
               hover:shadow-2xl hover:-translate-y-2 hover:border-blue-200 h-full"
    onClick={onOpen}
  >
    {/* Image Container with Zoom Effect */}
    <div className="h-40 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-50">
      <img 
        src={product.image} 
        alt={product.title} 
        className="max-h-32 object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>

    <h3 className="font-bold text-sm line-clamp-2 h-10 mb-2 group-hover:text-blue-600 transition-colors">
      {product.title}
    </h3>

    <div className="mt-auto">
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-bold text-gray-900 group-hover:scale-110 transition-transform origin-left">
          ₹{product.price}
        </span>
        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
          <span className="text-xs font-bold text-yellow-600">⭐ {product.rating?.rate}</span>
        </div>
      </div>

      <button 
        className="w-full bg-blue-600 group-hover:bg-blue-700 text-white py-2.5 rounded-lg 
                   text-sm font-semibold transition-all duration-300 
                   shadow-md group-hover:shadow-blue-200"
      >
        View Details
      </button>
    </div>
  </div>
);

export default ProductCard;