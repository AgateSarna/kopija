import React from 'react';
import { useCart } from './CartContext';

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pasūtījuma kopsavilkums</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Tavs grozs ir tukšs.</p>
      ) : (
        <div className="space-y-4">
          <ul className="divide-y">
            {cartItems.map((item, index) => (
              <li key={index} className="py-3 flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500">{item.quantity} gab</p>
                  </div>
                </div>
                <span className="text-right">{(item.price * item.quantity).toFixed(2)} €</span>
              </li>
            ))}
          </ul>
          <div className="text-right mt-4">
            <p className="text-lg font-semibold">Kopā: {total.toFixed(2)} €</p>
            <button className="mt-4 px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
              Apstiprināt pasūtījumu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
