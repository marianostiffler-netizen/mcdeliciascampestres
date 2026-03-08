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

// Función para aumentar precios base en 40%
function increasePrice40(original: number): number {
  return Math.round(original * 1.40);
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
    basePrice: increasePrice40(2430),
    unit: "unidad",
    description:
      "Suave alfajor de maicena con dulce de leche artesanal, bañado en coco rallado. Tradición argentina en cada bocado.",
    image: "/images/alfajor-maicena.jpg",
    pricePerUnit: increasePrice40(2430),
    price10: calcPrice10(increasePrice40(2430)),
    price50: calcPrice50(increasePrice40(2430)),
    price100: calcPrice100(increasePrice40(2430)),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: increasePrice40(2430) },
      { label: "Caja x6", price: increasePrice40(3780) },
      { label: "Caja x10/12", price: increasePrice40(5670) },
    ],
  },
  {
    id: "alfajor-crocante",
    category: "alfajores",
    name: "Alfajor Crocante",
    basePrice: 2695,
    unit: "unidad",
    description:
      "Alfajor crocante con relleno de dulce de leche, una textura irresistible que cruje con cada mordisco.",
    image: "/images/alfajor-crocante.jpg",
    pricePerUnit: 2695,
    price10: calcPrice10(2695),
    price50: calcPrice50(2695),
    price100: calcPrice100(2695),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: 2695 },
      { label: "Caja x6", price: 5306 },
      { label: "Caja x10/12", price: 7294 },
    ],
  },
  {
    id: "alfajor-chocolate",
    category: "alfajores",
    name: "Alfajor de Chocolate",
    basePrice: 2695,
    unit: "unidad",
    description:
      "Alfajor bañado en chocolate con dulce de leche. La combinación perfecta para los amantes del chocolate.",
    image: "/images/alfajor-chocolate.jpg",
    pricePerUnit: 2695,
    price10: calcPrice10(2695),
    price50: calcPrice50(2695),
    price100: calcPrice100(2695),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: 2695 },
      { label: "Caja x6", price: 4844 },
      { label: "Caja x10/12", price: 7294 },
    ],
  },
  {
    id: "alfajor-coco",
    category: "alfajores",
    name: "Alfajor de Coco",
    basePrice: 588,
    unit: "unidad",
    description:
      "Delicado alfajor de coco con relleno suave. Liviano y delicioso, ideal para acompañar el mate.",
    image: "/images/alfajor-coco.jpg",
    pricePerUnit: 588,
    price10: calcPrice10(588),
    price50: calcPrice50(588),
    price100: calcPrice100(588),
    hasVariants: true,
    variants: [
      { label: "Caja x6", price: 4939 },
      { label: "Caja x12", price: 4410 },
    ],
  },
  {
    id: "alfajor-almendrado",
    category: "alfajores",
    name: "Alfajor Almendrado",
    basePrice: 711,
    unit: "unidad",
    description:
      "Exquisito alfajor con almendras, textura premium y sabor inigualable. Un producto gourmet artesanal.",
    image: "/images/alfajor-almendrado.jpg",
    pricePerUnit: 711,
    price10: calcPrice10(711),
    price50: calcPrice50(711),
    price100: calcPrice100(711),
    hasVariants: true,
    variants: [
      { label: "Caja x6", price: 4263 },
      { label: "Caja x12", price: 8212 },
    ],
  },

  // ============ VARIOS DULCES ============
  {
    id: "pepas-membrillo",
    category: "varios-dulces",
    name: "Pepas de Membrillo",
    basePrice: 3704,
    unit: "kg",
    description:
      "Clásicas pepas rellenas con membrillo casero. Crujientes por fuera, dulces por dentro.",
    image: "/images/pepas-membrillo.jpg",
    pricePerUnit: 3704,
    price10: calcPrice10(3704),
    price50: calcPrice50(3704),
    price100: calcPrice100(3704),
  },
  {
    id: "pepas-leche",
    category: "varios-dulces",
    name: "Pepas de Dulce de Leche",
    basePrice: 3812,
    unit: "kg",
    description:
      "Pepas artesanales con dulce de leche casero. Un clásico reinventado con todo el sabor campestre.",
    image: "/images/pepas-leche.jpg",
    pricePerUnit: 3812,
    price10: calcPrice10(3812),
    price50: calcPrice50(3812),
    price100: calcPrice100(3812),
  },
  {
    id: "masitas-varias",
    category: "varios-dulces",
    name: "Masitas Varias",
    basePrice: 3391,
    unit: "kg",
    description:
      "Surtido de masitas artesanales, cada una con sabor único. Perfectas para compartir en familia.",
    image: "/images/masitas-varias.jpg",
    pricePerUnit: 3391,
    price10: calcPrice10(3391),
    price50: calcPrice50(3391),
    price100: calcPrice100(3391),
  },
  {
    id: "materas",
    category: "varios-dulces",
    name: "Materas",
    basePrice: 4488,
    unit: "kg",
    description:
      "Galletitas materas ideales para acompañar el mate. Crocantes y con el punto justo de dulzura.",
    image: "/images/materas.jpg",
    pricePerUnit: 4488,
    price10: calcPrice10(4488),
    price50: calcPrice50(4488),
    price100: calcPrice100(4488),
  },
  {
    id: "secas",
    category: "varios-dulces",
    name: "Secas",
    basePrice: 4586,
    unit: "kg",
    description:
      "Masitas secas surtidas, elaboradas con ingredientes seleccionados. Calidad artesanal en cada unidad.",
    image: "/images/secas.jpg",
    pricePerUnit: 4586,
    price10: calcPrice10(4586),
    price50: calcPrice50(4586),
    price100: calcPrice100(4586),
  },
  {
    id: "trufas",
    category: "varios-dulces",
    name: "Trufas",
    basePrice: 4488,
    unit: "kg",
    description:
      "Trufas de chocolate artesanales, elaboradas con cacao de primera calidad. Un bocado de puro placer.",
    image: "/images/trufas.jpg",
    pricePerUnit: 4488,
    price10: calcPrice10(4488),
    price50: calcPrice50(4488),
    price100: calcPrice100(4488),
  },
  {
    id: "copitos",
    category: "varios-dulces",
    name: "Copitos",
    basePrice: 6507,
    unit: "kg",
    description:
      "Livianos copitos de merengue que se deshacen en la boca. Ideales para decorar y disfrutar.",
    image: "/images/copitos.jpg",
    pricePerUnit: 6507,
    price10: calcPrice10(6507),
    price50: calcPrice50(6507),
    price100: calcPrice100(6507),
  },
  {
    id: "brownie",
    category: "varios-dulces",
    name: "Brownie Porción",
    basePrice: 4283,
    unit: "porción",
    description:
      "Brownie húmedo y chocolatoso, con nueces. Porción generosa de puro chocolate artesanal.",
    image: "/images/brownie.jpg",
    pricePerUnit: 4283,
    price10: calcPrice10(4283),
    price50: calcPrice50(4283),
    price100: calcPrice100(4283),
  },

  // ============ SALADOS ============
  {
    id: "saborizadas",
    category: "salados",
    name: "Saborizadas",
    basePrice: 2156,
    unit: "unidad",
    description:
      "Galletitas saborizadas artesanales, con hierbas y especias seleccionadas. Perfectas para picoteo.",
    image: "/images/saborizadas.jpg",
    pricePerUnit: 2156,
    price10: calcPrice10(2156),
    price50: calcPrice50(2156),
    price100: calcPrice100(2156),
  },
  {
    id: "marineras",
    category: "salados",
    name: "Marineras",
    basePrice: 1882,
    unit: "unidad",
    description:
      "Galletas marineras crocantes, ideales para acompañar picadas, quesos y fiambres.",
    image: "/images/marineras.jpg",
    pricePerUnit: 1882,
    price10: calcPrice10(1882),
    price50: calcPrice50(1882),
    price100: calcPrice100(1882),
  },
  {
    id: "pizzetas",
    category: "salados",
    name: "Pizzetas",
    basePrice: 686,
    unit: "unidad",
    description:
      "Mini pizzetas listas para preparar con tus ingredientes favoritos. Base artesanal y esponjosa.",
    image: "/images/pizzetas.jpg",
    pricePerUnit: 686,
    price10: calcPrice10(686),
    price50: calcPrice50(686),
    price100: calcPrice100(686),
  },
  {
    id: "pizzetas-listas",
    category: "salados",
    name: "Pizzetas Listas",
    basePrice: 2176,
    unit: "unidad",
    description:
      "Pizzetas ya preparadas con salsa y muzzarella. Solo calentar y disfrutar en minutos.",
    image: "/images/pizzetas-listas.jpg",
    pricePerUnit: 2176,
    price10: calcPrice10(2176),
    price50: calcPrice50(2176),
    price100: calcPrice100(2176),
  },
  {
    id: "pizzas-listas",
    category: "salados",
    name: "Pizzas Listas",
    basePrice: 8624,
    unit: "unidad",
    description:
      "Pizza grande lista para hornear. Masa artesanal con salsa casera y abundante muzzarella.",
    image: "/images/pizzas-listas.jpg",
    pricePerUnit: 8624,
    price10: calcPrice10(8624),
    price50: calcPrice50(8624),
    price100: calcPrice100(8624),
  },
  {
    id: "pre-pizzas",
    category: "salados",
    name: "Pre Pizzas",
    basePrice: 2607,
    unit: "unidad",
    description:
      "Bases de pizza artesanales listas para que les pongas lo que más te guste. Masa perfecta.",
    image: "/images/pre-pizzas.jpg",
    pricePerUnit: 2607,
    price10: calcPrice10(2607),
    price50: calcPrice50(2607),
    price100: calcPrice100(2607),
  },
  {
    id: "plancha-pizza-grande",
    category: "salados",
    name: "Plancha de Pizza 45x70",
    basePrice: 28126,
    unit: "plancha",
    description:
      "Plancha grande de pizza artesanal (45x70cm). Ideal para eventos, reuniones y locales gastronómicos.",
    image: "/images/plancha-pizza-grande.jpg",
    pricePerUnit: 28126,
    price10: calcPrice10(28126),
    price50: calcPrice50(28126),
    price100: calcPrice100(28126),
  },
  {
    id: "plancha-pizza-chica",
    category: "salados",
    name: "Plancha de Pizza 45x50",
    basePrice: 21168,
    unit: "plancha",
    description:
      "Plancha de pizza artesanal (45x50cm). Tamaño perfecto para reuniones familiares.",
    image: "/images/plancha-pizza-chica.jpg",
    pricePerUnit: 21168,
    price10: calcPrice10(21168),
    price50: calcPrice50(21168),
    price100: calcPrice100(21168),
  },
  {
    id: "torta-salada-grande",
    category: "salados",
    name: "Torta Salada Grande",
    basePrice: 46472,
    unit: "unidad",
    description:
      "Torta salada grande con relleno abundante y variado. Ideal para eventos y celebraciones.",
    image: "/images/torta-salada-grande.jpg",
    pricePerUnit: 46472,
    price10: calcPrice10(46472),
    price50: calcPrice50(46472),
    price100: calcPrice100(46472),
  },
  {
    id: "torta-salada-chica",
    category: "salados",
    name: "Torta Salada Chica",
    basePrice: 31801,
    unit: "unidad",
    description:
      "Torta salada chica, perfecta para reuniones íntimas. Relleno casero y masa hojaldrada.",
    image: "/images/torta-salada-chica.jpg",
    pricePerUnit: 31801,
    price10: calcPrice10(31801),
    price50: calcPrice50(31801),
    price100: calcPrice100(31801),
  },
  {
    id: "empanadas-copetin",
    category: "salados",
    name: "Empanadas Copetín",
    basePrice: 5312,
    unit: "docena",
    description:
      "Mini empanadas de copetín, ideales para eventos y picadas. Variedad de gustos disponibles.",
    image: "/images/empanadas-copetin.jpg",
    pricePerUnit: 5312,
    price10: calcPrice10(5312),
    price50: calcPrice50(5312),
    price100: calcPrice100(5312),
  },

  // ============ CATERING ============
  {
    id: "mesa-dulce-grande",
    category: "catering",
    name: "Mesa Dulce Grande",
    basePrice: 12916,
    unit: "por persona",
    description:
      "Mesa dulce completa para eventos grandes. Incluye variedad de masitas, alfajores, tortas y más. Todo artesanal.",
    image: "/images/mesa-dulce-grande.jpg",
    pricePerUnit: 12916,
    price10: calcPrice10(12916),
    price50: calcPrice50(12916),
    price100: calcPrice100(12916),
  },
  {
    id: "mesa-dulce-chica",
    category: "catering",
    name: "Mesa Dulce Chica",
    basePrice: 10702,
    unit: "por persona",
    description:
      "Mesa dulce para eventos íntimos. Selección cuidada de dulces artesanales con presentación impecable.",
    image: "/images/mesa-dulce-chica.jpg",
    pricePerUnit: 10702,
    price10: calcPrice10(10702),
    price50: calcPrice50(10702),
    price100: calcPrice100(10702),
  },

  // ============ HOJALDRES ============
  {
    id: "madrilenos",
    category: "hojaldres",
    name: "Madrileños x2",
    basePrice: 4939,
    unit: "pack x2",
    description:
      "Par de madrileños hojaldrados con dulce de leche. Crujientes capas de hojaldre artesanal.",
    image: "/images/madrilenos.jpg",
    pricePerUnit: 4939,
    price10: calcPrice10(4939),
    price50: calcPrice50(4939),
    price100: calcPrice100(4939),
  },
  {
    id: "canoncitos-con-bano",
    category: "hojaldres",
    name: "Cañoncitos DDL c/Baño",
    basePrice: 5331,
    unit: "unidad",
    description:
      "Cañoncitos de hojaldre rellenos de dulce de leche con baño de chocolate o glaseado. Irresistibles.",
    image: "/images/canoncitos-bano.jpg",
    pricePerUnit: 5331,
    price10: calcPrice10(5331),
    price50: calcPrice50(5331),
    price100: calcPrice100(5331),
  },
  {
    id: "canoncitos-sin-bano",
    category: "hojaldres",
    name: "Cañoncitos DDL s/Baño",
    basePrice: 5214,
    unit: "unidad",
    description:
      "Cañoncitos de hojaldre clásicos rellenos de dulce de leche. Puro sabor artesanal sin baño.",
    image: "/images/canoncitos-sin-bano.jpg",
    pricePerUnit: 5214,
    price10: calcPrice10(5214),
    price50: calcPrice50(5214),
    price100: calcPrice100(5214),
  },
  {
    id: "palmeritas-200",
    category: "hojaldres",
    name: "Palmeritas 200g",
    basePrice: 5214,
    unit: "pack 200g",
    description:
      "Palmeritas de hojaldre caramelizadas, crujientes y dulces. Pack de 200g de pura tentación.",
    image: "/images/palmeritas.jpg",
    pricePerUnit: 5214,
    price10: calcPrice10(5214),
    price50: calcPrice50(5214),
    price100: calcPrice100(5214),
    hasVariants: true,
    variants: [
      { label: "200g", price: 5214 },
      { label: "1 Kg", price: 14778 },
    ],
  },
  {
    id: "palmeron",
    category: "hojaldres",
    name: "Palmerón",
    basePrice: 3214,
    unit: "unidad",
    description:
      "Palmerón gigante de hojaldre caramelizado. Versión XL de la clásica palmerita, para compartir.",
    image: "/images/palmeron.jpg",
    pricePerUnit: 3214,
    price10: calcPrice10(3214),
    price50: calcPrice50(3214),
    price100: calcPrice100(3214),
  },
  {
    id: "churrinches-200",
    category: "hojaldres",
    name: "Churrinches 200g",
    basePrice: 4332,
    unit: "pack 200g",
    description:
      "Churrinches de hojaldre artesanal, crocantes y livianos. Ideales para la merienda.",
    image: "/images/churrinches.jpg",
    pricePerUnit: 4332,
    price10: calcPrice10(4332),
    price50: calcPrice50(4332),
    price100: calcPrice100(4332),
    hasVariants: true,
    variants: [
      { label: "200g", price: 4332 },
      { label: "1 Kg", price: 15131 },
    ],
  },
  {
    id: "hojaldre-manzana",
    category: "hojaldres",
    name: "Hojaldre con Manzana x2",
    basePrice: 2058,
    unit: "pack x2",
    description:
      "Hojaldre relleno de manzana caramelizada con canela. Dos unidades de sabor casero irresistible.",
    image: "/images/hojaldre-manzana.jpg",
    pricePerUnit: 2058,
    price10: calcPrice10(2058),
    price50: calcPrice50(2058),
    price100: calcPrice100(2058),
  },

  // ============ FROLAS ============
  {
    id: "frola-p15",
    category: "frolas",
    name: "Pasta Frola P.15",
    basePrice: 2489,
    unit: "unidad",
    description:
      "Pasta frola chica (15cm) con dulce de membrillo o batata. Receta tradicional hecha con amor.",
    image: "/images/frola-p15.jpg",
    pricePerUnit: 2489,
    price10: calcPrice10(2489),
    price50: calcPrice50(2489),
    price100: calcPrice100(2489),
  },
  {
    id: "frola-p20",
    category: "frolas",
    name: "Pasta Frola P.20",
    basePrice: 4939,
    unit: "unidad",
    description:
      "Pasta frola mediana (20cm), ideal para compartir en familia. Masa mantecosa y dulce casero.",
    image: "/images/frola-p20.jpg",
    pricePerUnit: 4939,
    price10: calcPrice10(4939),
    price50: calcPrice50(4939),
    price100: calcPrice100(4939),
  },
  {
    id: "frola-p23",
    category: "frolas",
    name: "Pasta Frola P.23",
    basePrice: 5684,
    unit: "unidad",
    description:
      "Pasta frola grande (23cm) con generoso relleno casero. La estrella de toda mesa familiar.",
    image: "/images/frola-p23.jpg",
    pricePerUnit: 5684,
    price10: calcPrice10(5684),
    price50: calcPrice50(5684),
    price100: calcPrice100(5684),
  },
  {
    id: "frola-p33",
    category: "frolas",
    name: "Pasta Frola P.33",
    basePrice: 10153,
    unit: "unidad",
    description:
      "Pasta frola extra grande (33cm) para eventos y celebraciones. Abundante relleno artesanal.",
    image: "/images/frola-p33.jpg",
    pricePerUnit: 10153,
    price10: calcPrice10(10153),
    price50: calcPrice50(10153),
    price100: calcPrice100(10153),
  },

  // ============ TARTAS ============
  {
    id: "tarta-p15",
    category: "tartas",
    name: "Tarta P.15",
    basePrice: 2724,
    unit: "unidad",
    description:
      "Tarta artesanal chica (15cm). Masa crocante con relleno a elección. Perfecta para una porción individual.",
    image: "/images/tarta-p15.jpg",
    pricePerUnit: 2724,
    price10: calcPrice10(2724),
    price50: calcPrice50(2724),
    price100: calcPrice100(2724),
  },
  {
    id: "tarta-p20",
    category: "tartas",
    name: "Tarta P.20",
    basePrice: 5165,
    unit: "unidad",
    description:
      "Tarta artesanal mediana (20cm) con relleno casero generoso. Ideal para compartir entre dos.",
    image: "/images/tarta-p20.jpg",
    pricePerUnit: 5165,
    price10: calcPrice10(5165),
    price50: calcPrice50(5165),
    price100: calcPrice100(5165),
  },
  {
    id: "tarta-p23",
    category: "tartas",
    name: "Tarta P.23",
    basePrice: 5949,
    unit: "unidad",
    description:
      "Tarta artesanal grande (23cm) perfecta para la mesa familiar. Relleno abundante y masa hojaldrada.",
    image: "/images/tarta-p23.jpg",
    pricePerUnit: 5949,
    price10: calcPrice10(5949),
    price50: calcPrice50(5949),
    price100: calcPrice100(5949),
  },
  {
    id: "tarta-p33",
    category: "tartas",
    name: "Tarta P.33",
    basePrice: 10231,
    unit: "unidad",
    description:
      "Tarta artesanal extra grande (33cm). Ideal para eventos, fiestas y reuniones numerosas.",
    image: "/images/tarta-p33.jpg",
    pricePerUnit: 10231,
    price10: calcPrice10(10231),
    price50: calcPrice50(10231),
    price100: calcPrice100(10231),
  },

  // ============ FRUTALES ============
  {
    id: "frutal-p20",
    category: "frutales",
    name: "Torta Frutal P.20",
    basePrice: 22540,
    unit: "unidad",
    description:
      "Torta frutal mediana (20cm) con frutas frescas de estación, crema pastelera y base artesanal.",
    image: "/images/frutal-p20.jpg",
    pricePerUnit: 22540,
    price10: calcPrice10(22540),
    price50: calcPrice50(22540),
    price100: calcPrice100(22540),
  },
  {
    id: "frutal-p23",
    category: "frutales",
    name: "Torta Frutal P.23",
    basePrice: 29400,
    unit: "unidad",
    description:
      "Torta frutal grande (23cm) decorada con frutas frescas. Una obra de arte comestible para celebrar.",
    image: "/images/frutal-p23.jpg",
    pricePerUnit: 29400,
    price10: calcPrice10(29400),
    price50: calcPrice50(29400),
    price100: calcPrice100(29400),
  },
  {
    id: "frutal-p33",
    category: "frutales",
    name: "Torta Frutal P.33",
    basePrice: 40964,
    unit: "unidad",
    description:
      "Torta frutal extra grande (33cm). Espectacular presentación con frutas de estación. Para grandes eventos.",
    image: "/images/frutal-p33.jpg",
    pricePerUnit: 40964,
    price10: calcPrice10(40964),
    price50: calcPrice50(40964),
    price100: calcPrice100(40964),
  },

  // ============ PANADERÍA ============
  {
    id: "pan-saborizado",
    category: "panaderia",
    name: "Pan Saborizado",
    basePrice: 6899,
    unit: "kg",
    description:
      "Pan saborizado artesanal por kilo. Con hierbas, especias y aceite de oliva. Recién horneado.",
    image: "/images/pan-saborizado.jpg",
    pricePerUnit: 6899,
    price10: calcPrice10(6899),
    price50: calcPrice50(6899),
    price100: calcPrice100(6899),
  },
  {
    id: "plancha-frola-tarta",
    category: "panaderia",
    name: "Plancha Frola/Tarta (Coco/Toffe)",
    basePrice: 47540,
    unit: "plancha",
    description:
      "Plancha grande de frola o tarta (Coco/Toffee). Ideal para cortar porciones y vender en tu local.",
    image: "/images/plancha-frola.jpg",
    pricePerUnit: 47540,
    price10: calcPrice10(47540),
    price50: calcPrice50(47540),
    price100: calcPrice100(47540),
  },
  {
    id: "plancha-banana-manzana",
    category: "panaderia",
    name: "Plancha Banana o Manzana",
    basePrice: 49000,
    unit: "plancha",
    description:
      "Plancha grande de torta de banana o manzana. Textura húmeda y sabor casero inigualable.",
    image: "/images/plancha-banana.jpg",
    pricePerUnit: 49000,
    price10: calcPrice10(49000),
    price50: calcPrice50(49000),
    price100: calcPrice100(49000),
  },
  {
    id: "budin-chico",
    category: "panaderia",
    name: "Budín Chico",
    basePrice: 5076,
    unit: "unidad",
    description:
      "Budín artesanal chico, húmedo y esponjoso. Disponible en varios sabores: vainilla, chocolate, mármol.",
    image: "/images/budin-chico.jpg",
    pricePerUnit: 5076,
    price10: calcPrice10(5076),
    price50: calcPrice50(5076),
    price100: calcPrice100(5076),
  },
  {
    id: "budin-grande",
    category: "panaderia",
    name: "Budín Grande",
    basePrice: 9300,
    unit: "unidad",
    description:
      "Budín artesanal grande, generoso y perfecto para compartir. Hecho con ingredientes premium.",
    image: "/images/budin-grande.jpg",
    pricePerUnit: 9300,
    price10: calcPrice10(9300),
    price50: calcPrice50(9300),
    price100: calcPrice100(9300),
  },
  {
    id: "marineras-panaderia",
    category: "panaderia",
    name: "Marineras (base 955)",
    basePrice: 1872,
    unit: "unidad",
    description:
      "Galletas marineras artesanales, crocantes y perfectas para acompañar cualquier comida.",
    image: "/images/marineras-pan.jpg",
    pricePerUnit: 1872,
    price10: calcPrice10(1872),
    price50: calcPrice50(1872),
    price100: calcPrice100(1872),
  },
  {
    id: "combinadas",
    category: "panaderia",
    name: "Combinadas",
    basePrice: 5684,
    unit: "kg",
    description:
      "Surtido combinado de panificados artesanales. Variedad de sabores y texturas en cada kilo.",
    image: "/images/combinadas.jpg",
    pricePerUnit: 5684,
    price10: calcPrice10(5684),
    price50: calcPrice50(5684),
    price100: calcPrice100(5684),
  },
  {
    id: "porcion-frola",
    category: "panaderia",
    name: "Porción de Frola",
    basePrice: 2352,
    unit: "porción",
    description:
      "Generosa porción de pasta frola artesanal. Lista para vender individualmente en tu local.",
    image: "/images/porcion-frola.jpg",
    pricePerUnit: 2352,
    price10: calcPrice10(2352),
    price50: calcPrice50(2352),
    price100: calcPrice100(2352),
  },
  {
    id: "panettones",
    category: "panaderia",
    name: "Panettones",
    basePrice: 4978,
    unit: "unidad",
    description:
      "Panettone artesanal con frutas abrillantadas y chips de chocolate. Esponjoso y aromático.",
    image: "/images/panettones.jpg",
    pricePerUnit: 4978,
    price10: calcPrice10(4978),
    price50: calcPrice50(4978),
    price100: calcPrice100(4978),
  },
  {
    id: "roscas",
    category: "panaderia",
    name: "Roscas",
    basePrice: 5047,
    unit: "unidad",
    description:
      "Roscas artesanales esponjosas y aromáticas. Perfectas para el desayuno y la merienda.",
    image: "/images/roscas.jpg",
    pricePerUnit: 5047,
    price10: calcPrice10(5047),
    price50: calcPrice50(5047),
    price100: calcPrice100(5047),
  },

  // ============ PICADAS ============
  {
    id: "picada-chica",
    category: "picadas",
    name: "Picada Chica",
    basePrice: 6860,
    unit: "unidad",
    description:
      "Picada chica con selección de quesos, fiambres, aceitunas y crackers artesanales. Para 2-3 personas.",
    image: "/images/picada-chica.jpg",
    pricePerUnit: 6860,
    price10: calcPrice10(6860),
    price50: calcPrice50(6860),
    price100: calcPrice100(6860),
  },
  {
    id: "picada-grande",
    category: "picadas",
    name: "Picada Grande",
    basePrice: 8232,
    unit: "unidad",
    description:
      "Picada grande con variedad de quesos, fiambres premium y acompañamientos artesanales. Para 4-6 personas.",
    image: "/images/picada-grande.jpg",
    pricePerUnit: 8232,
    price10: calcPrice10(8232),
    price50: calcPrice50(8232),
    price100: calcPrice100(8232),
  },
  {
    id: "picada-completa",
    category: "picadas",
    name: "Picada Completa",
    basePrice: 22697,
    unit: "unidad",
    description:
      "Picada completa premium con todo incluido: quesos, fiambres, dips, frutas secas, crackers y más. Para 8+ personas.",
    image: "/images/picada-completa.jpg",
    pricePerUnit: 22697,
    price10: calcPrice10(22697),
    price50: calcPrice50(22697),
    price100: calcPrice100(22697),
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
