import HeaderContacto from "../components/header/HeaderContacto.jsx";
import ContactoForm from "../components/ContactoForm.jsx";

const ContactoPage = () => {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between p-8">
      <HeaderContacto />
      <section className="flex min-h-screen items-start justify-center md:justify-between p-0">
        <ContactoForm />
      </section>
    </main>
  );
};

export default ContactoPage;
