import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow rounded hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price} €</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Pievienot grozam
      </button>
    </div>
  );
};

export default ProductCard;