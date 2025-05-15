import React, { useState, useEffect } from 'react';

const traits = [
  {
    key: 'ekstraversija',
    title: 'Ekstraversija',
    leftLabel: 'Rezervēts, kluss',
    rightLabel: 'Sabiedrisks, aktīvs',
  },
  {
    key: 'neirotisms',
    title: 'Neirotisms',
    leftLabel: 'Mierīgs, atslābināts',
    rightLabel: 'Satraukts, nervozs',
  },
  {
    key: 'atvertiba',
    title: 'Atvērtība pieredzei',
    leftLabel: 'Piezemēts, ar šaurām interesēm',
    rightLabel: 'Zinātkārs, radošs',
  },
  {
    key: 'labveligums',
    title: 'Labvēlīgums',
    leftLabel: 'Cinisks, rupjš',
    rightLabel: 'Mīkstsirdīgs, izpalīdzīgs',
  },
  {
    key: 'apzinigums',
    title: 'Apzinīgums',
    leftLabel: 'Bezmērķīgs, paviršs',
    rightLabel: 'Pašdisciplinēts, kārtīgs',
  },
];

const BigFivePopup = () => {
  const [show, setShow] = useState(false);
  const [ratings, setRatings] = useState({
    ekstraversija: 3,
    neirotisms: 3,
    atvertiba: 3,
    labveligums: 3,
    apzinigums: 3,
  });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const changeRating = (trait, value) => {
    setRatings((prev) => ({
      ...prev,
      [trait]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Novērtējums:', ratings);
    alert('Paldies par novērtējumu!');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-2">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm text-center">
        <h2 className="text-lg font-bold mb-4">Big Five novērtējums</h2>

        <div className="space-y-4 text-sm">
          {traits.map(({ key, title, leftLabel, rightLabel }) => (
            <div key={key} className="space-y-1">
              <h3 className="font-semibold">{title}</h3>
              <div className="flex justify-between text-gray-500 text-xs mb-1">
                <span>{leftLabel}</span>
                <span>{rightLabel}</span>
              </div>
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => changeRating(key, val)}
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs ${
                      ratings[key] === val
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-900 text-white px-4 py-1.5 rounded hover:bg-blue-800 w-full text-sm"
        >
          Iesniegt
        </button>
      </div>
    </div>
  );
};

export default BigFivePopup;
