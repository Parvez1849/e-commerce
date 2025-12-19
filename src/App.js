import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartModal from './components/CartModal';
import Loader from './components/Loader';
import { fetchProducts } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then(data => { setProducts(data); setFiltered(data); setLoading(false); })
      .catch(() => { setError("Failed to fetch products."); setLoading(false); });
  }, []);

  useEffect(() => {
    let result = products;
    if (category !== 'all') result = result.filter(p => p.category === category);
    if (searchTerm) result = result.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFiltered(result);
  }, [searchTerm, category, products]);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setCategory} onCartClick={() => setIsCartOpen(true)} />
      <main className="max-w-7xl mx-auto p-6">
        {loading ? <Loader /> : error ? <div className="text-center py-20 text-red-500">{error}</div> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} onOpen={() => setSelected(p)} />)}
          </div>
        )}
      </main>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;