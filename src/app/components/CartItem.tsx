import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { productsData } from "../constants/constants";
import { useCartStore } from "../store/cartStore";

interface CartItemProps {
  id: number;
  quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { addItem, removeItem, updateQuantity } =
    useCartStore();

  const product = productsData.find(p => p.id === id) || {
    id: 0,
    name: "Producto no encontrado",
    image: "/placeholder-product.jpg",
    sku: "N/A",
    category: "",
  };

  const handleAdd = () => {
    addItem(id);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleDelete = () => {
    removeItem(id);
  };

  return (
    <Card className="w-full border-0 py-2">
      <CardContent className="px-2">
        <div className="flex items-center gap-4">
          <div className="relative h-22 w-16 flex-shrink-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="rounded-md object-cover select-none"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-xs break-words">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-[8px]">
              SKU: {product.sku}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Plus
              className="text-neutral-800 h-4 w-4 hover:scale-[1.1] cursor-pointer transition-all"
              onClick={handleAdd}
            />

            <Badge
              variant="secondary"
              className="text-sm min-w-8 justify-center text-white bg-neutral-800 pointer-events-none select-none font-semibold">
              {quantity}
            </Badge>

            <Minus
              className="h-4 w-4 text-neutral-800 hover:scale-[1.1] cursor-pointer transition-all"
              onClick={handleRemove}
              style={{ opacity: quantity <= 1 ? 0.5 : 1 }}
            />
          </div>

          <div
            className="h-16 items-center bg-red-400 hover:bg-red-500 cursor-pointer transition-colors w-8 flex justify-center rounded-sm "
            onClick={handleDelete}>
            <Trash2 className="h-4 w-4 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
