import HomeH1 from "./HomeH1";
import HomeH2 from "./HomeH2";

const HeaderHome = () => {
  return (
    <header className="w-full h-auto mb-6" >
      <div className="w-full h-auto px-10 py-4 flex-column items-center justify-start bg-lemon rounded-lg">
        <HomeH1 />
        <HomeH2 />
      </div>
    </header>
  );
};

export default HeaderHome
