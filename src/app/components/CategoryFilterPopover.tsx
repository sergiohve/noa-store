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
}

const allCategories = [
  "accesorios",
  "bancos-baterias",
  "baterias",
  "clima-precision",
  "climatizacion-para-gabinetes",
  "equipamiento-datacenter",
  "estabilizadores-de-voltaje",
  "gabinete",
  "inversores",
  "microdatacenter",
  "microdatacenter-outdoor",
  "pdu",
  "rack-comunicaciones",
  "ups-interactivas",
  "ups-modulares",
  "ups-online",
  "ups-trifasicas",
  "ups-trifásico ",
];

const formatCategoryName = (category: string): string => {
  const formatted = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase());

  return formatted
    .replace("Pdu", "PDU")
    .replace("Ups", "UPS")
    .replace("Ip", "IP")
    .replace("Kva", "KVA")
    .replace("Kw", "KW");
};

export function CategoryFilterPopover({
  selectedCategories,
  onCategoryChange,
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

  const selectAll = () => {
    onCategoryChange([...allCategories]);
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
      <PopoverContent
        className="w-80 max-h-96 overflow-hidden flex flex-col z-49"
        align="end">
        <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Categorías</h4>
            <div className="flex gap-2">
              <Button
                className="cursor-pointer bg-orange-400 text-neutral-800 font-medium text-[11px] hover:bg-orange-500"
                variant="outline"
                size="sm"
                onClick={selectAll}>
                Seleccionar todos
              </Button>
              <Button
                className="cursor-pointer text-neutral-800 font-medium text-[11px]"
                variant="outline"
                size="sm"
                onClick={clearAll}>
                Limpiar todos
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 flex-1 overflow-y-auto pr-2">
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
                  className="cursor-pointer text-sm text-[12px] leading-tight flex-1">
                  {formatCategoryName(category)}
                </Label>
              </div>
            ))}
          </div>

          {selectedCategories.length > 0 && (
            <div className="text-sm text-muted-foreground pt-2 border-t">
              {selectedCategories.length} categoría(s)
              seleccionada(s)
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
