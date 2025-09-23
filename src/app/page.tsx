"use client";
import { Suspense } from "react";
import Image from "next/image";
import ButtonWhatsApp from "./components/ButtonWhatsApp";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GridDistortion from "./hooks/background";

function HomeContent() {
  return (
    <div className="font-sans bg-white text-neutral-900">
      <section className="relative w-full h-[100dvh] bg-[#171717] overflow-hidden">
        <div className="absolute inset-0">
          <GridDistortion
            imageSrc={`/ups2.jpg`}
            grid={10}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="h-full w-full object-contain opacity-40"
          />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="container mx-auto px-4 pt-16 pb-8 text-white h-full flex flex-col justify-center">
            <div className="relative text-left max-w-lg lg:max-w-xl xl:max-w-2xl ml-4 sm:ml-8 lg:ml-12">
              <div className="pointer-events-none">
                <h2 className="text-xl sm:text-2xl lg:text-5xl font-bold mb-4 leading-tight">
                  Productos de energía Confiable para tus
                  operaciones con post-venta local en la II
                  Región de Antofagasta.
                </h2>
                <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200">
                  Explora nuestro catálogo de equipos UPS,
                  baterías, y soluciones de cooling.
                </p>
              </div>

              <Link
                href="/tienda"
                className="pointer-events-auto">
                <Button
                  variant="ghost"
                  type="button"
                  className="border hover:bg-emerald-500 cursor-pointer hover:text-white rounded-3xl p-6">
                  EXPLORAR PRODUCTOS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 w-full order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative h-40 sm:h-48 lg:h-56">
                  <Image
                    src="https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe1-300x300.jpg"
                    alt="Catálogo Cooling"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="relative h-40 sm:h-48 lg:h-56 mt-8">
                  <Image
                    src="https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe60-768x768.jpg"
                    alt="Catálogo UPS"
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-8 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Busca el Equipo que Mantendrá tu Operación
                Segura.
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                Desde soluciones para centros de datos hasta
                protección para el hogar, contamos con el
                equipo que necesitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tienda">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer ">
                    VER CATÁLOGO COMPLETO
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            Explora Nuestras Categorías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                name: "Equipos de Climatización",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2025/04/FAMILIA-EQUIPOS-AIRSAFE.png",
                link: "/ups?tipo=clima-precision",
              },
              {
                name: "Gabinete Outdoor",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2025/08/S-M-L.png",
                link: "/ups?tipo=gabinete",
              },
              {
                name: "UPS",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2023/11/6.png",
                link: "/ups",
              },
              {
                name: "Accesorios para UPS",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2023/11/1.png",
                link: "/ups?tipo=accesorios",
              },
              {
                name: "Bancos de Baterías",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2023/11/2.png",
                link: "/ups?tipo=bancos-baterias",
              },
              {
                name: "Baterías",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2023/11/3.png",
                link: "/ups?tipo=baterias",
              },
              {
                name: "Estabilizadores de Voltaje",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2023/11/4.png",
                link: "/ups?tipo=estabilizadores-de-voltaje",
              },
              {
                name: "Datacenter",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2023/06/datacenter.jpeg",
                link: "/ups?tipo=baterias",
              },
              {
                name: "Rack de Comunicaciones",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2024/02/fotos-categoria-rack.png",
                link: "/ups?tipo=rack-comunicaciones",
              },
              {
                name: "Inversores",
                image:
                  "https://enersafelatam.com/wp-content/uploads/2024/02/fotos-categoria-inversores.png",
                link: "/ups?tipo=inversores",
              },
            ].map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="group block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="relative h-32 sm:h-40 lg:h-48 bg-white flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-40 group-hover:opacity-20 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-end p-3 sm:p-4">
                    <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
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
      }>
      <HomeContent />
    </Suspense>
  );
}
