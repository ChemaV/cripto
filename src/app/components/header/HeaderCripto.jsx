import CriptomonedasH1 from "./CriptomonedasH1";
import CriptomonedasH2 from "./CriptomonedasH2";

const HeaderCripto = () => {
  return (
    <header className="w-full h-auto mb-6" >
      <div className="w-full h-auto px-10 py-4 flex-column items-center justify-start bg-lemon rounded-lg">
        <CriptomonedasH1 />
        <CriptomonedasH2 />
      </div>
    </header>
  );
};

export default HeaderCripto
