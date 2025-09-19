"use client";
import { Suspense } from "react";
import Image from "next/image";

function FooterContent() {
  return (
    <>
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <div className="h-36 w-36 relative mb-4">
                <Image 
                  src="/logo-noa-footer.png" 
                  alt="logo Noa" 
                  fill
                  className="object-contain h-[150px]"
                />
              </div>
              <p className="text-gray-300 mx-6">Soluciones de energía confiables para procesos de misión crítica.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Productos</h4>
              <ul className="space-y-2">
                <li><a href="/ups" className="text-gray-300 hover:text-white">UPS</a></li>
                
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:ventas@enersafelatam.com" className="text-gray-300 hover:text-white">ventas@enersafelatam.com</a>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">Santa Bernardita 12005 18-B, San Bernardo, Región Metropolitana, Chile.</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <a href="https://linkedin.com/company/enersafe" className="text-gray-300 hover:text-white">LinkedIn Enersafe</a>
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