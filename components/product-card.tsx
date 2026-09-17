import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 0,
})

const badgeStyles: Record<string, string> = {
  Oferta: "bg-destructive text-white",
  "Más vendido": "bg-primary text-primary-foreground",
  Nuevo: "bg-emerald-500 text-white",
  Premium: "bg-amber-200 text-amber-950",
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-primary/50">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
              badgeStyles[product.badge] ?? "bg-secondary text-secondary-foreground"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="text-xs uppercase tracking-wider text-primary">{product.category}</span>
        <h3 className="mt-1 line-clamp-2 font-medium leading-snug">{product.name}</h3>

        <div className="mt-2 flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            {product.oldPrice && (
              <span className="block text-sm text-muted-foreground line-through">{currency.format(product.oldPrice)}</span>
            )}
            <span className="text-xl font-bold">{currency.format(product.price)}</span>
          </div>
          <Button size="icon" aria-label={`Agregar ${product.name} al carrito`}>
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  )
}