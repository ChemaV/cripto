'use client'
import React, { useState, useEffect } from 'react';
import NoticiascardJor from "../noticias/NoticiacardJor.jsx";
import { fetchData } from "../noticias/apinews.js";

function Apinews() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
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
            {}
            {data.map((newsItem) => (
                <NoticiascardJor key={newsItem.id} newsItem={newsItem} />
            ))}
        </div>
    );
}

export default Apinews;

