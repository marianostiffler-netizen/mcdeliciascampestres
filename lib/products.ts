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
  price50: number;
  price100: number;
  hasVariants?: boolean;
  variants?: {
    label: string;
    price: number;
  }[];
}

// Función para calcular precios mayoristas
// 10 unidades: 5% descuento
// 50 unidades: 10% descuento
// 100 unidades: 15% descuento
function calcPrice10(base: number): number {
  return Math.round(base * 0.95); // 5% descuento
}

function calcPrice50(base: number): number {
  return Math.round(base * 0.90); // 10% descuento
}

function calcPrice100(base: number): number {
  return Math.round(base * 0.85); // 15% descuento
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
    price50: calcPrice50(1736),
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
    price50: calcPrice50(1925),
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
    price50: calcPrice50(1925),
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
    price50: calcPrice50(420),
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
    price50: calcPrice50(508),
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
    price50: calcPrice50(2646),
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
    price50: calcPrice50(2723),
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
    price50: calcPrice50(2422),
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
    price50: calcPrice50(3206),
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
    price50: calcPrice50(3276),
    price100: calcPrice100(3276),
  },
  {
    id: "trufas",
    category: "varios-dulces",
    name: "Trufas",
    basePrice: 3206,
    unit: "kg",
    description:
      "Trufas de chocolate artesanales, elaboradas con cacao de primera calidad. Un bocado de puro placer.",
    image: "/images/trufas.jpg",
    pricePerUnit: 3206,
    price10: calcPrice10(3206),
    price50: calcPrice50(3206),
    price100: calcPrice100(3206),
  },
  {
    id: "copitos",
    category: "varios-dulces",
    name: "Copitos",
    basePrice: 4648,
    unit: "kg",
    description:
      "Livianos copitos de merengue que se deshacen en la boca. Ideales para decorar y disfrutar.",
    image: "/images/copitos.jpg",
    pricePerUnit: 4648,
    price10: calcPrice10(4648),
    price50: calcPrice50(4648),
    price100: calcPrice100(4648),
  },
  {
    id: "brownie",
    category: "varios-dulces",
    name: "Brownie Porción",
    basePrice: 3059,
    unit: "porción",
    description:
      "Brownie húmedo y chocolatoso, con nueces. Porción generosa de puro chocolate artesanal.",
    image: "/images/brownie.jpg",
    pricePerUnit: 3059,
    price10: calcPrice10(3059),
    price50: calcPrice50(3059),
    price100: calcPrice100(3059),
  },

  // ============ SALADOS ============
  {
    id: "saborizadas",
    category: "salados",
    name: "Saborizadas",
    basePrice: 1540,
    unit: "unidad",
    description:
      "Galletitas saborizadas artesanales, con hierbas y especias seleccionadas. Perfectas para picoteo.",
    image: "/images/saborizadas.jpg",
    pricePerUnit: 1540,
    price10: calcPrice10(1540),
    price50: calcPrice50(1540),
    price100: calcPrice100(1540),
  },
  {
    id: "marineras",
    category: "salados",
    name: "Marineras",
    basePrice: 1344,
    unit: "unidad",
    description:
      "Galletas marineras crocantes, ideales para acompañar picadas, quesos y fiambres.",
    image: "/images/marineras.jpg",
    pricePerUnit: 1344,
    price10: calcPrice10(1344),
    price50: calcPrice50(1344),
    price100: calcPrice100(1344),
  },
  {
    id: "pizzetas",
    category: "salados",
    name: "Pizzetas",
    basePrice: 490,
    unit: "unidad",
    description:
      "Mini pizzetas listas para preparar con tus ingredientes favoritos. Base artesanal y esponjosa.",
    image: "/images/pizzetas.jpg",
    pricePerUnit: 490,
    price10: calcPrice10(490),
    price50: calcPrice50(490),
    price100: calcPrice100(490),
  },
  {
    id: "pizzetas-listas",
    category: "salados",
    name: "Pizzetas Listas",
    basePrice: 1554,
    unit: "unidad",
    description:
      "Pizzetas ya preparadas con salsa y muzzarella. Solo calentar y disfrutar en minutos.",
    image: "/images/pizzetas-listas.jpg",
    pricePerUnit: 1554,
    price10: calcPrice10(1554),
    price50: calcPrice50(1554),
    price100: calcPrice100(1554),
  },
  {
    id: "pizzas-listas",
    category: "salados",
    name: "Pizzas Listas",
    basePrice: 6160,
    unit: "unidad",
    description:
      "Pizza grande lista para hornear. Masa artesanal con salsa casera y abundante muzzarella.",
    image: "/images/pizzas-listas.jpg",
    pricePerUnit: 6160,
    price10: calcPrice10(6160),
    price50: calcPrice50(6160),
    price100: calcPrice100(6160),
  },
  {
    id: "pre-pizzas",
    category: "salados",
    name: "Pre Pizzas",
    basePrice: 1862,
    unit: "unidad",
    description:
      "Bases de pizza artesanales listas para que les pongas lo que más te guste. Masa perfecta.",
    image: "/images/pre-pizzas.jpg",
    pricePerUnit: 1862,
    price10: calcPrice10(1862),
    price50: calcPrice50(1862),
    price100: calcPrice100(1862),
  },
  {
    id: "plancha-pizza-grande",
    category: "salados",
    name: "Plancha de Pizza 45x70",
    basePrice: 20090,
    unit: "plancha",
    description:
      "Plancha grande de pizza artesanal (45x70cm). Ideal para eventos, reuniones y locales gastronómicos.",
    image: "/images/plancha-pizza-grande.jpg",
    pricePerUnit: 20090,
    price10: calcPrice10(20090),
    price50: calcPrice50(20090),
    price100: calcPrice100(20090),
  },
  {
    id: "plancha-pizza-chica",
    category: "salados",
    name: "Plancha de Pizza 45x50",
    basePrice: 15120,
    unit: "plancha",
    description:
      "Plancha de pizza artesanal (45x50cm). Tamaño perfecto para reuniones familiares.",
    image: "/images/plancha-pizza-chica.jpg",
    pricePerUnit: 15120,
    price10: calcPrice10(15120),
    price50: calcPrice50(15120),
    price100: calcPrice100(15120),
  },
  {
    id: "torta-salada-grande",
    category: "salados",
    name: "Torta Salada Grande",
    basePrice: 33194,
    unit: "unidad",
    description:
      "Torta salada grande con relleno abundante y variado. Ideal para eventos y celebraciones.",
    image: "/images/torta-salada-grande.jpg",
    pricePerUnit: 33194,
    price10: calcPrice10(33194),
    price50: calcPrice50(33194),
    price100: calcPrice100(33194),
  },
  {
    id: "torta-salada-chica",
    category: "salados",
    name: "Torta Salada Chica",
    basePrice: 22715,
    unit: "unidad",
    description:
      "Torta salada chica, perfecta para reuniones íntimas. Relleno casero y masa hojaldrada.",
    image: "/images/torta-salada-chica.jpg",
    pricePerUnit: 22715,
    price10: calcPrice10(22715),
    price50: calcPrice50(22715),
    price100: calcPrice100(22715),
  },
  {
    id: "empanadas-copetin",
    category: "salados",
    name: "Empanadas Copetín",
    basePrice: 3794,
    unit: "docena",
    description:
      "Mini empanadas de copetín, ideales para eventos y picadas. Variedad de gustos disponibles.",
    image: "/images/empanadas-copetin.jpg",
    pricePerUnit: 3794,
    price10: calcPrice10(3794),
    price50: calcPrice50(3794),
    price100: calcPrice100(3794),
  },

  // ============ CATERING ============
  {
    id: "mesa-dulce-grande",
    category: "catering",
    name: "Mesa Dulce Grande",
    basePrice: 9226,
    unit: "por persona",
    description:
      "Mesa dulce completa para eventos grandes. Incluye variedad de masitas, alfajores, tortas y más. Todo artesanal.",
    image: "/images/mesa-dulce-grande.jpg",
    pricePerUnit: 9226,
    price10: calcPrice10(9226),
    price50: calcPrice50(9226),
    price100: calcPrice100(9226),
  },
  {
    id: "mesa-dulce-chica",
    category: "catering",
    name: "Mesa Dulce Chica",
    basePrice: 7644,
    unit: "por persona",
    description:
      "Mesa dulce para eventos íntimos. Selección cuidada de dulces artesanales con presentación impecable.",
    image: "/images/mesa-dulce-chica.jpg",
    pricePerUnit: 7644,
    price10: calcPrice10(7644),
    price50: calcPrice50(7644),
    price100: calcPrice100(7644),
  },

  // ============ HOJALDRES ============
  {
    id: "madrilenos",
    category: "hojaldres",
    name: "Madrileños x2",
    basePrice: 2520,
    unit: "pack x2",
    description:
      "Par de madrileños hojaldrados con dulce de leche. Crujientes capas de hojaldre artesanal.",
    image: "/images/madrilenos.jpg",
    pricePerUnit: 2520,
    price10: calcPrice10(2520),
    price50: calcPrice50(2520),
    price100: calcPrice100(2520),
  },
  {
    id: "canoncitos-con-bano",
    category: "hojaldres",
    name: "Cañoncitos DDL c/Baño",
    basePrice: 3808,
    unit: "unidad",
    description:
      "Cañoncitos de hojaldre rellenos de dulce de leche con baño de chocolate o glaseado. Irresistibles.",
    image: "/images/canoncitos-bano.jpg",
    pricePerUnit: 3808,
    price10: calcPrice10(3808),
    price50: calcPrice50(3808),
    price100: calcPrice100(3808),
  },
  {
    id: "canoncitos-sin-bano",
    category: "hojaldres",
    name: "Cañoncitos DDL s/Baño",
    basePrice: 3724,
    unit: "unidad",
    description:
      "Cañoncitos de hojaldre clásicos rellenos de dulce de leche. Puro sabor artesanal sin baño.",
    image: "/images/canoncitos-sin-bano.jpg",
    pricePerUnit: 3724,
    price10: calcPrice10(3724),
    price50: calcPrice50(3724),
    price100: calcPrice100(3724),
  },
  {
    id: "palmeritas-200",
    category: "hojaldres",
    name: "Palmeritas 200g",
    basePrice: 3724,
    unit: "pack 200g",
    description:
      "Palmeritas de hojaldre caramelizadas, crujientes y dulces. Pack de 200g de pura tentación.",
    image: "/images/palmeritas.jpg",
    pricePerUnit: 3724,
    price10: calcPrice10(3724),
    price50: calcPrice50(3724),
    price100: calcPrice100(3724),
    hasVariants: true,
    variants: [
      { label: "200g", price: 3724 },
      { label: "1 Kg", price: 10556 },
    ],
  },
  {
    id: "palmeron",
    category: "hojaldres",
    name: "Palmerón",
    basePrice: 2296,
    unit: "unidad",
    description:
      "Palmerón gigante de hojaldre caramelizado. Versión XL de la clásica palmerita, para compartir.",
    image: "/images/palmeron.jpg",
    pricePerUnit: 2296,
    price10: calcPrice10(2296),
    price50: calcPrice50(2296),
    price100: calcPrice100(2296),
  },
  {
    id: "churrinches-200",
    category: "hojaldres",
    name: "Churrinches 200g",
    basePrice: 3094,
    unit: "pack 200g",
    description:
      "Churrinches de hojaldre artesanal, crocantes y livianos. Ideales para la merienda.",
    image: "/images/churrinches.jpg",
    pricePerUnit: 3094,
    price10: calcPrice10(3094),
    price50: calcPrice50(3094),
    price100: calcPrice100(3094),
    hasVariants: true,
    variants: [
      { label: "200g", price: 3094 },
      { label: "1 Kg", price: 10808 },
    ],
  },
  {
    id: "hojaldre-manzana",
    category: "hojaldres",
    name: "Hojaldre con Manzana x2",
    basePrice: 1470,
    unit: "pack x2",
    description:
      "Hojaldre relleno de manzana caramelizada con canela. Dos unidades de sabor casero irresistible.",
    image: "/images/hojaldre-manzana.jpg",
    pricePerUnit: 1470,
    price10: calcPrice10(1470),
    price50: calcPrice50(1470),
    price100: calcPrice100(1470),
  },

  // ============ FROLAS ============
  {
    id: "frola-p15",
    category: "frolas",
    name: "Pasta Frola P.15",
    basePrice: 1778,
    unit: "unidad",
    description:
      "Pasta frola chica (15cm) con dulce de membrillo o batata. Receta tradicional hecha con amor.",
    image: "/images/frola-p15.jpg",
    pricePerUnit: 1778,
    price10: calcPrice10(1778),
    price50: calcPrice50(1778),
    price100: calcPrice100(1778),
  },
  {
    id: "frola-p20",
    category: "frolas",
    name: "Pasta Frola P.20",
    basePrice: 3528,
    unit: "unidad",
    description:
      "Pasta frola mediana (20cm), ideal para compartir en familia. Masa mantecosa y dulce casero.",
    image: "/images/frola-p20.jpg",
    pricePerUnit: 3528,
    price10: calcPrice10(3528),
    price50: calcPrice50(3528),
    price100: calcPrice100(3528),
  },
  {
    id: "frola-p23",
    category: "frolas",
    name: "Pasta Frola P.23",
    basePrice: 4060,
    unit: "unidad",
    description:
      "Pasta frola grande (23cm) con generoso relleno casero. La estrella de toda mesa familiar.",
    image: "/images/frola-p23.jpg",
    pricePerUnit: 4060,
    price10: calcPrice10(4060),
    price50: calcPrice50(4060),
    price100: calcPrice100(4060),
  },
  {
    id: "frola-p33",
    category: "frolas",
    name: "Pasta Frola P.33",
    basePrice: 7252,
    unit: "unidad",
    description:
      "Pasta frola extra grande (33cm) para eventos y celebraciones. Abundante relleno artesanal.",
    image: "/images/frola-p33.jpg",
    pricePerUnit: 7252,
    price10: calcPrice10(7252),
    price50: calcPrice50(7252),
    price100: calcPrice100(7252),
  },

  // ============ TARTAS ============
  {
    id: "tarta-p15",
    category: "tartas",
    name: "Tarta P.15",
    basePrice: 1946,
    unit: "unidad",
    description:
      "Tarta artesanal chica (15cm). Masa crocante con relleno a elección. Perfecta para una porción individual.",
    image: "/images/tarta-p15.jpg",
    pricePerUnit: 1946,
    price10: calcPrice10(1946),
    price50: calcPrice50(1946),
    price100: calcPrice100(1946),
  },
  {
    id: "tarta-p20",
    category: "tartas",
    name: "Tarta P.20",
    basePrice: 3689,
    unit: "unidad",
    description:
      "Tarta artesanal mediana (20cm) con relleno casero generoso. Ideal para compartir entre dos.",
    image: "/images/tarta-p20.jpg",
    pricePerUnit: 3689,
    price10: calcPrice10(3689),
    price50: calcPrice50(3689),
    price100: calcPrice100(3689),
  },
  {
    id: "tarta-p23",
    category: "tartas",
    name: "Tarta P.23",
    basePrice: 4249,
    unit: "unidad",
    description:
      "Tarta artesanal grande (23cm) perfecta para la mesa familiar. Relleno abundante y masa hojaldrada.",
    image: "/images/tarta-p23.jpg",
    pricePerUnit: 4249,
    price10: calcPrice10(4249),
    price50: calcPrice50(4249),
    price100: calcPrice100(4249),
  },
  {
    id: "tarta-p33",
    category: "tartas",
    name: "Tarta P.33",
    basePrice: 7308,
    unit: "unidad",
    description:
      "Tarta artesanal extra grande (33cm). Ideal para eventos, fiestas y reuniones numerosas.",
    image: "/images/tarta-p33.jpg",
    pricePerUnit: 7308,
    price10: calcPrice10(7308),
    price50: calcPrice50(7308),
    price100: calcPrice100(7308),
  },

  // ============ FRUTALES ============
  {
    id: "frutal-p20",
    category: "frutales",
    name: "Torta Frutal P.20",
    basePrice: 16100,
    unit: "unidad",
    description:
      "Torta frutal mediana (20cm) con frutas frescas de estación, crema pastelera y base artesanal.",
    image: "/images/frutal-p20.jpg",
    pricePerUnit: 16100,
    price10: calcPrice10(16100),
    price50: calcPrice50(16100),
    price100: calcPrice100(16100),
  },
  {
    id: "frutal-p23",
    category: "frutales",
    name: "Torta Frutal P.23",
    basePrice: 21000,
    unit: "unidad",
    description:
      "Torta frutal grande (23cm) decorada con frutas frescas. Una obra de arte comestible para celebrar.",
    image: "/images/frutal-p23.jpg",
    pricePerUnit: 21000,
    price10: calcPrice10(21000),
    price50: calcPrice50(21000),
    price100: calcPrice100(21000),
  },
  {
    id: "frutal-p33",
    category: "frutales",
    name: "Torta Frutal P.33",
    basePrice: 29260,
    unit: "unidad",
    description:
      "Torta frutal extra grande (33cm). Espectacular presentación con frutas de estación. Para grandes eventos.",
    image: "/images/frutal-p33.jpg",
    pricePerUnit: 29260,
    price10: calcPrice10(29260),
    price50: calcPrice50(29260),
    price100: calcPrice100(29260),
  },

  // ============ PANADERÍA ============
  {
    id: "pan-saborizado",
    category: "panaderia",
    name: "Pan Saborizado",
    basePrice: 4928,
    unit: "kg",
    description:
      "Pan saborizado artesanal por kilo. Con hierbas, especias y aceite de oliva. Recién horneado.",
    image: "/images/pan-saborizado.jpg",
    pricePerUnit: 4928,
    price10: calcPrice10(4928),
    price50: calcPrice50(4928),
    price100: calcPrice100(4928),
  },
  {
    id: "plancha-frola-tarta",
    category: "panaderia",
    name: "Plancha Frola/Tarta (Coco/Toffe)",
    basePrice: 33957,
    unit: "plancha",
    description:
      "Plancha grande de frola o tarta (Coco/Toffee). Ideal para cortar porciones y vender en tu local.",
    image: "/images/plancha-frola.jpg",
    pricePerUnit: 33957,
    price10: calcPrice10(33957),
    price50: calcPrice50(33957),
    price100: calcPrice100(33957),
  },
  {
    id: "plancha-banana-manzana",
    category: "panaderia",
    name: "Plancha Banana o Manzana",
    basePrice: 35000,
    unit: "plancha",
    description:
      "Plancha grande de torta de banana o manzana. Textura húmeda y sabor casero inigualable.",
    image: "/images/plancha-banana.jpg",
    pricePerUnit: 35000,
    price10: calcPrice10(35000),
    price50: calcPrice50(35000),
    price100: calcPrice100(35000),
  },
  {
    id: "budin-chico",
    category: "panaderia",
    name: "Budín Chico",
    basePrice: 3626,
    unit: "unidad",
    description:
      "Budín artesanal chico, húmedo y esponjoso. Disponible en varios sabores: vainilla, chocolate, mármol.",
    image: "/images/budin-chico.jpg",
    pricePerUnit: 3626,
    price10: calcPrice10(3626),
    price50: calcPrice50(3626),
    price100: calcPrice100(3626),
  },
  {
    id: "budin-grande",
    category: "panaderia",
    name: "Budín Grande",
    basePrice: 6643,
    unit: "unidad",
    description:
      "Budín artesanal grande, generoso y perfecto para compartir. Hecho con ingredientes premium.",
    image: "/images/budin-grande.jpg",
    pricePerUnit: 6643,
    price10: calcPrice10(6643),
    price50: calcPrice50(6643),
    price100: calcPrice100(6643),
  },
  {
    id: "marineras-panaderia",
    category: "panaderia",
    name: "Marineras (base 955)",
    basePrice: 1337,
    unit: "unidad",
    description:
      "Galletas marineras artesanales, crocantes y perfectas para acompañar cualquier comida.",
    image: "/images/marineras-pan.jpg",
    pricePerUnit: 1337,
    price10: calcPrice10(1337),
    price50: calcPrice50(1337),
    price100: calcPrice100(1337),
  },
  {
    id: "combinadas",
    category: "panaderia",
    name: "Combinadas",
    basePrice: 4060,
    unit: "kg",
    description:
      "Surtido combinado de panificados artesanales. Variedad de sabores y texturas en cada kilo.",
    image: "/images/combinadas.jpg",
    pricePerUnit: 4060,
    price10: calcPrice10(4060),
    price50: calcPrice50(4060),
    price100: calcPrice100(4060),
  },
  {
    id: "porcion-frola",
    category: "panaderia",
    name: "Porción de Frola",
    basePrice: 1680,
    unit: "porción",
    description:
      "Generosa porción de pasta frola artesanal. Lista para vender individualmente en tu local.",
    image: "/images/porcion-frola.jpg",
    pricePerUnit: 1680,
    price10: calcPrice10(1680),
    price50: calcPrice50(1680),
    price100: calcPrice100(1680),
  },
  {
    id: "panettones",
    category: "panaderia",
    name: "Panettones",
    basePrice: 3556,
    unit: "unidad",
    description:
      "Panettone artesanal con frutas abrillantadas y chips de chocolate. Esponjoso y aromático.",
    image: "/images/panettones.jpg",
    pricePerUnit: 3556,
    price10: calcPrice10(3556),
    price50: calcPrice50(3556),
    price100: calcPrice100(3556),
  },
  {
    id: "roscas",
    category: "panaderia",
    name: "Roscas",
    basePrice: 3605,
    unit: "unidad",
    description:
      "Roscas artesanales esponjosas y aromáticas. Perfectas para el desayuno y la merienda.",
    image: "/images/roscas.jpg",
    pricePerUnit: 3605,
    price10: calcPrice10(3605),
    price50: calcPrice50(3605),
    price100: calcPrice100(3605),
  },

  // ============ PICADAS ============
  {
    id: "picada-chica",
    category: "picadas",
    name: "Picada Chica",
    basePrice: 4900,
    unit: "unidad",
    description:
      "Picada chica con selección de quesos, fiambres, aceitunas y crackers artesanales. Para 2-3 personas.",
    image: "/images/picada-chica.jpg",
    pricePerUnit: 4900,
    price10: calcPrice10(4900),
    price50: calcPrice50(4900),
    price100: calcPrice100(4900),
  },
  {
    id: "picada-grande",
    category: "picadas",
    name: "Picada Grande",
    basePrice: 5880,
    unit: "unidad",
    description:
      "Picada grande con variedad de quesos, fiambres premium y acompañamientos artesanales. Para 4-6 personas.",
    image: "/images/picada-grande.jpg",
    pricePerUnit: 5880,
    price10: calcPrice10(5880),
    price50: calcPrice50(5880),
    price100: calcPrice100(5880),
  },
  {
    id: "picada-completa",
    category: "picadas",
    name: "Picada Completa",
    basePrice: 16212,
    unit: "unidad",
    description:
      "Picada completa premium con todo incluido: quesos, fiambres, dips, frutas secas, crackers y más. Para 8+ personas.",
    image: "/images/picada-completa.jpg",
    pricePerUnit: 16212,
    price10: calcPrice10(16212),
    price50: calcPrice50(16212),
    price100: calcPrice100(16212),
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

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === "todos") return products;
  return products.filter((p) => p.category === categoryId);
}

export function getDiscountPercentage(quantity: number): number {
  if (quantity >= 100) return 15;
  if (quantity >= 50) return 10;
  if (quantity >= 10) return 5;
  return 0;
}

export function getPriceByQuantity(basePrice: number, quantity: number): number {
  if (quantity >= 100) return Math.round(basePrice * 0.85); // 15% descuento
  if (quantity >= 50) return Math.round(basePrice * 0.90); // 10% descuento
  if (quantity >= 10) return Math.round(basePrice * 0.95); // 5% descuento
  return basePrice;
}

export function getDiscountTier(quantity: number): 'minorista' | 'semi-mayorista' | 'mayorista' | 'premium' {
  if (quantity >= 100) return 'premium';
  if (quantity >= 50) return 'mayorista';
  if (quantity >= 10) return 'semi-mayorista';
  return 'minorista';
}
