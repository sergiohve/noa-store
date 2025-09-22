export interface Product {
  id: number;
  name: string;
  sku: string;
  image: string;
  category: string;
  description: string;
  kva?: number;
  link?: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "UPS ESOL TRI PT 10KVA Pantalla Touch Full Color",
    sku: "UPSESESOLTRIPT10CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-300x300.jpg",
    category: "ups-trifásico ",
    description: "UPS trifásico de 10KVA con pantalla táctil a color para monitoreo y control avanzado del sistema de energía",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Manual-de-Usuario-UPS-ENERSAFE-ESOL-TRI-PT-10-40kva-b-1.pdf"
  },
  {
    id: 2,
    name: "Banco de Baterías ESOL TRI PT 80X9ah",
    sku: "BPESOLTRIPTS/B",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/EnerSafe-Banco-de-Baterias-1-300x300.png",
    category: "ups-trifásico ",
    description: "Banco de baterías de 80 unidades de 9Ah para sistemas UPS trifásicos de alta capacidad",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/BANCO-BATERIAS-ESOL-TRI-PT.pdf"
  },
  {
    id: 3,
    name: "Modulo UPS Modular 20kW",
    sku: "MODSAFE20PM",
    image: "https://enersafelatam.com/wp-content/uploads/2023/12/Enersafe80-300x300.jpg",
    category: "ups-modulares",
    description: "Módulo de potencia de 20kW para sistemas UPS modulares escalables",
    kva: 20,
    link: "https://enersafelatam.com/wp-content/uploads/2023/12/UPS-ModularSafe.pdf"
  },
  {
    id: 4,
    name: "Frame UPS Modular Hasta 200kW",
    sku: "MODSAFE1020KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/ENERSAFE-60-scaled-1-300x300.jpg",
    category: "ups-modulares",
    description: "Chasis para sistema UPS modular con capacidad de expansión hasta 200kW",
    kva: 200,
    link: "https://enersafelatam.com/wp-content/uploads/2023/12/UPS-ModularSafe.pdf"
  },
  {
    id: 5,
    name: "Frame UPS Modular Hasta 60kW",
    sku: "MODSAFE520KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/ENERSAFE-60-scaled-1-300x300.jpg",
    category: "ups-modulares",
    description: "Chasis para sistema UPS modular con capacidad de expansión hasta 60kW",
    kva: 60,
    link: "https://enersafelatam.com/wp-content/uploads/2023/12/UPS-ModularSafe.pdf"
  },
  {
    id: 6,
    name: "UPS ESOL RTH 1KVA 36vdc",
    sku: "UPSESESOLRTH1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 1KVA con tecnología de doble conversión y 36VDC para máxima protección",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-1-2-3-KVA_compressed-2.pdf"
  },
  {
    id: 7,
    name: "UPS ESOL T-E 1Kva/900Watts",
    sku: "UPSEOLTE1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-online-Esol-TE--300x300.jpg",
    category: "ups-online",
    description: "UPS online de 1KVA con eficiencia energética y protección contra fluctuaciones de voltaje",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-T-E-1-2-3-KVA-1-1.pdf"
  },
  {
    id: 8,
    name: "UPS ESIT 600Va/360Watts",
    sku: "UPSESESIT600VA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-interactiva-Esit-600va-2-300x300.jpg",
    category: "ups-interactivas",
    description: "UPS interactiva de 600VA ideal para equipos de oficina y computadoras personales",
    kva: 0.6,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS_INTERACTIVAS-600-1000-2000-2.pdf"
  },
  {
    id: 9,
    name: "UPS ESOL RTH-C 2Kva 48vdc",
    sku: "UPSESOLRT48V2K",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con configuración de 48VDC para aplicaciones críticas",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-C-1y2Kva.pdf"
  },
  {
    id: 10,
    name: "UPS ESOL RTH 2Kva 72vdc",
    sku: "UPSESESOLRTHC2KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con sistema de 72VDC para mayor autonomía y rendimiento",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-1-2-3-KVA_compressed-1.pdf"
  },
  {
    id: 11,
    name: "UPS ESOL T-E 10Kva/10000Watts",
    sku: "UPSOLTE10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe60-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 10KVA para protección de equipos críticos en entornos empresariales",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TE-6KVA_10KVA-3.pdf"
  },
  {
    id: 12,
    name: "UPS ESOL T-E 6Kva/6000Watts",
    sku: "UPSOLTE6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe60-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 6KVA con alta eficiencia y protección integral de energía",
    kva: 6,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TE-6KVA_10KVA-3.pdf"
  },
  {
    id: 13,
    name: "Tarjeta SNMP UPS Trifásica",
    sku: "UPSSNMPCARDS1",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe5-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta de monitoreo SNMP para UPS trifásicos, permite gestión remota",
    kva: 0.5,
  },
  {
    id: 14,
    name: "UPS ESOL RTH-C 1Kva 24vdc",
    sku: "UPSESOLRTHC1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online compacta de 1KVA con configuración de 24VDC para espacios reducidos",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-C-1y2Kva.pdf"
  },
  {
    id: 15,
    name: "UPS ESOL RTH 3Kva 72vdc",
    sku: "UPSESESOLRTHC3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA con sistema de 72VDC para aplicaciones de media potencia",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-1-2-3-KVA_compressed-1.pdf"
  },
  {
    id: 16,
    name: "UPS ESOL RTH-C 3Kva 120V",
    sku: "UPSESOLRTHC3KVA120VAC",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA compatible con sistemas de 120VAC",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-C-1-2-3-KVA.pdf"
  },
  {
    id: 17,
    name: "UPS RTH-C PRO 10Kva/10kW",
    sku: "UPSBATRT10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/1-RTHC6KVA-con-sombra-300x300.jpg",
    category: "ups-online",
    description: "UPS profesional de 10KVA con características avanzadas para centros de datos",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2025/04/EnerSafre-RTH-C-Pro-6-10-kva-COMP-1.pdf"
  },
  {
    id: 18,
    name: "UPS RTH-C PRO 6Kva/6kW",
    sku: "UPSBATRT6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/1-RTHC6KVA-con-sombra-300x300.jpg",
    category: "ups-online",
    description: "UPS profesional de 6KVA con tecnología de punta y alta confiabilidad",
    kva: 6,
    link: "https://enersafelatam.com/wp-content/uploads/2025/04/EnerSafre-RTH-C-Pro-6-10-kva-COMP-1.pdf"
  },
  {
    id: 19,
    name: "UPS ESOL RTH Long Run 10Kva/9000Watts Sin baterías",
    sku: "UPSESOLRTHCLR10KVA_",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 10KVA configurado para long run, se vende sin baterías",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOS-RTH-LR_comprimida.pdf"
  },
  {
    id: 20,
    name: "UPS ESOL RTH Long Run 6Kva/5400Watts Sin baterías",
    sku: "UPSESOLRTCLR6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 6KVA para autonomía extendida, se entrega sin paquete de baterías",
    kva: 6,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOS-RTH-LR_comprimida.pdf"
  },
  {
    id: 21,
    name: "UPS ESOL RTH-C Long Run 1Kva/900Watts 24vdc Sin baterías",
    sku: "UPSESOLRTHCLR1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online compacta de 1KVA para long run en 24VDC, sin baterías incluidas",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-Rlong-run-1-3kva.pdf"
  },
  {
    id: 22,
    name: "UPS ESOL RTH-C Long Run 3Kva/2700Watts 72vdc Sin baterías",
    sku: "UPSESOLRTHCLR3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA configurada para autonomía extendida en 72VDC, sin baterías",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-Rlong-run-1-3kva.pdf"
  },
  {
    id: 23,
    name: "Batería Enersafe 12V/33Ah",
    sku: "BATENER12V33AH",
    image: "https://enersafelatam.com/wp-content/uploads/2024/03/12V-33Ah-300x300.png",
    category: "baterias",
    description: "Batería de gel de 12V 33Ah para sistemas UPS y aplicaciones de respaldo",
    kva: 0.4,
    link: "https://enersafelatam.com/wp-content/uploads/2024/03/Bateria-HR-12-33Ah.pdf"
  },
  {
    id: 24,
    name: "Batería Enersafe 12V/40Ah",
    sku: "BATENER12V40AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Imagen-sin-fondo-1-300x300.png",
    category: "baterias",
    description: "Batería de ciclo profundo 12V 40Ah para sistemas de energía de respaldo",
    kva: 0.5,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Bateria-HR-12-40Ah.pdf"
  },
  {
    id: 25,
    name: "Batería Enersafe 12V/55Ah",
    sku: "BATENER12V55AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/10/E-HR-HR12-200W-55AH-300x300.png",
    category: "baterias",
    description: "Batería de alta capacidad 12V 55Ah para aplicaciones que requieren mayor autonomía",
    kva: 0.7,
    link: "https://enersafelatam.com/wp-content/uploads/2023/10/E-HR-HR12-200W-55AH-1.pdf"
  },
  {
    id: 26,
    name: "Batería ENERSAFE 12V/100Ah",
    sku: "BATENER12V100AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Imagen-sin-fondo-300x300.png",
    category: "baterias",
    description: "Batería de gel de 12V 100Ah para sistemas de respaldo de larga duración",
    kva: 1.2,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Bateria-HR-12-100Ah.pdf"
  },
  {
    id: 29,
    name: "Kit Rieles ESOL RTH",
    sku: "ACCESRIELESOL",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe19-300x300.jpg",
    category: "accesorios",
    description: "Kit de rieles para montaje en rack de UPS ESOL RTH",
    kva: 0.1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/KIT-RIELES-ESOL-2-1.pdf"
  },
  {
    id: 30,
    name: "Batería Enersafe 12V/5Ah",
    sku: "BATENER12V5AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/12V-5aH-300x300.png",
    category: "baterias",
    description: "Batería compacta de 12V 5Ah para aplicaciones de baja potencia",
    kva: 0.06,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Bateria-12v-5Ah-1.pdf"
  },
  {
    id: 31,
    name: "Batería Enersafe 12V/7Ah",
    sku: "BATENER12V7AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/17V-7Ah-300x300.png",
    category: "baterias",
    description: "Batería de 12V 7Ah para pequeños sistemas UPS y aplicaciones electrónicas",
    kva: 0.08,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Bateria-HR-12-7Ah-1.pdf"
  },
  {
    id: 32,
    name: "Baterías Enersafe 12V 9AH",
    sku: "BATENER12V9AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/12V-9Ah-300x300.png",
    category: "baterias",
    description: "Batería de 12V 9Ah para sistemas de respaldo de energía moderada",
    kva: 0.1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Bateria-Enersafe-12-9Ah.pdf"
  },
  {
    id: 33,
    name: "Batería Enersafe 12V/18Ah",
    sku: "BATENER12V18AH",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/Imagen-de-WhatsApp-2025-01-07-a-las-17.23.18_d1a64259-300x300.jpg",
    category: "baterias",
    description: "Batería de 12V 18Ah para aplicaciones que requieren autonomía media",
    kva: 0.2,
    link: "https://enersafelatam.com/wp-content/uploads/2025/01/Bateria-12v-18ahAH-.pdf"
  },
  {
    id: 34,
    name: "Batería Enersafe 12V/26Ah",
    sku: "BATENER12V26AH",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/Bateria-12-26-300x300.jpg",
    category: "baterias",
    description: "Batería de 12V 26Ah con tecnología de gel para mayor vida útil",
    kva: 0.3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/01/Bateria-HR12-104W-26AH.pdf"
  },
  {
    id: 35,
    name: "Tarjeta SNMP UPS DS806 USB",
    sku: "SNMPMTMINI",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe3-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP mini con puerto USB para monitoreo de UPS",
    kva: 0.1,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/TARJETA-SNMP.pdf"
  },
  {
    id: 36,
    name: "Tarjeta SNMP UPS DS801 SIN USB",
    sku: "SNMPMINIUSB",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/1-SNMP-MONOFASICA-VIOLETA-801-CON-SOMBRA-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP mini sin USB para gestión básica de UPS",
    kva: 0.1,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/Tarjeta-SNMP-1_compressed.pdf"
  },
  {
    id: 37,
    name: "UPS ESOL RTH-L 1KVA, Batería Ion Litio",
    sku: "UPSESESOLRTHL1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 1KVA con batería de ion litio para mayor duración y menor peso",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-L.pdf"
  },
  {
    id: 38,
    name: "UPS ESOL RTH-L 2KVA, Batería Ion Litio",
    sku: "UPSESESOLRTHL2KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con tecnología de ion litio para aplicaciones eficientes",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-L.pdf"
  },
  {
    id: 39,
    name: "UPS ESOL RTH-L 3KVA, Batería Ion Litio",
    sku: "UPSESESOLRTHL3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA con baterías de ion litio, ideal para espacios reducidos",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-L.pdf"
  },
  {
    id: 40,
    name: "UPS ESOL T-E 2Kva/1800Watts",
    sku: "UPSESOLTE2KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-online-Esol-TE--300x300.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con alta eficiencia y protección integral de energía",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-T-E-1-2-3-KVA-1-1.pdf"
  },
  {
    id: 41,
    name: "UPS ESOL T-E 3Kva/2700Watts",
    sku: "UPSESOLTE3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-online-Esol-TE--300x300.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA para protección de equipos sensibles y críticos",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-T-E-1-2-3-KVA-v2025a.pdf"
  },
  {
    id: 43,
    name: "UPS ESIT 1000Va/600Watts",
    sku: "UPSIMICRO1000",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-interactiva-Esit-1000va-2-300x300.jpg",
    category: "ups-interactivas",
    description: "UPS interactiva de 1000VA para protección básica de equipos electrónicos",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS_INTERACTIVAS-600-1000-2000-2.pdf"
  },
  {
    id: 44,
    name: "UPS ESIT 2000Va/1200Watts",
    sku: "UPSIMICRO2000",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-interactiva-Esit-2000va-2-300x300.jpg",
    category: "ups-interactivas",
    description: "UPS interactiva de 2000VA para protección de equipos de oficina y pequeños servidores",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS_INTERACTIVAS-600-1000-2000-2.pdf"
  },
  {
    id: 45,
    name: "UPS Modular SubRack",
    sku: "UPSMODSUBR80G",
    image: "https://enersafelatam.com/wp-content/uploads/2023/07/Enersafe78-300x300.jpg",
    category: "ups-modulares",
    description: "Subrack para sistema UPS modular con capacidad de hasta 80kW",
    kva: 80,
    link: "https://enersafelatam.com/wp-content/uploads/2023/07/UPS-MODULAR-SUB-RACK_compressed-1.pdf"
  },
  {
    id: 46,
    name: "UPS ESOL TRI PT 20KVA Pantalla Touch Full Color",
    sku: "UPSESESOLTRIPT20CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-768x768.jpg",
    category: "ups-trifásico ",
    description: "UPS trifásico de 20KVA con pantalla táctil a color para gestión avanzada",
    kva: 20,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TRI-PT_comprimido.pdf"
  },
  {
    id: 47,
    name: "UPS ESOL TRI PT 30KVA Pantalla Touch Full Color",
    sku: "UPSESESOLTRIPT30CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-768x768.jpg",
    category: "ups-trifásico ",
    description: "UPS trifásico de 30KVA con interfaz táctil a color y monitoreo avanzado",
    kva: 30,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TRI-PT_comprimido.pdf"
  },
  {
    id: 48,
    name: "UPS ESOL TRI PT 40KVA Pantalla Touch Full Color",
    sku: "UPSESOLTRIPT40CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-768x768.jpg",
    category: "ups-trifásico ",
    description: "UPS trifásico de 40KVA with pantalla táctil para control completo del sistema",
    kva: 40,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TRI-PT_comprimido.pdf"
  },
  {
    id: 49,
    name: "UPS TRI PT 60KVA BAT/INT Pantalla Touch Full Color",
    sku: "UPSTRIPT60KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-TRIFASICA-60KVA-SIN-FONDO-300x300.png",
    category: "ups-trifásico ",
    description: "UPS trifásico de 60KVA con baterías integradas y pantalla táctil a color",
    kva: 60,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-60-100KVA-BateriaInterna-2.pdf"
  },
  {
    id: 50,
    name: "UPS TRI PT 100KVA BAT/INT Pantalla Touch Full Color",
    sku: "UPSTRIPT2100KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Imagen-UPS-60-100KVA-EnerSafe-300x300.png",
    category: "ups-trifásico ",
    description: "UPS trifásico de 100KVA de alta capacidad con baterías integradas y pantalla táctil",
    kva: 100,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-60-100KVA-BateriaInterna-2.pdf"
  },
  {
    id: 51,
    name: "UPS TRIMONO ESOL RTH 6 KVA 3:1",
    sku: "UPSESOL3-1-6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe58-300x300.jpg",
    category: "ups-online",
    description: "UPS trifásico a monofásico de 6KVA con relación 3:1 para conversión de energía",
    kva: 6,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-3-1_compressed-1.pdf"
  },
  {
    id: 52,
    name: "UPS ESOL TRI RT 20KVA Rackeable",
    sku: "UPSESOLTRIRT20KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/3-UPS-RT20KVA-con-sombra-300x300.jpg",
    category: "ups-trifásico ",
    description: "UPS trifásico rackeable de 20KVA para instalación en centros de datos",
    kva: 20,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-TRI-RT-3-1.pdf"
  },
  {
    id: 53,
    name: "UPS TRIMONO ESOL RTH 10 KVA 3:1",
    sku: "UPSESOLRTH3-1-10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe58-300x300.jpg",
    category: "ups-online",
    description: "UPS trifásico a monofásico de 10KVA con tecnología de conversión 3:1",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-RTH-C-Ficha-Tecnica-comprimido-1.pdf"
  },
  {
    id: 54,
    name: "Tablero Bypass 10-40kva Trifasico",
    sku: "BYPASSTRI10-40KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/BYPASS-TRIFASICO-con-sombra-300x300.jpg",
    category: "accesorios",
    description: "Tablero de bypass trifásico para UPS de 10 a 40KVA para mantenimiento seguro",
    kva: 25,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/Bypass-10-40-TRI-2.pdf"
  },
  {
    id: 55,
    name: "Inversor Cargador 2400VA/1440W 24VDC",
    sku: "INVCAR1440",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe15-300x300.jpg",
    category: "accesorios",
    description: "Inversor cargador de 2400VA/1440W para sistemas de 24VDC",
    kva: 2.4,
  },
  {
    id: 56,
    name: "Inversor Cargador 1500VA/900W 12VDC",
    sku: "INVCAR900",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe15-300x300.jpg",
    category: "accesorios",
    description: "Inversor cargador de 1500VA/900W para sistemas de 12VDC",
    kva: 1.5,
  },
  {
    id: 57,
    name: "Modulo Distribucion Bypass Rackeable 20 kva rt",
    sku: "MDESOLTRIRT20KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe25-300x300.jpg",
    category: "accesorios",
    description: "Módulo de distribución bypass rackeable para UPS de 20KVA",
    kva: 20,
  },
  {
    id: 58,
    name: "Bypass PDU Rackeable 6/10kva monofasico",
    sku: "BYPPRDPDU610KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2025/09/2-PDU-con-sombra-300x300.jpg",
    category: "accesorios",
    description: "PDU con bypass rackeable para UPS monofásicos de 6-10KVA",
    kva: 8,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/PDU-Rackeable-1_compressed.pdf"
  },
  {
    id: 59,
    name: "Bypass Paralelismo Rackeable 6/10kva monofasico",
    sku: "BYPRAPROPDU610KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/2-PDU-PARALELISMO-con-sombra-300x300.jpg",
    category: "accesorios",
    description: "Sistema de bypass con paralelismo rackeable para UPS de 6-10KVA",
    kva: 8,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/PDU-Paralelismo-1_compressed.pdf"
  },
  {
    id: 60,
    name: "Switch Bypass con PDU 1-3Kva",
    sku: "RT9100-PDU",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe21-300x300.jpg",
    category: "accesorios",
    description: "Switch bypass con PDU integrado para UPS de 1-3KVA",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2024/05/PDU-BYPASS-1.pdf"
  },
  {
    id: 61,
    name: "Tarjeta SNMP UPS Monofásica",
    sku: "SNMP-ESOL-KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe1-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP para UPS monofásicos, permite monitoreo remoto y gestión",
    kva: 0.5,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/TARJETA-SNMP_compressed.pdf"
  },
  {
    id: 62,
    name: "Tarjeta SNMP ATS",
    sku: "SNMPATS",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe9-300x300.jpg",
    category: "accessorios",
    description: "Tarjeta SNMP para Transfer Switch Automático (ATS), monitoreo remoto",
    kva: 0.5,
    link: "https://enersafelatam.com/wp-content/uploads/2023/12/Manual-de-Usuario-SNMP-ESOL-Mini-1-10kva-b.pdf"
  },
  {
    id: 63,
    name: "Clima Precisión Perimetral AirSafe CR 120kW DownFlow Doble Circuito",
    sku: "EACCR0120DDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-1-150x150.png",
    category: "clima-precision",
    description: "Sistema de enfriamiento perimetral para centros de datos de 120kW, con diseño de flujo de aire descendente (DownFlow) y doble circuito para redundancia.",
    kva: 120,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 64,
    name: "Clima Precisión Inrow AirSafe IR 70kW 600 mm",
    sku: "EACIR070FDXA6",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/FS050FC-picture-001-left-front-768x768.png",
    category: "clima-precision",
    description: "Unidad de enfriamiento en fila (Inrow) de 70kW con un ancho de 600mm, ideal para optimizar la disipación de calor directamente en los racks del datacenter.",
    kva: 70,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 65,
    name: "Clima Precisión Inrow AirSafe IR 60kW 600 mm",
    sku: "EACIR060FDXA6",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/FS050FC-picture-001-left-front-768x768.png",
    category: "clima-precision",
    description: "Unidad Inrow de 60kW, con un diseño de 600mm de ancho, para enfriamiento dirigido y eficiente en filas de racks.",
    kva: 60,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 66,
    name: "Clima Precisión Perimetral AirSafe CR 25kW UpFlow",
    sku: "EACCR025UDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UPflow-1-300x300.png",
    category: "clima-precision",
    description: "Sistema perimetral de 25kW con flujo de aire ascendente (UpFlow), diseñado para enfriar salas de servidores y datacenters pequeños.",
    kva: 25,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 67,
    name: "Clima Precisión Perimetral AirSafe CR 25kW DownFlow",
    sku: "EACCR025DDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-5-300x300.png",
    category: "clima-precision",
    description: "Unidad perimetral de 25kW con flujo de aire descendente (DownFlow), optimizada para enfriamiento de precisión en datacenters.",
    kva: 25,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 68,
    name: "Clima Precisión Perimetral AirSafe CR 30kW UpFlow",
    sku: "EACCR030UDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UPflow-1-300x300.png",
    category: "clima-precision",
    description: "Sistema perimetral de 30kW con flujo de aire ascendente (UpFlow) para la climatización de espacios de IT.",
    kva: 30,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 69,
    name: "Clima Precisión Perimetral AirSafe CR 30kW DownFlow",
    sku: "EACCR030DDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-5-300x300.png",
    category: "clima-precision",
    description: "Unidad perimetral de 30kW con flujo de aire descendente (DownFlow), ideal para pasillos fríos.",
    kva: 30,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 70,
    name: "Clima Precisión Perimetral AirSafe CR 35kW UpFlow",
    sku: "EACCR035UDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UPflow-1-300x300.png",
    category: "clima-precision",
    description: "Sistema de enfriamiento de 35kW con flujo de aire ascendente (UpFlow) para centros de datos.",
    kva: 35,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 71,
    name: "Clima Precisión Inrow AirSafe IR 25kW 300 mm",
    sku: "EACIR025FDXA3",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/Group-1-300x300.png",
    category: "clima-precision",
    description: "Unidad Inrow de 25kW con un diseño compacto de 300mm de ancho, perfecta para espacios limitados.",
    kva: 25,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 72,
    name: "Clima Precisión Inrow AirSafe IR 25kW 600 mm",
    sku: "EACIR025FDXA6",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/FS050FC-picture-001-left-front-768x768.png",
    category: "clima-precision",
    description: "Enfriador Inrow de 25kW con ancho de 600mm para una gestión térmica eficiente en filas de racks.",
    kva: 25,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 73,
    name: "Clima Precisión Inrow AirSafe IR 30kW 300 mm",
    sku: "EACIR030FDXA3",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/Group-1-300x300.png",
    category: "clima-precision",
    description: "Unidad Inrow de 30kW en un formato de 300mm de ancho, optimizada para enfriamiento de precisión.",
    kva: 30,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 74,
    name: "Clima Precisión Inrow AirSafe IR 30kW 600 mm",
    sku: "EACIR030FDXA6",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/FS050FC-picture-001-left-front-768x768.png",
    category: "clima-precision",
    description: "Enfriador Inrow de 30kW con un ancho de 600mm para aplicaciones de alta densidad de calor.",
    kva: 30,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 75,
    name: "Clima Precisión Inrow AirSafe IR 40kW 600 mm",
    sku: "EACIR040FDXA6",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/FS050FC-picture-001-left-front-768x768.png",
    category: "clima-precision",
    description: "Unidad Inrow de 40kW con ancho de 600mm para enfriamiento de racks en centros de datos medianos.",
    kva: 40,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 76,
    name: "Clima Precisión Inrow AirSafe IR 50kW 600 mm",
    sku: "EACIR050FDXA6",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/FS050FC-picture-001-left-front-768x768.png",
    category: "clima-precision",
    description: "Enfriador Inrow de 50kW, con diseño de 600mm, para la gestión de puntos calientes en el datacenter.",
    kva: 50,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-IR-Data-Sheet.pdf"
  },
  {
    id: 77,
    name: "Clima Precisión Perimetral AirSafe CR 50kW DownFlow",
    sku: "EACCR050DDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-5-300x300.png",
    category: "clima-precision",
    description: "Sistema perimetral de 50kW con flujo de aire descendente (DownFlow) para enfriamiento de alta capacidad.",
    kva: 50,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 78,
    name: "Clima Precisión Perimetral AirSafe CR 70kW UpFlow Doble Circuito",
    sku: "EACCR070UDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UpFlow-3-150x150.png",
    category: "clima-precision",
    description: "Unidad perimetral de 70kW con flujo de aire ascendente (UpFlow) y doble circuito para mayor fiabilidad y rendimiento.",
    kva: 70,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 79,
    name: "Clima Precisión Perimetral AirSafe CR 60kW UpFlow Doble Circuito",
    sku: "EACCR060UDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2024/11/Clima-Precision-Perimetral-AirSafe-CR-60kW-UpFlow-Doble-Circuito.png",
    category: "clima-precision",
    description: "Sistema perimetral de 60kW con doble circuito y flujo de aire ascendente (UpFlow), ideal para redundancia.",
    kva: 60,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 80,
    name: "Clima Precisión Perimetral AirSafe CR 70kW DownFlow Doble Circuito",
    sku: "EACCR070DDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-1-150x150.png",
    category: "clima-precision",
    description: "Enfriador perimetral de 70kW con flujo de aire descendente (DownFlow) y doble circuito para asegurar la refrigeración en entornos de misión crítica.",
    kva: 70,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 81,
    name: "Clima Precisión Perimetral AirSafe CR 60kW DownFlow Doble Circuito",
    sku: "EACCR060DDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-1-150x150.png",
    category: "clima-precision",
    description: "Unidad perimetral de 60kW con doble circuito y flujo de aire descendente (DownFlow) para la máxima eficiencia de enfriamiento.",
    kva: 60,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 82,
    name: "Clima Precisión Perimetral AirSafe CR 90kW UpFlow Doble Circuito",
    sku: "EACCR090UDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UpFlow-3-150x150.png",
    category: "clima-precision",
    description: "Sistema de enfriamiento de 90kW con flujo de aire ascendente (UpFlow) y doble circuito para alta densidad de calor.",
    kva: 90,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 83,
    name: "Clima Precisión Perimetral AirSafe CR 80kW UpFlow Doble Circuito",
    sku: "EACCR080UDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UpFlow-3-150x150.png",
    category: "clima-precision",
    description: "Unidad perimetral de 80kW con flujo de aire ascendente (UpFlow) y doble circuito para una refrigeración potente.",
    kva: 80,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 84,
    name: "Clima Precisión Perimetral AirSafe CR 90kW DownFlow Doble Circuito",
    sku: "EACCR090DDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-1-150x150.png",
    category: "clima-precision",
    description: "Sistema de climatización de 90kW con flujo de aire descendente (DownFlow) y doble circuito, ideal para grandes datacenters.",
    kva: 90,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 85,
    name: "Clima Precisión Perimetral AirSafe CR 80kW DownFlow Doble Circuito",
    sku: "EACCR080DDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-1-150x150.png",
    category: "clima-precision",
    description: "Enfriador perimetral de 80kW con doble circuito y flujo de aire descendente (DownFlow) para un enfriamiento crítico.",
    kva: 80,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 86,
    name: "Clima Precisión Perimetral AirSafe CR 100kW DownFlow Doble Circuito",
    sku: "EACCR0100DDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-1-150x150.png",
    category: "clima-precision",
    description: "Sistema de climatización de 100kW con flujo de aire descendente (DownFlow) and doble circuito para alta capacidad de enfriamiento.",
    kva: 100,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 87,
    name: "Clima Precisión Perimetral AirSafe CR 100kW UpFlow Doble Circuito",
    sku: "EACCR0100UDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UpFlow-3-150x150.png",
    category: "clima-precision",
    description: "Unidad perimetral de 100kW con flujo de aire ascendente (UpFlow) y doble circuito, ideal para grandes centros de datos.",
    kva: 100,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 88,
    name: "Clima Precisión Perimetral AirSafe CR 120kW UpFlow Doble Circuito",
    sku: "EACCR0120UDXAD",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UpFlow-3-150x150.png",
    category: "clima-precision",
    description: "Sistema de enfriamiento de alta capacidad de 120kW con flujo de aire ascendente (UpFlow) y doble circuito para redundancia.",
    kva: 120,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 89,
    name: "Clima Precisión Perimetral AirSafe CR 35kW DownFlow",
    sku: "EACCR035DDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-5-300x300.png",
    category: "clima-precision",
    description: "Unidad perimetral de 35kW con flujo de aire descendente (DownFlow), perfecta para la gestión de temperatura en datacenters.",
    kva: 35,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 90,
    name: "Clima Precisión Perimetral AirSafe CR 40kW UpFlow",
    sku: "EACCR040UDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UPflow-1-300x300.png",
    category: "clima-precision",
    description: "Sistema de enfriamiento perimetral de 40kW con flujo de aire ascendente (UpFlow) para una disipación de calor eficiente.",
    kva: 40,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-User-Manual-Inverter-compressor-1.pdf"
  },
  {
    id: 91,
    name: "Clima Precisión Perimetral AirSafe CR 40kW DownFlow",
    sku: "EACCR040DDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-5-300x300.png",
    category: "clima-precision",
    description: "Unidad perimetral de 40kW con flujo de aire descendente (DownFlow), ideal para la climatización de espacios de alta densidad.",
    kva: 40,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 92,
    name: "Clima Precisión Perimetral AirSafe CR 45kW UpFlow",
    sku: "EACCR045UDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UPflow-1-300x300.png",
    category: "clima-precision",
    description: "Sistema perimetral de 45kW con flujo de aire ascendente (UpFlow) para enfriamiento de precisión.",
    kva: 45,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 93,
    name: "Clima Precisión Perimetral AirSafe CR 45kW DownFlow",
    sku: "EACCR045DDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-DownFlow-5-300x300.png",
    category: "clima-precision",
    description: "Unidad perimetral de 45kW con flujo de aire descendente (DownFlow) para un control de temperatura óptimo.",
    kva: 45,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 94,
    name: "Clima Precisión Perimetral AirSafe CR 50kW UpFlow",
    sku: "EACCR050UDXAS",
    image: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-UPflow-1-300x300.png",
    category: "clima-precision",
    description: "Sistema de enfriamiento de 50kW con flujo de aire ascendente (UpFlow) para datacenters y salas de servidores.",
    kva: 50,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CR-Data-Sheet.pdf"
  },
  {
    id: 95,
    name: "Clima para Gabinetes AirSafe CB 5kW",
    sku: "EACCBO50X",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/AirSafe-CB-imagenes_Mesa-de-trabajo-1-03-300x300.png",
    category: "climatizacion-para-gabinetes",
    description: "Clima para gabinete de 5kW de potencia, diseñado para un enfriamiento eficiente y dirigido en espacios confinados.",
    kva: 5,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CB-Data-Sheet-rev-A.pdf"
  },
  {
    id: 96,
    name: "Clima para Gabinetes AirSafe CB 4kW",
    sku: "EACCBO40X",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/AirSafe-CB-imagenes_Mesa-de-trabajo-1-03-300x300.png",
    category: "climatizacion-para-gabinetes",
    description: "Unidad de aire acondicionado de 4kW para gabinetes, ideal para la protección de equipos sensibles en racks.",
    kva: 4,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CB-Data-Sheet-rev-A.pdf"
  },
  {
    id: 97,
    name: "Clima para Gabinetes AirSafe CB 3kW",
    sku: "EACCBO30X",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/AirSafe-CB-imagenes_Mesa-de-trabajo-1-03-300x300.png",
    category: "climatizacion-para-gabinetes",
    description: "Clima de 3kW diseñado para gabinetes, proporcionando un control térmico preciso y confiable.",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CB-Data-Sheet-rev-A.pdf"
  },
  {
    id: 98,
    name: "Clima para Gabinetes AirSafe CB 2kW",
    sku: "EACCBO20X",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/AirSafe-CB-imagenes_Mesa-de-trabajo-1-03-300x300.png",
    category: "climatizacion-para-gabinetes",
    description: "Unidad de 2kW para gabinetes, perfecta para mantener la temperatura en racks de comunicaciones y servidores.",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CB-Data-Sheet-rev-A.pdf"
  },
  {
    id: 99,
    name: "Clima para Gabinetes AirSafe CB 300W",
    sku: "EACCBO03X",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/AirSafe-CB-imagenes_Mesa-de-trabajo-1-04-150x150.png",
    category: "climatizacion-para-gabinetes",
    description: "Clima compacto de 300W para gabinetes, ideal para equipos que no generan un alto calor.",
    kva: 0.3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CB-Data-Sheet-rev-A.pdf"
  },
  {
    id: 100,
    name: "Clima para Gabinetes AirSafe CB 600W",
    sku: "EACCBO06X",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/AirSafe-CB-imagenes_Mesa-de-trabajo-1-04-150x150.png",
    category: "climatizacion-para-gabinetes",
    description: "Clima para gabinete de 600W, que ofrece una solución de enfriamiento eficiente para equipos electrónicos sensibles.",
    kva: 0.6,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CB-Data-Sheet-rev-A.pdf"
  },
  {
    id: 101,
    name: "Clima para Gabinetes AirSafe CB 1kW",
    sku: "EACCBO10X",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/AirSafe-CB-imagenes_Mesa-de-trabajo-1-03-300x300.png",
    category: "climatizacion-para-gabinetes",
    description: "Unidad de climatización de 1kW para gabinetes, asegurando la temperatura de operación adecuada para tus equipos.",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/AirSafe-CB-Data-Sheet-rev-A.pdf"
  },
  {
    id: 102,
    name: "Switch Bypass con PDU 1-3kva",
    sku: "RT9100-PDU",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe21-150x150.jpg",
    category: "accesorios",
    description: "Switch Bypass monofásico con PDU para UPS de 1-3Kva que permite aislar el equipo para mantenimiento sin apagar la carga.",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2024/05/PDU-BYPASS-1.pdf"
  },
  {
    id: 103,
    name: "PDU PRO Vertical 16A Monitoreable",
    sku: "MONPDUV18C13/6C19",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/6383229593316099826946280-150x150.png",
    category: "accesorios",
    description: "Unidad de Distribución de Energía (PDU) vertical de 16A con capacidad de monitoreo remoto para la gestión eficiente del consumo en racks.",
    kva: 3.7,
    link: "https://enersafelatam.com/wp-content/uploads/2025/01/PDU-PRO-Vertical-16A-Monitoreable-1.pdf"
  },
  {
    id: 104,
    name: "PDU PRO Horizontal 32A Monitoreable/Administrable",
    sku: "SMARTPDU32A",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/Imagen-de-WhatsApp-2025-02-05-a-las-14.43.33_7d45061c-150x150.jpg",
    category: "accesorios",
    description: "PDU de 32A con instalación horizontal y funciones de monitoreo y control a nivel de tomacorriente individual, ideal para centros de datos.",
    kva: 7.4,
    link: "https://enersafelatam.com/wp-content/uploads/2025/01/PDU-PRO-Horizontal-32A-Monitoreable-Administrable.pdf"
  },
  {
    id: 105,
    name: "Tarjeta SNMP UPS Monofásica",
    sku: "SNMP-ESOL-KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe1-150x150.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP para monitoreo y administración remota de UPS monofásicos vía web, permitiendo la gestión de eventos y alarmas.",
    kva: 0.5,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/TARJETA-SNMP_compressed.pdf"
  },
  {
    id: 109,
    name: "ATS 30A Enersafe",
    sku: "ATS30A",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe16-300x300.jpg",
    category: "accesorios",
    description: "Switch de Transferencia Automática (ATS) de 30A que permite la conmutación automática entre dos fuentes de energía para asegurar la continuidad de la carga.",
    kva: 6.9,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/ATS-30A.pdf"
  },
  {
    id: 111,
    name: "Bypass Rackeable 6/10kva monofasico",
    sku: "BYPASSRT610KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Bypass-VT-6-10kva-mono-MBS-enersafe-w-300x300.jpg",
    category: "accesorios",
    description: "Módulo Bypass rackeable monofásico de 6/10Kva que aísla la UPS de la carga, permitiendo mantenimiento sin interrupción de energía.",
    kva: 8,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/BYPASS-RACKEABLE.pdf"
  },
  {
    id: 112,
    name: "Tablero Bypass 10-40kva trifasico",
    sku: "BYPASSTR10-40KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/BYPASS-TRIFASICO-con-sombra-150x150.jpg",
    category: "accesorios",
    description: "Tablero Bypass trifásico para UPS de 10-40Kva que permite el mantenimiento del equipo sin necesidad de apagar las cargas conectadas.",
    kva: 25,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/Bypass-10-40-TRI-2.pdf"
  },
  {
    id: 113,
    name: "Cable de alimentación de bloqueo IEC C14 a C13 V",
    sku: "CABLEC13-C141.2SECURITY",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Cable-C13-4-150x150.jpg",
    category: "accesorios",
    description: "Cable de alimentación con conectores C14 a C13 y sistema de bloqueo de seguridad para conexiones de energía fiables.",
    kva: 0.01,
  },
  {
    id: 114,
    name: "Tarjeta Contacto Seco",
    sku: "DRYCONTACTMIN",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe7-150x150.jpg",
    category: "accesorios",
    description: "Tarjeta de contacto seco que permite la integración y comunicación de la UPS con sistemas de monitoreo externos a través de señales eléctricas.",
    kva: 0.1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/12/Manual-de-Usuario-SNMP-ESOL-Mini-1-10kva-b.pdf"
  },
  {
    id: 118,
    name: "PDU 10 ENCHUFES IEC 10A",
    sku: "PDU-IEC10",
    image: "https://enersafelatam.com/wp-content/uploads/2025/06/PDUIEC-150x150.jpg",
    category: "accesorios",
    description: "Unidad de Distribución de Energía (PDU) con 10 enchufes IEC C13 y una entrada C14, ideal para racks de servidores y telecomunicaciones.",
    kva: 2.3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/06/PDU-RACK-basica.pdf"
  },
  {
    id: 119,
    name: "PDU 12 ENCHUFES ITALIANOS 10A",
    sku: "PDURITA12",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/PDU-Italiana-12-salidas-enersafe-sc-150x150.png",
    category: "accesorios",
    description: "PDU con 12 enchufes de tipo italiano, diseñada para la distribución de energía en racks y gabinetes con equipos compatibles.",
    kva: 2.3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/06/PDU-RACK-basica.pdf"
  },
  {
    id: 120,
    name: "PDU NO MONITOREABLE",
    sku: "PDUV32A20C133C19",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/PDU-150x150.png",
    category: "accesorios",
    description: "PDU estándar sin funciones de monitoreo, con múltiples salidas C13 y C19, que proporciona una distribución de energía confiable y eficiente.",
    kva: 7.4,
  },
  {
    id: 121, 
    name: "GABINETE OUTDOOR IP65 5KVA TAMAÑO L",
    sku: "CABO05LX",
    image: "https://enersafelatam.com/wp-content/uploads/2025/08/L-300x300.png", 
    category: "gabinete",
    description: "Gabinete exterior con clasificación IP65, diseñado para proteger equipos de 5KVA.",
    kva: 5,
    link: "https://enersafelatam.com/wp-content/uploads/2025/08/GABO-Data-Sheet.pdf"
  },
  {
    id: 122,
    name: "GABINETE OUTDOOR IP65 3KVA TAMAÑO M",
    sku: "CABO03MX",
    image: "https://enersafelatam.com/wp-content/uploads/2025/08/M-300x300.png", 
    category: "gabinete",
    description: "Gabinete exterior con clasificación IP65, diseñado para proteger equipos de 3KVA.",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/08/GABO-Data-Sheet.pdf"
  },
  {
    id: 123,
    name: "GABINETE OUTDOOR IP65 2KVA TAMAÑO S",
    sku: "CABO02SX",
    image: "https://enersafelatam.com/wp-content/uploads/2025/08/S-300x300.png", 
    category: "gabinete",
    description: "Gabinete exterior con clasificación IP65, diseñado para proteger equipos de 2KVA.",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2025/08/GABO-Data-Sheet.pdf"
  },
  {
    id: 124,
    name: "Banco de Baterías ESOL RTH- 1KVA",
    sku: "BPESOLRTH-1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe81_logo-nuevo-300x300.jpg", 
    category: "bancos-baterias",
    description: "Banco de baterías para ESOL RTH de 1KVA.",
    kva: 1,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Banco-baterias-ESOL-RTH-1kVA.pdf"
  },
  {
    id: 125,
    name: "Banco de Baterías ESOL RTH 2-3 kva",
    sku: "BPESOLRTH-2/3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe81_logo-nuevo-300x300.jpg", 
    category: "bancos-baterias",
    description: "Banco de baterías para ESOL RTH de 2-3 kva.",
    kva: 2.5,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Banco-baterias-ESOL-RTH-2-3kVA.pdf"
  },
  {
    id: 126,
    name: "Banco de Baterías RTH-C PRO 6/10 KVA",
    sku: "BPRTHCPRO6/10KVACB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/1-BANCO-DE-BATERIAS-6KVA-con-sombra-300x300.jpg", 
    category: "bancos-baterias",
    description: "Banco de baterías para RTH-C PRO de 6/10 KVA.",
    kva: 8,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/Banco-baterias-RTH-PRO-6-10kVA.pdf"
  },
  {
    id: 127,
    name: "Banco de Baterías Esol TRI PT 80X9Ah",
    sku: "BPESOLTRIPTS/B",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/EnerSafe-Banco-de-Baterias-1-150x150.png", 
    category: "bancos-baterias",
    description: "Banco de baterías Esol TRI PT con 80 baterías de 9Ah.",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/BANCO-BATERIAS-ESOL-TRI-PT.pdf"
  },
  {
    id: 128,
    name: "Banco de Batería TRI RT20KVA 40 Baterías 12V9Ah",
    sku: "BPESOLTRIRT240",
    image: "https://enersafelatam.com/wp-content/uploads/2024/01/2-UPS-RT20KVA-con-sombra-150x150.jpg", 
    category: "bancos-baterias",
    description: "Banco de batería TRI RT20KVA con 40 baterías de 12V y 9Ah.",
    kva: 20,
  },
  {
    id: 129,
    name: "Regulador de Voltaje 5Kva Monofasico",
    sku: "EVMONO5KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe11-300x300.jpg", 
    category: "estabilizadores-de-voltaje",
    description: "Regulador de voltaje de 5KVA diseñado para uso monofásico, ideal para proteger equipos sensibles a fluctuaciones de energía.",
    kva: 5,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/EST-VOLTAJE-5-20-KVA-1.pdf"
  },
  {
    id: 130,
    name: "Estabilizador de Voltaje 10 KVA Monofasico",
    sku: "EVMONO10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe72-300x300.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 10 KVA para sistemas monofásicos, asegurando una tensión de salida estable.",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/EST-VOLTAJE-5-20-KVA-1.pdf"
  },
  {
    id: 131,
    name: "Estabilizador de Voltaje 20 KVA Monofasico",
    sku: "EVMONO20KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe72-300x300.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 20 KVA para aplicaciones monofásicas que requieren una protección robusta.",
    kva: 20,
    link: "https://enersafelatam.com/wp-content/uploads/2024/02/EST-VOLTAJE-5-20-KVA-1.pdf"
  },
  {
    id: 132,
    name: "Estabilizador de Voltaje 10 KVA Trifasico",
    sku: "EVTRI10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe68-150x150.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 10 KVA diseñado para proteger equipos en sistemas trifásicos.",
    kva: 10,
    link: "Estabilizador de Voltaje 10 KVA Trifasico"
  },
  {
    id: 133,
    name: "Estabilizador de Voltaje 20 KVA Trifasico",
    sku: "EVTRI20KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe69-150x150.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 20 KVA para entornos industriales y comerciales con sistemas trifásicos.",
    kva: 20,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/EST-VOLTAJE-10-30KVA-1.pdf"
  },
  {
    id: 134,
    name: "Estabilizador de Voltaje 30 KVA Trifasico",
    sku: "EVTRI30KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe70-150x150.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 30 KVA, ideal para cargas trifásicas que necesitan una regulación de energía precisa.",
    kva: 30,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/EST-VOLTAJE-10-30KVA-1.pdf"
  },
  {
    id: 135,
    name: "Estabilizador de Voltaje 50KVA Trifásico",
    sku: "EVTRI50KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe65-150x150.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 50 KVA diseñado para sistemas trifásicos de alta demanda.",
    kva: 50,
  },
  {
    id: 136,
    name: "Estabilizador de Voltaje 100 KVA Trifásico",
    sku: "EVTRI100KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe66-150x150.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 100 KVA para grandes instalaciones con requerimientos trifásicos.",
    kva: 100,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/EST-VOLTAJE-50-100-150KVA-1.pdf"
  },
  {
    id: 137,
    name: "Estabilizador de Voltaje 150 KVA Trifásico",
    sku: "EVTRI150KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe66-150x150.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 150 KVA, ofreciendo protección de alta capacidad para cargas trifásicas.",
    kva: 150,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/EST-VOLTAJE-50-100-150KVA.pdf"
  },
  {
    id: 138,
    name: "Estabilizador de Voltaje 200 KVA Trifásico",
    sku: "EVTRI200KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe66-150x150.jpg",
    category: "estabilizadores-de-voltaje",
    description: "Estabilizador de voltaje de 200 KVA, la solución más potente para la regulación de voltaje trifásico.",
    kva: 200,
    link: "https://enersafelatam.com/wp-content/uploads/2025/01/EST-VOLTAJE-50-100-150-200KVA.pdf"
  },
  {
    id: 139,
    name: "Gabinete Mural 12U",
    sku: "CABM12U60X60",
    image: "https://enersafelatam.com/wp-content/uploads/2024/01/2-1-300x300.jpg", 
    category: "rack-comunicaciones",
    description: "Gabinete de pared de 12 unidades de rack, ideal para proteger y organizar equipos de red en espacios reducidos.",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/GABINETES-MURALES-6U-9U-1.pdf"
  },
  {
    id: 140,
    name: "Gabinete Mural 6U",
    sku: "CABM6U60X45",
    image: "https://enersafelatam.com/wp-content/uploads/2024/01/2-1-300x300.jpg",
    category: "rack-comunicaciones",
    description: "Gabinete de pared de 6U con dimensiones de 60x45 cm, diseñado para instalaciones compactas.",
    kva: 1.5,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/GABINETES-MURALES-6U-9U-1.pdf"
  },
  {
    id: 141,
    name: "Gabinete Mural 6U",
    sku: "CABM6U60X60",
    image: "https://enersafelatam.com/wp-content/uploads/2024/01/2-1-300x300.jpg",
    category: "rack-comunicaciones",
    description: "Gabinete de pared de 6U con dimensiones de 60x60 cm, que ofrece mayor profundidad para equipos de mayor tamaño.",
    kva: 2,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/GABINETES-MURALES-6U-9U-1.pdf"
  },
  {
    id: 142,
    name: "Gabinete Mural 9U",
    sku: "CABM9U60X60",
    image: "https://enersafelatam.com/wp-content/uploads/2024/01/2-1-300x300.jpg",
    category: "rack-comunicaciones",
    description: "Gabinete de pared de 9U, una opción versátil para instalaciones de tamaño medio con requisitos de rack estándar.",
    kva: 2.5,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/GABINETES-MURALES-6U-9U-1.pdf"
  },
  {
    id: 143,
    name: "Gabinete Autosoportado 42U Desarmado",
    sku: "CABR42U60X100",
    image: "https://enersafelatam.com/wp-content/uploads/2024/01/morepic-6LE-NA-Network-Cabinet-1610767783-150x150.jpg",
    category: "rack-comunicaciones",
    description: "Gabinete de piso de 42 unidades de rack que se envía desarmado, optimizado para el transporte y el montaje en instalaciones de gran envergadura.",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/GABINETE-RACK-42U-1.pdf"
  },
  {
    id: 144,
    name: "Inversor Cargador 2400VA/1440W 24VDC",
    sku: "INVCAR1440",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe15-300x300.jpg",
    category: "inversores",
    description: "Inversor cargador de 2400 VA (1440 W) con entrada de 24 VDC, diseñado para convertir la energía de la batería en corriente alterna y cargar las baterías simultáneamente.",
    kva: 2.4,
  },
  {
    id: 145,
    name: "Inversor Cargador 2500VA/2500W 24VDC",
    sku: "INVCAR2500",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe27-300x300.jpg",
    category: "inversores",
    description: "Inversor cargador de 2500 VA (2500 W) y 24 VDC, una solución eficiente para sistemas solares y de respaldo de energía.",
    kva: 2.5,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/Manual-Inversor-Cargadador-2500-3500w.pdf"
  },
  {
    id: 146,
    name: "Inversor Cargador 3500VA/3500W 24VDC",
    sku: "INVCAR3500",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe27-300x300.jpg",
    category: "inversores",
    description: "Inversor cargador de 3500 VA (3500 W) a 24 VDC, ideal para aplicaciones de mayor potencia que requieren un respaldo de energía robusto.",
    kva: 3.5,
    link: "https://enersafelatam.com/wp-content/uploads/2024/01/Manual-Inversor-Cargadador-2500-3500w.pdf"
  },
  {
    id: 147,
    name: "Inversor Cargador 1500VA/900W 12VDC",
    sku: "INVCAR900",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe15-300x300.jpg",
    category: "inversores",
    description: "Inversor cargador de 1500 VA (900 W) con entrada de 12 VDC, adecuado para sistemas de batería más pequeños y portátiles.",
    kva: 1.5,
  },
  {
    id: 148,
    name: "Micro Datacenter 3KVA",
    sku: "MDC3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/3-kVA-300x300.jpg", 
    category: "microdatacenter",
    description: "Micro datacenter compacto de 3KVA, una solución todo-en-uno para proteger y gestionar infraestructura de TI en entornos de oficina y edge computing.",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/MDCI-Data-Sheet.pdf"
  },
  {
    id: 149,
    name: "Micro Datacenter 6KVA",
    sku: "MDC6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/6-kVA-300x300.jpg",
    category: "microdatacenter",
    description: "Micro datacenter de 6KVA, ofreciendo una capacidad de energía y enfriamiento superior para aplicaciones de mayor demanda.",
    kva: 6,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/MDCI-Data-Sheet.pdf"
  },
  {
    id: 150,
    name: "Micro Datacenter 10KVA",
    sku: "MDC10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/10-KVA-300x300.png",
    category: "microdatacenter",
    description: "Micro datacenter de 10KVA, la solución más potente para consolidar equipos de red y servidores de alta densidad en un solo gabinete.",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/MDCI-Data-Sheet.pdf"
  },
  {
    id: 151,
    name: "Micro Datacenter Solución Escalable",
    sku: "MDCESCALABLE",
    image: "https://enersafelatam.com/wp-content/uploads/2023/11/5-150x150.png",
    category: "microdatacenter",
    description: "Solución de micro datacenter modular y escalable, diseñada para crecer con las necesidades de su negocio y disponible bajo pedido.",
    kva: 15,
  },
  {
    id: 152,
    name: "Micro Datacenter OUTDOOR IP65 6KVA",
    sku: "EMDCO06X",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/nema-300x300.jpg", 
    category: "microdatacenter-outdoor",
    description: "Micro datacenter diseñado para exteriores con certificación IP65, que ofrece protección contra el polvo y el agua, con una capacidad de 6KVA.",
    kva: 6,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/MDCO-Data-Sheet.pdf"
  },
  {
    id: 153,
    name: "Micro Datacenter OUTDOOR IP65 3KVA",
    sku: "EMDCO03X",
    image: "https://enersafelatam.com/wp-content/uploads/2024/04/ATM-06-H01K-ATTOM-1-300x300.jpg",
    category: "microdatacenter-outdoor",
    description: "Micro datacenter para exteriores con protección IP65, ideal para entornos hostiles, con una capacidad de 3KVA.",
    kva: 3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/03/MDCO-Data-Sheet.pdf"
  },
  {
    id: 154,
    name: "AirSafe RM INRACK 3,5KW",
    sku: "EACRM03X",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/AIRSAFE-RM-300x300.png", 
    category: "equipamiento-datacenter",
    description: "Sistema de enfriamiento InRack de 3.5KW para datacenters, optimizado para la gestión térmica de gabinetes de alta densidad.",
    kva: 3.5,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/AirSafe-RM-Data-Sheet.pdf"
  },
  {
    id: 155,
    name: "Sistema de Incendio FM200 MDC 3-6-10KVA 3U",
    sku: "EIRTFM200",
    image: "https://enersafelatam.com/wp-content/uploads/2024/05/EIRTFM200-300x299.png",
    category: "equipamiento-datacenter",
    description: "Sistema de extinción de incendios FM200 en formato rackeable de 3U, diseñado para proteger micro datacenters de 3, 6 y 10 KVA.",
    kva: 6.5,
    link: "https://enersafelatam.com/wp-content/uploads/2024/05/SISTEMA-DE-INCENDIOS-1.pdf"
  },
  {
    id: 156,
    name: "PDU NO MONITOREABLE",
    sku: "PDUV32A20C133C19",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/PDU-300x300.png",
    category: "equipamiento-datacenter",
    description: "Unidad de distribución de energía (PDU) estándar, no monitoreable, con múltiples tomas para una distribución de energía fiable en racks.",
    kva: 7.4,
  },
  {
    id: 157,
    name: "PDU 10 ENCHUFES IEC 10A",
    sku: "PDURIEC10",
    image: "https://enersafelatam.com/wp-content/uploads/2025/06/PDUIEC-300x300.jpg", 
    category: "pdu",
    description: "Unidad de distribución de energía (PDU) con 10 enchufes tipo IEC y una capacidad de 10 amperios, ideal para racks de servidores.",
    kva: 2.3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/06/PDU-RACK-basica.pdf"
  },
  {
    id: 158,
    name: "PDU 12 ENCHUFES ITALIANOS 10A",
    sku: "PDURITA12",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/PDU-Italiana-12-salidas-enersafe-sc-300x300.png",
    category: "pdu",
    description: "PDU con 12 enchufes tipo italiano y una capacidad de 10 amperios, diseñada para la distribución de energía en racks.",
    kva: 2.3,
    link: "https://enersafelatam.com/wp-content/uploads/2025/06/PDU-RACK-basica.pdf"
  },
  {
    id: 159,
    name: "PDU NO MONITOREABLE",
    sku: "PDUV32A20C133C19",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/PDU-300x300.png",
    category: "pdu",
    description: "Unidad de distribución de energía (PDU) sin funciones de monitoreo, con múltiples salidas para una distribución de energía sencilla y confiable.",
    kva: 7.4,
  },
  {
    id: 160,
    name: "PDU PRO Vertical 16A Monitoreable",
    sku: "MONPDUV16C13/6C19",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/6383229593316099826946280-150x150.png",
    category: "pdu",
    description: "PDU profesional de montaje vertical y 16 amperios, con capacidad de monitoreo para supervisar el consumo de energía en tiempo real.",
    kva: 3.7,
    link: "https://enersafelatam.com/wp-content/uploads/2025/01/PDU-PRO-Vertical-16A-Monitoreable-1.pdf"
  },
  {
    id: 161,
    name: "PDU PRO Horizontal 32A Monitoreable/Administrable",
    sku: "SMARTPDU30A",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/Imagen-de-WhatsApp-2025-02-05-a-las-14.43.33_7d45061c-150x150.jpg",
    category: "pdu",
    description: "PDU profesional de montaje horizontal de 32 amperios, monitoreable y con funciones de administración remota para un control avanzado de la energía.",
    kva: 7.4,
    link: "https://enersafelatam.com/wp-content/uploads/2025/01/PDU-PRO-Horizontal-32A-Monitoreable-Administrable.pdf"
  },
  {
    id: 162,
    name: "UPS ESOL TRI PT 10KVA Pantalla Touch Full Color",
    sku: "UPSESOLTRIPT10CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-300x300.jpg", 
    category: "ups-trifasicas",
    description: "UPS trifásico de 10KVA con pantalla táctil a color para un monitoreo y control avanzados. Proporciona protección de energía de alta calidad para equipos críticos.",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TRI-PT_comprimido.pdf"
  },
  {
    id: 163,
    name: "Banco de Baterías ESOL TRI PT 80X9Ah",
    sku: "BPESOLTRIPTS/B",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/EnerSafe-Banco-de-Baterias-1-300x300.png",
    category: "ups-trifasicas",
    description: "Banco de baterías externo con 80 baterías de 9Ah, diseñado para extender la autonomía de los sistemas UPS ESOL TRI PT.",
    kva: 10,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/BANCO-BATERIAS-ESOL-TRI-PT.pdf"
  },
  {
    id: 164,
    name: "UPS ESOL TRI PT 20KVA Pantalla Touch Full Color",
    sku: "UPSESOLTRIPT20CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-300x300.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 20KVA con pantalla táctil a color, ideal para la protección de infraestructura de TI de tamaño medio.",
    kva: 20,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TRI-PT_comprimido.pdf"
  },
  {
    id: 165,
    name: "UPS ESOL TRI PT 30KVA Pantalla Touch Full Color",
    sku: "UPSESOLTRIPT30CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-300x300.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 30KVA que ofrece una protección robusta y confiable, con una interfaz de usuario intuitiva a través de su pantalla táctil.",
    kva: 30,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TRI-PT_comprimido.pdf"
  },
  {
    id: 166,
    name: "UPS ESOL TRI PT 40KVA Pantalla Touch Full Color",
    sku: "UPSESOLTRIPT40SB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-300x300.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 40KVA de alta capacidad, diseñado para centros de datos y aplicaciones industriales que requieren un gran respaldo de energía.",
    kva: 40,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-ESOL-TRI-PT_comprimido.pdf"
  },
  {
    id: 167,
    name: "UPS TRI PT 60KVA BAT/INT Pantalla Touch Full Color",
    sku: "UPSTRIPT60KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-TRIFASICA-60KVA-SIN-FONDO-150x150.png",
    category: "ups-trifasicas",
    description: "UPS trifásico de 60KVA con baterías internas, ofreciendo una solución de energía compacta y de alta potencia para cargas críticas.",
    kva: 60,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-60-100KVA-BateriaInterna-2.pdf"
  },
  {
    id: 168,
    name: "UPS TRI PT 100KVA BAT/INT Pantalla Touch Full Color",
    sku: "UPSTRIPTCB100KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Imagen-UPS-60-100KVA-EnerSafe-150x150.png",
    category: "ups-trifasicas",
    description: "UPS trifásico de 100KVA con baterías internas y pantalla táctil, ideal para proteger infraestructuras críticas que demandan máxima disponibilidad.",
    kva: 100,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-60-100KVA-BateriaInterna-2.pdf"
  },
  {
    id: 169,
    name: "UPS ESOL TRI RT 20KVA Rackeable",
    sku: "UPSESOLTRIRT20KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/3-UPS-RT20KVA-con-sombra-150x150.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 20KVA en formato rackeable, perfecto para integrarse en gabinetes de red and datacenters para ahorrar espacio.",
    kva: 20,
    link: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-TRI-RT-3-1.pdf"
  }
];

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    category: product.category,
  }));
}