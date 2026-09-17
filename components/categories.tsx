import {
  Gauge,
  Disc3,
  Battery,
  Lightbulb,
  CircleDot,
  Waves,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { categories } from "@/lib/products"

const iconMap: Record<string, LucideIcon> = {
  gauge: Gauge,
  disc: Disc3,
  spring: Waves,
  battery: Battery,
  lightbulb: Lightbulb,
  tire: CircleDot,
}

export function Categories() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">XD XD Explora por categoría</h2>
          <p className="mt-2 text-muted-foreground">Encuentra exactamente lo que necesitas para tu vehículo.</p>
        </div>
        <a href="#catalogo" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Ver todo el catálogo <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Gauge
          return (
            <a
              key={cat.name}
              href="#catalogo"
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/50 hover:bg-accent/40"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <span className="font-medium">{cat.name}</span>
              <span className="text-xs text-muted-foreground">{cat.count} piezas</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}