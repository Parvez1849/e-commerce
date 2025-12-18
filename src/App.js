import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Loader from './components/Loader';
import { fetchProducts } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // API Call
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  // Search & Filter Logic
  useEffect(() => {
    let result = products;

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, products]);

  return (
    <div className="min-h-screen">
      <Navbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setSelectedCategory={setSelectedCategory} 
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 text-xl font-semibold">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Retry
            </button>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <h2 className="text-2xl font-bold">No products found!</h2>
            <p>Try searching for something else or change the category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOpen={() => setSelectedProduct(product)} 
              />
            ))}
          </div>
        )}
      </main>

      {/* Details Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

      {/* Footer (Optional UI bonus) */}
      <footer className="bg-white border-t py-8 text-center text-gray-400 text-sm">
        © 2025 SwiftStore Assignment. Built with React & Tailwind.
      </footer>
    </div>
  );
}

export default App;