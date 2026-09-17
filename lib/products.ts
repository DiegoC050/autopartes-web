export type Product = {
  id: string
  name: string
  category: string
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  image: string
  badge?: string
}

export const products: Product[] = [
  {
    id: "frenos-perf",
    name: 'Kit de Frenos Deportivos Ranurados',
    category: "Frenos",
    price: 2499,
    oldPrice: 2999,
    rating: 4.8,
    reviews: 214,
    image: "/product-brakes.png",
    badge: "Oferta",
  },
  {
    id: "bateria-agm",
    name: "Batería AGM 75Ah Alto Rendimiento",
    category: "Eléctrico",
    price: 3190,
    rating: 4.7,
    reviews: 168,
    image: "/product-battery.png",
    badge: "Más vendido",
  },
  {
    id: "faros-led",
    name: "Faros LED Full Xenón 6000K",
    category: "Iluminación",
    price: 1850,
    oldPrice: 2200,
    rating: 4.9,
    reviews: 342,
    image: "/product-headlight.png",
    badge: "Oferta",
  },
  {
    id: "filtros-kit",
    name: "Kit de Filtros Aceite + Aire",
    category: "Motor",
    price: 690,
    rating: 4.6,
    reviews: 97,
    image: "/product-filter.png",
  },
  {
    id: "llanta-perf",
    name: "Llanta Deportiva 225/45 R17",
    category: "Llantas",
    price: 2790,
    rating: 4.8,
    reviews: 256,
    image: "/product-tire.png",
    badge: "Nuevo",
  },
  {
    id: "bujias-iridio",
    name: "Bujías de Iridio (Juego de 4)",
    category: "Motor",
    price: 980,
    oldPrice: 1150,
    rating: 4.7,
    reviews: 133,
    image: "/product-sparkplug.png",
  },
  {
    id: "coilovers",
    name: "Coilovers Ajustables Suspensión",
    category: "Suspensión",
    price: 8990,
    rating: 4.9,
    reviews: 71,
    image: "/product-suspension.png",
    badge: "Premium",
  },
]

export const categories = [
  { name: "Motor", count: 1240, icon: "gauge" },
  { name: "Frenos", count: 860, icon: "disc" },
  { name: "Suspensión", count: 540, icon: "spring" },
  { name: "Eléctrico", count: 970, icon: "battery" },
  { name: "Iluminación", count: 630, icon: "lightbulb" },
  { name: "Llantas", count: 410, icon: "tire" },
]