import React from "react";
import ButtonWhatsApp from "../components/ButtonWhatsApp";

const QuienesSomos = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white pt-28 xs:pb-0 md:pb-20  px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
          Quiénes Somos
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto">
          Conoce más sobre nuestra misión y lo que nos impulsa.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-2xl p-6 sm:p-10 text-black space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Nuestra Misión
          </h2>
          <p className="mt-4 text-gray-600">
            Noa Store es un distribuidor especializado de Enersafe LATAM, enfocado en soluciones de respaldo energético, conectividad y networking de alto nivel para industrias que demandan continuidad operativa. Bajo este sello, proveemos un portafolio robusto que incluye:
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Nuestro Portafolio de Productos
          </h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">&bull;</span>
              <div>
                <span className="font-semibold">UPS:</span> UPS interactivas, online, trifásicas y modulares, cubriendo desde potencias modestas hasta sistemas de alta capacidad, ideales para datacenters, minería, telecomunicaciones y equipos críticos.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">&bull;</span>
              <div>
                <span className="font-semibold">Bancos de Baterías y Accesorios:</span> Para extender los tiempos de autonomía o soportar cargas exigentes.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">&bull;</span>
              <div>
                <span className="font-semibold">Estabilizadores de Voltaje:</span> Reguladores automáticos y estabilización eléctrica, protegiendo los equipos frente a variaciones de tensión que pueden afectar su integridad o causar fallos.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">&bull;</span>
              <div>
                <span className="font-semibold">Equipamiento para Datacenters:</span> Racks y gabinetes (incluyendo soluciones Micro Data Center), unidades de distribución de energía (PDU) e infraestructura que integra alimentación, monitorización y seguridad.
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Lo que Nos Diferencia
          </h2>
          <ul className="mt-4 space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">&bull;</span>
              <div>
                <span className="font-semibold">Postventa y Garantías:</span> Contamos con un servicio de postventa eficiente, garantías locales (tres años en muchos modelos de UPS) y stock de repuestos disponibles.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">&bull;</span>
              <div>
                <span className="font-semibold">Asesoría Técnica:</span> Te ayudamos a dimensionar la UPS correcta, calcular autonomía, escoger formatos rack/tower, considerar redundancia, compatibilidad de conectividad, etc.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">&bull;</span>
              <div>
                <span className="font-semibold">Perspectiva Local:</span> Entendemos las exigencias del norte chileno, los retos de infraestructura, humedad, temperatura, y variabilidad eléctrica, lo que hace que las soluciones Enersafe sean una opción sólida para quienes operan en condiciones complejas.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ButtonWhatsApp
              texto={`*Hola Noa Soto Networks, me gustaría una reunión para conversar sobre los productos*`}
            />
    </div>
  );
};

export default QuienesSomos;
