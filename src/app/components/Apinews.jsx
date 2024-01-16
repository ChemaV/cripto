'use client'
import React, { useState, useEffect } from 'react';


function Apinews() { 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDataFromApi = async () => {
        try {
            const url = 'https://crypto-news16.p.rapidapi.com/news/top/5';
            const options = {
                method: 'GET',
                headers: {
                    "X-RapidAPI-Key": "b77c225c5dmsh4e1d62edcee39e3p168dfbjsn0d8babd40c6c",
                    "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
                }
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const resultData = await response.json();
            setData(resultData);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="Apinews">
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

export default Apinews;
