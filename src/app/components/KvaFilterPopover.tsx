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

const uniqueKvaValues = [
  0.6, 1, 1.5, 2, 2.4, 2.5, 3, 6, 8, 10, 20, 25, 30, 40, 60,
  80, 100,
];

interface KvaFilterPopoverProps {
  selectedKvas: number[];
  onKvaChange: (kvas: number[]) => void;
}

export function KvaFilterPopover({
  selectedKvas,
  onKvaChange,
}: KvaFilterPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (
    kva: number,
    checked: boolean
  ) => {
    if (checked) {
      onKvaChange([...selectedKvas, kva]);
    } else {
      onKvaChange(
        selectedKvas.filter(item => item !== kva)
      );
    }
  };

  const clearAll = () => {
    onKvaChange([]);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="text-neutral-800 flex items-center gap-2 cursor-pointer text-[12px]">
          <SlidersHorizontal size={16} />
          Filtrar por kVA
          {selectedKvas.length > 0 && (
            <span className="bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center text-[11px]">
              {selectedKvas.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 " align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">kVA Capacidad</h4>
            <div className="flex gap-2">
              <Button
                className="text-neutral-800 bg-orange-400 text-[11px] cursor-pointer hover:bg-orange-500 hover:text-neutral-800"
                size="sm"
                onClick={clearAll}>
                Limpiar todos
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2 text-[9px]">
            {uniqueKvaValues.map(kva => (
              <div
                key={kva}
                className="flex items-center space-x-2">
                <Checkbox
                  className="text-sm cursor-pointer"
                  id={`kva-${kva}`}
                  checked={selectedKvas.includes(kva)}
                  onCheckedChange={checked =>
                    handleCheckboxChange(
                      kva,
                      checked === true
                    )
                  }
                />
                <Label
                  htmlFor={`kva-${kva}`}
                  className="cursor-pointer text-[12px]">
                  {kva} kVA
                </Label>
              </div>
            ))}
          </div>

          {selectedKvas.length > 0 && (
            <div className="text-sm text-muted-foreground">
              {selectedKvas.length} opción(es)
              seleccionada(s)
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
