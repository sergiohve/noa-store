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
import { Button } from "@/components/ui/button";
import { KvaFilterPopover } from "../components/KvaFilterPopover";

export const dynamic = "force-dynamic";

function TiendaContent() {
  const addItem = useCartStore(state => state.addItem);
  const [selectedKvas, setSelectedKvas] = useState<
    number[]
  >([]);

  const filteredProducts = productsData.filter(product => {
    if (selectedKvas.length === 0) return true;
    return (
      product.kva && selectedKvas.includes(product.kva)
    );
  });

  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto pt-3 pb-12 mt-40 max-w-6xl px-4 lg:px-5 bg-neutral-900">
        <div className="mb-6 text-sm">
          <nav className="text-white flex justify-between items-center">
            <div>
              <Link
                href="/"
                className="hover:text-[#90D116]">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Productos</span>
            </div>
            <div className="flex items-center gap-4">
              {selectedKvas.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {/* {selectedKvas.map(kva => (
                    <span
                      key={kva}
                      className="bg-emerald-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                      {kva} KVA
                      <button
                        onClick={() =>
                          setSelectedKvas(
                            selectedKvas.filter(
                              k => k !== kva
                            )
                          )
                        }
                        className="ml-1 text-white hover:text-gray-200">
                        ×
                      </button>
                    </span>
                  ))} */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedKvas([])}
                    className="text-white hover:text-gray-300 text-xs">
                    Limpiar
                  </Button>
                </div>
              )}
              <KvaFilterPopover
                selectedKvas={selectedKvas}
                onKvaChange={setSelectedKvas}
              />
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-white mb-4 text-sm font-medium">
            <p>
              Mostrando {filteredProducts.length} de{" "}
              {productsData.length} productos
              {selectedKvas.length > 0 &&
                ` filtrados por ${selectedKvas.length} valores KVA`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
            {filteredProducts.map(product => (
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
