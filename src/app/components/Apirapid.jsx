 'use client' 
import React, { useState, useEffect } from 'react';
import { fetchData } from '../api.js';
import { Box } from '@chakra-ui/react';
import CriptoCardJor from './CriptoCardJor';

const TuComponente = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const getData = async () => {
      try {
        // Llamada a fetchData
        const result = await fetchData();
        
        
        if (result && result.data && Array.isArray(result.data.coins)) {
          setData(result.data.coins);
        } else {
          setError('Error: Invalid data format');
        }
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      }
    };

    getData();
  }, []);
 
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const Apirapid = ({ cryptoData }) => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p={4}
      >
        <h1>Criptomonedas</h1>
        <div
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={4}
          mt={4}
        >
          {/* Mapeo sobre los datos de las criptomonedas */}
          {cryptoData.map((crypto) => (
            <CriptoCardJor key={crypto.id} crypto={crypto} />
          ))}
        </div>
      </Box>
    );
  };

  return <Apirapid cryptoData={data} />;
};

export default TuComponente;


