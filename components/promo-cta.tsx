import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoCta() {
  return (
    <section id="ofertas" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-8 sm:p-12 lg:p-16">
        <div className="relative max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Temporada de mantenimiento</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Hasta 30% de descuento en frenos y suspensión
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Prepara tu auto con las mejores marcas. Promoción válida por tiempo limitado en piezas seleccionadas.
          </p>
          <Button size="lg" className="group mt-8 h-12 px-6 text-base">
            Ver ofertas
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        />
      </div>
    </section>
  )
}