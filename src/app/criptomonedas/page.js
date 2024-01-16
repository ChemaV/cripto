import Apirapid from "../components/Apirapid.jsx";

const CriptomonedasPage = () => {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between p-8">
      <section className="mb-5">
        <h3 className="introtxt font-chakra">
          En colaboración con la <span className="font-medium text-primary">API Coinranking</span>, te presentamos información
          detallada sobre todas las monedas, desde las icónicas Bitcoin y
          Ethereum hasta los tokens especializados como Basic Attention Token.
          En <span className="font-brand font-semibold text-primary">All Blocks</span>, reconocemos que cada moneda es única, contribuyendo de
          manera significativa a la diversidad y amplitud del ecosistema
          blockchain.
        </h3>
      </section>
      <section className="flex min-h-screen items-start justify-between p-0">
        <Apirapid />
      </section>
    </main>
  );
};

export default CriptomonedasPage;
