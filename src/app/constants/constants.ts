
export interface Product {
    id: number | string;
    name: string;
    sku: string;
    image: string;
    category: string;
}
export const productsData = [
  {
    id: 110,
    name: "UPS ESOL TRI PT 10KVA Pantalla Touch Full Color",
    sku: "UPSESESOLTRIPT10CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-300x300.jpg",
    category: "ups-trifasicas"
  },
  {
    id: 116,
    name: "Banco de Baterías ESOL TRI PT 80X9ah",
    sku: "BPESOLTRIPTS/B",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/EnerSafe-Banco-de-Baterias-1-300x300.png",
    category: "ups-trifasicas"
  },
  {
    id: 1270,
    name: "Modulo UPS Modular 20kW",
    sku: "MODSAFE20PM",
    image: "https://enersafelatam.com/wp-content/uploads/2023/12/Enersafe80-300x300.jpg",
    category: "ups-modulares"
  },
  {
    id: 5092,
    name: "Frame UPS Modular Hasta 200kW",
    sku: "MODSAFE1020KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/ENERSAFE-60-scaled-1-300x300.jpg",
    category: "ups-modulares"
  },
  {
    id: 120,
    name: "Frame UPS Modular Hasta 60kW",
    sku: "MODSAFE520KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/ENERSAFE-60-scaled-1-300x300.jpg",
    category: "ups-modulares"
  },
  {
    id: 90,
    name: "UPS ESOL RTH 1KVA 36vdc",
    sku: "UPSESESOLRTH1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online"
  },
  {
    id: 86,
    name: "UPS ESOL T-E 1Kva/900Watts",
    sku: "UPSEOLTE1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-online-Esol-TE--300x300.jpg",
    category: "ups-online"
  },
  {
    id: 84,
    name: "UPS ESIT 600Va/360Watts",
    sku: "UPSESESIT600VA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-interactiva-Esit-600va-2-300x300.jpg",
    category: "ups-interactivas"
  },
  {
    id: 5228,
    name: "UPS ESOL RTH-C 2Kva 48vdc",
    sku: "UPSESOLRT48V2K",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online"
  },
  {
    id: 94,
    name: "UPS ESOL RTH 2Kva 72vdc",
    sku: "UPSESESOLRTHC2KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online"
  }
];

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return productsData.map((product) => ({
    category: product.category,
  }));
}