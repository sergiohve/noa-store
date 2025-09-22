"use client";

import { useState } from "react";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";
import Link from "next/link";
import { productsData } from "../constants/constants";
import { useCartStore } from "../store/cartStore";
import { ProductCard } from "../components/ProductCard";
import { Button } from "@/components/ui/button";
import { KvaFilterPopover } from "../components/KvaFilterPopover";
import { CategoryFilterPopover } from "../components/CategoryFilterPopover";
import { useRouter } from "next/navigation";
import ProductsHero from "../components/ProductsHero";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

export const dynamic = "force-dynamic";

function TiendaContent() {
  const [, setQuery] = useState("");
  const [, setIsOpen] = useState(false);
  const router = useRouter();
  const addItem = useCartStore(state => state.addItem);
  const [selectedKvas, setSelectedKvas] = useState<
    number[]
  >([]);
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = productsData.filter(product => {
    const kvaMatch =
      selectedKvas.length === 0 ||
      (product.kva && selectedKvas.includes(product.kva));

    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    return kvaMatch && categoryMatch;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct =
    indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 10, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      const endPage = Math.min(
        totalPages,
        startPage + maxVisiblePages - 1
      );

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const handleKvaChange = (kvas: number[]) => {
    setSelectedKvas(kvas);
    setCurrentPage(1);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    setCurrentPage(1);
  };

  return (
    <>
      {currentPage === 1 && <ProductsHero />}

      <main className="relative z-10 mx-auto mt-32 pb-12  max-w-6xl px-4 lg:px-5 bg-neutral-900 ">
        <div className="mb-6 text-sm">
          <nav className="text-white flex md:justify-between md:items-center  items-start gap-4 flex-col md:flex-row w-full justify-start">
            <div>
              <Link
                href="/"
                className="hover:text-emerald-500">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Productos</span>
            </div>
            <div className="flex items-center gap-4">
              {(selectedKvas.length > 0 ||
                selectedCategories.length > 0) && (
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedKvas([]);
                      setSelectedCategories([]);
                      setCurrentPage(1);
                    }}
                    className="text-neutral-800 hover:bg-orange-500 bg-orange-400 text-[12px] cursor-pointer">
                    Limpiar filtros
                  </Button>
                </div>
              )}

              <div className="flex gap-2">
                <KvaFilterPopover
                  selectedKvas={selectedKvas}
                  onKvaChange={handleKvaChange} // Usar la nueva función
                />
                <CategoryFilterPopover
                  selectedCategories={selectedCategories}
                  onCategoryChange={handleCategoryChange} // Usar la nueva función
                />
              </div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-8">
          <div className="text-white mb-4">
            <p className="text-white">
              Mostrando {currentProducts.length} de{" "}
              {filteredProducts.length} productos
              {(selectedKvas.length > 0 ||
                selectedCategories.length > 0) &&
                ` filtrados por ${
                  selectedKvas.length +
                  selectedCategories.length
                } criterios`}
            </p>
            <p className="text-sm text-white">
              Página {currentPage} de {totalPages}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:grid-cols-4">
            {currentProducts.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                category={product.category}
                kva={product.kva ?? ""}
                sku={product.sku}
                onDetails={() => {
                  router.push(
                    `/detail-product?id=${product.id}`
                  );
                  setQuery("");
                  setIsOpen(false);
                }}
                onQuote={() => addItem(product.id)}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        paginate(currentPage - 1)
                      }
                      disabled={currentPage === 1}
                      className={
                        "text-white px-2 w-full cursor-pointer bg-neutral-800 border border-neutral-700 hover:bg-neutral-100 " +
                        (currentPage === 1
                          ? "opacity-50 cursor-not-allowed"
                          : "")
                      }>
                      <p>Anterior</p>
                    </Button>
                  </PaginationItem>

                  {getPageNumbers().map(number => (
                    <PaginationItem key={number}>
                      <PaginationLink
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          paginate(number);
                        }}
                        isActive={currentPage === number}
                        className={
                          "text-white bg-neutral-800 border border-neutral-700 hover:bg-neutral-100 " +
                          (currentPage === number
                            ? "bg-white text-neutral-900 border-white font-medium hover:bg-white hover:text-neutral-900"
                            : "")
                        }>
                        {number}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        paginate(currentPage + 1)
                      }
                      disabled={currentPage === totalPages}
                      className={
                        "text-white w-full px-2 cursor-pointer bg-neutral-800 border border-neutral-700 hover:bg-neutral-100 " +
                        (currentPage === totalPages
                          ? "opacity-50 cursor-not-allowed"
                          : "")
                      }>
                      <p>Siguiente</p>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </main>
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
