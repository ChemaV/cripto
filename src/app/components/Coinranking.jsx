'use client'
import React, { useState, useEffect } from 'react';


function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'b77c225c5dmsh4e1d62edcee39e3p168dfbjsn0d8babd40c6c',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                    }
                };
                
                try {
                    const response = await fetch(url, options);
                
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                
                    const data = await response.json();
                    setData(data);
                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            {/* Renderiza tu información aquí */}
            {data && (
                <div>
                    <h1>Información de la API:</h1>
                    {/* Muestra la información como desees */}
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;