import React from 'react';
import laulibu from './assets/cover.png'; 
import laulibas2 from './assets/laulibas2.png';

const LaulibuGredzeni = () => {
  return (
    <div>

      {/* HERO sadaļa */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${laulibu})` }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium px-4">
          Tavām domām un rokām darinātas rotas.
        </h1>
      </section>

      {/* Saturs ar tekstu kreisajā un attēlu labajā pusē */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Teksts pa kreisi */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Laulību gredzeni</h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>Katrs gredzenu pasūtījums ir īpašs. Mums ir patiess gods, ka savas svarīgākās rotas gatavošanu uzticat mums. No mūsu rokām līdz Jūsu. Rotas, kas stāsta par Jūsu vērtībām.</p>
              <p>Iespēja pašiem iesaistīties procesā un radīt unikālus un neatkārtojamus gredzenus, tos veidojot kopā ar mūsu meistaru. Un mēs tos izgatavosim sudrabā, zeltā un to kombinācijās.</p>
              <p>Senās latviešu zīmes ir unikāls mūsu tautas kultūras mantojums, ko mēs ar godu iekļaujam rotās, kas būs kopā ar Jums ikdienu. Izvēlieties kādu no mūsu dizainiem, vai radīsim gredzenus ar Jūsu izvēlēto seno zīmju kombināciju.</p>
              <p>Iespējas un idejas gredzeniem ir daudz un nebeidzamas – gredzeni ar pirkstu nospiedumiem, sirds ritmu, kaltu faktūru, koka mizas unikālo rakstu. Iespēja arī iegravēt pirkstu nospiedumus vai citu smalku zīmējumu gredzena iekšpusē.</p>
              <p>Gredzenus gatavojam no sudraba, dažādu krāsu zelta (dzeltenā, sarkanā vai baltā) vai to kombinācijām.</p>
            </div>
          </div>

          {/* Attēls pa labi */}
          <div>
            <img
              src={laulibas2}
              alt="Laulību gredzenu piemērs"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default LaulibuGredzeni;
