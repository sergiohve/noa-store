import Image from "next/image";
import React from "react";
import ServerImage from "../../../public/server_room2.jpg";
import IconCard from "./IconCard";
import {
  Activity,
  Cctv,
  DatabaseZap,
  EarthLock,
  Pickaxe,
  Server,
} from "lucide-react";

const ProductsHero = () => {
  const uses = [
    {
      icon: <DatabaseZap className="h-6 w-6 font-light" />,
      text: "Data Centers",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      text: "Equipos Médicos",
    },
    {
      icon: <Pickaxe className="h-6 w-6" />,
      text: "Minería",
    },
    {
      icon: <Cctv className="h-6 w-6" />,
      text: "Seguridad",
    },
    {
      icon: <Server className="h-6 w-6" />,
      text: "Servidores",
    },
    {
      icon: <EarthLock className="h-6 w-6" />,
      text: "Telecom",
    },
  ];

  return (
    <div className="relative w-full flex ">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={ServerImage}
          alt="server_img"
          width={500}
          className="w-full h-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 20%, rgba(23,23,23,1) 80%), " +
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(23,23,23,1) 100%)",
          }}></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-start w-full md:w-1/2 ml-auto px-8 text-white">
        <div className="h-auto w-full bg-white rounded-2xl md:-ml-32 mt-24">
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-neutral-900 text-xl font-bold">
              Nuestras Soluciones
            </h1>
            <p className="text-neutral-900 font-semilight text-sm md:text-md leading-[1.2]">
              Ofrecemos soluciones integrales para la protección y gestión de energía. Nuestra gama de productos incluye sistemas de alimentación ininterrumpida (UPS), estabilizadores de voltaje, baterías, equipos de climatización de precisión y gabinetes. Diseñados para proteger tus equipos de cortes de energía, variaciones de voltaje y otros riesgos eléctricos, nuestros productos aseguran la continuidad operativa en cualquier entorno.
            </p>

            <h1 className="text-neutral-900 text-xl font-bold">
              Principales Usos
            </h1>
            <div className="grid xl:flex grid-cols-2 sm:grid-cols-3 xl:gap-2 gap-16 h-auto -space-y-12">
              {uses.map(item => {
                return (
                  <ul key={item.text}>
                    <IconCard
                      icon={item.icon}
                      text={item.text}
                    />
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;