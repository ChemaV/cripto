import Apirapid from "../components/Apirapid.jsx";

const CriptomonedasPage = () => {
  return (
    <main className="w-full flex-center flex-col min-h-screenitems-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <section className="hero">
          <h1 className="headingh1">Criptomonedas</h1>
          <h2>Explora Todas las Criptomonedas en un Solo Lugar</h2>
        </section>
        <section>
          <h3 className="introtxt">
          En colaboración con la API Coinranking, te presentamos información detallada sobre todas las monedas, desde las icónicas Bitcoin y Ethereum hasta los tokens especializados como Basic Attention Token. En All Blocks, reconocemos que cada moneda es única, contribuyendo de manera significativa a la diversidad y amplitud del ecosistema blockchain.
          </h3>
        </section>
        <section className="intro">Criptomonedas</section>
        <section>
          <Apirapid />
        </section>
      </div>
    </main>
  );
};

export default CriptomonedasPage;
