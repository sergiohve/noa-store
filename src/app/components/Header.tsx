"use client";
import React, {
  Suspense,
  useState,
  ReactNode,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "./Cart";
import { SearchInput } from "./SearchInput";
import { useRouter } from "next/navigation";
import ProductsPopover from "./ProductsPopover";

interface HeaderContentProps {
  children?: ReactNode;
}

function HeaderContent({ children }: HeaderContentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setQuery] = useState("");
  const [, setIsOpen] = useState(false);
  const router = useRouter();

  const handleProductSelect = (productId: number) => {
    router.push(`/detail-product?id=${productId}`);
    setQuery("");
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="container mx-auto py-2 px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="h-16 w-40 relative">
                <Image
                  src="/noa-logo.png"
                  alt="Enersafe"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
            <div className="flex gap-8 justify-end w-full px-12">
              <Link
                href="/quienes-somos"
                className="text-gray-800 hover:text-emerald-400 font-medium flex items-center ">
                <span>CONTACTO</span>
              </Link>
              <Link
                href="/quienes-somos"
                className="text-gray-800 hover:text-emerald-400 font-medium flex items-center ">
                <span>QUIENES SOMOS?</span>
              </Link>
              <ProductsPopover />
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex justify-center items-center gap-8 px-12">
                <SearchInput
                  onProductSelect={handleProductSelect}
                  placeholder="Buscar producto..."
                  className="max-w-2xl mx-auto pr-8"
                />
                <Cart />
              </div>
            </div>

            <div className="lg:hidden flex gap-6">
              <button
                className="flex flex-col space-y-1 mt-3"
                onClick={toggleMenu}>
                <span className="w-6 h-0.5 bg-gray-800"></span>
                <span className="w-6 h-0.5 bg-gray-800"></span>
                <span className="w-6 h-0.5 bg-gray-800"></span>
              </button>
              <Cart />
            </div>
          </div>
        </div>

        {children && <div className="mt-4">{children}</div>}
      </header>
    </div>
  );
}

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <Suspense
      fallback={<div className="h-[header-height]"></div>}>
      <HeaderContent>{children}</HeaderContent>
    </Suspense>
  );
}
