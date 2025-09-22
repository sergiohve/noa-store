import React from "react";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import ButtonWhatsApp from "../components/ButtonWhatsApp";

const Contacto = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white pt-28 xs:pb-0 md:pb-20 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
          Contacto
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
          ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para
          asistirte.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-12 md:flex md:gap-8">
        <div className="md:flex-1 bg-white rounded-xl shadow-2xl p-6 sm:p-10 text-black">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Información de Contacto
            </h2>
            <p className="mt-4 text-gray-600">
              Puedes comunicarte con nosotros a través de los siguientes
              canales:
            </p>
          </div>
          <div className="mt-6 space-y-4 mx-auto w-fit">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-500 rounded-full p-2 text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Dirección</p>
                <p className="text-sm text-gray-500">
                  Calle Covadonga Vieja Nº 520, Antofagasta, Chile
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-500 rounded-full p-2 text-white">
                <Mail className="h-6 w-6" />
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
              <div className="flex-shrink-0 bg-green-500 rounded-full p-2 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  Teléfono / WhatsApp
                </p>
                <p className="text-sm text-gray-500">+56 9 2858 9224</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-500 rounded-full p-2 text-white">
                <Globe className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Sitio Web</p>
                <a
                  href="https://noastore.netlify.app/"
                  className="text-sm text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://noastore.netlify.app/
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-1 mt-12 md:mt-0 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1141381254336!2d-70.39572972570054!3d-23.63588966440263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a8cc3f5724b91%3A0xb35a9f5d34208a0!2sCovadonga%20Vieja%20520%2C%20Antofagasta%2C%20Chile!5e0!3m2!1sen!2sus!4v1716913867056!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: 8 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
      <ButtonWhatsApp
        texto={`*Hola Noa Soto Networks, me gustaría una reunión para conversar sobre los productos*`}
      />
    </div>
  );
};

export default Contacto;
