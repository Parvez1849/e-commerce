/**
 * API Service for fetching products
 * Base URL: FakeStoreAPI
 */

const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    
    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch products:", error);
    throw error; // Isse App.js mein catch block trigger hoga
  }
};

// Optional: Single product fetch karne ke liye (Details page ke liye kaam aata hai)
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Product not found');
    return await response.json();
  } catch (error) {
    throw error;
  }
};