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
    <div className="h-fit grid grid-cols-3 gap-4">
        
        {data.map((coin) => (
          <CriptoCardJor key={coin.symbol} coin={coin} />
        ))}

    </div>
  );
};

export default Apirapid;
