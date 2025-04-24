// MiniCart.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const MiniCart = () => {
  const { cartItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="text-sm text-gray-600 flex items-center gap-1">
        🛒 {cartItems.length} prece(s)
      </button>
      {open && cartItems.length > 0 && (
        <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded w-64 z-50 p-4">
          <h4 className="font-semibold mb-2">Tavs grozs</h4>
          <ul className="text-sm space-y-1">
            {cartItems.map((item, index) => (
              <li key={index} className="border-b pb-1">
                {item.name} – {item.price.toFixed(2)} €
              </li>
            ))}
          </ul>
          <Link to="/pasutit" className="block mt-3 w-full text-center text-sm bg-blue-900 text-white py-1.5 rounded hover:bg-blue-800">
  Iet uz pasūtījumu
</Link>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
