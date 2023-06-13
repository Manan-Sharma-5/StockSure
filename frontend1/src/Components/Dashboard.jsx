// Dashboard.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import StockData from './StockData';
import DetailedView from './DetailedView';
import TradingViewWidget from './TradingView';

const Dashboard = () => {
  const [stock, setStock] = useState('');
  const [stockData, setStockData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    setStock(e.target.value);
  };

  const handleClick = () => {
    setExpanded(true);
  };

  const handleSearch = () => {
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&apikey=Y3ZA09ASPV1S85IA`;

    axios
      .get(apiUrl)
      .then((res) => {
        const data = res.data['Time Series (5min)'];
        const latestData = Object.values(data)[0];
        const openingPrice = latestData['1. open'];
        const highPrice = latestData['2. high'];
        const closePrice = latestData['4. close'];

        setStockData({ openingPrice, highPrice, closePrice });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex justify-between px-5 py-3">
        <h1 className="text-green-300 font-bold text-3xl">StockSure</h1>
        <div className="bg-green-300 p-3 font-bold rounded-full cursor-pointer">Log Out</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-green-300 font-bold text-3xl p-3">Dashboard</h1>
        <p className="text-green-300 font-bold text-3xl p-3">Welcome to StockSure</p>
        <div className="text-white font-bold">Total Balance: ₹10000</div>
      </div>
      <div className="flex item-center justify-center mt-5 gap-2">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter Stock Symbol: Eg: AAPL"
          className="border-none outline-gray-800 bg-white w-5/6 p-6 rounded-xl text-gray-900 focus:ring-2 focus:outline-none focus:ring-green-300"
        />
        <button onClick={handleSearch} className="bg-green-300 text-black font-bold p-6 rounded-xl">
          Search
        </button>
      </div>
      {stockData && (
        <StockData
          openingPrice={stockData.openingPrice}
          highPrice={stockData.highPrice}
          closePrice={stockData.closePrice}
        />
      )}

      {stockData && (
        <div className="flex items-center justify-center mt-4">
          <button className="p-4 bg-green-300 rounded-xl font-bold" onClick={handleClick}>
            Detailed View
          </button>
        </div>
      )}
        <div className="flex items-center justify-around mt-16 min-h-screen">
        <div className="">
      {expanded && <TradingViewWidget stock={stock} />}
      </div>
      {expanded && (
      <div className="">
        <form>
        <input type="text" placeholder='Enter Quantity' 
        className='border-none outline-gray-800 bg-white w-5/6 p-3 rounded-xl text-gray-900 focus:ring-2 focus:outline-none focus:ring-green-300'
         />
        <div className="flex gap-2 mt-3">
        <button className="bg-green-300 text-black font-bold p-2 w-2/5 rounded-xl">Buy</button>
        <button className="bg-green-300 text-black font-bold p-2 w-2/5 rounded-xl">Sell</button>
        </div>
        </form>
      </div>
      )}
      </div>
    // </div>
  );
};

export default Dashboard;
