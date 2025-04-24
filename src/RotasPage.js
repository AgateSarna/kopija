import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useProducts } from './ProductsContext';
import gredzeniIcon from './assets/ringiicon.png';
import aprocesIcon from './assets/braceleticon.png';
import auskariIcon from './assets/auskariicon.png';
import piespraudesIcon from './assets/piespraudeicon.png';
import kuloniIcon from './assets/kulonsicon.png'; // ← pielāgo pēc faila nosaukuma


const filters = [
  { name: 'Gredzeni', icon: gredzeniIcon },
  { name: 'Aproces', icon: aprocesIcon },
  { name: 'Auskari', icon: auskariIcon },
  { name: 'Piespraudes, Saktas', icon: piespraudesIcon },
  { name: 'Kuloni', icon: kuloniIcon },
];

const RotasPage = () => {
  const { products } = useProducts(); // <- Un izmanto šeit
  const [page, setPage] = useState(0);
  const location = useLocation();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    const capitalized = path.charAt(0).toUpperCase() + path.slice(1);
    if (filters.includes(capitalized)) {
      setSelected([capitalized]);
    } else {
      setSelected([]);
    }
  }, [location.pathname]);

  const toggleFilter = (type) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((f) => f !== type) : [...prev, type]
    );
  };

  const clearFilters = () => setSelected([]);

  const filtered = selected.length
    ? products.filter((p) => selected.includes(p.type))
    : products;

  const paginated = filtered.slice(page * 12, page * 12 + 12);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="md:col-span-1">
  <div className="border rounded p-4">
    <h3 className="font-semibold text-lg mb-4">Rotu Veidi</h3>
    <div className="grid grid-cols-2 gap-4">
      {filters.map((f) => (
        <label
          key={f.name}
          className={`relative border rounded-lg p-4 flex flex-col items-center text-center cursor-pointer hover:shadow transition ${
            selected.includes(f.name) ? 'border-blue-500 ring-2 ring-blue-300' : ''
          }`}
        >
          {/* Checkbox */}
          <input
            type="checkbox"
            className="absolute top-2 left-2"
            checked={selected.includes(f.name)}
            onChange={() => toggleFilter(f.name)}
          />
          {/* Ikona */}
          <img src={f.icon} alt={f.name} className="w-8 h-8 mb-2" />
          {/* Nosaukums */}
          <span className="text-sm font-medium">{f.name}</span>
        </label>
      ))}
    </div>
    <button onClick={clearFilters} className="text-sm text-blue-600 hover:underline mt-4 block">
      Notīrīt filtrus
    </button>
  </div>
</aside>

      <main className="md:col-span-3">
        <h2 className="text-2xl font-bold mb-4">Rotas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginated.map((p) => (
            <Link to={`/produkts/${p.id}`} key={p.id} className="border rounded p-4 hover:shadow-lg transition">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded mb-3" />
              <h3 className="text-sm text-gray-500 mb-1">{p.material}</h3>
              <p className="font-medium">{p.name}</p>
              <p className="text-sm text-gray-800">{p.price.toFixed(2)} €</p>
            </Link>
          ))}
        </div>
      <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(filtered.length / 12) }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`px-3 py-1 rounded ${page === i ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default RotasPage;