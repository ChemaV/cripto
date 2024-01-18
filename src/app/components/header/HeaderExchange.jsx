import ExchangeH1 from "./ExchangeH1";
import ExchangeH2 from "./ExchangeH2";

const HeaderExchange = () => {
  return (
    <header className="w-full h-auto mb-6" >
      <div className="w-full h-auto px-10 py-4 flex-column items-center justify-start bg-lemon rounded-lg">
        <ExchangeH1 />
        <ExchangeH2 />
      </div>
    </header>
  );
};

export default HeaderExchange
