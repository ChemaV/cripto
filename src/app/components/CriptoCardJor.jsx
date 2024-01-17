export default function CriptoCard({ coin }) {
  const formatNumber = (value) => {
    if (value >= 1e9) return (value / 1e9).toFixed(2) + "B";
    if (value >= 1e6) return (value / 1e6).toFixed(2) + "M";
    if (value >= 1e3) return (value / 1e3).toFixed(2) + "K";
    return value.toFixed(2);
  };

  if (!coin) {
    return <div>Error: No hay datos de moneda</div>;
  }

  // Generar un cambio diario aleatorio si coin.dailyChange es indefinido
  const randomDailyChange = () => {
    const min = -5; // Cambio diario mínimo (porcentaje)
    const max = 5; // Cambio diario máximo (porcentaje)
    return Math.random() * (max - min) + min;
  };

  const dailyChange = coin.dailyChange !== undefined
    ? coin.dailyChange
    : randomDailyChange();

  return (
    <div className="bg-gray-light rounded-lg w-full min-w-[240px] max-2xl:[800px] shadow-md">
      <div className="flex justify-between items-center mt-4 bg-purple-light w-full p-4">
        <h2 className="text-2xl font-bold text-primary">{coin.name}</h2>
        <img src={coin.iconUrl} alt={coin.name} className="rounded-full w-8 h-8 bg-gray-100" />
      </div>
      <div className="bg-light-gray p-4 rounded-lg">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-md font-semibold text-gray-txt bg-lemon p-1">Precio:</span>
          <span className="text-2xl font-bold text-gray-txt">
            {formatNumber(parseFloat(coin.price))}
          </span>
        </div>
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-md font-semibold text-gray-txt bg-lemon p-1">Market Cap:</span>
          <span className="text-2xl font-bold text-gray-txt">
            {formatNumber(parseFloat(coin.marketCap))}
          </span>
        </div>
        <div className="flex justify-between items-baseline">
          <span className="text-md font-semibold text-gray-txt bg-lemon p-1">
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

