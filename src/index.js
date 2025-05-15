import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import ProductList from './ProductList';
import Cart from './Cart';
import heroImg from './assets/hero.png';
import RotasPage from './RotasPage';
import ProductDetails from './ProductDetails';
import { CartProvider } from './CartContext';
import MiniCart from './MiniCart';
import CheckoutPage from './CheckoutPage';
import { useProducts, ProductsProvider } from './ProductsContext'; 
import Meistarklases from './Meistarklases';
import radiImg from './assets/radi-cover.png'; 
import LaulibuGredzeni from './LaulibuGredzeni';
import DavanuKartes from './DavanuKartes';
import davanucover from './assets/davanu-cover.png';
import gredzenucover from './assets/gredzenipar.jpg';
import kulonucover from './assets/kulonipar.jpg';
import aprocucover from './assets/aprocespar.jpg';
import TestNotice from './TestNotice';
import BigFive from './BigFive';



const App = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { products } = useProducts();

  const filteredProducts = products.filter(product =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Router>
       <div className="min-h-screen bg-gray-50 font-sans text-[#1c203c]">
       <TestNotice />
       <BigFive />
 
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto relative py-3 px-6 flex items-center">

          {/* Kreisā puse – navigācija */}
          <div className="flex items-center gap-10 text-base font-normal relative z-10">
            <div className="relative z-50" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="hover:underline"
              >
                Rotas
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-3 bg-white shadow-lg rounded p-6 grid grid-cols-2 gap-10 w-[600px] text-black z-50">
                  <div>
                    <ul className="space-y-1">
                      <li><Link to="/visas-rotas" className="hover:underline">Visas rotas</Link></li>
                      <li><Link to="/gredzeni" className="hover:underline">Gredzeni</Link></li>
                      <li><Link to="/aproces" className="hover:underline">Aproces</Link></li>
                      <li><Link to="/auskari" className="hover:underline">Auskari</Link></li>
                      <li><Link to="/kuloni" className="hover:underline">Kuloni</Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-1">
                      <li><Link to="/laulibu-gredzeni" className="hover:underline">Laulību gredzeni</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <Link to="/meistarklases" className="hover:underline">Meistarklases</Link>
            <Link to="/laulibu-gredzeni" className="hover:underline">Laulību gredzeni</Link>
            <Link to="/davanu-kartes" className="hover:underline">Dāvanu kartes</Link>

          </div>

          {/* Centrā – logo ar saiti uz sākumu */}
          <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 hover:opacity-80 transition z-0">
            <img src="https://balturotas.lv/logo.svg" alt="Baltu Rotas" className="h-5" />
            <span className="text-xl font-bold tracking-widest uppercase">Baltu Rotas</span>
          </Link>

          {/* Labā puse – meklēšana un grozs */}
          <div className="ml-auto flex items-center gap-6 z-10">
            <div className="flex items-center border-b border-gray-400 px-2">
              <svg className="h-4 w-4 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
  type="text"
  placeholder="Meklēt"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="outline-none text-sm text-black placeholder-black bg-transparent w-32"
/>
            </div>
            <MiniCart />
          </div>

        </div>
      </header>


        <Routes>
          <Route path="/visas-rotas" element={<RotasPage />} />
          <Route path="/produkts/:id" element={<ProductDetails />} />
          <Route path="/pasutit" element={<CheckoutPage />} />
          <Route path="/meistarklases" element={<Meistarklases />} />
          <Route path="/laulibu-gredzeni" element={<LaulibuGredzeni />} />
          <Route path="/davanu-kartes" element={<DavanuKartes />} />


          <Route
            path="/"
            element={
              <>
                <section
                  id="sakums"
                  className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white px-4"
                  style={{ backgroundImage: `url(${heroImg})` }}
                >
                  <h1 className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-normal">
                    Nest savas saknes kā rotu. Katrā rotā dzīvo kāds stāsts. Par zemē un tautā sakņotu dzīves gudrību.
                    Par dabas nepieradinātību. Par stiprās dzimtās kaltinātu briedumu un drosmi.
                  </h1>
                </section>
                <section id="kolekcijas" className="bg-gray-50 py-14 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Apskati mūsu rotu kolekcijas</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <Link to="/gredzeni" className="block bg-white rounded shadow hover:shadow-lg transition p-6 text-center">
        <img src={gredzenucover} alt="Gredzeni" className="mx-auto mb-4 rounded" />
        <h3 className="text-xl font-semibold">Gredzeni</h3>
      </Link>
      <Link to="/kuloni" className="block bg-white rounded shadow hover:shadow-lg transition p-6 text-center">
        <img src={kulonucover} alt="Kuloni" className="mx-auto mb-4 rounded" />
        <h3 className="text-xl font-semibold">Kuloni un kaklarotas</h3>
      </Link>
      <Link to="/aproces" className="block bg-white rounded shadow hover:shadow-lg transition p-6 text-center">
        <img src={aprocucover} alt="Aproces" className="mx-auto mb-4 rounded" />
        <h3 className="text-xl font-semibold">Aproces</h3>
      </Link>
    </div>
  </div>
</section>

<section className="bg-[#1c203c] py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-white">
    
    {/* Kreisā puse – attēls */}
    <img
      src={radiImg}
      alt="Meistarklase"
      className="w-full h-full object-cover rounded-xl shadow-lg"
    />

    {/* Labā puse – teksts un poga */}
    <div>
      <h2 className="text-4xl font-bold mb-6 leading-tight">Piedalies meistarklasē</h2>
      <p className="text-lg leading-relaxed mb-8">
        Radiet savu īpašo rotu meistara vadībā – Nameja gredzens, kulons ar nospiedumu vai korporatīva dāvana.
        Autentiska pieredze Siguldas pils kvartālā.
      </p>
      <Link
        to="/meistarklases"
        className="inline-block bg-white text-[#1c203c] text-lg font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-200 transition"
      >
        Uzzināt vairāk
      </Link>
    </div>
  </div>
</section>


<section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Teksts kreisajā pusē */}
    <div>
      <h2 className="text-4xl font-bold text-[#1c203c] mb-6">Dāvana ar stāstu</h2>
      <p className="text-gray-700 mb-4 text-base leading-relaxed">
        Dāvanu karte rotām un meistarklasēm.
        Iegādājies dāvanu karti, dodot iespēju gaviļniekam izvēlēties rotu pēc savas gaumes vai piedalīties unikālā pieredzē – uzpīt savu Nameja gredzenu. 
        Pārsteidz savus mīļos, draugus, kolēģus vai citus sev svarīgus cilvēkus ar ilgspējīgu un oriģinālu dāvanu, kas priecēs gadiem ilgi.
      </p>
      <p className="text-gray-700 mb-6 text-base leading-relaxed">
        Kartes var iegādāties mūsu veikalos Rīgā, Siguldā vai internetā. Elektroniski to iespējams saņemt e-pastā uzreiz.
      </p>
      <Link
        to="/davanu-kartes"
        className="inline-block text-xl font-semibold underline underline-offset-4 text-[#1c203c] hover:text-blue-800 transition"
      >
        Iegādājies →
      </Link>
    </div>

    {/* Attēls labajā pusē */}
    <div>
      <img
        src={davanucover}
        alt="Dāvanu karte"
        className="w-full rounded-lg shadow-md object-cover"
      />
    </div>

  </div>
</section>



<section
  id="kontakti"
  className="bg-white py-20 flex items-center justify-center text-center"
>
  <div className="max-w-3xl px-4">
    <h2 className="text-2xl font-bold mb-4">Kontakti</h2>
    <p className="text-gray-700 mb-2">E-pasts: info@balturotas.lv</p>
    <p className="text-gray-700">Tālrunis: +371 12345678</p>
  </div>
</section>
              </>
            }
          />
          {[
            'visas-rotas',
            'gredzeni',
            'aproces',
            'auskari',
            'kuloni',
            'kafija-krustnaglinas',
            'namejs',
            'rozes',
            'senas-zimes',
          ].map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<RotasPage />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </CartProvider>
);
