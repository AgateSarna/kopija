import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import { useProducts } from './ProductsContext'

const products = [
  { id: 1, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: 'https://picsum.photos/id/101/600/600' },
  { id: 2, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs (plats)', price: 729, image: 'https://picsum.photos/id/102/600/600' },
  { id: 3, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: 'https://picsum.photos/id/103/600/600' },
  { id: 4, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs (plats)', price: 729, image: 'https://picsum.photos/id/104/600/600' },
  { id: 5, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: 'https://picsum.photos/id/105/600/600' },
  { id: 6, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar faktūru (plats)', price: 150, image: 'https://picsum.photos/id/106/600/600' },
  { id: 7, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar faktūru', price: 150, image: 'https://picsum.photos/id/107/600/600' },
  { id: 8, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: 'https://picsum.photos/id/108/600/600' },
  { id: 9, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: 'https://picsum.photos/id/109/600/600' },
  { id: 10, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar smalku faktūru', price: 150, image: 'https://picsum.photos/id/110/600/600' },
  { id: 11, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar koka rakstu (plats)', price: 670, image: 'https://picsum.photos/id/111/600/600' },
  { id: 12, type: 'Kuloni', material: 'Sudrabs', name: 'Dzintara kulons', price: 55, image: 'https://picsum.photos/id/120/600/600' },
{ id: 13, type: 'Kuloni', material: 'Zelts', name: 'Saules kulons', price: 89, image: 'https://picsum.photos/id/121/600/600' },
{ id: 14, type: 'Kuloni', material: 'Sudrabs', name: 'Kulons ar rakstu', price: 72, image: 'https://picsum.photos/id/122/600/600' },
{ id: 15, type: 'Kuloni', material: 'Zelts', name: 'Klasiskais kulons', price: 95, image: 'https://picsum.photos/id/123/600/600' },
{ id: 16, type: 'Kuloni', material: 'Sudrabs', name: 'Mazais kulons', price: 39, image: 'https://picsum.photos/id/124/600/600' },
{ id: 17, type: 'Kuloni', material: 'Zelts', name: 'Kulons ar dzintaru', price: 120, image: 'https://picsum.photos/id/125/600/600' },
{ id: 18, type: 'Kuloni', material: 'Sudrabs', name: 'Augu motīva kulons', price: 68, image: 'https://picsum.photos/id/126/600/600' },
{ id: 19, type: 'Kuloni', material: 'Zelts', name: 'Dzirkstošais kulons', price: 110, image: 'https://picsum.photos/id/127/600/600' },
{ id: 20, type: 'Kuloni', material: 'Sudrabs', name: 'Sirds formas kulons', price: 59, image: 'https://picsum.photos/id/128/600/600' },
{ id: 21, type: 'Kuloni', material: 'Zelts', name: 'Zelta kulons ar zīmēm', price: 135, image: 'https://picsum.photos/id/129/600/600' },
{ id: 22, type: 'Kuloni', material: 'Sudrabs', name: 'Smalks ovāls kulons', price: 49, image: 'https://picsum.photos/id/130/600/600' },
{ id: 23, type: 'Kuloni', material: 'Zelts', name: 'Kulons ar ornamentu', price: 99, image: 'https://picsum.photos/id/131/600/600' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="p-6 text-center">Produkts nav atrasts.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6">
      <div>
        <img src={product.image} alt={product.name} className="w-full rounded" />
        {cartItems.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Grozā:</h2>
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li key={index} className="text-sm border-b pb-1">
                  {item.name} – {item.price.toFixed(2)} €
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-sm text-gray-500">Rotas apraksts</p>
        <p>{product.description}</p>
        <p className="text-sm text-gray-500">Papildus informācija</p>
        <p>{product.size}</p>
        <p className="text-sm text-gray-500">Metāls</p>
        <p>{product.material}</p>
        <p className="text-sm text-gray-500">Kods</p>
        <p>{product.code}</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-xl font-semibold">{product.price.toFixed(2)} €</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Pievienot grozam
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;