import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = ({ searchTerm, setSearchTerm, setSelectedCategory, setSortOrder, onCartClick }) => {
  const { cart } = useCart();
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-xl md:text-2xl font-bold text-blue-600 truncate">SwiftStore</h1>
          <button onClick={onCartClick} className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-all">
            <span className="text-xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white animate-bounce">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:flex-grow p-2 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex gap-2">
            <select 
              className="flex-grow md:w-40 p-2 border border-gray-300 rounded-lg bg-white text-xs outline-none"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
            <select 
              className="flex-grow md:w-40 p-2 border border-gray-300 rounded-lg bg-white text-xs outline-none font-medium text-blue-600"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="default">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;