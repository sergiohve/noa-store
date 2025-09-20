// components/CategoryFilterPopover.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal } from "lucide-react";

interface CategoryFilterPopoverProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  allCategories: string[];
}

export function CategoryFilterPopover({
  selectedCategories,
  onCategoryChange,
  allCategories,
}: CategoryFilterPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (
    category: string,
    checked: boolean
  ) => {
    if (checked) {
      onCategoryChange([...selectedCategories, category]);
    } else {
      onCategoryChange(
        selectedCategories.filter(item => item !== category)
      );
    }
  };

  const clearAll = () => {
    onCategoryChange([]);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="text-neutral-800 flex items-center gap-2 cursor-pointer text-[12px]">
          <SlidersHorizontal size={16} />
          Filtrar por Categoría
          {selectedCategories.length > 0 && (
            <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {selectedCategories.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium ">Categoría</h4>
            <div className="flex gap-2">
              <Button
                className="cursor-pointer bg-orange-400 text-neutral-800 font-medium text-[11px] hover:bg-orange-500"
                variant="outline"
                size="sm"
                onClick={clearAll}>
                Limpiar todos
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 max-h-60 overflow-y-auto pr-2">
            {allCategories.map(category => (
              <div
                key={category}
                className="flex items-center space-x-2">
                <Checkbox
                  className="cursor-pointer"
                  id={`cat-${category}`}
                  checked={selectedCategories.includes(
                    category
                  )}
                  onCheckedChange={checked =>
                    handleCheckboxChange(
                      category,
                      checked === true
                    )
                  }
                />
                <Label
                  htmlFor={`cat-${category}`}
                  className="cursor-pointer text-sm capitalize text-[12px]">
                  {category.replace(/-/g, " ")}
                </Label>
              </div>
            ))}
          </div>

          {selectedCategories.length > 0 && (
            <div className="text-sm text-muted-foreground">
              {selectedCategories.length} categoría(s)
              seleccionada(s)
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
