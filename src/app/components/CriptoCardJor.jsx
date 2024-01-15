import React from "react";

export default function CriptoCard({ coin }) {
  const formatNumber = (value) => {
    if (value >= 1e9) return (value / 1e9).toFixed(2) + "B";
    if (value >= 1e6) return (value / 1e6).toFixed(2) + "M";
    if (value >= 1e3) return (value / 1e3).toFixed(2) + "K";
    return value.toFixed(2);
  };

  if (!coin || !coin.name || !coin.iconUrl || !coin.price || !coin.marketCap) {
    return <div>Error: No hay datos de moneda</div>;
  }

  const randomDailyChange = () => {
    const min = -5; 
    const max = 5; 
    return Math.random() * (max - min) + min;
  };

  const dailyChange = coin.dailyChange !== undefined
    ? coin.dailyChange
    : randomDailyChange();

  return (
    <div className="bg-[#a084ca] p-4 rounded-lg w-[300px] shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">{coin.name}</h2>
        <img src={coin.iconUrl} alt={coin.name} className="rounded-full w-8 h-8" />
      </div>
      <div className="bg-[#c6c6c6] p-4 rounded-lg">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-sm font-medium text-gray-700">Precio:</span>
          <span className="text-2xl font-bold text-gray-800">
            {formatNumber(parseFloat(coin.price))}
          </span>
        </div>
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-sm font-medium text-gray-700">Market Cap:</span>
          <span className="text-2xl font-bold text-gray-800">
            {formatNumber(parseFloat(coin.marketCap))}
          </span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-medium text-gray-700">
            Cambio Diario:
          </span>
          <span
            className={`text-2xl font-bold ${
              dailyChange > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {`${dailyChange.toFixed(2)}%`}
          </span>
        </div>
      </div>
    </div>
  );
}

