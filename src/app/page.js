import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <section className="flex min-h-screen flex-col items-center -justify-between p-20">
          Pruebas para meter aquí los componentes
        </section>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/" target="_blank" rel="noopener noreferrer" >
            <Image src="/logoallblocks.svg" alt="Logo All Blocks"
              className="dark:invert" width={62} height={141} priority />
          </a>
        </div>
      </div>
    </main>
  );
}
