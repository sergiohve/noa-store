"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, productsData } from "../constants/constants";

export const dynamic = "force-dynamic";

interface FilterItem {
  value: string;
  count: number;
}

interface FiltersData {
  factorPotencia: FilterItem[];
  capacidadKva: FilterItem[];
  capacidadWatts: FilterItem[];
  formato: FilterItem[];
}

interface SelectedFilters {
  factorPotencia: string[];
  capacidadKva: string[];
  capacidadWatts: string[];
  formato: string[];
}

const filtersData: FiltersData = {
  factorPotencia: [
    { value: "0.6", count: 3 },
    { value: "0.9", count: 26 },
    { value: "1", count: 7 },
  ],
  capacidadKva: [
    { value: "1", count: 5 },
    { value: "2", count: 4 },
    { value: "3", count: 5 },
    { value: "6", count: 6 },
    { value: "10", count: 3 },
    { value: "20", count: 2 },
    { value: "30", count: 1 },
    { value: "40", count: 1 },
    { value: "60", count: 1 },
    { value: "75", count: 4 },
    { value: "100", count: 1 },
  ],
  capacidadWatts: [
    { value: "600", count: 2 },
    { value: "900", count: 5 },
    { value: "1200", count: 1 },
    { value: "1800", count: 4 },
    { value: "2700", count: 5 },
    { value: "5400", count: 5 },
    { value: "6000", count: 1 },
    { value: "9000", count: 2 },
    { value: "10000", count: 1 },
    { value: "18000", count: 2 },
    { value: "27000", count: 1 },
    { value: "36000", count: 1 },
    { value: "54000", count: 1 },
    { value: "75000", count: 4 },
    { value: "100000", count: 1 },
  ],
  formato: [
    { value: "Torre", count: 18 },
    { value: "Rack/Torre", count: 17 },
    { value: "Rackeable", count: 1 },
  ],
};

function UpsContent() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    factorPotencia: [],
    capacidadKva: [],
    capacidadWatts: [],
    formato: [],
  });

  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(productsData);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleFilter = (filterType: keyof SelectedFilters, value: string) => {
    setSelectedFilters((prev) => {
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

  useEffect(() => {
    setFilteredProducts(productsData);
  }, [selectedFilters]);

  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto pt-3 pb-12 mt-40 max-w-3/4 px-4 lg:px-5">
        <div className="mb-6 text-sm">
          <nav className="text-gray-600">
            <Link href="/" className="hover:text-[#0066b4]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">UPS</span>
          </nav>
        </div>
        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">UPS</h1>
          <p className="text-gray-700 mb-4">
            <strong>
              UPS Enersafe cuenta con UPS Interactivos, Online, trifasicos y
              modulares
            </strong>
            , ofrecemos <strong>respaldo de energia</strong> para distintas
            areas tales como datacenter, equipamiento medico, mineria
            telecomunicaciones<strong>,</strong>ademas de una excelente
            protección eléctrica integral contra alzas de voltage. Nuestras UPS
            ademas cuentan con el garantias de 3 años.
          </p>
        </div>
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full py-2 px-4 bg-[#0066b4] text-white rounded-md flex items-center justify-center"
          >
            <span className="mr-2">Filtros</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className={`lg:w-1/4 ${
              showMobileFilters ? "block" : "hidden"
            } lg:block`}
          >
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Filtros</h2>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">
                  Factor de Potencia
                </h3>
                <div className="space-y-2">
                  {filtersData.factorPotencia.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#0066b4] rounded focus:ring-[#0066b4]"
                          checked={selectedFilters.factorPotencia.includes(
                            item.value
                          )}
                          onChange={() =>
                            toggleFilter("factorPotencia", item.value)
                          }
                        />
                        <span className="ml-2 text-gray-700">{item.value}</span>
                      </label>
                      <span className="text-gray-500 text-sm">
                        ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">
                  Capacidad Kva
                </h3>
                <div className="space-y-2">
                  {filtersData.capacidadKva.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#0066b4] rounded focus:ring-[#0066b4]"
                          checked={selectedFilters.capacidadKva.includes(
                            item.value
                          )}
                          onChange={() =>
                            toggleFilter("capacidadKva", item.value)
                          }
                        />
                        <span className="ml-2 text-gray-700">{item.value}</span>
                      </label>
                      <span className="text-gray-500 text-sm">
                        ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">
                  Capacidad Watts
                </h3>
                <div className="space-y-2">
                  {filtersData.capacidadWatts.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#0066b4] rounded focus:ring-[#0066b4]"
                          checked={selectedFilters.capacidadWatts.includes(
                            item.value
                          )}
                          onChange={() =>
                            toggleFilter("capacidadWatts", item.value)
                          }
                        />
                        <span className="ml-2 text-gray-700">{item.value}</span>
                      </label>
                      <span className="text-gray-500 text-sm">
                        ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-700">Formato</h3>
                <div className="space-y-2">
                  {filtersData.formato.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#0066b4] rounded focus:ring-[#0066b4]"
                          checked={selectedFilters.formato.includes(item.value)}
                          onChange={() => toggleFilter("formato", item.value)}
                        />
                        <span className="ml-2 text-gray-700">{item.value}</span>
                      </label>
                      <span className="text-gray-500 text-sm">
                        ({item.count})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-[#90D116] text-white rounded-md hover:bg-[#72A612] transition">
                  Aplicar Filtros
                </button>
                <button className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                  Limpiar
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105"
                >
                  <div className="p-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={192}
                      className="w-full h-48 object-contain mb-4"
                    />
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm h-12 overflow-hidden">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-xs mb-4">
                      SKU: {product.sku}
                    </p>
                    <button className="w-full py-2 bg-[#90D116] text-white rounded-md hover:bg-[#72A612] transition mt-auto ">
                      Añadir a la Cotización
                    </button>
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

export default function Ups() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#0066b4]"></div>
        </div>
      }
    >
      <UpsContent />
    </Suspense>
  );
}