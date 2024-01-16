import Apirapid from "./components/Apirapid.jsx";

export default function Home() {
  return (
    <main className="w-full flex-center flex-col min-h-screenitems-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <section className="hero">
          <h1 className="headingh1">¡Bienvenido a All Blocks!</h1>
          <h2>Descubre el Universo Blockchain en All Blocks</h2>
        </section>
        <section>
          <h3 className="introtxt">Tu ventana al fascinante mundo de las criptomonedas y las plataformas blockchain! En un universo en constante evolución, estamos aquí para ser tu guía definitiva, brindándote información precisa y actualizada sobre todos los mercados y tipos de plataformas blockchain.</h3>
        </section>
        <section className="flex min-h-screen items-center justify-between p-20">  
          <Apirapid />
        </section>
      </div>
    </main>
  );
}
