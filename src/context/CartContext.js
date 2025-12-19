import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // LocalStorage se data load karna
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('swiftCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Jab bhi cart badle, LocalStorage update karein
  useEffect(() => {
    localStorage.setItem('swiftCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      if (prev.find(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);