import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface CartButtonProps {
  itemCount: number;
  onClick?: () => void;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function CartButton({
  itemCount,
  onClick,
  variant = "default",
  size = "default",
}: CartButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      className="relative">
      <ShoppingCart className="h-4 w-4 mr-2" />
      Cart
      {itemCount > 0 && (
        <Badge
          variant="secondary"
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 rounded-full">
          {itemCount}
        </Badge>
      )}
    </Button>
  );
}
