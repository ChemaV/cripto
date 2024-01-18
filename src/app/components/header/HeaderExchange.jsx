import ExchangeH1 from "./ExchangeH1";
import ExchangeH2 from "./ExchangeH2";

const HeaderExchange = () => {
  return (
    <header className="w-full h-auto px-4 py-4" >
      <div className="w-full h-auto px-20 py-4 flex-column items-center justify-start bg-gray-light rounded-lg">
        <ExchangeH1 />
        <ExchangeH2 />
      </div>
    </header>
  );
};

export default HeaderExchange
