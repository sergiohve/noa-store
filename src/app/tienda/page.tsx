"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "../constants/constants";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../store/cartStore";

export const dynamic = "force-dynamic";

interface FilterItem {
  value: string;
  count: number | string;
}

interface FiltersData {
  factorPotencia: FilterItem[];
  capacidadKva: FilterItem[];
}

interface SelectedFilters {
  factorPotencia: string[];
  capacidadKva: string[];
}

const filtersData: FiltersData = {
  factorPotencia: [
    { value: "0.6", count: 4 },
    { value: "0.9", count: 28 },
    { value: "0.8", count: 7 },
    { value: "1", count: 7 },
  ],
  capacidadKva: [
    { value: "5", count: 1 },
    { value: "10", count: 5 },
    { value: "20", count: 4 },
    { value: "30", count: 2 },
    { value: "100", count: 2 },
    { value: "50", count: 1 },
    { value: "60", count: 1 },
    { value: "+90", count: ">" },
  ],
};

function TiendaContent() {
  const addItem = useCartStore(state => state.addItem);
  const [selectedFilters, setSelectedFilters] =
    useState<SelectedFilters>({
      factorPotencia: [],
      capacidadKva: [],
    });

  const toggleFilter = (
    filterType: keyof SelectedFilters,
    value: string
  ) => {
    setSelectedFilters(prev => {
      const currentFilters = [...prev[filterType]];
      const index = currentFilters.indexOf(value);

      if (index > -1) {
        currentFilters.splice(index, 1);
      } else {
        currentFilters.push(value);
      }

      return {
        ...prev,
        [filterType]: currentFilters,
      };
    });
  };

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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4 text-gray-800">
                Filtros
              </h2>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">
                  Factor de Potencia
                </h3>
                <div className="space-y-2">
                  {filtersData.factorPotencia.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#90D116] rounded focus:ring-[#90D116]"
                            checked={selectedFilters.factorPotencia.includes(
                              item.value
                            )}
                            onChange={() =>
                              toggleFilter(
                                "factorPotencia",
                                item.value
                              )
                            }
                          />
                          <span className="ml-2 text-gray-700">
                            {item.value}
                          </span>
                        </label>
                        <span className="text-gray-500 text-sm">
                          ({item.count})
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">
                  Capacidad Kva
                </h3>
                <div className="space-y-2">
                  {filtersData.capacidadKva.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-[#90D116] rounded focus:ring-[#90D116]"
                            checked={selectedFilters.capacidadKva.includes(
                              item.value
                            )}
                            onChange={() =>
                              toggleFilter(
                                "capacidadKva",
                                item.value
                              )
                            }
                          />
                          <span className="ml-2 text-gray-700">
                            {item.value}
                          </span>
                        </label>
                        <span className="text-gray-500 text-sm">
                          ({item.count})
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <button className="w-full py-2 bg-[#90D116] text-white rounded-md hover:bg-[#72A612] transition">
                Aplicar Filtros
              </button>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {productsData.map(product => (
                <div
                  key={product.id}
                  className="bg-white min-h-92 rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105">
                  <div className="p-4 flex flex-col justify-between">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={192}
                      className="w-full h-48 object-contain mb-4"
                    />
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
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
              ))}
            </div>
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
