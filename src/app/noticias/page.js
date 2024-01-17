"use client";
import Newsdataapi from "../components/noticias/Newsdataapi.jsx";

const NoticiasPage = () => {
  return (
    <main className="w-full flex-start flex-col min-h-screenitems-start justify-between p-8">
      <section className="mb-5">
        <h3 className="introtxt font-chakra">
          En colaboración con la API de noticias{" "}
          <span className="font-medium text-primary">Newsdata.io</span> te
          brindamos acceso a artículos de noticias de todo el mundo: más de
          33557 fuentes de noticias que cubren alrededor de 154 países en 81
          idiomas. A partir de ahora, con{" "}
          <span className="font-brand font-semibold text-primary">
            All Blocks
          </span>
          tienes acceso a más de 100 millones de artículos de noticias
          recopilados desde 2018 hasta la actualidad.
        </h3>
      </section>
      <section className="flex min-h-screen items-start justify-between p-0">
        <Newsdataapi />
      </section>
    </main>
  );
};

export default NoticiasPage;
