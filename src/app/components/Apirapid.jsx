"use client";
import React, { useState, useEffect } from "react";
import { fetchData } from "../api.js";
import CriptoCardJor from "../components/CriptoCardJor.jsx";
import { Flex } from '@chakra-ui/react';

const Apirapid = () => {
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
    <div className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
        
        {data.map((coin) => (
          <CriptoCardJor key={coin.symbol} coin={coin} />
        ))}

    </div>
  );
};

export default Apirapid;
