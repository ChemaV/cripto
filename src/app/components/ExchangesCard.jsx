// CriptoExchanges.jsx

// Importa el JSON
import exchangesData from './exchanges.json';

const CriptoExchanges = () => {
  return (
    <div>
      {exchangesData.sitios_exchange_criptomonedas.map((exchange, index) => (
        <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md" data-v0-t="card">
          <div className="flex-col space-y-1.5 p-6 flex items-center space-x-4">
            <img
              src={exchange.imagen}
              width="50"
              height="50"
              alt={`Logotipo de ${exchange.nombre}`}
              className="rounded-full"
              style={{ aspectRatio: '50 / 50', objectFit: 'cover' }}
            />
            <div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-[#5c14a3]">{exchange.nombre}</h3>
              <p className="text-sm text-muted-foreground">{exchange.titulo}</p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm">{exchange.descripcion}</p>
          </div>
          <div className="items-center p-6 flex justify-end">
            <button className="text-white hover:text-primary bg-lemon hover:bg-purple-light text-sm font-medium inline-flex items-center justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
              <a className="underline" href="#">
                Visitar Sitio
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CriptoExchanges;





