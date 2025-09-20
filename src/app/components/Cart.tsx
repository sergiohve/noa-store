"use client";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "../store/cartStore";
import { CartItem } from "./CartItem";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react"; // Add this import

export function Cart() {
  const items = useCartStore(state => state.items);
  const totalItems = useCartStore(state =>
    state.totalItems()
  );
  const [isMounted, setIsMounted] = useState(false); // Add this state

  // Add this useEffect
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingCartIcon className="h-9 w-9 text-neutral-700 hover:scale-[1.1] transition-all cursor-pointer" />

          {isMounted &&
            totalItems !== 0 && ( // Wrap with isMounted check
              <Badge className="absolute -top-1 -right-2 bg-orange-300 min-w-6 h-5 flex items-center justify-center p-0 border-3 border-white">
                {totalItems}
              </Badge>
            )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Cotización</SheetTitle>
          <SheetDescription>
            Se muestra la lista de los elementos que desea
            cotizar
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex w-full h-full justify-center items-center flex-col">
            <Image
              src="/empty-cart.svg"
              alt="empty cart"
              width={300}
              height={300}
            />
            <p className="text-neutral-400 text-sm font-light">
              No hay productos para cotizar
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-4 pl-4 pr-2">
              <AnimatePresence mode="popLayout">
                {items.map(item => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: { duration: 0.3 },
                    }}
                    transition={{
                      opacity: { duration: 0.5 },
                      layout: { duration: 0.5 },
                    }}>
                    <CartItem
                      id={item.id}
                      quantity={item.quantity}
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </div>
        )}

        <SheetFooter className="mt-auto pt-4 border-t">
          <Button
            className="bg-emerald-400 hover:bg-emerald-600 cursor-pointer select-none"
            type="submit">
            Cotizar
          </Button>
          <SheetClose asChild>
            <Button
              className="cursor-pointer select-none"
              variant="outline">
              Cerrar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
