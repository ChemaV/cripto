import NftH1 from "./NftH1";
import NftH2 from "./NftH2";

const HeaderNft = () => {
  return (
    <header className="w-full h-auto mb-6" >
      <div className="w-full h-auto px-10 py-4 flex-column items-center justify-start bg-lemon rounded-lg">
        <NftH1 />
        <NftH2 />
      </div>
    </header>
  );
};

export default HeaderNft
