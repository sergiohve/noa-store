export interface Product {
  id: number;
  name: string;
  sku: string;
  image: string;
  category: string;
  description: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "UPS ESOL TRI PT 10KVA Pantalla Touch Full Color",
    sku: "UPSESESOLTRIPT10CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-300x300.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 10KVA con pantalla táctil a color para monitoreo y control avanzado del sistema de energía"
  },
  {
    id: 2,
    name: "Banco de Baterías ESOL TRI PT 80X9ah",
    sku: "BPESOLTRIPTS/B",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/EnerSafe-Banco-de-Baterias-1-300x300.png",
    category: "ups-trifasicas",
    description: "Banco de baterías de 80 unidades de 9Ah para sistemas UPS trifásicos de alta capacidad"
  },
  {
    id: 3,
    name: "Modulo UPS Modular 20kW",
    sku: "MODSAFE20PM",
    image: "https://enersafelatam.com/wp-content/uploads/2023/12/Enersafe80-300x300.jpg",
    category: "ups-modulares",
    description: "Módulo de potencia de 20kW para sistemas UPS modulares escalables"
  },
  {
    id: 4,
    name: "Frame UPS Modular Hasta 200kW",
    sku: "MODSAFE1020KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/ENERSAFE-60-scaled-1-300x300.jpg",
    category: "ups-modulares",
    description: "Chasis para sistema UPS modular con capacidad de expansión hasta 200kW"
  },
  {
    id: 5,
    name: "Frame UPS Modular Hasta 60kW",
    sku: "MODSAFE520KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/ENERSAFE-60-scaled-1-300x300.jpg",
    category: "ups-modulares",
    description: "Chasis para sistema UPS modular con capacidad de expansión hasta 60kW"
  },
  {
    id: 6,
    name: "UPS ESOL RTH 1KVA 36vdc",
    sku: "UPSESESOLRTH1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 1KVA con tecnología de doble conversión y 36VDC para máxima protección"
  },
  {
    id: 7,
    name: "UPS ESOL T-E 1Kva/900Watts",
    sku: "UPSEOLTE1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-online-Esol-TE--300x300.jpg",
    category: "ups-online",
    description: "UPS online de 1KVA con eficiencia energética y protección contra fluctuaciones de voltaje"
  },
  {
    id: 8,
    name: "UPS ESIT 600Va/360Watts",
    sku: "UPSESESIT600VA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-interactiva-Esit-600va-2-300x300.jpg",
    category: "ups-interactivas",
    description: "UPS interactiva de 600VA ideal para equipos de oficina y computadoras personales"
  },
  {
    id: 9,
    name: "UPS ESOL RTH-C 2Kva 48vdc",
    sku: "UPSESOLRT48V2K",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con configuración de 48VDC para aplicaciones críticas"
  },
  {
    id: 10,
    name: "UPS ESOL RTH 2Kva 72vdc",
    sku: "UPSESESOLRTHC2KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con sistema de 72VDC para mayor autonomía y rendimiento"
  },
  {
    id: 11,
    name: "UPS ESOL T-E 10Kva/10000Watts",
    sku: "UPSOLTE10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe60-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 10KVA para protección de equipos críticos en entornos empresariales"
  },
  {
    id: 12,
    name: "UPS ESOL T-E 6Kva/6000Watts",
    sku: "UPSOLTE6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe60-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 6KVA con alta eficiencia y protección integral de energía"
  },
  {
    id: 13,
    name: "Tarjeta SNMP UPS Trifásica",
    sku: "UPSSNMPCARDS1",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe5-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta de monitoreo SNMP para UPS trifásicos, permite gestión remota"
  },
  {
    id: 14,
    name: "UPS ESOL RTH-C 1Kva 24vdc",
    sku: "UPSESOLRTHC1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online compacta de 1KVA con configuración de 24VDC para espacios reducidos"
  },
  {
    id: 15,
    name: "UPS ESOL RTH 3Kva 72vdc",
    sku: "UPSESESOLRTHC3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA con sistema de 72VDC para aplicaciones de media potencia"
  },
  {
    id: 16,
    name: "UPS ESOL RTH-C 3Kva 120V",
    sku: "UPSESOLRTHC3KVA120VAC",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA compatible con sistemas de 120VAC"
  },
  {
    id: 17,
    name: "UPS RTH-C PRO 10Kva/10kW",
    sku: "UPSBATRT10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/1-RTHC6KVA-con-sombra-300x300.jpg",
    category: "ups-online",
    description: "UPS profesional de 10KVA con características avanzadas para centros de datos"
  },
  {
    id: 18,
    name: "UPS RTH-C PRO 6Kva/6kW",
    sku: "UPSBATRT6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2025/04/1-RTHC6KVA-con-sombra-300x300.jpg",
    category: "ups-online",
    description: "UPS profesional de 6KVA con tecnología de punta y alta confiabilidad"
  },
  {
    id: 19,
    name: "UPS ESOL RTH Long Run 10Kva/9000Watts Sin baterías",
    sku: "UPSESOLRTHCLR10KVA_",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 10KVA configurado para long run, se vende sin baterías"
  },
  {
    id: 20,
    name: "UPS ESOL RTH Long Run 6Kva/5400Watts Sin baterías",
    sku: "UPSESOLRTCLR6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-300x300.jpg",
    category: "ups-online",
    description: "UPS online de 6KVA para autonomía extendida, se entrega sin paquete de baterías"
  },
  {
    id: 21,
    name: "UPS ESOL RTH-C Long Run 1Kva/900Watts 24vdc Sin baterías",
    sku: "UPSESOLRTHCLR1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online compacta de 1KVA para long run en 24VDC, sin baterías incluidas"
  },
  {
    id: 22,
    name: "UPS ESOL RTH-C Long Run 3Kva/2700Watts 72vdc Sin baterías",
    sku: "UPSESOLRTHCLR3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA configurada para autonomía extendida en 72VDC, sin baterías"
  },
  {
    id: 23,
    name: "Batería Enersafe 12V/33Ah",
    sku: "BATENER12V33AH",
    image: "https://enersafelatam.com/wp-content/uploads/2024/03/12V-33Ah-300x300.png",
    category: "baterias",
    description: "Batería de gel de 12V 33Ah para sistemas UPS y aplicaciones de respaldo"
  },
  {
    id: 24,
    name: "Batería Enersafe 12V/40Ah",
    sku: "BATENER12V40AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Imagen-sin-fondo-1-300x300.png",
    category: "baterias",
    description: "Batería de ciclo profundo 12V 40Ah para sistemas de energía de respaldo"
  },
  {
    id: 25,
    name: "Batería Enersafe 12V/55Ah",
    sku: "BATENER12V55AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/10/E-HR-HR12-200W-55AH-300x300.png",
    category: "baterias",
    description: "Batería de alta capacidad 12V 55Ah para aplicaciones que requieren mayor autonomía"
  },
  {
    id: 26,
    name: "Batería ENERSAFE 12V/100Ah",
    sku: "BATENER12V100AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Imagen-sin-fondo-300x300.png",
    category: "baterias",
    description: "Batería de gel de 12V 100Ah para sistemas de respaldo de larga duración"
  },
  {
    id: 27,
    name: "Banco de Baterías ESOL RTH- 1Kva",
    sku: "BPESOLRTH-1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe81_logo-nuevo-300x300.jpg",
    category: "baterias",
    description: "Banco de baterías preensamblado para UPS ESOL RTH de 1KVA"
  },
  {
    id: 28,
    name: "Banco de Baterías ESOL RTH 2-3 kva",
    sku: "BPESOLRT2/3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe81_logo-nuevo-300x300.jpg",
    category: "baterias",
    description: "Banco de baterías para UPS ESOL RTH de 2KVA y 3KVA"
  },
  {
    id: 29,
    name: "Kit Rieles ESOL RTH",
    sku: "ACCESRIELESOL",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe19-300x300.jpg",
    category: "accesorios",
    description: "Kit de rieles para montaje en rack de UPS ESOL RTH"
  },
  {
    id: 30,
    name: "Batería Enersafe 12V/5Ah",
    sku: "BATENER12V5AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/12V-5aH-300x300.png",
    category: "baterias",
    description: "Batería compacta de 12V 5Ah para aplicaciones de baja potencia"
  },
  {
    id: 31,
    name: "Batería Enersafe 12V/7Ah",
    sku: "BATENER12V7AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/17V-7Ah-300x300.png",
    category: "baterias",
    description: "Batería de 12V 7Ah para pequeños sistemas UPS y aplicaciones electrónicas"
  },
  {
    id: 32,
    name: "Baterías Enersafe 12V 9AH",
    sku: "BATENER12V9AH",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/12V-9Ah-300x300.png",
    category: "baterias",
    description: "Batería de 12V 9Ah para sistemas de respaldo de energía moderada"
  },
  {
    id: 33,
    name: "Batería Enersafe 12V/18Ah",
    sku: "BATENER12V18AH",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/Imagen-de-WhatsApp-2025-01-07-a-las-17.23.18_d1a64259-300x300.jpg",
    category: "baterias",
    description: "Batería de 12V 18Ah para aplicaciones que requieren autonomía media"
  },
  {
    id: 34,
    name: "Batería Enersafe 12V/26Ah",
    sku: "BATENER12V26AH",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/Bateria-12-26-300x300.jpg",
    category: "baterias",
    description: "Batería de 12V 26Ah con tecnología de gel para mayor vida útil"
  },
  {
    id: 35,
    name: "Tarjeta SNMP UPS DS806 USB",
    sku: "SNMPMTMINI",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe3-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP mini con puerto USB para monitoreo de UPS"
  },
  {
    id: 36,
    name: "Tarjeta SNMP UPS DS801 SIN USB",
    sku: "SNMPMINIUSB",
    image: "https://enersafelatam.com/wp-content/uploads/2025/01/1-SNMP-MONOFASICA-VIOLETA-801-CON-SOMBRA-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP mini sin USB para gestión básica de UPS"
  },
  {
    id: 37,
    name: "UPS ESOL RTH-L 1KVA, Batería Ion Litio",
    sku: "UPSESESOLRTHL1KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 1KVA con batería de ion litio para mayor duración y menor peso"
  },
  {
    id: 38,
    name: "UPS ESOL RTH-L 2KVA, Batería Ion Litio",
    sku: "UPSESESOLRTHL2KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con tecnología de ion litio para aplicaciones eficientes"
  },
  {
    id: 39,
    name: "UPS ESOL RTH-L 3KVA, Batería Ion Litio",
    sku: "UPSESESOLRTHL3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe42-768x768.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA con baterías de ion litio, ideal para espacios reducidos"
  },
  {
    id: 40,
    name: "UPS ESOL T-E 2Kva/1800Watts",
    sku: "UPSESOLTE2KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-online-Esol-TE--300x300.jpg",
    category: "ups-online",
    description: "UPS online de 2KVA con alta eficiencia y protección integral de energía"
  },
  {
    id: 41,
    name: "UPS ESOL T-E 3Kva/2700Watts",
    sku: "UPSESOLTE3KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-online-Esol-TE--300x300.jpg",
    category: "ups-online",
    description: "UPS online de 3KVA para protección de equipos sensibles y críticos"
  },
  {
    id: 42,
    name: "Banco de Batería TRIRT20KVA 40 Baterías 12V9Ah",
    sku: "BPEESOLTRIRT240",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/EnerSafe-Banco-de-Baterias-1-300x300.png",
    category: "baterias",
    description: "Banco de baterías con 40 unidades de 12V9Ah para UPS trifásico de 20KVA"
  },
  {
    id: 43,
    name: "UPS ESIT 1000Va/600Watts",
    sku: "UPSIMICRO1000",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-interactiva-Esit-1000va-2-300x300.jpg",
    category: "ups-interactivas",
    description: "UPS interactiva de 1000VA para protección básica de equipos electrónicos"
  },
  {
    id: 44,
    name: "UPS ESIT 2000Va/1200Watts",
    sku: "UPSIMICRO2000",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-interactiva-Esit-2000va-2-300x300.jpg",
    category: "ups-interactivas",
    description: "UPS interactiva de 2000VA para protección de equipos de oficina y pequeños servidores"
  },
  {
    id: 45,
    name: "UPS Modular SubRack",
    sku: "UPSMODSUBR80G",
    image: "https://enersafelatam.com/wp-content/uploads/2023/07/Enersafe78-300x300.jpg",
    category: "ups-modulares",
    description: "Subrack para sistema UPS modular con capacidad de hasta 80kW"
  },
  {
    id: 46,
    name: "UPS ESOL TRI PT 20KVA Pantalla Touch Full Color",
    sku: "UPSESESOLTRIPT20CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-768x768.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 20KVA con pantalla táctil a color para gestión avanzada"
  },
  {
    id: 47,
    name: "UPS ESOL TRI PT 30KVA Pantalla Touch Full Color",
    sku: "UPSESESOLTRIPT30CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-768x768.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 30KVA con interfaz táctil a color y monitoreo avanzado"
  },
  {
    id: 48,
    name: "UPS ESOL TRI PT 40KVA Pantalla Touch Full Color",
    sku: "UPSESOLTRIPT40CB",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPSESESOLTRIPT30SB-768x768.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico de 40KVA con pantalla táctil para control completo del sistema"
  },
  {
    id: 49,
    name: "UPS TRI PT 60KVA BAT/INT Pantalla Touch Full Color",
    sku: "UPSTRIPT60KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/UPS-TRIFASICA-60KVA-SIN-FONDO-300x300.png",
    category: "ups-trifasicas",
    description: "UPS trifásico de 60KVA con baterías integradas y pantalla táctil a color"
  },
  {
    id: 50,
    name: "UPS TRI PT 100KVA BAT/INT Pantalla Touch Full Color",
    sku: "UPSTRIPT2100KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Imagen-UPS-60-100KVA-EnerSafe-300x300.png",
    category: "ups-trifasicas",
    description: "UPS trifásico de 100KVA de alta capacidad con baterías integradas y pantalla táctil"
  },
  {
    id: 51,
    name: "UPS TRIMONO ESOL RTH 6 KVA 3:1",
    sku: "UPSESOL3-1-6KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe58-300x300.jpg",
    category: "ups-online",
    description: "UPS trifásico a monofásico de 6KVA con relación 3:1 para conversión de energía"
  },
  {
    id: 52,
    name: "UPS ESOL TRI RT 20KVA Rackeable",
    sku: "UPSESOLTRIRT20KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/3-UPS-RT20KVA-con-sombra-300x300.jpg",
    category: "ups-trifasicas",
    description: "UPS trifásico rackeable de 20KVA para instalación en centros de datos"
  },
  {
    id: 53,
    name: "UPS TRIMONO ESOL RTH 10 KVA 3:1",
    sku: "UPSESOLRTH3-1-10KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe58-300x300.jpg",
    category: "ups-online",
    description: "UPS trifásico a monofásico de 10KVA con tecnología de conversión 3:1"
  },
  {
    id: 54,
    name: "Tablero Bypass 10-40kva Trifasico",
    sku: "BYPASSTRI10-40KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/BYPASS-TRIFASICO-con-sombra-300x300.jpg",
    category: "accesorios",
    description: "Tablero de bypass trifásico para UPS de 10 a 40KVA para mantenimiento seguro"
  },
  {
    id: 55,
    name: "Inversor Cargador 2400VA/1440W 24VDC",
    sku: "INVCAR1440",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe15-300x300.jpg",
    category: "accesorios",
    description: "Inversor cargador de 2400VA/1440W para sistemas de 24VDC"
  },
  {
    id: 56,
    name: "Inversor Cargador 1500VA/900W 12VDC",
    sku: "INVCAR900",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe15-300x300.jpg",
    category: "accesorios",
    description: "Inversor cargador de 1500VA/900W para sistemas de 12VDC"
  },
  {
    id: 57,
    name: "Modulo Distribucion Bypass Rackeable 20 kva rt",
    sku: "MDESOLTRIRT20KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/Enersafe25-300x300.jpg",
    category: "accesorios",
    description: "Módulo de distribución bypass rackeable para UPS de 20KVA"
  },
  {
    id: 58,
    name: "Bypass PDU Rackeable 6/10kva monofasico",
    sku: "BYPPRDPDU610KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2025/09/2-PDU-con-sombra-300x300.jpg",
    category: "accesorios",
    description: "PDU con bypass rackeable para UPS monofásicos de 6-10KVA"
  },
  {
    id: 59,
    name: "Bypass Paralelismo Rackeable 6/10kva monofasico",
    sku: "BYPRAPROPDU610KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2024/02/2-PDU-PARALELISMO-con-sombra-300x300.jpg",
    category: "accesorios",
    description: "Sistema de bypass con paralelismo rackeable para UPS de 6-10KVA"
  },
  {
    id: 60,
    name: "Switch Bypass con PDU 1-3Kva",
    sku: "RT9100-PDU",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe21-300x300.jpg",
    category: "accesorios",
    description: "Switch bypass con PDU integrado para UPS de 1-3KVA"
  },
  {
    id: 61,
    name: "Tarjeta SNMP UPS Monofasica",
    sku: "SNMP-ESOL-KVA",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe1-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP para UPS monofásicos, permite monitoreo remoto y gestión"
  },
  {
    id: 62,
    name: "Tarjeta SNMP ATS",
    sku: "SNMPATS",
    image: "https://enersafelatam.com/wp-content/uploads/2023/06/Enersafe9-300x300.jpg",
    category: "accesorios",
    description: "Tarjeta SNMP para Transfer Switch Automático (ATS), monitoreo remoto"
  },
];

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return productsData.map((product) => ({
    category: product.category,
  }));
}