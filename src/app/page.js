import Apirapid from "./components/Apirapid.jsx";

export default function Home() {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between p-8">
      <section className="hero">
          <h1 className="headingh1 font-chakra">¡Bienvenido a All Blocks!</h1>
          <h2 className="headingh2 font-chakra">Descubre el Universo Blockchain en All Blocks</h2>
        </section>
        <section className="mb-5">
          <h3 className="introtxt font-chakra">Tu ventana al fascinante mundo de las criptomonedas y las plataformas blockchain! En un universo en constante evolución, estamos aquí para ser tu guía definitiva, brindándote información precisa y actualizada sobre todos los mercados y tipos de plataformas blockchain.</h3>
        </section>
        <section className="flex min-h-screen items-start justify-between p-0">  
          <Apirapid />
        </section>
    </main>
  );
}
