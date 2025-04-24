import React, { useState } from 'react';
import d1 from './assets/d1.png';
import d2 from './assets/d2.png';
import d3 from './assets/d3.png'; 

const DavanuKartes = () => {
  const [active, setActive] = useState('veikals');

  const kartes = {
    veikals: {
      title: 'Veikala dāvanu karte',
      text: `Dāvanu karte rotu izvēlei. Karti saņēmējs varēs izmantot gan mūsu veikalos Vecrīgā un Siguldā, gan interneta veikalā. Kartes var saņemt gan ar piegādi, gan elektroniski e-pastā. E-pastā tā tiks automātiski nosūtīta uzreiz pēc samaksas veikšanas.`,
      img: d1
    },
    namejs: {
      title: 'Nameja meistarklases dāvanu karte',
      text: `Unikāla pieredze - oriģināla dāvana cilvēkam, kam viss jau ir. Arī īpašs piedzīvojums pārim vai ģimenei. Dāvanu karte dos iespēju piedalīties Nameja meistarklasē, mūsu meistara vadībā pašam uzpīt savu sudraba gredzenu vai kulonu (aproci). Meistarklases norisinās mūsu Siguldas veikaliņā. Cenā iekļauts materiāls un viss nepieciešamais, kā arī kafija, tēja un uzkodas.`,
      img: d2
    },
    nospiedums: {
      title: 'Nospiedumu meistarklases dāvanu karte',
      text: `Īpaša dāvana - dalība meistarklasē, izzinot savu pirkstu nospiedumu unikalitāti un veidojot neatkārtojamu Tava pirkstu nospieduma rotu kopā ar mums. Dāvanu karti iespējams saņemt gan elektroniski, gan drukātā veidā.`,
      img: d3
    }
  };

  const current = kartes[active];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">Dāvanu kartes</h1>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        
        {/* Kreisā kolonna: izvēlne */}
        <div className="space-y-4 border-l pl-4 text-lg font-medium text-[#1c203c]">
          <button onClick={() => setActive('veikals')} className="hover:underline block text-left">Veikala dāvanu karte</button>
          <button onClick={() => setActive('namejs')} className="hover:underline block text-left">Nameja meistarklases dāvanu karte</button>
          <button onClick={() => setActive('nospiedums')} className="hover:underline block text-left">Nospiedumu meistarklases dāvanu karte</button>
        </div>

        {/* Labā kolonna: saturs */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Teksts pa kreisi */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{current.title}</h2>
              <p className="text-gray-700 text-base mb-6 leading-relaxed whitespace-pre-line">
                {current.text}
              </p>
              <button
  type="button"
  className="inline-block text-xl font-semibold underline underline-offset-4 text-[#1c203c] hover:text-blue-800 transition"
>
  Pasūtīt →
</button>
            </div>

            {/* Attēls vienmēr pa labi */}
            <img
              src={current.img}
              alt={current.title}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DavanuKartes;
