import CriptoExchange from "../exchange/CriptoExchanges.jsx";

const ExchangePage = () => {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between">
      <section className="mb-5">
        <h3 className="introtxt font-chakra">
          <span className="font-brand font-semibold text-primary">
            All Blocks
          </span>{" "}
          no solo te proporciona datos sobre las criptomonedas, sino que también
          te lleva a la vanguardia de los <span className="font-medium text-primary">exchanges y mercados más relevantes</span>.
          Explora las plataformas líderes, conoce las tendencias del mercado y
          toma decisiones informadas para maximizar tus inversiones en este
          emocionante viaje financiero.
        </h3>
      </section>
      <section className="flex min-h-screen items-start justify-center md:justify-between p-0">
        <CriptoExchange />
      </section>
    </main>
  );
};

export default ExchangePage;
