import ContactoH1 from "./ContactoH1";
import ContactoH2 from "./ContactoH2";

const HeaderContacto = () => {
  return (
    <header className="w-full h-auto mb-6" >
      <div className="w-full h-auto px-10 py-4 flex-column items-center justify-start bg-lemon rounded-lg">
        <ContactoH1 />
        <ContactoH2 />
      </div>
    </header>
  );
};

export default HeaderContacto
