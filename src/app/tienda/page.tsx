// TiendaContent.tsx

"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";
import Link from "next/link";
import { productsData } from "../constants/constants";
import { useCartStore } from "../store/cartStore";
import { ProductCard } from "../components/ProductCard";

export const dynamic = "force-dynamic";

interface SelectedFilters {
  factorPotencia: string[];
  capacidadKva: string[];
}

function TiendaContent() {
  const addItem = useCartStore(state => state.addItem);
  useState<SelectedFilters>({
    factorPotencia: [],
    capacidadKva: [],
  });

  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto pt-3 pb-12 mt-40 max-w-6xl px-4 lg:px-5">
        <div className="mb-6 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-[#90D116]">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Productos</span>
          </nav>
        </div>

        <div className="flex flex-col  gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  xl:grid-cols-4">
            {/* {productsData.map(product => (
                <div
                  key={product.id}
                  className="bg-white min-h-92 rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105">
                  <div className="p-4 flex flex-col justify-between">
                    <Link
                      href={`/detail-product?id=${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={192}
                        className="w-full h-48 object-contain mb-4"
                      />
                      <h3 className="font-semibold text-gray-800 mb-2 hover:text-[#72A612] cursor-pointer">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.sku}
                    </p>
                    <Button
                      className="bg-[#90D116] w-full text-white hover:bg-[#72A612] cursor-pointer 
                      active:scale-95 active:bg-[#5E8F0E] transition-all duration-50 
                      transform hover:scale-101 shadow-md hover:shadow-lg"
                      onClick={() => addItem(product.id)}>
                      Añadir a la Cotización
                    </Button>
                  </div>
                </div>
              ))} */}
            {productsData.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                category={product.category}
                kva={product.kva ?? ""}
                sku={product.sku}
                onDetails={() =>
                  (window.location.href = `/detail-product?id=${product.id}`)
                }
                onQuote={() => addItem(product.id)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ButtonWhatsApp
        texto={`*Hola Noa Soto Networks, me gustaría una reunión para conversar sobre los productos*`}
      />
    </>
  );
}

export default function Tienda() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#90D116]"></div>
        </div>
      }>
      <TiendaContent />
    </Suspense>
  );
}
