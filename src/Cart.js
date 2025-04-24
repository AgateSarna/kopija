import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow rounded p-4 mb-10">
      <h2 className="text-xl font-semibold mb-4">Tavs grozs</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Grozs ir tukšs.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="border-b pb-2">
              {item.name} – {item.price} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;