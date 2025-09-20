"use client";

import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Eye, BarChart3, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCartStore } from "../store/cartStore";

interface ProductCardProps {
  image: string;
  title: string;
  sku: string;
  category: string;
  kva: string | number;
  onDetails: () => void;
  onQuote: () => void;
}

export function ProductCard({
  image,
  title,
  sku,
  category,
  kva,
  onDetails,
  onQuote,
}: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleQuoteClick = () => {
    const previousItems = [
      ...useCartStore.getState().items,
    ];

    onQuote();

    toast.success(`"${title}" agregado a cotización`, {
      action: {
        label: "Deshacer",
        onClick: () => {
          useCartStore.setState({ items: previousItems });
          toast.info("Acción deshecha");
        },
      },
      duration: 3000,
    });
  };

  return (
    <Card className="w-full sm:w-58 h-96 overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-200 group flex flex-col">
      <div className="relative flex-shrink-0">
        <div className="relative h-40 w-full overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
              <BarChart3 className="h-10 w-10 text-gray-300" />
            </div>
          )}
          <Image
            src={image}
            alt={title}
            fill
            className={`object-contain transition-transform duration-700 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="absolute top-3 right-3 z-10 flex flex-col items-end gap-2">
          <Badge className="bg-orange-400 cursor-default text-neutral-800 px-2 py-1 text-[9px] justify-center items-center flex text-center">
            {category.toUpperCase()}
          </Badge>
          {kva ? (
            <Badge className="bg-neutral-800 cursor-default text-white px-2 py-1 text-[9px] justify-center items-center flex text-center">
              {kva} kVA
            </Badge>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <CardHeader className="pb-2 flex-shrink-0">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-sm leading-tight line-clamp-2 text-gray-800 group-hover:text-emerald-500 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-[12px] text-muted-foreground">
            SKU: {sku}
          </p>
        </CardHeader>

        <div className="flex-grow"></div>

        <CardFooter className="flex justify-between border-t pt-4 flex-shrink-0 gap-1">
          <Button
            variant="outline"
            onClick={onDetails}
            className="flex items-center gap-1 transition-all hover:gap-1 text-xs h-8 cursor-pointer active:scale-[0.9] scale-100">
            <Eye className="h-3 w-2" />
            Detalles
          </Button>
          <Button
            onClick={handleQuoteClick}
            className="flex items-center gap-1 bg-emerald-400 hover:bg-emerald-500 transition-all hover:gap-1 text-xs h-8 cursor-pointer active:scale-[0.9] scale-100">
            <ShoppingCart className="h-3 w-3" /> Cotizar
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
