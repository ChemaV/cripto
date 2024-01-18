import Link from "next/link";
import Image from "next/image";
// Footer.js con Tailwind CSS
export default function Footer() {
  return (
    <footer className="bg-gray-light w-full p-4 text-sm leading-tight">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-2 md:space-y-0 md:space-x-4">
        <div className="md:w-1/5 flex flex-col xs:flex-col sm:flex-col md:flex-row items-center">
          <Image
            alt="Imagotipo"
            src="/logo/imagotipopurple300.svg"
            width="8"
            height="10"
            className="w-8 h-10 md:w-10 md:h-12 mx-auto md:mx-2"
          />
          <span className="font-brand text-primary text-center text-md md:text-lg md:text-left">
            All Blocks.
          </span>
        </div>
        <div className="md:w-1/5 text-center sm:text-center md:text-left">
          <p>
            Todos los derechos reservados: Jorge, Chema y Alejandra.
          </p>
        </div>
        <div className="md:w-2/5  xs:text-center sm:text-center md:text-left">
          <p>
            Proyecto Consumo de API con Nextjs para curso Desarrollo web full
            stack con tecnologías inmersivas de Factoría F5 y Fundación Tomillo.
          </p>
        </div>
        <div className="md:w-1/5 text-center xs:text-center sm:text-center md:text-left lg:text-left xl:text-left">
          <p>APIs usadas:</p>
          <div className="flex flex-row gap-4 md:flex-col md:gap-1 justify-center leading-1">
            <Link
              href="https://developers.coinranking.com/api/documentation"
              className="text-purple-light text-center md:text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coinranking API
            </Link>
            <Link
              href="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api"
              className="text-purple-light text-center md:text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bing News Search API
            </Link>
            <Link
              href="https://www.newsdata.io"
              className="text-purple-light text-center md:text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              Newsdata
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
