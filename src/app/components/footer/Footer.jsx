// Footer.js con Tailwind CSS
export default function Footer() {
  return (
    <footer className="sticky bottom-0 bg-gray-light w-full p-2 text-xs leading-tight">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-2 md:space-y-0 md:space-x-4">
        <div className="md:w-1/3">
          <img
            alt="Imagotipo"
            src="/logo/imagotipopurple300.svg"
            className="w-14 h-16 mx-auto md:mx-0"
          />
          <span className="font-brand text-primary text-center md:text-left">All Blocks.</span>
        </div>
        <div className="md:w-1/3">
          <p className="text-center md:text-left">Todos los derechos reservados: Ernesto, Jorge, Chema y Alejandra.</p>
          <p className="text-center md:text-left">Proyecto Consumo de API con Nextjs para curso Desarrollo web full stack con tecnologías inmersivas de Factoría F5 y Fundación Tomillo.</p>
        </div>
        <div className="md:w-1/3">
          <p className="text-center md:text-left">APIs usadas:</p>
          <a
            href="https://developers.coinranking.com/api/documentation"
            className="text-purple-light text-center md:text-left"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coinranking API
          </a>
          <a
            href="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api"
            className="text-purple-light text-center md:text-left"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bing News Search API
          </a>
        </div>
      </div>
    </footer>
  );
}
