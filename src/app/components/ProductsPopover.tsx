import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  subItems?: MenuItem[];
}

interface NavigationComponentProps {
  onNavigate?: (path: string) => void;
}

const navigationData: MenuItem[] = [
  {
    id: "ups",
    label: "UPS",
    subItems: [
      {
        id: "ups-interactivas",
        label: "UPS INTERACTIVAS",
        href: "/ups?tipo=ups-interactivas",
      },
      {
        id: "ups-online",
        label: "UPS ONLINE",
        href: "/ups?tipo=ups-online",
      },
      {
        id: "ups-trifasicas",
        label: "UPS TRIFÁSICAS",
        href: "/ups?tipo=ups-trifasicas",
      },
      {
        id: "ups-modulares",
        label: "UPS MODULARES",
        href: "/ups?tipo=ups-modulares",
      },
      {
        id: "ups-industrial",
        label: "UPS INDUSTRIAL",
        href: "/ups?tipo=ups-industrial",
      },
    ],
  },
  {
    id: "climatizacion",
    label: "EQUIPOS DE CLIMATIZACIÓN",
    subItems: [
      {
        id: "clima-precision",
        label: "CLIMA DE PRECISIÓN",
        href: "/ups?tipo=clima-precision",
      },
      {
        id: "climatizacion-gabinetes",
        label: "CLIMATIZACIÓN PARA GABINETES",
        href: "/ups?tipo=climatizacion-para-gabinetes",
      },
    ],
  },
  {
    id: "gabinete",
    label: "GABINETE OUTDOOR",
    href: "/ups?tipo=gabinete",
  },
  {
    id: "accesorios",
    label: "ACCESORIOS PARA UPS",
    href: "/ups?tipo=accesorios",
  },
  {
    id: "bancos-baterias",
    label: "BANCOS DE BATERÍAS",
    href: "/ups?tipo=bancos-baterias",
  },
  {
    id: "baterias",
    label: "BATERÍAS",
    href: "/ups?tipo=baterias",
  },
  {
    id: "estabilizadores",
    label: "ESTABILIZADORES DE VOLTAJE",
    href: "/ups?tipo=estabilizadores-de-voltaje",
  },
  {
    id: "datacenter",
    label: "DATACENTER",
    subItems: [
      {
        id: "microdatacenter",
        label: "MICRODATACENTER",
        href: "/ups?tipo=microdatacenter",
      },
      {
        id: "microdatacenter-outdoor",
        label: "MICRODATACENTER OUTDOOR",
        href: "/ups?tipo=microdatacenter-outdoor",
      },
      {
        id: "equipamiento-datacenter",
        label: "EQUIPAMIENTO DATACENTER",
        href: "/ups?tipo=equipamiento-datacenter",
      },
      { id: "pdu", label: "PDU", href: "/ups?tipo=pdu" },
    ],
  },
  {
    id: "rack-comunicaciones",
    label: "RACK DE COMUNICACIONES",
    href: "/ups?tipo=rack-comunicaciones",
  },
  {
    id: "inversores",
    label: "INVERSORES",
    href: "/ups?tipo=inversores",
  },
];

const ProductsPopover: React.FC<
  NavigationComponentProps
> = ({ onNavigate }) => {
  const MenuItem: React.FC<{
    item: MenuItem;
    isSubItem?: boolean;
  }> = ({ item }) => {
    const hasSubItems =
      item.subItems && item.subItems.length > 0;
    const baseClasses = `block w-full text-left py-1 px-2 rounded-md text-gray-700 hover:text-emerald-400 transition-colors duration-200 font-medium cursor-pointer`;

    if (hasSubItems) {
      return (
        <div className="relative group/submenu">
          <div
            className={`${baseClasses} flex items-center justify-between`}>
            <span>{item.label}</span>
            <ChevronRight
              size={14}
              className="text-gray-500 group-hover/submenu:text-emerald-400 transition-colors ml-2 flex-shrink-0"
            />
          </div>

          <div
            className={`absolute top-0 left-full bg-white shadow-xl rounded-lg p-2 z-40 border border-gray-200 
            opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible 
            transition-all duration-150 ease-out
            ${item.label.length > 15 ? "w-52" : "w-48"}`}
            style={{
              marginLeft: "-2px",
            }}>
            <div className="absolute top-0 -left-2 w-2 h-full bg-transparent"></div>

            <div className="space-y-0">
              {item.subItems!.map(subItem => (
                <MenuItem key={subItem.id} item={subItem} />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.href) {
      return (
        <Link href={item.href} className={baseClasses}>
          {item.label}
        </Link>
      );
    }

    return (
      <button
        onClick={() => onNavigate?.(item.id)}
        className={baseClasses}>
        {item.label}
      </button>
    );
  };

  return (
    <div className="hidden lg:flex items-center">
      <nav>
        <div className="relative group">
          <button
            className="text-gray-800 hover:text-emerald-400 font-medium flex items-center space-x-1 transition-colors duration-200 py-2 px-1 cursor-pointer"
            aria-expanded="false"
            aria-haspopup="true">
            <Link href={"/tienda"}>PRODUCTOS</Link>
            <ChevronDown
              size={16}
              className="text-gray-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-emerald-400"
            />
          </button>

          <div className="absolute -top-2 -left-4 -right-4 h-6 group-hover:block"></div>

          <div
            className="absolute bg-white shadow-2xl rounded-lg p-2 w-64 z-30 top-full left-0 border border-gray-200
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out
            mt-2"
            role="menu">
            <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>

            <div className="space-y-0">
              {navigationData.map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProductsPopover;
