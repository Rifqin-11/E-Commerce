import React from 'react';

export const PromoHeader = () => {
  return (
    <div className="bg-red-600 text-white text-center py-2">
      <p className="text-sm sm:text-base font-semibold">
        🎉 Diskon 70% untuk pembelian pertama! Gunakan kode: <span className="font-bold">WELCOME20</span>
      </p>
    </div>
  );
};
