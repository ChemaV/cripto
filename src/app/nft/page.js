import NftCard from "../nft/NftCard.jsx";

const NftPage = () => {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between">
      <section className="mb-5">
        <h3 className="introtxt font-chakra">
          Los <span className="font-medium text-primary">NFT (Tokens No Fungibles)</span> han revolucionado la manera en que
          entendemos y compartimos el arte digital, la música y mucho más.{" "}
          <span className="font-brand font-semibold text-primary">
            All Blocks
          </span>{" "}
          te sumerge en este fascinante mundo, proporcionándote información
          clave sobre los NFT más destacados, las plataformas líderes y las
          últimas tendencias en este emocionante espacio.
        </h3>
      </section>
      <section className="flex min-h-screen items-start justify-center md:justify-between p-0">
        <NftCard />
      </section>
    </main>
  );
};

export default NftPage;
