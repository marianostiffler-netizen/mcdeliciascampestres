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
// 10 unidades: 8% descuento
// 100 unidades: 18% descuento
function calcPrice10(base: number): number {
  return Math.round(base * 0.92);
}

function calcPrice100(base: number): number {
  return Math.round(base * 0.82);
}

export const categories = [
  { id: "todos", label: "✨ Todos", emoji: "✨" },
  { id: "alfajores", label: "🍪 Alfajores", emoji: "🍪" },
  { id: "varios-dulces", label: "🍬 Dulces Varios", emoji: "🍬" },
  { id: "salados", label: "🥖 Salados", emoji: "🥖" },
  { id: "catering", label: "🎉 Catering", emoji: "🎉" },
  { id: "hojaldres", label: "🥐 Hojaldres", emoji: "🥐" },
  { id: "frolas", label: "🥧 Frolas", emoji: "🥧" },
  { id: "tartas", label: "🍰 Tartas", emoji: "🍰" },
  { id: "frutales", label: "🍓 Frutales", emoji: "🍓" },
  { id: "panaderia", label: "🍞 Panadería", emoji: "🍞" },
  { id: "picadas", label: "🧀 Picadas", emoji: "🧀" },
];

export const products: Product[] = [
  // ============ ALFAJORES ============
  {
    id: "alfajor-maicena",
    category: "alfajores",
    name: "Alfajor de Maicena",
    basePrice: 1736,
    unit: "unidad",
    description:
      "Suave alfajor de maicena con dulce de leche artesanal, bañado en coco rallado. Tradición argentina en cada bocado.",
    image: "/images/alfajor-maicena.jpg",
    pricePerUnit: 1736,
    price10: calcPrice10(1736),
    price100: calcPrice100(1736),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: 1736 },
      { label: "Caja x6", price: 3780 },
      { label: "Caja x10/12", price: 5670 },
    ],
  },
  {
    id: "alfajor-crocante",
    category: "alfajores",
    name: "Alfajor Crocante",
    basePrice: 1925,
    unit: "unidad",
    description:
      "Alfajor crocante con relleno de dulce de leche, una textura irresistible que cruje con cada mordisco.",
    image: "/images/alfajor-crocante.jpg",
    pricePerUnit: 1925,
    price10: calcPrice10(1925),
    price100: calcPrice100(1925),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: 1925 },
      { label: "Caja x6", price: 5306 },
      { label: "Caja x10/12", price: 7294 },
    ],
  },
  {
    id: "alfajor-chocolate",
    category: "alfajores",
    name: "Alfajor de Chocolate",
    basePrice: 1925,
    unit: "unidad",
    description:
      "Alfajor bañado en chocolate con dulce de leche. La combinación perfecta para los amantes del chocolate.",
    image: "/images/alfajor-chocolate.jpg",
    pricePerUnit: 1925,
    price10: calcPrice10(1925),
    price100: calcPrice100(1925),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: 1925 },
      { label: "Caja x6", price: 4844 },
      { label: "Caja x10/12", price: 7294 },
    ],
  },
  {
    id: "alfajor-coco",
    category: "alfajores",
    name: "Alfajor de Coco",
    basePrice: 420,
    unit: "unidad",
    description:
      "Delicado alfajor de coco con relleno suave. Liviano y delicioso, ideal para acompañar el mate.",
    image: "/images/alfajor-coco.jpg",
    pricePerUnit: 420,
    price10: calcPrice10(420),
    price100: calcPrice100(420),
    hasVariants: true,
    variants: [
      { label: "Caja x6", price: 2520 },
      { label: "Caja x12", price: 3150 },
    ],
  },
  {
    id: "alfajor-almendrado",
    category: "alfajores",
    name: "Alfajor Almendrado",
    basePrice: 508,
    unit: "unidad",
    description:
      "Exquisito alfajor con almendras, textura premium y sabor inigualable. Un producto gourmet artesanal.",
    image: "/images/alfajor-almendrado.jpg",
    pricePerUnit: 508,
    price10: calcPrice10(508),
    price100: calcPrice100(508),
    hasVariants: true,
    variants: [
      { label: "Caja x6", price: 3045 },
      { label: "Caja x12", price: 5866 },
    ],
  },

  // ============ VARIOS DULCES ============
  {
    id: "pepas-membrillo",
    category: "varios-dulces",
    name: "Pepas de Membrillo",
    basePrice: 2646,
    unit: "kg",
    description:
      "Clásicas pepas rellenas con membrillo casero. Crujientes por fuera, dulces por dentro.",
    image: "/images/pepas-membrillo.jpg",
    pricePerUnit: 2646,
    price10: calcPrice10(2646),
    price100: calcPrice100(2646),
  },
  {
    id: "pepas-leche",
    category: "varios-dulces",
    name: "Pepas de Dulce de Leche",
    basePrice: 2723,
    unit: "kg",
    description:
      "Pepas artesanales con dulce de leche casero. Un clásico reinventado con todo el sabor campestre.",
    image: "/images/pepas-leche.jpg",
    pricePerUnit: 2723,
    price10: calcPrice10(2723),
    price100: calcPrice100(2723),
  },
  {
    id: "masitas-varias",
    category: "varios-dulces",
    name: "Masitas Varias",
    basePrice: 2422,
    unit: "kg",
    description:
      "Surtido de masitas artesanales, cada una con sabor único. Perfectas para compartir en familia.",
    image: "/images/masitas-varias.jpg",
    pricePerUnit: 2422,
    price10: calcPrice10(2422),
    price100: calcPrice100(2422),
  },
  {
    id: "materas",
    category: "varios-dulces",
    name: "Materas",
    basePrice: 3206,
    unit: "kg",
    description:
      "Galletitas materas ideales para acompañar el mate. Crocantes y con el punto justo de dulzura.",
    image: "/images/materas.jpg",
    pricePerUnit: 3206,
    price10: calcPrice10(3206),
    price100: calcPrice100(3206),
  },
  {
    id: "secas",
    category: "varios-dulces",
    name: "Secas",
    basePrice: 3276,
    unit: "kg",
    description:
      "Masitas secas surtidas, elaboradas con ingredientes seleccionados. Calidad artesanal en cada unidad.",
    image: "/images/secas.jpg",
    pricePerUnit: 3276,
    price10: calcPrice10(3276),
    price100: calcPrice100(3276),
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
