import NoticiasH1 from "./NoticiasH1";
import NoticiasH2 from "./NoticiasH2";

const HeaderNoticias = () => {
  return (
    <header className="w-full h-auto px-4 py-4" >
      <div className="w-full h-auto px-20 py-4 flex-column items-center justify-start bg-gray-light rounded-lg">
        <NoticiasH1 />
        <NoticiasH2 />
      </div>
    </header>
  );
};

export default HeaderNoticias
