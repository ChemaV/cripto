import Link from "next/link.js";
import HeaderCripto from "../components/header/HeaderCripto.jsx";
import CoinrankingApi from "../components/CoinrankingApi.jsx";

const CriptomonedasPage = () => {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between p-8">
      <HeaderCripto />
      <section className="my-5">
        <h3 className="introtxt font-chakra">
          En colaboración con la{" "}
          <Link className="font-medium text-primary" href="https://developers.coinranking.com/api">API Coinranking</Link>, te
          presentamos información detallada sobre todas las monedas, desde las
          icónicas Bitcoin y Ethereum hasta los tokens especializados como Basic
          Attention Token. En{" "}
          <span className="font-brand font-semibold text-primary">All Blocks</span> , reconocemos que cada moneda es única, contribuyendo de manera
          significativa a la diversidad y amplitud del ecosistema blockchain.
        </h3>
      </section>
      <section className="flex min-h-screen items-start justify-center md:justify-between p-0">
        <CoinrankingApi />
      </section>
    </main>
  );
};

export default CriptomonedasPage;
