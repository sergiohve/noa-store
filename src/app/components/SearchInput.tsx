// components/SearchInput.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { productsData } from "../constants/constants";

interface SearchInputProps {
  onProductSelect: (productId: number) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  onProductSelect,
  placeholder = "Buscar productos...",
  className = "",
}: SearchInputProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<
    typeof productsData
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((...args: unknown[]) => {
      const searchQuery = (args[0] as string) ?? "";
      if (!searchQuery.trim()) {
        setSuggestions([]);
        setIsLoading(false);
        return;
      }

      const filtered = productsData.filter(
        product =>
          product.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.sku
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );

      setSuggestions(filtered);
      setIsLoading(false);
    }, 300),
    []
  );

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      debouncedSearch(query);
    } else {
      setSuggestions([]);
      setIsLoading(false);
    }
  }, [query, debouncedSearch]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSuggestionClick = (productId: number) => {
    onProductSelect(productId);
    setQuery("");
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery("");
    setSuggestions([]);
    setIsOpen(false);
  };

  const handleInputBlur = () => {
    // Pequeño delay para permitir hacer clic en las sugerencias
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleInputFocus = () => {
    if (query && suggestions.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          className="w-82 border-1 text-neutral-800 focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 pl-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0">
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {isOpen && (query || suggestions.length > 0) && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500 text-sm">
              Buscando...
            </div>
          ) : suggestions.length > 0 ? (
            <ul className="py-1">
              {suggestions.map(product => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() =>
                      handleSuggestionClick(product.id)
                    }
                    className="w-full text-left px-4 py-2 hover:bg-neutral-800 hover:text-white focus:bg-gray-100 focus:outline-none">
                    <div className="font-medium text-sm cursor-pointer">
                      {product.name}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : query ? (
            <div className="p-4 text-center text-gray-500 text-sm">
              No se encontraron productos
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
