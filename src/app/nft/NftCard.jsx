// NftCard.jsx
import React from 'react';
import nftsData from './nfts.json'; // Asegúrate de proporcionar la ruta correcta

const NftCard = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {nftsData.nfts.map((nft, index) => (
        <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md mx-auto" data-v0-t="card">
          <img
            src={nft.imagen}
            alt="NFT Image"
            width="500"
            height="500"
            className="w-full object-cover rounded-t-lg"
            style={{ aspectRatio: '500 / 500', objectFit: 'cover' }}
          />
          <div className="space-y-1.5 flex flex-col items-start gap-2 p-4">
            <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">{nft.nombre}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{nft.descripcion}</p>
          </div>
          <div className="p-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold">Precio</span>
                <span className="text-lg font-bold">{nft.precio.monto} {nft.precio.moneda}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Rareza</span>
                <span className="text-gray-500 dark:text-gray-400">Ultra Rare</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Edición</span>
                <span className="text-gray-500 dark:text-gray-400">#{nft.edicion}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Creador</span>
                <span className="text-gray-500 dark:text-gray-400">{nft.creador.nombre}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center p-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
              Añadir al carro
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NftCard;