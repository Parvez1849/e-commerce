import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
      {/* Outer Ring */}
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-100 rounded-full"></div>
        
        {/* Spinning Part */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      {/* Loading Text */}
      <h2 className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
        Loading Products...
      </h2>
      <p className="text-sm text-gray-400">Please wait a moment</p>
    </div>
  );
};

export default Loader;