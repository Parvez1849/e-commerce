import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = ({ searchTerm, setSearchTerm, setSelectedCategory, onCartClick }) => {
  const { cart } = useCart();
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo Section - Left on Desktop, Center on Mobile */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-2xl font-bold text-blue-600">SwiftStore</h1>
          
          {/* Cart Icon for Mobile (Visible only on small screens) */}
          <button 
            onClick={onCartClick}
            className="md:hidden relative p-2 bg-gray-100 rounded-full"
          >
            <span className="text-xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Search & Filter Section - Full width on Mobile */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="border p-2 rounded-lg w-full md:w-64 outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="flex gap-2 w-full sm:w-auto">
            <select 
              className="border p-2 rounded-lg bg-white outline-none flex-grow sm:w-40"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>

            {/* Cart Icon for Desktop (Hidden on mobile) */}
            <button 
              onClick={onCartClick}
              className="hidden md:block relative p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <span className="text-xl">🛒</span>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;