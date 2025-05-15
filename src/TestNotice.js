import React, { useState, useEffect } from 'react';

const TestNotice = () => {
  const [isOpen, setIsOpen] = useState(true);

  // automātiski aizveras pēc 10 sekunžu (ja vēlies)
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsOpen(false), 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md text-center shadow-xl">
        <h2 className="text-xl font-bold mb-4">Uzmanību!</h2>
        <p className="text-gray-700 mb-4">
          Šī mājaslapa ir paredzēta tikai <strong>testēšanai</strong>. Lūdzu novērtējiet savu personību "Big Five" personības skalā.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Sapratu
        </button>
      </div>
    </div>
  );
};

export default TestNotice;
