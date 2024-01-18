import NoticiasH1 from "./NoticiasH1";
import NoticiasH2 from "./NoticiasH2";

const HeaderNoticias = () => {
  return (
    <header className="w-full h-auto mb-6" >
      <div className="w-full h-auto px-10 py-4 flex-column items-center justify-start bg-lemon rounded-lg">
        <NoticiasH1 />
        <NoticiasH2 />
      </div>
    </header>
  );
};

export default HeaderNoticias
