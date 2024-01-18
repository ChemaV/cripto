// Contacto.jsx


const Contacto = () => {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="text-left">
        <h3 className="introtxt font-chakra mb-5">
          Si tienes alguna criptoduda ¡contacta con nosotros!
        </h3>

        <div className="max-w-md mx-auto">
          <form action="/enviar" method="post">
            {/* Nombre */}
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* Correo Electrónico */}
            <div className="mb-4">
              <label htmlFor="correo" className="block text-gray-700 text-sm font-bold mb-2">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* Mensaje */}
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contacto;


