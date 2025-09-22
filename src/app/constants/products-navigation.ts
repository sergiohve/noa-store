export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  subItems?: MenuItem[];
}

export const navigationData: MenuItem[] = [
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