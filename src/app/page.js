import CoinrankingApi from "./components/CoinrankingApi.jsx";
import HeaderHome from "./components/header/HeaderHome.jsx";

export default function Home() {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between px-8 py-2">
      <HeaderHome />
        <section className="mb-5">
          <h3 className="introtxt font-chakra">Tu ventana al fascinante mundo de las criptomonedas y las plataformas blockchain! En un universo en constante evolución, estamos aquí para ser tu guía definitiva, brindándote información precisa y actualizada sobre todos los mercados y tipos de plataformas blockchain.</h3>
        </section>
        <h3 className="text-bold text-2xl text-gray-light bg-purple-light mt-4 p-2">¿Por qué <span className="font-brand font-semibold text-primary">All Blocks</span>?</h3>
        <section className="m-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div><h4 className="font-semibold text-primary text-lg leading-8">Amplitud y Profundidad:</h4>
          <p className="text-md text-gray-title">Abarca todos los aspectos del universo blockchain, desde las criptomonedas más populares hasta los proyectos más innovadores y disruptivos.</p></div>
          <div><h4 className="font-semibold text-primary text-lg leading-8">Información Actualizada:</h4>
          <p className="text-md text-gray-title">Mantenemos nuestras fuentes actualizadas constantemente, asegurándonos de que tengas acceso a la información más reciente y relevante.</p></div>
          <div><h4 className="font-semibold text-primary text-lg leading-8">Experiencia Intuitiva:</h4>
          <p className="text-md text-gray-title">Nuestra interfaz fácil de usar te permite explorar y comprender fácilmente el vasto mundo de las criptomonedas y las tecnologías blockchain.</p></div>
        </section>
        <section className="flex min-h-screen items-start justify-between p-0">  
          <CoinrankingApi />
        </section>
    </main>
  );
}
