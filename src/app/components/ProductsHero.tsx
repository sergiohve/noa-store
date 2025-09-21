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
      icon: <DatabaseZap className="h-8 w-8 font-light" />,
      text: "Data Centers",
    },
    {
      icon: <Activity className="h-8 w-8" />,
      text: "Equipos Médicos",
    },
    {
      icon: <Pickaxe className="h-8 w-8" />,
      text: "Minería",
    },
    {
      icon: <Cctv className="h-8 w-8" />,
      text: "Seguridad",
    },
    {
      icon: <Server className="h-8 w-8" />,
      text: "Servidores",
    },
    {
      icon: <EarthLock className="h-8 w-8" />,
      text: "Telecom",
    },
  ];

  return (
    <div className="relative w-full h-96 md:h-[500px] flex mt-16">
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
        <div className="h-auto w-full bg-white rounded-2xl md:-ml-32">
          <div className="p-8 flex flex-col gap-4">
            <h1 className="text-neutral-900 text-xl font-bold">
              UPS
            </h1>
            <p className="text-neutral-900 font-semilight text-md leading-[1.2]">
              Noa Store cuenta con UPS Interactivos, Online,
              trifasicos y modulares,ofrecemos respaldo de
              energia para distintas areas tales como
              datacenter, equipamiento medico, mineria
              telecomunicaciones,ademas de una excelente
              protección eléctrica integral contra alzas de
              voltage. Nuestras UPS ademas cuentan con el
              garantias de 3 años.
            </p>

            <h1 className="text-neutral-900 text-xl font-bold">
              Principales Usos
            </h1>
            <div className="flex gap-2">
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
