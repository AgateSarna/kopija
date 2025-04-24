import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products.length) {
    return (
      <div className="text-center text-gray-500 py-10">
        Nav atrastu produktu.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
