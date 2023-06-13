import React from 'react';

const StockData = ({ openingPrice, highPrice, closePrice }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <p className="text-green-300 font-bold text-3xl p-3">Stock Data</p>
      <div className="text-white">
        Opening Price: <span className="text-green-300">{openingPrice}</span>
      </div>
      <div className="text-white">
        High Price: <span className="text-green-300">{highPrice}</span>
      </div>
      <div className="text-white">
        Close Price: <span className="text-green-300">{closePrice}</span>
      </div>
    </div>
  );
};

export default StockData;
