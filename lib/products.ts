export interface Product {
  id: string;
  category: string;
  name: string;
  basePrice: number;
  unit: string;
  description: string;
  image: string;
  pricePerUnit: number;
  price10: number;
  price100: number;
  hasVariants?: boolean;
  variants?: {
    label: string;
    price: number;
  }[];
}

// Función para calcular precios mayoristas
// 10 unidades: 5% descuento
// 100 unidades: 12% descuento
function calcPrice10(base: number): number {
  return Math.round(base * 0.95);
}

function calcPrice100(base: number): number {
  return Math.round(base * 0.88);
}

export const categories = [
  { id: "todos", label: "✨ Todos", emoji: "✨" },
  { id: "alfajores", label: "🍪 Alfajores", emoji: "🍪" },
  { id: "varios-dulces", label: "🍬 Dulces Varios", emoji: "🍬" },
  { id: "salados", label: "🥖 Salados", emoji: "🥖" },
  { id: "catering", label: "🎉 Catering", emoji: "🎉" },
  { id: "hojaldres", label: "🥐 Hojaldres", emoji: "🥐" },
  { id: "frolas", label: "🥧 Frolas", emoji: "🥧" },
];

export const products: Product[] = [
  // Alfajores
  {
    id: "alfajores-maizena",
    category: "alfajores",
    name: "Alfajores de Maicena",
    basePrice: 120,
    unit: "docena",
    description: "Tiernos alfajores de maicena rellenos de dulce de leche artesanal",
    image: "/images/alfajores-maizena.jpg",
    pricePerUnit: 10,
    price10: calcPrice10(10),
    price100: calcPrice100(10),
  },
  {
    id: "alfajores-chocolate",
    category: "alfajores",
    name: "Alfajores de Chocolate",
    basePrice: 150,
    unit: "docena",
    description: "Alfajores con cobertura de chocolate semi-amargo y relleno cremoso",
    image: "/images/alfajores-chocolate.jpg",
    pricePerUnit: 12.5,
    price10: calcPrice10(12.5),
    price100: calcPrice100(12.5),
  },
  {
    id: "alfajores-coco",
    category: "alfajores",
    name: "Alfajores de Coco",
    basePrice: 130,
    unit: "docena",
    description: "Alfajores cubiertos de coco rallado fresco con dulce de leche",
    image: "/images/alfajores-coco.jpg",
    pricePerUnit: 11,
    price10: calcPrice10(11),
    price100: calcPrice100(11),
  },
  {
    id: "alfajores-mix",
    category: "alfajores",
    name: "Mix de Alfajores",
    basePrice: 400,
    unit: "docena",
    description: "Variedad de alfajores: 4 maicena, 4 chocolate, 4 coco",
    image: "/images/alfajores-mix.jpg",
    pricePerUnit: 33,
    price10: calcPrice10(33),
    price100: calcPrice100(33),
  },

  // Varios Dulces
  {
    id: "budin-citrico",
    category: "varios-dulces",
    name: "Budín Citrico",
    basePrice: 180,
    unit: "unidad",
    description: "Budín casero con ralladura de naranja y limón, jugoso y aromático",
    image: "/images/budin-citrico.jpg",
    pricePerUnit: 180,
    price10: calcPrice10(180),
    price100: calcPrice100(180),
  },
  {
    id: "torta-rogel",
    category: "varios-dulces",
    name: "Torta Rogel",
    basePrice: 450,
    unit: "unidad",
    description: "Capas de hojaldre crujiente con dulce de leche y merengue italiano",
    image: "/images/torta-rogel.jpg",
    pricePerUnit: 450,
    price10: calcPrice10(450),
    price100: calcPrice100(450),
  },
  {
    id: "chocotorta",
    category: "varios-dulces",
    name: "Chocotorta Clásica",
    basePrice: 380,
    unit: "unidad",
    description: "Galletitas de chocolate humedecidas con crema y dulce de leche",
    image: "/images/chocotorta.jpg",
    pricePerUnit: 380,
    price10: calcPrice10(380),
    price100: calcPrice100(380),
  },
  {
    id: "postre-limon",
    category: "varios-dulces",
    name: "Postre de Limón",
    basePrice: 220,
    unit: "unidad",
    description: "Base de galletita con crema de limón y merengue italiano",
    image: "/images/postre-limon.jpg",
    pricePerUnit: 220,
    price10: calcPrice10(220),
    price100: calcPrice100(220),
  },
  {
    id: "tiramisu",
    category: "varios-dulces",
    name: "Tiramisu",
    basePrice: 280,
    unit: "unidad",
    description: "Postre italiano con café, mascarpone y cacao",
    image: "/images/tiramisu.jpg",
    pricePerUnit: 280,
    price10: calcPrice10(280),
    price100: calcPrice100(280),
  },
  {
    id: "flan-mixto",
    category: "varios-dulces",
    name: "Flan Mixto",
    basePrice: 200,
    unit: "unidad",
    description: "Flan casero con dulce de leche y crema chantillí",
    image: "/images/flan-mixto.jpg",
    pricePerUnit: 200,
    price10: calcPrice10(200),
    price100: calcPrice100(200),
  },

  // Salados
  {
    id: "empanadas-variadas",
    category: "salados",
    name: "Empanadas Variadas",
    basePrice: 85,
    unit: "docena",
    description: "Docena de empanadas variadas: carne, pollo, jamón y queso, verdura",
    image: "/images/empanadas-variadas.jpg",
    pricePerUnit: 7.08,
    price10: calcPrice10(7.08),
    price100: calcPrice100(7.08),
  },
  {
    id: "tartas-variadas",
    category: "salados",
    name: "Tartas Variadas",
    basePrice: 95,
    unit: "unidad",
    description: "Tartas individuales variadas: espinaca, jamón y queso, pollo",
    image: "/images/tartas-variadas.jpg",
    pricePerUnit: 95,
    price10: calcPrice10(95),
    price100: calcPrice100(95),
  },
  {
    id: "pascualina",
    category: "salados",
    name: "Pascualina",
    basePrice: 110,
    unit: "unidad",
    description: "Tarta de acelga con huevo duro y salsa blanca, tamaño familiar",
    image: "/images/pascualina.jpg",
    pricePerUnit: 110,
    price10: calcPrice10(110),
    price100: calcPrice100(110),
  },
  {
    id: "tarta-pollo",
    category: "salados",
    name: "Tarta de Pollo",
    basePrice: 90,
    unit: "unidad",
    description: "Tarta de pollo desmenuzado con salsa blanca, tamaño mediano",
    image: "/images/tarta-pollo.jpg",
    pricePerUnit: 90,
    price10: calcPrice10(90),
    price100: calcPrice100(90),
  },
  {
    id: "lomito-argentino",
    category: "salados",
    name: "Lomito Argentino",
    basePrice: 150,
    unit: "unidad",
    description: "Lomito argentino con huevo duro, jamón, queso y mayonesa",
    image: "/images/lomito-argentino.jpg",
    pricePerUnit: 150,
    price10: calcPrice10(150),
    price100: calcPrice100(150),
  },

  // Catering
  {
    id: "mesa-dulce",
    category: "catering",
    name: "Mesa Dulce Completa",
    basePrice: 800,
    unit: "mesa",
    description: "Mesa dulce para 20 personas con variedad de postres y facturas",
    image: "/images/mesa-dulce.jpg",
    pricePerUnit: 800,
    price10: calcPrice10(800),
    price100: calcPrice100(800),
  },
  {
    id: "coffee-break",
    category: "catering",
    name: "Coffee Break",
    basePrice: 450,
    unit: "paquete",
    description: "Coffee break para 10 personas: cafés, medialunas, galletitas",
    image: "/images/coffee-break.jpg",
    pricePerUnit: 450,
    price10: calcPrice10(450),
    price100: calcPrice100(450),
  },
  {
    id: "brunch-completo",
    category: "catering",
    name: "Brunch Completo",
    basePrice: 1200,
    unit: "paquete",
    description: "Brunch para 15 personas: tartas, facturas, jugos, café",
    image: "/images/brunch-completo.jpg",
    pricePerUnit: 1200,
    price10: calcPrice10(1200),
    price100: calcPrice100(1200),
  },

  // Hojaldres
  {
    id: "facturas-mantecosas",
    category: "hojaldres",
    name: "Facturas Mantecosas",
    basePrice: 75,
    unit: "docena",
    description: "Docena de facturas mantecosas clásicas, crujientes y dulces",
    image: "/images/facturas-mantecosas.jpg",
    pricePerUnit: 6.25,
    price10: calcPrice10(6.25),
    price100: calcPrice100(6.25),
  },
  {
    id: "medialunas-grasa",
    category: "hojaldres",
    name: "Medialunas de Grasa",
    basePrice: 65,
    unit: "docena",
    description: "Docena de medialunas de grasa, tiernas y doradas",
    image: "/images/medialunas-grasa.jpg",
    pricePerUnit: 5.42,
    price10: calcPrice10(5.42),
    price100: calcPrice100(5.42),
  },
  {
    id: "bolas-de-frizzle",
    category: "hojaldres",
    name: "Bolas de Frizzle",
    basePrice: 80,
    unit: "docena",
    description: "Docena de bolas de frizzle con glaseado y coco",
    image: "/images/bolas-de-frizzle.jpg",
    pricePerUnit: 6.67,
    price10: calcPrice10(6.67),
    price100: calcPrice100(6.67),
  },
  {
    id: "cañoncitos-dulce",
    category: "hojaldres",
    name: "Cañoncitos de Dulce",
    basePrice: 70,
    unit: "docena",
    description: "Docena de cañoncitos rellenos de dulce de leche",
    image: "/images/canoncitos-dulce.jpg",
    pricePerUnit: 5.83,
    price10: calcPrice10(5.83),
    price100: calcPrice100(5.83),
  },

  // Frolas
  {
    id: "frola-dulce-membrillo",
    category: "frolas",
    name: "Frola Dulce de Membrillo",
    basePrice: 160,
    unit: "unidad",
    description: "Frola casera con dulce de membrillo y decoración de hojaldre",
    image: "/images/frola-dulce-membrillo.jpg",
    pricePerUnit: 160,
    price10: calcPrice10(160),
    price100: calcPrice100(160),
  },
  {
    id: "frola-dulce-batata",
    category: "frolas",
    name: "Frola Dulce de Batata",
    basePrice: 160,
    unit: "unidad",
    description: "Frola casera con dulce de batata y decoración de hojaldre",
    image: "/images/frola-dulce-batata.jpg",
    pricePerUnit: 160,
    price10: calcPrice10(160),
    price100: calcPrice100(160),
  },
  {
    id: "frola-mix",
    category: "frolas",
    name: "Frola Mix",
    basePrice: 320,
    unit: "unidad",
    description: "Frola grande con mitad dulce de membrillo y mitad dulce de batata",
    image: "/images/frola-mix.jpg",
    pricePerUnit: 320,
    price10: calcPrice10(320),
    price100: calcPrice100(320),
  },
  {
    id: "pastafrola",
    category: "frolas",
    name: "Pastafrola Clásica",
    basePrice: 85,
    unit: "unidad",
    description: "Pastafrola individual con dulce de membrillo",
    image: "/images/pastafrola.jpg",
    pricePerUnit: 85,
    price10: calcPrice10(85),
    price100: calcPrice100(85),
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getDiscountPercentage(quantity: number): number {
  if (quantity >= 100) return 12;
  if (quantity >= 10) return 5;
  return 0;
}

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "todos") return products;
  return products.filter((p) => p.category === categoryId);
}
