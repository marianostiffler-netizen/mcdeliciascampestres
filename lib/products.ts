export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  unit: string
  minOrder: number
}

// Funciones de cálculo de precios mayoristas
export function calcPrice10(basePrice: number): number {
  return basePrice * 0.95; // 5% de descuento
}

export function calcPrice100(basePrice: number): number {
  return basePrice * 0.88; // 12% de descuento
}

export function getDiscountPercentage(quantity: number): number {
  if (quantity >= 100) return 12;
  if (quantity >= 10) return 5;
  return 0;
}

export const products: Product[] = [
  // Panes
  {
    id: 'pan-frances',
    name: 'Pan Francés',
    description: 'Pan crujiente por fuera y suave por dentro, ideal para sandwiches',
    price: 50,
    category: 'panes',
    image: '/images/pan-frances.jpg',
    unit: 'unidad',
    minOrder: 6
  },
  {
    id: 'pan-integral',
    name: 'Pan Integral',
    description: 'Pan elaborado con harina integral, rico en fibra y nutrientes',
    price: 65,
    category: 'panes',
    image: '/images/pan-integral.jpg',
    unit: 'unidad',
    minOrder: 4
  },
  {
    id: 'pan-ciabatta',
    name: 'Ciabatta',
    description: 'Pan italiano con corteza crujiente y miga aireada',
    price: 80,
    category: 'panes',
    image: '/images/pan-ciabatta.jpg',
    unit: 'unidad',
    minOrder: 2
  },
  
  // Facturas
  {
    id: 'medialuna',
    name: 'Medialunas',
    description: 'Medialunas mantecosas, dulces y esponjosas',
    price: 45,
    category: 'facturas',
    image: '/images/medialuna.jpg',
    unit: 'docena',
    minOrder: 1
  },
  {
    id: 'factura',
    name: 'Facturas',
    description: 'Facturas dulces con hojaldre y azúcar',
    price: 55,
    category: 'facturas',
    image: '/images/factura.jpg',
    unit: 'docena',
    minOrder: 1
  },
  {
    id: 'bola-de-frizzle',
    name: 'Bola de Frizzle',
    description: 'Bolas dulces cubiertas de glaseado',
    price: 60,
    category: 'facturas',
    image: '/images/bola-de-frizzle.jpg',
    unit: 'docena',
    minOrder: 1
  },
  
  // Alfajores
  {
    id: 'alfajor-maizena',
    name: 'Alfajores de Maicena',
    description: 'Alfajores tiernos rellenos de dulce de leche',
    price: 70,
    category: 'alfajores',
    image: '/images/alfajor-maizena.jpg',
    unit: 'docena',
    minOrder: 1
  },
  {
    id: 'alfajor-chocolate',
    name: 'Alfajores de Chocolate',
    description: 'Alfajores con cobertura de chocolate',
    price: 85,
    category: 'alfajores',
    image: '/images/alfajor-chocolate.jpg',
    unit: 'docena',
    minOrder: 1
  },
  {
    id: 'alfajor-coco',
    name: 'Alfajores de Coco',
    description: 'Alfajores cubiertos de coco rallado',
    price: 75,
    category: 'alfajores',
    image: '/images/alfajor-coco.jpg',
    unit: 'docena',
    minOrder: 1
  },
  
  // Galletitas
  {
    id: 'galletitas-chips',
    name: 'Galletitas con Chips',
    description: 'Galletitas con chips de chocolate',
    price: 40,
    category: 'galletitas',
    image: '/images/galletitas-chips.jpg',
    unit: 'paquete',
    minOrder: 2
  },
  {
    id: 'galletitas-avena',
    name: 'Galletitas de Avena',
    description: 'Galletitas saludables de avena y pasas',
    price: 35,
    category: 'galletitas',
    image: '/images/galletitas-avena.jpg',
    unit: 'paquete',
    minOrder: 2
  },
  {
    id: 'galletitas-mantequilla',
    name: 'Galletitas de Mantequilla',
    description: 'Galletitas clasicas de mantequilla',
    price: 30,
    category: 'galletitas',
    image: '/images/galletitas-mantequilla.jpg',
    unit: 'paquete',
    minOrder: 2
  },
  
  // Tortas
  {
    id: 'torta-chocolate',
    name: 'Torta de Chocolate',
    description: 'Torta húmeda de chocolate con crema',
    price: 450,
    category: 'tortas',
    image: '/images/torta-chocolate.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  {
    id: 'torta-frutilla',
    name: 'Torta de Frutilla',
    description: 'Torta con frutillas frescas y crema',
    price: 480,
    category: 'tortas',
    image: '/images/torta-frutilla.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  {
    id: 'torta-limon',
    name: 'Torta de Limón',
    description: 'Torta de limón con merengue',
    price: 420,
    category: 'tortas',
    image: '/images/torta-limon.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  
  // Salados
  {
    id: 'empanada-carne',
    name: 'Empanadas de Carne',
    description: 'Empanadas tradicionales de carne cortada a cuchillo',
    price: 55,
    category: 'salados',
    image: '/images/empanada-carne.jpg',
    unit: 'docena',
    minOrder: 1
  },
  {
    id: 'empanada-jamon-queso',
    name: 'Empanadas Jamón y Queso',
    description: 'Empanadas de jamón y queso',
    price: 60,
    category: 'salados',
    image: '/images/empanada-jamon-queso.jpg',
    unit: 'docena',
    minOrder: 1
  },
  {
    id: 'tartita-espinaca',
    name: 'Tartita de Espinaca',
    description: 'Tartita de espinaca con queso',
    price: 180,
    category: 'salados',
    image: '/images/tartita-espinaca.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  
  // Postres
  {
    id: 'flan',
    name: 'Flan con Dulce de Leche',
    description: 'Flan casero con dulce de leche',
    price: 120,
    category: 'postres',
    image: '/images/flan.jpg',
    unit: 'porción',
    minOrder: 4
  },
  {
    id: 'mouse-chocolate',
    name: 'Mousse de Chocolate',
    description: 'Mousse suave de chocolate',
    price: 100,
    category: 'postres',
    image: '/images/mouse-chocolate.jpg',
    unit: 'porción',
    minOrder: 4
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Torta de queso cremosa',
    price: 130,
    category: 'postres',
    image: '/images/cheesecake.jpg',
    unit: 'porción',
    minOrder: 4
  }
]

export const categories = [
  { id: 'todos', label: 'Todos los Productos' },
  { id: 'panes', label: 'Panes' },
  { id: 'facturas', label: 'Facturas' },
  { id: 'alfajores', label: 'Alfajores' },
  { id: 'galletitas', label: 'Galletitas' },
  { id: 'tortas', label: 'Tortas' },
  { id: 'salados', label: 'Salados' },
  { id: 'postres', label: 'Postres' }
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
