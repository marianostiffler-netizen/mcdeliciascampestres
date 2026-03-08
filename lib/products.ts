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

// Función para reducir precios en 10%
function decreasePrice10(original: number): number {
  return Math.round(original * 0.90);
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
    basePrice: increasePrice40(2187),
    unit: "unidad",
    description:
      "Suave alfajor de maicena con dulce de leche artesanal, bañado en coco rallado. Tradición argentina en cada bocado.",
    image: "/images/alfajor-maicena.jpg",
    pricePerUnit: increasePrice40(2187),
    price10: calcPrice10(increasePrice40(2187)),
    price50: calcPrice50(increasePrice40(2187)),
    price100: calcPrice100(increasePrice40(2187)),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: increasePrice40(2187) },
      { label: "Caja x6", price: increasePrice40(3780) },
      { label: "Caja x10/12", price: increasePrice40(5670) },
    ],
  },
  {
    id: "alfajor-crocante",
    category: "alfajores",
    name: "Alfajor Crocante",
    basePrice: 2426,
    unit: "unidad",
    description:
      "Alfajor crocante con relleno de dulce de leche, una textura irresistible que cruje con cada mordisco.",
    image: "/images/alfajor-crocante.jpg",
    pricePerUnit: 2426,
    price10: calcPrice10(2426),
    price50: calcPrice50(2426),
    price100: calcPrice100(2426),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: 2426 },
      { label: "Caja x6", price: 5306 },
      { label: "Caja x10/12", price: 7294 },
    ],
  },
  {
    id: "alfajor-chocolate",
    category: "alfajores",
    name: "Alfajor de Chocolate",
    basePrice: 2426,
    unit: "unidad",
    description:
      "Alfajor bañado en chocolate con dulce de leche. La combinación perfecta para los amantes del chocolate.",
    image: "/images/alfajor-chocolate.jpg",
    pricePerUnit: 2426,
    price10: calcPrice10(2426),
    price50: calcPrice50(2426),
    price100: calcPrice100(2426),
    hasVariants: true,
    variants: [
      { label: "Unidad", price: 2426 },
      { label: "Caja x6", price: 4844 },
      { label: "Caja x10/12", price: 7294 },
    ],
  },
  {
    id: "alfajor-coco",
    category: "alfajores",
    name: "Alfajor de Coco",
    basePrice: 529,
    unit: "unidad",
    description:
      "Delicado alfajor de coco con relleno suave. Liviano y delicioso, ideal para acompañar el mate.",
    image: "/images/alfajor-coco.jpg",
    pricePerUnit: 529,
    price10: calcPrice10(529),
    price50: calcPrice50(529),
    price100: calcPrice100(529),
    hasVariants: true,
    variants: [
      { label: "Caja x6", price: 4445 },
      { label: "Caja x12", price: 3969 },
    ],
  },
  {
    id: "alfajor-almendrado",
    category: "alfajores",
    name: "Alfajor Almendrado",
    basePrice: 640,
    unit: "unidad",
    description:
      "Exquisito alfajor con almendras, textura premium y sabor inigualable. Un producto gourmet artesanal.",
    image: "/images/alfajor-almendrado.jpg",
    pricePerUnit: 640,
    price10: calcPrice10(640),
    price50: calcPrice50(640),
    price100: calcPrice100(640),
    hasVariants: true,
    variants: [
      { label: "Caja x6", price: 3837 },
      { label: "Caja x12", price: 7391 },
    ],
  },

  // ============ VARIOS DULCES ============
  {
    id: "pepas-membrillo",
    category: "varios-dulces",
    name: "Pepas de Membrillo",
    basePrice: 3334,
    unit: "kg",
    description:
      "Clásicas pepas rellenas con membrillo casero. Crujientes por fuera, dulces por dentro.",
    image: "/images/pepas-membrillo.jpg",
    pricePerUnit: 3334,
    price10: calcPrice10(3334),
    price50: calcPrice50(3334),
    price100: calcPrice100(3334),
  },
  {
    id: "pepas-leche",
    category: "varios-dulces",
    name: "Pepas de Dulce de Leche",
    basePrice: 3431,
    unit: "kg",
    description:
      "Pepas artesanales con dulce de leche casero. Un clásico reinventado con todo el sabor campestre.",
    image: "/images/pepas-leche.jpg",
    pricePerUnit: 3431,
    price10: calcPrice10(3431),
    price50: calcPrice50(3431),
    price100: calcPrice100(3431),
  },
  {
    id: "masitas-varias",
    category: "varios-dulces",
    name: "Masitas Varias",
    basePrice: 3052,
    unit: "kg",
    description:
      "Surtido de masitas artesanales, cada una con sabor único. Perfectas para compartir en familia.",
    image: "/images/masitas-varias.jpg",
    pricePerUnit: 3052,
    price10: calcPrice10(3052),
    price50: calcPrice50(3052),
    price100: calcPrice100(3052),
  },
  {
    id: "materas",
    category: "varios-dulces",
    name: "Materas",
    basePrice: 4039,
    unit: "kg",
    description:
      "Galletitas materas ideales para acompañar el mate. Crocantes y con el punto justo de dulzura.",
    image: "/images/materas.jpg",
    pricePerUnit: 4039,
    price10: calcPrice10(4039),
    price50: calcPrice50(4039),
    price100: calcPrice100(4039),
  },
  {
    id: "secas",
    category: "varios-dulces",
    name: "Secas",
    basePrice: 4127,
    unit: "kg",
    description:
      "Masitas secas surtidas, elaboradas con ingredientes seleccionados. Calidad artesanal en cada unidad.",
    image: "/images/secas.jpg",
    pricePerUnit: 4127,
    price10: calcPrice10(4127),
    price50: calcPrice50(4127),
    price100: calcPrice100(4127),
  },
  {
    id: "trufas",
    category: "varios-dulces",
    name: "Trufas",
    basePrice: 4039,
    unit: "kg",
    description:
      "Trufas de chocolate artesanales, elaboradas con cacao de primera calidad. Un bocado de puro placer.",
    image: "/images/trufas.jpg",
    pricePerUnit: 4039,
    price10: calcPrice10(4039),
    price50: calcPrice50(4039),
    price100: calcPrice100(4039),
  },
  {
    id: "copitos",
    category: "varios-dulces",
    name: "Copitos",
    basePrice: 5856,
    unit: "kg",
    description:
      "Livianos copitos de merengue que se deshacen en la boca. Ideales para decorar y disfrutar.",
    image: "/images/copitos.jpg",
    pricePerUnit: 5856,
    price10: calcPrice10(5856),
    price50: calcPrice50(5856),
    price100: calcPrice100(5856),
  },
  {
    id: "brownie",
    category: "varios-dulces",
    name: "Brownie Porción",
    basePrice: 3855,
    unit: "porción",
    description:
      "Brownie húmedo y chocolatoso, con nueces. Porción generosa de puro chocolate artesanal.",
    image: "/images/brownie.jpg",
    pricePerUnit: 3855,
    price10: calcPrice10(3855),
    price50: calcPrice50(3855),
    price100: calcPrice100(3855),
  },

  // ============ SALADOS ============
  {
    id: "saborizadas",
    category: "salados",
    name: "Saborizadas",
    basePrice: 1940,
    unit: "unidad",
    description:
      "Galletitas saborizadas artesanales, con hierbas y especias seleccionadas. Perfectas para picoteo.",
    image: "/images/saborizadas.jpg",
    pricePerUnit: 1940,
    price10: calcPrice10(1940),
    price50: calcPrice50(1940),
    price100: calcPrice100(1940),
  },
  {
    id: "marineras",
    category: "salados",
    name: "Marineras",
    basePrice: 1694,
    unit: "unidad",
    description:
      "Galletas marineras crocantes, ideales para acompañar picadas, quesos y fiambres.",
    image: "/images/marineras.jpg",
    pricePerUnit: 1694,
    price10: calcPrice10(1694),
    price50: calcPrice50(1694),
    price100: calcPrice100(1694),
  },
  {
    id: "pizzetas",
    category: "salados",
    name: "Pizzetas",
    basePrice: 617,
    unit: "unidad",
    description:
      "Mini pizzetas listas para preparar con tus ingredientes favoritos. Base artesanal y esponjosa.",
    image: "/images/pizzetas.jpg",
    pricePerUnit: 617,
    price10: calcPrice10(617),
    price50: calcPrice50(617),
    price100: calcPrice100(617),
  },
  {
    id: "pizzetas-listas",
    category: "salados",
    name: "Pizzetas Listas",
    basePrice: 1958,
    unit: "unidad",
    description:
      "Pizzetas ya preparadas con salsa y muzzarella. Solo calentar y disfrutar en minutos.",
    image: "/images/pizzetas-listas.jpg",
    pricePerUnit: 1958,
    price10: calcPrice10(1958),
    price50: calcPrice50(1958),
    price100: calcPrice100(1958),
  },
  {
    id: "pizzas-listas",
    category: "salados",
    name: "Pizzas Listas",
    basePrice: 7762,
    unit: "unidad",
    description:
      "Pizza grande lista para hornear. Masa artesanal con salsa casera y abundante muzzarella.",
    image: "/images/pizzas-listas.jpg",
    pricePerUnit: 7762,
    price10: calcPrice10(7762),
    price50: calcPrice50(7762),
    price100: calcPrice100(7762),
  },
  {
    id: "pre-pizzas",
    category: "salados",
    name: "Pre Pizzas",
    basePrice: 2346,
    unit: "unidad",
    description:
      "Bases de pizza artesanales listas para que les pongas lo que más te guste. Masa perfecta.",
    image: "/images/pre-pizzas.jpg",
    pricePerUnit: 2346,
    price10: calcPrice10(2346),
    price50: calcPrice50(2346),
    price100: calcPrice100(2346),
  },
  {
    id: "plancha-pizza-grande",
    category: "salados",
    name: "Plancha de Pizza 45x70",
    basePrice: 25313,
    unit: "plancha",
    description:
      "Plancha grande de pizza artesanal (45x70cm). Ideal para eventos, reuniones y locales gastronómicos.",
    image: "/images/plancha-pizza-grande.jpg",
    pricePerUnit: 25313,
    price10: calcPrice10(25313),
    price50: calcPrice50(25313),
    price100: calcPrice100(25313),
  },
  {
    id: "plancha-pizza-chica",
    category: "salados",
    name: "Plancha de Pizza 45x50",
    basePrice: 19051,
    unit: "plancha",
    description:
      "Plancha de pizza artesanal (45x50cm). Tamaño perfecto para reuniones familiares.",
    image: "/images/plancha-pizza-chica.jpg",
    pricePerUnit: 19051,
    price10: calcPrice10(19051),
    price50: calcPrice50(19051),
    price100: calcPrice100(19051),
  },
  {
    id: "torta-salada-grande",
    category: "salados",
    name: "Torta Salada Grande",
    basePrice: 41825,
    unit: "unidad",
    description:
      "Torta salada grande con relleno abundante y variado. Ideal para eventos y celebraciones.",
    image: "/images/torta-salada-grande.jpg",
    pricePerUnit: 41825,
    price10: calcPrice10(41825),
    price50: calcPrice50(41825),
    price100: calcPrice100(41825),
  },
  {
    id: "torta-salada-chica",
    category: "salados",
    name: "Torta Salada Chica",
    basePrice: 28621,
    unit: "unidad",
    description:
      "Torta salada chica, perfecta para reuniones íntimas. Relleno casero y masa hojaldrada.",
    image: "/images/torta-salada-chica.jpg",
    pricePerUnit: 28621,
    price10: calcPrice10(28621),
    price50: calcPrice50(28621),
    price100: calcPrice100(28621),
  },
  {
    id: "empanadas-copetin",
    category: "salados",
    name: "Empanadas Copetín",
    basePrice: 4781,
    unit: "docena",
    description:
      "Mini empanadas de copetín, ideales para eventos y picadas. Variedad de gustos disponibles.",
    image: "/images/empanadas-copetin.jpg",
    pricePerUnit: 4781,
    price10: calcPrice10(4781),
    price50: calcPrice50(4781),
    price100: calcPrice100(4781),
  },

  // ============ CATERING ============
  {
    id: "mesa-dulce-grande",
    category: "catering",
    name: "Mesa Dulce Grande",
    basePrice: 11624,
    unit: "por persona",
    description:
      "Mesa dulce completa para eventos grandes. Incluye variedad de masitas, alfajores, tortas y más. Todo artesanal.",
    image: "/images/mesa-dulce-grande.jpg",
    pricePerUnit: 11624,
    price10: calcPrice10(11624),
    price50: calcPrice50(11624),
    price100: calcPrice100(11624),
  },
  {
    id: "mesa-dulce-chica",
    category: "catering",
    name: "Mesa Dulce Chica",
    basePrice: 9632,
    unit: "por persona",
    description:
      "Mesa dulce para eventos íntimos. Selección cuidada de dulces artesanales con presentación impecable.",
    image: "/images/mesa-dulce-chica.jpg",
    pricePerUnit: 9632,
    price10: calcPrice10(9632),
    price50: calcPrice50(9632),
    price100: calcPrice100(9632),
  },

  // ============ HOJALDRES ============
  {
    id: "madrilenos",
    category: "hojaldres",
    name: "Madrileños x2",
    basePrice: 4445,
    unit: "pack x2",
    description:
      "Par de madrileños hojaldrados con dulce de leche. Crujientes capas de hojaldre artesanal.",
    image: "/images/madrilenos.jpg",
    pricePerUnit: 4445,
    price10: calcPrice10(4445),
    price50: calcPrice50(4445),
    price100: calcPrice100(4445),
  },
  {
    id: "canoncitos-con-bano",
    category: "hojaldres",
    name: "Cañoncitos DDL c/Baño",
    basePrice: 4798,
    unit: "unidad",
    description:
      "Cañoncitos de hojaldre rellenos de dulce de leche con baño de chocolate o glaseado. Irresistibles.",
    image: "/images/canoncitos-bano.jpg",
    pricePerUnit: 4798,
    price10: calcPrice10(4798),
    price50: calcPrice50(4798),
    price100: calcPrice100(4798),
  },
  {
    id: "canoncitos-sin-bano",
    category: "hojaldres",
    name: "Cañoncitos DDL s/Baño",
    basePrice: 4693,
    unit: "unidad",
    description:
      "Cañoncitos de hojaldre clásicos rellenos de dulce de leche. Puro sabor artesanal sin baño.",
    image: "/images/canoncitos-sin-bano.jpg",
    pricePerUnit: 4693,
    price10: calcPrice10(4693),
    price50: calcPrice50(4693),
    price100: calcPrice100(4693),
  },
  {
    id: "palmeritas-200",
    category: "hojaldres",
    name: "Palmeritas 200g",
    basePrice: 4693,
    unit: "pack 200g",
    description:
      "Palmeritas de hojaldre caramelizadas, crujientes y dulces. Pack de 200g de pura tentación.",
    image: "/images/palmeritas.jpg",
    pricePerUnit: 4693,
    price10: calcPrice10(4693),
    price50: calcPrice50(4693),
    price100: calcPrice100(4693),
    hasVariants: true,
    variants: [
      { label: "200g", price: 4693 },
      { label: "1 Kg", price: 13300 },
    ],
  },
  {
    id: "palmeron",
    category: "hojaldres",
    name: "Palmerón",
    basePrice: 2893,
    unit: "unidad",
    description:
      "Palmerón gigante de hojaldre caramelizado. Versión XL de la clásica palmerita, para compartir.",
    image: "/images/palmeron.jpg",
    pricePerUnit: 2893,
    price10: calcPrice10(2893),
    price50: calcPrice50(2893),
    price100: calcPrice100(2893),
  },
  {
    id: "churrinches-200",
    category: "hojaldres",
    name: "Churrinches 200g",
    basePrice: 3899,
    unit: "pack 200g",
    description:
      "Churrinches de hojaldre artesanal, crocantes y livianos. Ideales para la merienda.",
    image: "/images/churrinches.jpg",
    pricePerUnit: 3899,
    price10: calcPrice10(3899),
    price50: calcPrice50(3899),
    price100: calcPrice100(3899),
    hasVariants: true,
    variants: [
      { label: "200g", price: 3899 },
      { label: "1 Kg", price: 15131 },
    ],
  },
  {
    id: "hojaldre-manzana",
    category: "hojaldres",
    name: "Hojaldre con Manzana x2",
    basePrice: 1852,
    unit: "pack x2",
    description:
      "Hojaldre relleno de manzana caramelizada con canela. Dos unidades de sabor casero irresistible.",
    image: "/images/hojaldre-manzana.jpg",
    pricePerUnit: 1852,
    price10: calcPrice10(1852),
    price50: calcPrice50(1852),
    price100: calcPrice100(1852),
  },

  // ============ FROLAS ============
  {
    id: "frola-p15",
    category: "frolas",
    name: "Pasta Frola P.15",
    basePrice: 2240,
    unit: "unidad",
    description:
      "Pasta frola chica (15cm) con dulce de membrillo o batata. Receta tradicional hecha con amor.",
    image: "/images/frola-p15.jpg",
    pricePerUnit: 2240,
    price10: calcPrice10(2240),
    price50: calcPrice50(2240),
    price100: calcPrice100(2240),
  },
  {
    id: "frola-p20",
    category: "frolas",
    name: "Pasta Frola P.20",
    basePrice: 4445,
    unit: "unidad",
    description:
      "Pasta frola mediana (20cm), ideal para compartir en familia. Masa mantecosa y dulce casero.",
    image: "/images/frola-p20.jpg",
    pricePerUnit: 4445,
    price10: calcPrice10(4445),
    price50: calcPrice50(4445),
    price100: calcPrice100(4445),
  },
  {
    id: "frola-p23",
    category: "frolas",
    name: "Pasta Frola P.23",
    basePrice: 5116,
    unit: "unidad",
    description:
      "Pasta frola grande (23cm) con generoso relleno casero. La estrella de toda mesa familiar.",
    image: "/images/frola-p23.jpg",
    pricePerUnit: 5116,
    price10: calcPrice10(5116),
    price50: calcPrice50(5116),
    price100: calcPrice100(5116),
  },
  {
    id: "frola-p33",
    category: "frolas",
    name: "Pasta Frola P.33",
    basePrice: 9138,
    unit: "unidad",
    description:
      "Pasta frola extra grande (33cm) para eventos y celebraciones. Abundante relleno artesanal.",
    image: "/images/frola-p33.jpg",
    pricePerUnit: 9138,
    price10: calcPrice10(9138),
    price50: calcPrice50(9138),
    price100: calcPrice100(9138),
  },

  // ============ TARTAS ============
  {
    id: "tarta-p15",
    category: "tartas",
    name: "Tarta P.15",
    basePrice: 2452,
    unit: "unidad",
    description:
      "Tarta artesanal chica (15cm). Masa crocante con relleno a elección. Perfecta para una porción individual.",
    image: "/images/tarta-p15.jpg",
    pricePerUnit: 2452,
    price10: calcPrice10(2452),
    price50: calcPrice50(2452),
    price100: calcPrice100(2452),
  },
  {
    id: "tarta-p20",
    category: "tartas",
    name: "Tarta P.20",
    basePrice: 4649,
    unit: "unidad",
    description:
      "Tarta artesanal mediana (20cm) con relleno casero generoso. Ideal para compartir entre dos.",
    image: "/images/tarta-p20.jpg",
    pricePerUnit: 4649,
    price10: calcPrice10(4649),
    price50: calcPrice50(4649),
    price100: calcPrice100(4649),
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
    basePrice: 9208,
    unit: "unidad",
    description:
      "Tarta artesanal extra grande (33cm). Ideal para eventos, fiestas y reuniones numerosas.",
    image: "/images/tarta-p33.jpg",
    pricePerUnit: 9208,
    price10: calcPrice10(9208),
    price50: calcPrice50(9208),
    price100: calcPrice100(9208),
  },

  // ============ FRUTALES ============
  {
    id: "frutal-p20",
    category: "frutales",
    name: "Torta Frutal P.20",
    basePrice: 20286,
    unit: "unidad",
    description:
      "Torta frutal mediana (20cm) con frutas frescas de estación, crema pastelera y base artesanal.",
    image: "/images/frutal-p20.jpg",
    pricePerUnit: 20286,
    price10: calcPrice10(20286),
    price50: calcPrice50(20286),
    price100: calcPrice100(20286),
  },
  {
    id: "frutal-p23",
    category: "frutales",
    name: "Torta Frutal P.23",
    basePrice: 26460,
    unit: "unidad",
    description:
      "Torta frutal grande (23cm) decorada con frutas frescas. Una obra de arte comestible para celebrar.",
    image: "/images/frutal-p23.jpg",
    pricePerUnit: 26460,
    price10: calcPrice10(26460),
    price50: calcPrice50(26460),
    price100: calcPrice100(26460),
  },
  {
    id: "frutal-p33",
    category: "frutales",
    name: "Torta Frutal P.33",
    basePrice: 36868,
    unit: "unidad",
    description:
      "Torta frutal extra grande (33cm). Espectacular presentación con frutas de estación. Para grandes eventos.",
    image: "/images/frutal-p33.jpg",
    pricePerUnit: 36868,
    price10: calcPrice10(36868),
    price50: calcPrice50(36868),
    price100: calcPrice100(36868),
  },

  // ============ PANADERÍA ============
  {
    id: "pan-saborizado",
    category: "panaderia",
    name: "Pan Saborizado",
    basePrice: 6209,
    unit: "kg",
    description:
      "Pan saborizado artesanal por kilo. Con hierbas, especias y aceite de oliva. Recién horneado.",
    image: "/images/pan-saborizado.jpg",
    pricePerUnit: 6209,
    price10: calcPrice10(6209),
    price50: calcPrice50(6209),
    price100: calcPrice100(6209),
  },
  {
    id: "plancha-frola-tarta",
    category: "panaderia",
    name: "Plancha Frola/Tarta (Coco/Toffe)",
    basePrice: 42786,
    unit: "plancha",
    description:
      "Plancha grande de frola o tarta (Coco/Toffee). Ideal para cortar porciones y vender en tu local.",
    image: "/images/plancha-frola.jpg",
    pricePerUnit: 42786,
    price10: calcPrice10(42786),
    price50: calcPrice50(42786),
    price100: calcPrice100(42786),
  },
  {
    id: "plancha-banana-manzana",
    category: "panaderia",
    name: "Plancha Banana o Manzana",
    basePrice: 44100,
    unit: "plancha",
    description:
      "Plancha grande de torta de banana o manzana. Textura húmeda y sabor casero inigualable.",
    image: "/images/plancha-banana.jpg",
    pricePerUnit: 44100,
    price10: calcPrice10(44100),
    price50: calcPrice50(44100),
    price100: calcPrice100(44100),
  },
  {
    id: "budin-chico",
    category: "panaderia",
    name: "Budín Chico",
    basePrice: 4568,
    unit: "unidad",
    description:
      "Budín artesanal chico, húmedo y esponjoso. Disponible en varios sabores: vainilla, chocolate, mármol.",
    image: "/images/budin-chico.jpg",
    pricePerUnit: 4568,
    price10: calcPrice10(4568),
    price50: calcPrice50(4568),
    price100: calcPrice100(4568),
  },
  {
    id: "budin-grande",
    category: "panaderia",
    name: "Budín Grande",
    basePrice: 8370,
    unit: "unidad",
    description:
      "Budín artesanal grande, generoso y perfecto para compartir. Hecho con ingredientes premium.",
    image: "/images/budin-grande.jpg",
    pricePerUnit: 8370,
    price10: calcPrice10(8370),
    price50: calcPrice50(8370),
    price100: calcPrice100(8370),
  },
  {
    id: "marineras-panaderia",
    category: "panaderia",
    name: "Marineras (base 955)",
    basePrice: 1685,
    unit: "unidad",
    description:
      "Galletas marineras artesanales, crocantes y perfectas para acompañar cualquier comida.",
    image: "/images/marineras-pan.jpg",
    pricePerUnit: 1685,
    price10: calcPrice10(1685),
    price50: calcPrice50(1685),
    price100: calcPrice100(1685),
  },
  {
    id: "combinadas",
    category: "panaderia",
    name: "Combinadas",
    basePrice: 5116,
    unit: "kg",
    description:
      "Surtido combinado de panificados artesanales. Variedad de sabores y texturas en cada kilo.",
    image: "/images/combinadas.jpg",
    pricePerUnit: 5116,
    price10: calcPrice10(5116),
    price50: calcPrice50(5116),
    price100: calcPrice100(5116),
  },
  {
    id: "porcion-frola",
    category: "panaderia",
    name: "Porción de Frola",
    basePrice: 2117,
    unit: "porción",
    description:
      "Generosa porción de pasta frola artesanal. Lista para vender individualmente en tu local.",
    image: "/images/porcion-frola.jpg",
    pricePerUnit: 2117,
    price10: calcPrice10(2117),
    price50: calcPrice50(2117),
    price100: calcPrice100(2117),
  },
  {
    id: "panettones",
    category: "panaderia",
    name: "Panettones",
    basePrice: 4480,
    unit: "unidad",
    description:
      "Panettone artesanal con frutas abrillantadas y chips de chocolate. Esponjoso y aromático.",
    image: "/images/panettones.jpg",
    pricePerUnit: 4480,
    price10: calcPrice10(4480),
    price50: calcPrice50(4480),
    price100: calcPrice100(4480),
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
    basePrice: 6174,
    unit: "unidad",
    description:
      "Picada chica con selección de quesos, fiambres, aceitunas y crackers artesanales. Para 2-3 personas.",
    image: "/images/picada-chica.jpg",
    pricePerUnit: 6174,
    price10: calcPrice10(6174),
    price50: calcPrice50(6174),
    price100: calcPrice100(6174),
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
    basePrice: 20427,
    unit: "unidad",
    description:
      "Picada completa premium con todo incluido: quesos, fiambres, dips, frutas secas, crackers y más. Para 8+ personas.",
    image: "/images/picada-completa.jpg",
    pricePerUnit: 20427,
    price10: calcPrice10(20427),
    price50: calcPrice50(20427),
    price100: calcPrice100(20427),
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
