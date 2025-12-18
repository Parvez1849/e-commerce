import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Overlay/Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-colors text-2xl font-light"
        >
          &times;
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 p-6 md:p-12">
          
          {/* Left Side: Large Image */}
          <div className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl mb-6 md:mb-0">
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-h-[350px] object-contain drop-shadow-lg" 
            />
          </div>
          
          {/* Right Side: Detailed Content */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase rounded-full">
                {product.category}
              </span>
              <span className="text-yellow-500 text-sm font-bold">
                ★ {product.rating?.rate} <span className="text-gray-400 font-normal">({product.rating?.count} reviews)</span>
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
              {product.title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-4 border-gray-100 pl-4">
              {product.description}
            </p>
            
            <div className="mt-auto border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Total Price</p>
                  <p className="text-4xl font-black text-gray-900">${product.price}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all transform active:scale-95 shadow-lg shadow-blue-200">
                  Add to Cart
                </button>
                <button className="px-6 py-4 border-2 border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                  ❤️
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductModal;