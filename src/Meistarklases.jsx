import React, { useState } from 'react';
import nospiedumsimg from './assets/nosp.png';
import namejsimg from './assets/namejs2.png';
import lgredzeniimg from './assets/lgredzeni.png';

const Meistarklases = () => {
  const [active, setActive] = useState('namejs');

  const klases = {
    namejs: {
      title: 'Nameja gredzena meistarklase',
      text: `Iepin savas saknes Nameja rotā meistara virsvadībā mūsu Siguldas veikalā-darbnīcā Pils kompleksā.
Tu vari izvēlēties darināt apaļu kulonu/aproci vai Nameja gredzenu — par godu savai latvietībai vai kādai īpašai dāvanai.
Meistarklase aizņems apmēram 3–4 stundas. Dalības maksa vienam 100€, diviem 180€, četriem 320€, iekļauts materiāls, kafija, tēja un uzkodas.`,
      img: namejsimg,
      info: [' Ilgums: 2–3 stundas', ' Cena: 100 € (1 pers.), 320 € (4 pers.)', ' Nepieciešama iepriekšēja rezervācija']
    },
    kulons: {
      title: 'Kulons ar pirkstu nospiedumu',
      text: `Radi neatkārtojamu rotu ar tieši Tavu pirkstu nospiedumu kā īpašu dāvanu mīļajiem vai sev.
Iespēja pasūtīt komplektu uz mājām vai veidot kopā ar mums meistarklasē.
Rotas tiek izgatavotas sudrabā, bronzā vai zeltā.`,
      img: nospiedumsimg,
      info: ['Cena: 100 € (1 pers.), 180 € (2 pers.)', ' Nepieciešama iepriekšēja rezervācija']
    },
    lauliba: {
      title: 'Laulību gredzeni',
      text: `Divu cilvēku savienība ir īpašs mirklis — savijas saknes, savijas dzīves.
Tas jānosvin ar gredzeniem, kuros atklājas jūsu abu stāsts. Mēs palīdzēsim radīt gredzenus, kurus nest ar mīlestību un lepnumu.`,
      img: lgredzeniimg,
      info: ['']
    }
  };

  const current = klases[active];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-left mb-12">Meistarklases</h1>

      <div className="grid md:grid-cols-4 gap-10 items-start">
        {/* Navigācija */}
        <div className="sticky top-28 space-y-4 border-l pl-4 text-lg font-medium text-[#1c203c]">
          <button onClick={() => setActive('namejs')} className={`block text-left hover:underline ${active === 'namejs' ? 'font-bold' : ''}`}>Nameja meistarklase</button>
          <button onClick={() => setActive('kulons')} className={`block text-left hover:underline ${active === 'kulons' ? 'font-bold' : ''}`}>Kulons ar nospiedumu</button>
          <button onClick={() => setActive('lauliba')} className={`block text-left hover:underline ${active === 'lauliba' ? 'font-bold' : ''}`}>Laulību gredzeni</button>
        </div>

        {/* Saturs pa labi */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">{current.title}</h2>
              <p className="text-gray-700 text-base mb-4 leading-relaxed whitespace-pre-line">
                {current.text}
              </p>
              <ul className="text-gray-600 text-sm space-y-1">
                {current.info.map((line, i) => <li key={i}>{line}</li>)}
              </ul>
            </div>
            <img
              src={current.img}
              alt={current.title}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Kontakti */}
      <div className="text-center mt-20 text-gray-600 leading-relaxed">
         Siguldas pils kvartāls, Pils iela 16, Sigulda<br />
         info@balturotas.lv &nbsp; | &nbsp;  +371 12345678
      </div>
    </div>
  );
};

export default Meistarklases;
