"use client";
import { Suspense, useEffect } from "react";
import Image from "next/image";

import ButtonWhatsApp from "./components/ButtonWhatsApp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./components/Header";
import Footer from "./components/Footer";

function HomeContent() {
  useEffect(() => {
    const initSwiper = async () => {
      if (typeof window !== "undefined") {
        const Swiper = (await import("swiper")).default;
        new Swiper(".slider-imagenes-home .swiper", {
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          spaceBetween: 0,
          loop: true,
          speed: 2000,
          navigation: {
            nextEl: ".slider-imagenes-home .swiper-button-next",
            prevEl: ".slider-imagenes-home .swiper-button-prev",
          },
          pagination: {
            el: ".slider-imagenes-home .swiper-pagination",
            clickable: true,
          },
        });
      }
    };

    initSwiper();
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      <Header />

      <section className="relative w-full bg-[#1A1A1A] bg-[url('/your-dark-background-image.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/your-hand-image.png')] bg-no-repeat bg-[10%_0%] bg-contain opacity-70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-16 pb-8 text-white">
          <div className="relative text-left max-w-lg lg:max-w-xl xl:max-w-2xl ml-4 sm:ml-8 lg:ml-12 pt-16 md:pt-24 lg:pt-32">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              Soluciones de Energía que dan confianza
            </h2>
            <p className="text-sm sm:text-lg mb-6">
              Energía continua y estable para procesos de misión crítica.
            </p>
            <a
              href="/tienda"
              className="inline-block px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Conoce nuestros productos
            </a>
          </div>
        </div>

        <div className="relative z-10 pb-16 mt-8 md:mt-12 lg:mt-16 flex justify-center items-center">
          <div className="slider-imagenes-home w-full max-w-6xl px-4 sm:px-0">
            <div className="swiper overflow-hidden rounded-[20px] shadow-2xl border-4 border-white">
              <div className="swiper-wrapper">
                <div className="swiper-slide relative flex items-center justify-center p-4 md:p-6 lg:p-8 min-h-[300px] md:min-h-[400px]">
                  <Image
                    src="/ups.png"
                    alt="Fondo de Baterías"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0 z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-green-500 opacity-70 z-10"></div>
                  <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center h-full w-full max-w-5xl mx-auto text-white">
                    <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4 pr-0">
                      <div className="w-full mb-4">
                        <Image
                          src="/ups.png"
                          alt="NOA STORE Logo"
                          width={120}
                          height={40}
                          className="mx-auto lg:mx-0 opacity-80"
                        />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
                        UPS
                      </h3>
                      <a
                        href="/tienda"
                        className="inline-block text-sm px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#90D116] transition-colors duration-300 mb-6"
                      >
                        Ver productos
                      </a>
                      <div className="flex gap-2 mt-2">
                        <span className="w-2 h-2 bg-[#90D116] rounded-full"></span>
                        <span className="w-2 h-2 bg-[#90D116] rounded-full"></span>
                        <span className="w-2 h-2 bg-[#90D116] rounded-full"></span>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/5 flex items-center justify-center p-4">
                      <div className="relative w-full h-48 sm:h-64 lg:h-72">
                        <Image
                          src="/ups.png"
                          alt="Baterías"
                          fill
                          style={{ objectFit: "contain" }}
                          className="object-center drop-shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/5 flex flex-col justify-center items-center lg:items-end text-center lg:text-right p-4 pl-0 z-100">
                      <p className="text-sm font-semibold mb-2 uppercase tracking-wide">
                        PARA UN
                      </p>
                      <h3 className="text-4xl font-extrabold text-[#90D116] mb-2 leading-none">
                        DESEMPEÑO
                      </h3>
                      <h3 className="text-4xl font-extrabold text-[#90D116] mb-4 leading-none">
                        SUPERIOR
                      </h3>
                      <p className="text-xs opacity-80">
                        Soluciones de Energía que dan confianza
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide relative flex items-center justify-center p-4 md:p-6 lg:p-8 min-h-[300px] md:min-h-[400px]">
                  <Image
                    src="/ups.png"
                    alt="Fondo de UPS Trifásicas"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0 z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-green-900 to-yellow-900 opacity-70 z-10"></div>
                  <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center h-full w-full max-w-5xl mx-auto text-white">
                    <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4 pr-0">
                      <div className="w-full mb-4">
                        <Image
                          src="/ups.png"
                          alt="NOA STORE Logo"
                          width={120}
                          height={40}
                          className="mx-auto lg:mx-0 opacity-80"
                        />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
                        UPS TRIFÁSICAS
                      </h3>
                      <a
                        href="/tienda"
                        className="inline-block text-sm px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#90D116] transition-colors duration-300 mb-6"
                      >
                        VER PRODUCTOS
                      </a>
                      <div className="flex gap-2 mt-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/5 flex items-center justify-center p-4">
                      <div className="relative w-full h-48 sm:h-64 lg:h-72">
                        <Image
                          src="/ups.png"
                          alt="UPS Trifásicas"
                          fill
                          style={{ objectFit: "contain" }}
                          className="object-center drop-shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/5 flex flex-col justify-center items-center lg:items-end text-center lg:text-right p-4 pl-0 z-100">
                      <p className="text-sm font-semibold mb-2 uppercase tracking-wide">
                        PARA TU
                      </p>
                      <h3 className="text-4xl font-extrabold text-[#90D116] mb-2 leading-none">
                        NEGOCIO
                      </h3>
                      <h3 className="text-4xl font-extrabold text-[#90D116] mb-4 leading-none">
                        INDUSTRIAL
                      </h3>
                      <p className="text-xs opacity-80">
                        Protección energética garantizada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide relative flex items-center justify-center p-4 md:p-6 lg:p-8 min-h-[300px] md:min-h-[400px]">
                  <Image
                    src="/ups.png"
                    alt="Fondo de Microdatacenter"
                    fill
                    style={{ objectFit: "cover" }}
                    className="absolute inset-0 z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-blue-900 opacity-70 z-10"></div>
                  <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center h-full w-full max-w-5xl mx-auto text-white">
                    <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-4 pr-0">
                      <div className="w-full mb-4">
                        <Image
                          src="/ups.png"
                          alt="NOA STORE Logo"
                          width={120}
                          height={40}
                          className="mx-auto lg:mx-0 opacity-80"
                        />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
                        MICRO DATACENTER
                      </h3>
                      <a
                        href="#"
                        className="inline-block text-sm px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#90D116] transition-colors duration-300 mb-6"
                      >
                        EXPLORAR
                      </a>
                      <div className="flex gap-2 mt-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/5 flex items-center justify-center p-4">
                      <div className="relative w-full h-48 sm:h-64 lg:h-72">
                        <Image
                          src="/ups.png"
                          alt="Microdatacenter"
                          fill
                          style={{ objectFit: "contain" }}
                          className="object-center drop-shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/5 flex flex-col justify-center items-center lg:items-end text-center lg:text-right p-4 pl-0 z-100">
                      <p className="text-sm font-semibold mb-2 uppercase tracking-wide">
                        SOLUCIONES
                      </p>
                      <h3 className="text-4xl font-extrabold text-blue-500 mb-2 leading-none">
                        COMPACTAS
                      </h3>
                      <h3 className="text-4xl font-extrabold text-blue-500 mb-4 leading-none">
                        Y EFICIENTES
                      </h3>
                      <p className="text-xs opacity-80">
                        Infraestructura IT en un solo lugar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto relative z-20 -mt-10 flex justify-center pb-8">
          <div className="swiper-button-prev text-[#90D116] hover:text-white transition-colors duration-300 absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 transform -ml-2"></div>
          <div className="swiper-button-next text-[#90D116] hover:text-white transition-colors duration-300 absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 transform -mr-2"></div>
          <div className="swiper-pagination flex justify-center space-x-2 relative z-30"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48">
                  <Image
                    src="/ups.png"
                    alt="Catálogo Cooling"
                    fill
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-48">
                  <Image
                    src="/ups.png"
                    alt="Catálogo UPS"
                    fill
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold mb-4">
                Conoce nuestro Catálogo
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Obtén los mejores productos en el mercado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/tienda"
                  className="bg-[#90D116] text-white px-6 py-3 rounded-md hover:bg-[#72A612] transition text-center"
                >
                  Productos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestras Categorías de Productos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ name: "UPS", image: "/ups.png", link: "/ups" }].map(
              (category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="relative h-48">
                    <Image src="/ups.png" alt={category.name} fill />
                    <div className="absolute inset-0 bg-gray-800 opacity-40 hover:opacity-20 hover:bg-gray-500"></div>
                    <div className="absolute inset-0 flex items-end">
                      <h3 className="text-white text-xl font-semibold p-4">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
      <ButtonWhatsApp texto="*Hola, me gustaría más información sobre sus servicios de desarrollo web.*" />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
