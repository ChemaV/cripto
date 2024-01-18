// Contacto.jsx
const ContactoForm = () => {
  return (
    <section className="w-full h-screen text-left bg-gray-light px-6 py-6 md:py-16 rounded-md">
        <div className="max-w-md mx-auto">
          <form action="/enviar" method="post">
            {/* Nombre */}
            <div className="mb-6 md:mb-10">
              <label htmlFor="nombre" className="block text-primary text-md font-semibold mb-2">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="shadow appearance-none border rounded w-full py-4 px-2 text-primary leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-light"
                required
              />
            </div>

            {/* Correo Electrónico */}
            <div className="mb-6 md:mb-10">
              <label htmlFor="correo" className="block text-primary text-md font-semibold mb-2">
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                className="shadow appearance-none border rounded w-full py-4 px-2 text-primary leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-light"
                required
              />
            </div>

            {/* Mensaje */}
            <div className="mb-6 md:mb-10">
              <label htmlFor="mensaje" className="block text-primary text-md font-semibold mb-2">
                Mensaje:
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="4"
                className="shadow appearance-none border rounded w-full py-4 px-2 text-primary leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-purple-light"
                required
              ></textarea>
            </div>

            {/* Botón de Enviar */}
            <div className="flex items-center justify-start">
              <button
                type="submit"
                className="bg-primary hover:bg-purple-light text-white hover:text-primary font-semibold hover:text-lg py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
  );
};

export default ContactoForm;


