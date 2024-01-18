"use client";
import React, { useState, useEffect } from "react";
import { fetchData } from "../api/coinranking/route.js";
import CriptoCardJor from "./CriptoCardJor.jsx";

const CoinrankingApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result.data.coins);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-full h-auto grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-x-8">
        
        {data.map((coin) => (
          <CriptoCardJor key={coin.symbol} coin={coin} />
        ))}

    </div>
  );
};

export default CoinrankingApi;
