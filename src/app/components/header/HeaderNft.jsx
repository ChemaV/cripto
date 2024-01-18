import NftH1 from "./NftH1";
import NftH2 from "./NftH2";

const HeaderNft = () => {
  return (
    <header className="w-full h-auto px-4 py-4" >
      <div className="w-full h-auto px-20 py-4 flex-column items-center justify-start bg-gray-light rounded-lg">
        <NftH1 />
        <NftH2 />
      </div>
    </header>
  );
};

export default HeaderNft
