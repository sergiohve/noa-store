"use client";
import { Suspense } from "react";
// El componente Next.js Image ha sido reemplazado por una etiqueta <img> estándar
// ya que la librería "next/image" no se puede resolver en este entorno.
import { Mail, MapPin } from "lucide-react";

const productos = [
  {
    name: "Equipos de Climatización",
    link: "/ups?tipo=clima-precision",
  },
  {
    name: "Gabinete Outdoor",
    link: "/ups?tipo=gabinete",
  },
  {
    name: "UPS",
    link: "/ups",
  },
  {
    name: "Accesorios para UPS",
    link: "/ups?tipo=accesorios",
  },
  {
    name: "Bancos de Baterías",
    link: "/ups?tipo=bancos-baterias",
  },
  {
    name: "Baterías",
    link: "/ups?tipo=baterias",
  },
  {
    name: "Estabilizadores de Voltaje",
    link: "/ups?tipo=estabilizadores-de-voltaje",
  },
  {
    name: "Datacenter",
    link: "/ups?tipo=baterias",
  },
  {
    name: "Rack de Comunicaciones",
    link: "/ups?tipo=rack-comunicaciones",
  },
  {
    name: "Inversores",
    link: "/ups?tipo=inversores",
  },
];

function FooterContent() {
  return (
    <>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="h-36 w-36 mb-4">
                <img
                  src="/logo-noa-footer.png"
                  alt="logo Noa"
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300 mx-2 mt-20">Soluciones de energía confiables para procesos de misión crítica.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Productos</h4>
              <ul className="space-y-2">
                {productos.map((product) => (
                  <li key={product.name}>
                    <a href={product.link} className="text-gray-300 hover:text-white">
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                  <a href="mailto:ventas@enersafelatam.com" className="text-gray-300 hover:text-white">ventas@noasotonetworks.cl</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Calle Covadonga vieja 520, Antofagasta</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Noa Store. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={<div className="h-[header-height]"></div>}>
      <FooterContent />
    </Suspense>
  );
}
