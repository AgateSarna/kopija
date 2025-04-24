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
import p13 from './atteli/p13.png';
import p14 from './atteli/p14.png';
import p15 from './atteli/p15.png';
import p16 from './atteli/p16.png';
import p17 from './atteli/p17.png';
import p18 from './atteli/p18.png';
import p19 from './atteli/p19.png';
import p20 from './atteli/p20.png';
import p21 from './atteli/p21.png';
import p22 from './atteli/p22.png';
import p23 from './atteli/p23.png';
import p24 from './atteli/p24.png';
import p25 from './atteli/p25.png';
import p26 from './atteli/p26.png';
import p27 from './atteli/p27.png';
import p28 from './atteli/p28.png';
import p29 from './atteli/p29.png';
import p30 from './atteli/p30.png';
import p31 from './atteli/p31.png';
import p32 from './atteli/p32.png';
import p33 from './atteli/p33.png';
import p34 from './atteli/p34.png';
import p35 from './atteli/p35.png';
import p36 from './atteli/p36.png';
import p37 from './atteli/p37.png';
import p38 from './atteli/p38.png';
import p39 from './atteli/p39.png';
import p40 from './atteli/p40.png';
import p41 from './atteli/p41.png';
import p42 from './atteli/p42.png';
import p43 from './atteli/p43.png';
import p44 from './atteli/p44.png';
import p45 from './atteli/p45.png';
import p46 from './atteli/p46.png';
import p47 from './atteli/p47.png';
import p48 from './atteli/p48.png';


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products] = useState([
    { id: 1, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: p1, description:'Dzeltenā zelta 585 proves/14K gredzens ar Lielvārdes jostas motīvu.', size: '4mm' },
    { id: 2, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs (plats)', price: 729, image: p2, description:'Dzeltenā zelta 585 proves/14K gredzens ar Lielvārdes jostas motīvu.', size: '6mm'},
    { id: 3, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: p3,description:'Baltā zelta 585 proves/14K gredzens ar Lielvārdes jostas motīvu.', size: '4mm' },
  { id: 4, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs (plats)', price: 729, image: p4, description:'Baltā zelta 585 proves/14K gredzens ar Lielvārdes jostas motīvu..', size: '6mm'},
  { id: 5, type: 'Gredzeni', material: 'Zelts', name: 'Lielvārdes jostas motīvs', price: 430, image: p5, description:'Sarkanā zelta 585 proves/14K gredzens ar Lielvārdes jostas motīvu.', size: '4mm' },
  { id: 6, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar faktūru (plats)', price: 150, image: p6, description:'Sudraba gredzens ar faktūru.', size: '6mm' },
  { id: 7, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar faktūru', price: 150, image: p7, description:'Sudraba gredzens ar faktūru.', size: '4mm' },
  { id: 8, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: p8, description:'Sudraba gredzens ar faktūru.', size: '4mm' },
  { id: 9, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: p9, description:'Dzeltenā zelta 585 proves/14K gredzens ar faktūru.', size: '4mm' },
  { id: 10, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar smalku faktūru', price: 475, image: p10, description:'Sarkanā zelta 585 prove/14K gredzens ar faktūru.', size: '4mm' },
  { id: 11, type: 'Gredzeni', material: 'Sudrabs', name: 'Gredzens ar smalku faktūru', price: 150, image: p12, description:'Sudraba gredzens ar faktūru.', size: '4mm' },
  { id: 12, type: 'Gredzeni', material: 'Zelts', name: 'Gredzens ar koka rakstu (plats)', price: 670, image: p11, description:'Sudraba gredzens ar koka rakstu..', size: '6mm' },

  { id: 13, type: 'Kuloni', material: 'Sudrabs', name: 'Lielā sudraba un mazā bronzas kļava', price: 75, image:  p13},
  { id: 14, type: 'Kuloni', material: 'Sudrabs', name: 'Lielā sudraba un mazā bronzas liepa', price: 75, image: p14 },
  { id: 15, type: 'Kuloni', material: 'Sudrabs', name: 'Lielais ozols', price: 45, image: p15 },
  { id: 16, type: 'Kuloni', material: 'Sudrabs', name: 'Renesanses saktas motīva kulons no Dobeles', price: 140, image: p16 },
  { id: 17, type: 'Kuloni', material: 'Sudrabs', name: 'Lielā prūšu saule', price: 180, image: p17 },
  { id: 18, type: 'Kuloni', material: 'Sudrabs', name: 'Roze', price: 120, image: p18 },
  { id: 19, type: 'Kuloni', material: 'Sudrabs', name: 'Kulons-Zirdziņš', price: 55, image: p19 },
  { id: 20, type: 'Kuloni', material: 'Bronza', name: 'Laimes krusts', price: 40, image: p20 },
  { id: 21, type: 'Kuloni', material: 'Bronza', name: 'Rundāles Roze', price: 30, image: p21 },
  { id: 22, type: 'Kuloni', material: 'Bronza', name: 'Mazā zīle', price: 30, image: p22 },
  { id: 23, type: 'Kuloni', material: 'Bronza', name: 'Lielā zīle', price: 35, image: p23 },
  { id: 24, type: 'Kuloni', material: 'Bronza', name: 'Krustnagliņu kulons', price: 30, image: p24 },

  { id: 25, type: 'Aproces', material: 'Sudrabs', name: 'Rundāles Roze', price: 80, image: p25 },
  { id: 26, type: 'Aproces', material: 'Sudrabs', name: 'Meža aproce', price: 250, image: p26 },
  { id: 27, type: 'Aproces', material: 'Sudrabs', name: 'Basketbols aproce', price: 77, image: p27 },
  { id: 28, type: 'Aproces', material: 'Sudrabs', name: 'Ceriņu aproce', price: 250, image: p28 },
  { id: 29, type: 'Aproces', material: 'Sudrabs', name: 'Masīva Nameja aproce ar zvēru galvām', price: 380, image: p29 },
  { id: 30, type: 'Aproces', material: 'Sudrabs', name: 'Krusnagliņu aproce', price: 80, image: p30 },
  { id: 31, type: 'Aproces', material: 'Sudrabs', name: 'Piebalgas aproce', price: 800, image: p31 },
  { id: 32, type: 'Aproces', material: 'Sudrabs', name: 'Rudens', price: 165, image: p32 },
  { id: 33, type: 'Aproces', material: 'Sudrabs', name: 'Zīle', price: 75, image: p33 },
  { id: 34, type: 'Aproces', material: 'Sudrabs', name: 'Putns', price: 140, image: p34 },
  { id: 35, type: 'Aproces', material: 'Sudrabs', name: 'Prūšu saules simbols', price: 180, image: p35 },
  { id: 36, type: 'Aproces', material: 'Sudrabs', name: 'Ūdensputns', price: 85, image: p36 },

  { id: 37, type: 'Auskari', material: 'Sudrabs', name: 'Rundāles Roze', price: 65, image: p37 },
  { id: 38, type: 'Auskari', material: 'Sudrabs', name: 'Ceriņu auskari', price: 90, image: p38 },
  { id: 39, type: 'Auskari', material: 'Sudrabs', name: 'Ceriņu auskari', price: 90, image: p39 },
  { id: 40, type: 'Auskari', material: 'Sudrabs', name: 'Ceriņu auskari', price: 45, image: p40 },
  { id: 41, type: 'Auskari', material: 'Sudrabs', name: 'Ceriņu auskari', price: 140, image: p41 },
  { id: 42, type: 'Auskari', material: 'Sudrabs', name: 'Ceriņu auskari', price: 50, image: p42 },
  { id: 43, type: 'Auskari', material: 'Sudrabs', name: 'Pumpuru auskari', price: 65, image: p43 },
  { id: 44, type: 'Auskari', material: 'Sudrabs', name: 'Pumpuru auskari', price: 80, image: p44 },
  { id: 45, type: 'Auskari', material: 'Sudrabs', name: 'Čiekuri', price: 56, image: p45 },
  { id: 46, type: 'Auskari', material: 'Bronza', name: 'Čiekuri', price: 48, image: p46 },
  { id: 47, type: 'Auskari', material: 'Sudrabs', name: 'Bērza un ozola auskari', price: 45, image: p47 },
  { id: 48, type: 'Auskari', material: 'Sudrabs', name: 'Bērza auskari', price: 45, image: p48 },

  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
