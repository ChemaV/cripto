import CriptomonedasH1 from "./CriptomonedasH1";
import CriptomonedasH2 from "./CriptomonedasH2";

const HeaderCripto = () => {
  return (
    <header className="w-full h-auto px-4 py-4" >
      <div className="w-full h-auto px-20 py-4 flex-column items-center justify-start bg-gray-light rounded-lg">
        <CriptomonedasH1 />
        <CriptomonedasH2 />
      </div>
    </header>
  );
};

export default HeaderCripto
