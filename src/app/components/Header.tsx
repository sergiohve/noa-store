"use client";
import React, {
  Suspense,
  useState,
  ReactNode,
} from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cart } from "./Cart";
import { SearchInput } from "./SearchInput";
import { useRouter } from "next/navigation";

interface HeaderContentProps {
  children?: ReactNode;
}

function HeaderContent({ children }: HeaderContentProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("");
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

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? "" : menu);
  };

  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="bg-white shadow-md fixed w-full z-50 top-0">
        <div className="bg-black hidden lg:block py-2">
          <div className="container mx-auto">
            <div className="flex justify-end">
              <ul className="flex space-x-6 text-sm mr-10">
                <li>
                  <Link
                    href="/quienes-somos"
                    className="text-white hover:text-[#90D116]">
                    Quienes Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-white hover:text-[#90D116]">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-2 px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="h-20 w-40 relative">
                <Image
                  src="/logo-noa-header.png"
                  alt="Enersafe"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <nav>
                <ul className="flex space-x-8">
                  <li className="relative group">
                    <Link
                      href="/tienda"
                      className="text-gray-800 hover:text-[#90D116] font-medium flex items-center space-x-1">
                      <span>Productos</span>
                      <ChevronDown
                        size={16}
                        className="text-gray-500 transition-transform duration-300 group-hover:rotate-180"
                      />
                    </Link>
                    <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-60 z-10">
                      <div className="relative">
                        <button
                          onClick={() =>
                            toggleSubmenu("ups")
                          }
                          className="w-full text-left py-2 text-gray-700 hover:text-[#90D116] flex items-center justify-between">
                          <span>UPS</span>
                          <ChevronRight
                            size={16}
                            className="text-gray-500"
                          />
                        </button>
                        {openSubmenu === "ups" && (
                          <div className="absolute top-0 left-full ml-4 bg-white shadow-lg rounded-md p-4 w-48 z-20">
                            <Link
                              href="/ups?tipoUps=ups-interactivas"
                              className="block py-2 text-gray-700 hover:text-[#90D116] font-bold">
                              UPS INTERACTIVAS
                            </Link>
                            <Link
                              href="/ups?tipoUps=ups-online"
                              className="block py-2 text-gray-700 hover:text-[#90D116] font-bold">
                              UPS ONLINE
                            </Link>
                            <Link
                              href="/ups?tipoUps=ups-trifasicas"
                              className="block py-2 text-gray-700 hover:text-[#90D116] font-bold">
                              UPS TRIFÁSICAS
                            </Link>
                            <Link
                              href="/ups?tipoUps=ups-modulares"
                              className="block py-2 text-gray-700 hover:text-[#90D116] font-bold">
                              UPS MODULARES
                            </Link>
                            <Link
                              href="/ups?tipoUps=ups-industrial"
                              className="block py-2 text-gray-700 hover:text-[#90D116] font-bold">
                              UPS INDUSTRIAL
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className=" flex justify-center items-center gap-3">
                <SearchInput
                  onProductSelect={handleProductSelect}
                  placeholder="Buscar producto..."
                  className="max-w-2xl mx-auto"
                />

                <Cart />
              </div>
            </div>

            <div className="lg:hidden flex gap-6">
              <button
                className=" flex flex-col space-y-1 mt-3"
                onClick={toggleMenu}>
                <span className="w-6 h-0.5 bg-gray-800"></span>
                <span className="w-6 h-0.5 bg-gray-800"></span>
                <span className="w-6 h-0.5 bg-gray-800"></span>
              </button>
              <Cart />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg absolute w-full z-20">
            <div className="container mx-auto py-4 px-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/tienda"
                    className="text-gray-800 hover:text-[#90D116] font-medium block py-2">
                    Productos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
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
