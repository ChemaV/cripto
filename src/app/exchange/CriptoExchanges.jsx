import exchangesData from '../exchange/exchanges.json';

const CriptoExchanges = () => {
  return (
    <div className="w-full h-auto grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-x-4 md:gap-x-6">
      {exchangesData.sitios_exchange_criptomonedas.map((exchange, index) => (
        <div key={index} className="rounded-lg border bg-card bg-gray-50 text-card-foreground shadow-sm max-w-md" data-v0-t="card">
          <div className="flex-col space-y-1.5 p-4 flex items-center space-x-4">
            <img
              src={exchange.imagen}
              width="50"
              height="50"
              alt={`Logotipo de ${exchange.nombre}`}
              className="rounded-full"
              style={{ aspectRatio: '50 / 50', objectFit: 'cover' }}
            />
            <div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight text-primary">{exchange.nombre}</h3>
              <p className="text-sm text-muted-foreground text-gray-txt font-semibold">{exchange.titulo}</p>
            </div>
          </div>
          <div className="p-4 bg-gray-light w-full">
            <p className="text-gray-txt">{exchange.descripcion}</p>
          </div>
          <div className="items-center p-4 flex justify-end">
            <button className="inline-flex text-white hover:text-primary items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-purple-light h-10 px-4 py-2">
              <a className="underline" href={exchange.url}>
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







