// MiniCart.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const MiniCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="text-sm text-gray-600 flex items-center gap-1">
        🛒 {cartItems.reduce((sum, item) => sum + item.quantity, 0)} prece(s)
      </button>

      {open && cartItems.length > 0 && (
        <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded w-72 z-50 p-4">
          <h4 className="font-semibold mb-2">Tavs grozs</h4>
          <ul className="text-sm space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div className="w-36 truncate">{item.name}</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                  >+</button>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/pasutit"
            className="block mt-4 w-full text-center text-sm bg-blue-900 text-white py-1.5 rounded hover:bg-blue-800"
          >
            Iet uz pasūtījumu
          </Link>
        </div>
      )}
    </div>
  );
};

export default MiniCart;
