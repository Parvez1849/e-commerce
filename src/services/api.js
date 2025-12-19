const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    // API data ko INR mein convert karke return karna
    return data.map(product => ({
      ...product,
      price: Math.round(product.price * 83) // $1 = ₹83 conversion
    }));
  } catch (error) {
    throw error;
  }
};