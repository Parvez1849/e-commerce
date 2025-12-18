import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = ({ searchTerm, setSearchTerm, setSelectedCategory, onCartClick }) => {
  const { cart } = useCart();
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Top Row: Logo and Cart Icon */}
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 truncate">
            SwiftStore
          </h1>
          
          <button 
            onClick={onCartClick}
            className="relative p-2 bg-gray-100 rounded-full active:scale-95 transition-transform"
          >
            <span className="text-xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Bottom Row: Search and Filter - Stacked on Mobile */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select 
            className="w-full md:w-48 p-2 border border-gray-300 rounded-lg bg-white text-sm outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;