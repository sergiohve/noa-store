import React, {
  Suspense,
  useState,
  ReactNode,
  useEffect,
} from "react";
import Image from "next/image";
import { Cart } from "./Cart";
import { SearchInput } from "./SearchInput";
import { useRouter } from "next/navigation";
import ProductsPopover from "./ProductsPopover";
import Link from "next/link";

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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [isMenuOpen]);

  return (
    <div className="font-sans">
      <header className="bg-white fixed w-full z-50 top-0 shadow-neutral-900 shadow-sm rounded-2xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 md:py-0">
            <Link
              href="/"
              className="flex items-center z-10">
              <div className="h-12 w-28 md:h-16 md:w-20 relative">
                <Image
                  src="/noa-logo.png"
                  alt="noa-networks"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </Link>

            <div className="hidden md:flex gap-6 xl:gap-8 justify-end w-full px-4 xl:px-12">
              <Link
                href="/contacto"
                className="text-gray-800 hover:text-emerald-400 font-medium flex items-center transition-colors duration-200">
                <span>CONTACTO</span>
              </Link>
              <Link
                href="/quienes-somos"
                className="text-gray-800 hover:text-emerald-400 font-medium flex items-center transition-colors duration-200">
                <span className="whitespace-nowrap">
                  QUIÉNES SOMOS
                </span>
              </Link>
              <ProductsPopover />
            </div>

            <div className="hidden md:flex items-center space-x-4 gap-8">
              <div className="flex justify-center items-center">
                <SearchInput
                  onProductSelect={handleProductSelect}
                  placeholder="Buscar producto..."
                  className=""
                />
              </div>

              <div className="flex items-center -ml-8">
                <Cart />
              </div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <Cart />
              <button
                className="menu-toggle flex flex-col justify-center items-center w-10 h-10 relative"
                onClick={toggleMenu}
                aria-label={
                  isMenuOpen ? "Cerrar menú" : "Abrir menú"
                }>
                <span
                  className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen
                      ? "rotate-45 translate-y-2"
                      : ""
                  }`}></span>
                <span
                  className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 mt-1.5 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}></span>
                <span
                  className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 mt-1.5 ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : ""
                  }`}></span>
              </button>
            </div>
          </div>

          <div
            className={`mobile-menu -mt-4 pt-4 md:hidden bg-white rounded-b-2xl absolute left-0 right-0  transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-96 opacity-100 py-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}>
            <div className="flex flex-col space-y-4 px-4 pb-4">
              <Link
                href="/quienes-somos"
                className="text-gray-800 hover:text-emerald-400 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}>
                CONTACTO
              </Link>
              <Link
                href="/quienes-somos"
                className="text-gray-800 hover:text-emerald-400 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}>
                QUIÉNES SOMOS
              </Link>
              <Link
                href="/tienda"
                className="text-gray-800 hover:text-emerald-400 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}>
                PRODUCTOS
              </Link>

              <div className="py-2">
                <ProductsPopover />
              </div>

              <div className="pt-4 border-t border-gray-200 w-full min-w-82">
                <SearchInput
                  onProductSelect={handleProductSelect}
                  placeholder="Buscar producto..."
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {children && <div className="mt-4">{children}</div>}
      </header>

      <div className="h-16 md:h-20"></div>
    </div>
  );
}

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <Suspense
      fallback={
        <div className="h-16 md:h-20 bg-white rounded-b-2xl"></div>
      }>
      <HeaderContent>{children}</HeaderContent>
    </Suspense>
  );
}
