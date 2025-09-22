import React from "react";

const page = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white py-12 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
          Contacto
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
          ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para asistirte.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-2xl p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Información de Contacto
            </h2>
            <p className="mt-4 text-gray-600">
              Puedes comunicarte con nosotros a través de los siguientes canales:
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-500 rounded-full p-2 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Dirección
                  </p>
                  <p className="text-sm text-gray-500">
                    Calle Covadonga Vieja Nº 520, Antofagasta, Chile
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-500 rounded-full p-2 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Correo Electrónico
                  </p>
                  <p className="text-sm text-gray-500">
                    ventas@noasotonetworks.cl
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-500 rounded-full p-2 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Teléfono / WhatsApp
                  </p>
                  <p className="text-sm text-gray-500">
                    +56 9 2858 9224
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-500 rounded-full p-2 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.5 3-9s-1.343-9-3-9m0 18v-1.5a3.5 3.5 0 00-3.5-3.5H9.5a3.5 3.5 0 00-3.5 3.5V21"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Sitio Web
                  </p>
                  <a href="https://noastore.netlify.app/" className="text-sm text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    https://noastore.netlify.app/
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;