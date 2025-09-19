"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

function SobreNosotrosContent() {

  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto py-12 mt-40 max-w-6xl px-4 lg:px-5">
        <section className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 leading-tight">
            🚀 Noa Soto Networks
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Diseñamos lo que imaginas. En nuestro estudio, tu idea se convierte en una solución digital a medida.
          </p>

          <div className=" gap-12 mb-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">¿Quiénes Somos?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Somos un equipo antofagastino con más de 10 años de experiencia en el diseño y desarrollo de soluciones digitales que conectan a las empresas con sus clientes. Nuestra base es local, pero nuestra visión es global.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestra pasión es transformar tus ideas en productos digitales funcionales y atractivos. Desde una simple landing page hasta una compleja aplicación móvil, estamos listos para el desafío.
              </p>
            </div>
            <div className="flex justify-center items-center order-1 md:order-2">
              
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-2xl shadow-md border-l-4 border-blue-500 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🌐 Páginas Web</h3>
                <p className="text-gray-600 text-sm">
                  Creamos páginas web y landing pages que no solo se ven bien, sino que están optimizadas para atraer y convertir visitantes en clientes.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl shadow-md border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">🛒 E-commerce</h3>
                <p className="text-gray-600 text-sm">
                  Desarrollamos tiendas online potentes, seguras y fáciles de usar, listas para que vendas desde el primer clic.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl shadow-md border-l-4 border-blue-500 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">📱 Apps y Soluciones</h3>
                <p className="text-gray-600 text-sm">
                  Diseñamos y desarrollamos aplicaciones móviles y soluciones digitales a medida que resuelven problemas reales y mejoran tu negocio.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Lo que Nos Hace Únicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
                <span className="text-blue-500 text-5xl mb-4">📝</span>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Toma de Requerimientos Exhaustiva</h3>
                <p className="text-gray-600 text-sm">
                  Nos sentamos contigo para escuchar cada detalle y lo plasmamos en un diseño funcional y atractivo. Tu visión es nuestra guía.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
                <span className="text-purple-500 text-5xl mb-4">💡</span>
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Cristalizamos tu Idea</h3>
                <p className="text-gray-600 text-sm">
                  Convertimos lo que tienes en la cabeza en una realidad digital, sin perder ni un solo matiz de tu visión original.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
                <span className="text-blue-500 text-5xl mb-4">🤝</span>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Postventa Local y Cercana</h3>
                <p className="text-gray-600 text-sm">
                  Estamos aquí mismo, en Antofagasta. Ofrecemos seguimiento en persona para asegurar que tu proyecto siempre esté a la vanguardia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ButtonWhatsApp
        texto={`*Hola Noa Soto Networks, me gustaría una reunión para conversar sobre mi proyecto*`}
      />
    </>
  );
}

export default function SobreNosotros() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <SobreNosotrosContent />
    </Suspense>
  );
}