import React from 'react';

const ProductCard = ({ product, onOpen }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 border border-gray-100 flex flex-col group h-full">
      {/* Product Image Area */}
      <div className="h-52 flex items-center justify-center overflow-hidden mb-6 relative bg-gray-50 rounded-xl">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-40 object-contain group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold text-gray-600 shadow-sm">
          ⭐ {product.rating?.rate}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow">
        <span className="text-[10px] uppercase tracking-widest text-blue-500 font-bold mb-1">
          {product.category}
        </span>
        <h3 className="text-md font-bold text-gray-800 line-clamp-2 mb-3 leading-tight min-h-[40px]">
          {product.title}
        </h3>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-xs font-semibold text-gray-500">$</span>
            <span className="text-2xl font-black text-gray-900">{product.price}</span>
          </div>
          
          <button 
            onClick={onOpen}
            className="w-full bg-gray-900 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors duration-300 text-sm"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;