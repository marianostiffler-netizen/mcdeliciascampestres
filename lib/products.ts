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
    image: '/images/medialunas.jpg',
    unit: 'docena',
    minOrder: 1
  },
  {
    id: 'croissant',
    name: 'Croissant',
    description: 'Croissant hojaldrado de origen francés',
    price: 120,
    category: 'facturas',
    image: '/images/croissant.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  {
    id: 'factura-chocolate',
    name: 'Factura con Chocolate',
    description: 'Factura esponjosa rellena de chocolate',
    price: 85,
    category: 'facturas',
    image: '/images/factura-chocolate.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  
  // Pastelería
  {
    id: 'torta-chocolate',
    name: 'Torta de Chocolate',
    description: 'Torta húmeda de chocolate con cobertura',
    price: 2500,
    category: 'pasteleria',
    image: '/images/torta-chocolate.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  {
    id: 'torta-limon',
    name: 'Torta de Limón',
    description: 'Torta de limón con merengue italiano',
    price: 2200,
    category: 'pasteleria',
    image: '/images/torta-limon.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Tarta de queso crema con base de galleta',
    price: 1800,
    category: 'pasteleria',
    image: '/images/cheesecake.jpg',
    unit: 'unidad',
    minOrder: 1
  },
  
  // Salados
  {
    id: 'empanada-carne',
    name: 'Empanada de Carne',
    description: 'Empanada tradicional con relleno de carne cortada a cuchillo',
    price: 180,
    category: 'salados',
    image: '/images/empanada-carne.jpg',
    unit: 'unidad',
    minOrder: 6
  },
  {
    id: 'empanada-jamon-queso',
    name: 'Empanada Jamón y Queso',
    description: 'Empanada con jamón y queso mozzarella',
    price: 160,
    category: 'salados',
    image: '/images/empanada-jamon-queso.jpg',
    unit: 'unidad',
    minOrder: 6
  },
  {
    id: 'tarta-pollo',
    name: 'Tarta de Pollo',
    description: 'Tarta con pollo, pimientos y salsa blanca',
    price: 1200,
    category: 'salados',
    image: '/images/tarta-pollo.jpg',
    unit: 'unidad',
    minOrder: 1
  }
]

export const categories = [
  { id: 'todos', name: 'Todos los Productos' },
  { id: 'panes', name: 'Panes' },
  { id: 'facturas', name: 'Facturas' },
  { id: 'pasteleria', name: 'Pastelería' },
  { id: 'salados', name: 'Salados' }
]
