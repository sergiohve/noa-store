"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

function PorqueElegirnosContent() {

  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto py-12 mt-40 max-w-6xl px-4 lg:px-5">
        <section className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 leading-tight">
            🎯 ¿Por qué elegirnos?
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Porque no solo diseñamos: acompañamos tu proyecto de principio a fin con una visión que va más allá de lo local.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md border-l-4 border-blue-500 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">Nuestro Corazón en Antofagasta</h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestra base está en la Segunda Región, permitiéndonos comprender a fondo las necesidades y la mentalidad de tus clientes locales.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow-md border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-purple-800 mb-3">Visión Global</h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestra perspectiva es internacional: trabajamos con empresas y emprendedores de todo Chile y el mundo, adaptándonos a cualquier mercado.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <span className="text-blue-500 text-5xl mb-4">📡</span>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Conexión Ágil y Eficiente</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos herramientas modernas para una comunicación fluida y constante, sin importar la distancia, asegurando un seguimiento perfecto.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <span className="text-purple-500 text-5xl mb-4">🌐</span>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Colaboración Sin Fronteras</h3>
              <p className="text-gray-600 text-sm">
                Nuestras herramientas colaborativas de última generación te harán sentir como si estuviéramos trabajando juntos en la misma oficina.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transform hover:shadow-2xl transition-all duration-300">
              <span className="text-blue-500 text-5xl mb-4">🖥️</span>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Estándares Internacionales</h3>
              <p className="text-gray-600 text-sm">
                Diseñamos tu sitio o app con los más altos estándares globales, garantizando que esté listo para competir y triunfar en cualquier mercado.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ButtonWhatsApp
        texto={`*Hola Noa Store, me gustaría más información sobre sus servicios web y mobile*`}
      />
    </>
  );
}

export default function DetailCars() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <PorqueElegirnosContent />
    </Suspense>
  );
}