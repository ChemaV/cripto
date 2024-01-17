'use client';
// Newsdataapi.jsx
import React, { useState, useEffect } from 'react';
import NoticiaCard from "./NoticiaCard.jsx";
import { fetchData } from "./newsdataapi.js";

function Newsdataapi() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                console.log(result);
                setData(result);
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
            {data && data.articles && data.articles.map((newsItem) => (
                <NoticiaCard key={newsItem.id} newsItem={newsItem} />
            ))}
        </div>
    );
}

export default Newsdataapi;