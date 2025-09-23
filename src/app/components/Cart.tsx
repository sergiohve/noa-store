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
import { useEffect, useState } from "react";
import useScrollTop from "../hooks/calculateHeight";
import { productsData } from "../constants/constants";

export function Cart() {
  const items = useCartStore(state => state.items);
  const scrollHeight = useScrollTop();
  const totalItems = useCartStore(state => state.totalItems());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

 
  const getCartDetails = () => {
    return items.map(item => {
      const articulo = productsData.find(a => a.id === item.id);
      return {
        ...item,
        ...articulo
      };
    }).filter(item => item.name); 
  };

  
  const sendToWhatsApp = () => {
    const cartDetails = getCartDetails();
    
    if (cartDetails.length === 0) {
      alert("No hay productos para cotizar");
      return;
    }

   
    let message = "¡Hola! Me gustaría cotizar los siguientes productos:%0A%0A";
    
    cartDetails.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*%0A`;
      message += `Cantidad: ${item.quantity}%0A`;
      message += `Precio unitario: $%0A`;
      if (item.description) message += `Descripción: ${item.description}%0A`;
      message += `%0A`;
    });

    const total = cartDetails.reduce((sum, item) => {
      return sum + 0 * item.quantity;
    }, 0);

    if (total > 0) {
      message += `*Total estimado: $${total}*%0A%0A`;
    }

    message += "Por favor, envíenme más información. ¡Gracias!";

    const phoneNumber = "+56928589224"; 
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <ShoppingCartIcon
            className={`h-9 w-9 text-neutral-700 hover:scale-[1.1] transition-all cursor-pointer ${
              scrollHeight === 0
                ? "text-white"
                : "text-neutral-800"
            }`}
          />

          {isMounted && totalItems !== 0 && (
            <Badge
              className={`absolute -top-1 -right-2 bg-orange-400 min-w-6 h-5 flex items-center justify-center p-0 border-[2.5px] border-white transition-all ${
                scrollHeight === 0
                  ? "border-white"
                  : "border-neutral-800"
              }`}>
              {totalItems}
            </Badge>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Cotización</SheetTitle>
          <SheetDescription>
            Se muestra la lista de los elementos que desea cotizar
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
            onClick={sendToWhatsApp}
            className="bg-emerald-400 hover:bg-emerald-600 cursor-pointer select-none"
            type="button">
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