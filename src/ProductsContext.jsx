import React, { createContext, useState, useContext } from 'react';
import p1 from './atteli/p1.png';
import p2 from './atteli/p2.png';
import p3 from './atteli/p3.png';
import p4 from './atteli/p4.png';
import p5 from './atteli/p5.png';
import p6 from './atteli/p6.png';
import p7 from './atteli/p7.png';
import p8 from './atteli/p8.png';
import p9 from './atteli/p9.png';
import p10 from './atteli/p10.png';
import p11 from './atteli/p12.png';
import p12 from './atteli/p11.png';


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: p1 },
    { id: 2, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs (plats)', price: 729, image: p2 },
    { id: 3, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: p3 },
  { id: 4, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs (plats)', price: 729, image: p4 },
  { id: 5, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: p5 },
  { id: 6, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar faktūru (plats)', price: 150, image: p6 },
  { id: 7, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar faktūru', price: 150, image: p7 },
  { id: 8, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: p8 },
  { id: 9, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: p9 },
  { id: 10, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: p10 },
  { id: 11, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar smalku faktūru', price: 150, image: p12 },
  { id: 12, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar koka rakstu (plats)', price: 670, image: p11 },
{ id: 13, type: 'Kuloni', material: 'Sudrabs', name: 'Dzintara kulons', price: 55, image:  p11},
{ id: 14, type: 'Kuloni', material: 'Zelts', name: 'Saules kulons', price: 89, image: 'https://picsum.photos/id/121/600/600' },
{ id: 15, type: 'Kuloni', material: 'Sudrabs', name: 'Kulons ar rakstu', price: 72, image: 'https://picsum.photos/id/122/600/600' },
{ id: 16, type: 'Kuloni', material: 'Zelts', name: 'Klasiskais kulons', price: 95, image: 'https://picsum.photos/id/123/600/600' },
{ id: 17, type: 'Kuloni', material: 'Sudrabs', name: 'Mazais kulons', price: 39, image: 'https://picsum.photos/id/124/600/600' },
{ id: 18, type: 'Kuloni', material: 'Zelts', name: 'Kulons ar dzintaru', price: 120, image: 'https://picsum.photos/id/125/600/600' },
{ id: 19, type: 'Kuloni', material: 'Sudrabs', name: 'Augu motīva kulons', price: 68, image: 'https://picsum.photos/id/126/600/600' },
{ id: 20, type: 'Kuloni', material: 'Zelts', name: 'Dzirkstošais kulons', price: 110, image: 'https://picsum.photos/id/127/600/600' },
{ id: 21, type: 'Kuloni', material: 'Sudrabs', name: 'Sirds formas kulons', price: 59, image: 'https://picsum.photos/id/128/600/600' },
{ id: 22, type: 'Kuloni', material: 'Zelts', name: 'Zelta kulons ar zīmēm', price: 135, image: 'https://picsum.photos/id/129/600/600' },
{ id: 23, type: 'Kuloni', material: 'Sudrabs', name: 'Smalks ovāls kulons', price: 49, image: 'https://picsum.photos/id/130/600/600' },
    { id: 24, type: 'Kuloni', material: 'Zelts', name: 'Kulons ar ornamentu', price: 99, image: 'https://picsum.photos/id/131/600/600' },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
