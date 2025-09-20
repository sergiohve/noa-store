"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ButtonWhatsApp from "../components/ButtonWhatsApp";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCartStore } from "../store/cartStore";
import {
  Product,
  productsData,
} from "../constants/constants";
import { useSearchParams } from "next/navigation";

function ProductDetailContent() {
  const addItem = useCartStore(state => state.addItem);
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  const [product, setProduct] = useState<Product | null>(
    null
  );

  useEffect(() => {
    if (productId) {
      const search = productsData.find(
        item => item.id === Number(productId)
      );
      if (search) {
        setProduct(search);
      } else {
        setProduct(null);
      }
    } else {
      setProduct(null);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#90D116]"></div>
        <p className="ml-4 text-gray-700">
          Cargando o producto no encontrado...
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto pt-3 pb-12 mt-40 max-w-6xl px-4 lg:px-5">
        <div className="mb-6 text-sm hover:text-emerald-500">
          <nav className="text-white">
            <Link
              href="/"
              className="hover:text-emerald-500">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/tienda"
              className="hover:text-emerald-500">
              Productos
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">
              {product.name}
            </span>
          </nav>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
            <div className="relative w-full h-80 lg:h-[400px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
                className="transition-transform hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                SKU: {product.sku}
              </p>
              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-gray-600">
                  <span className="font-semibold">
                    Categoría:
                  </span>{" "}
                  {product.category}
                </p>
                <p className="mt-4 text-gray-800 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            <Button
              className="bg-emerald-400 hover:bg-emerald-600  select-none cursor-pointer active:scale-[0.9] scale-100"
              type="submit"
              onClick={() => addItem(product.id)}>
              Añadir a la Cotización
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <ButtonWhatsApp
        texto={`*Hola Noa Soto Networks, me gustaría una reunión para conversar sobre el producto ${product.name}*`}
      />
    </>
  );
}

export default function ProductDetail() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#90D116]"></div>
        </div>
      }>
      <ProductDetailContent />
    </Suspense>
  );
}
