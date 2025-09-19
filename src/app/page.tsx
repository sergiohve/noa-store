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

      <section className="relative w-full h-screen bg-[#1A1A1A] overflow-hidden">
      
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png"
            alt="Fondo de UPS"
            layout="fill"
            objectFit=""
            quality={10}
            className="opacity-40 mt-20"
          />
        </div>

       
        <div className="absolute inset-0 bg-black-70 bg-opacity-10 z-10"></div>

        <div className="relative z-20 container mx-auto px-4 pt-16 pb-8 text-white h-full flex flex-col justify-center">
          <div className="relative text-left max-w-lg lg:max-w-xl xl:max-w-2xl ml-4 sm:ml-8 lg:ml-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
              Productos de Energía Confiable para tu Negocio
            </h2>
            <p className="text-sm sm:text-lg mb-6">
              Explora nuestro catálogo de equipos UPS, baterías, y soluciones de cooling.
            </p>
            <a
              href="/tienda"
              className="inline-block px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              Explorar productos
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48">
                  <Image
                    src="https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe1-300x300.jpg"
                    alt="Catálogo Cooling"
                    fill
                    className="rounded-lg"
                  />
                </div>
                <div className="relative h-48">
                  <Image
                    src="https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe60-768x768.jpg"
                    alt="Catálogo UPS"
                    fill
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold mb-4">
                Encuentra el Equipo Perfecto
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Desde soluciones para centros de datos hasta protección para el hogar, contamos con el equipo que necesitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/tienda"
                  className="bg-[#90D116] text-white px-6 py-3 rounded-md hover:bg-[#72A612] transition text-center"
                >
                  Ver catálogo completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Explora Nuestras Categorías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "UPS", image: "/ups.png", link: "/ups" },
            ].map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image src={category.image} alt={category.name} fill />
                  <div className="absolute inset-0 bg-gray-800 opacity-40 hover:opacity-20 hover:bg-gray-500"></div>
                  <div className="absolute inset-0 flex items-end">
                    <h3 className="text-white text-xl font-semibold p-4">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ButtonWhatsApp texto="*Hola, estoy interesado en sus productos de energía. ¿Podrían ayudarme con una cotización?*" />
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