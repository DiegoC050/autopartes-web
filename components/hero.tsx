import { ArrowRight, ShieldCheck, Truck, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0">
        <img
          src="/hero-engine.png"
          alt="Motor de alto rendimiento con iluminación ámbar"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            XD Refacciones originales y de alto rendimiento
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            XD Las piezas que tu <span className="text-primary">motor</span> merece
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            Más de 25,000 autopartes en stock para todas las marcas y modelos. Envío rápido, garantía real y precios que
            mueven tu proyecto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="group h-12 px-6 text-base">
              Explorar catálogo
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-6 text-base">
              Cotizar por VIN
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { icon: Truck, label: "Envío en 24-48h" },
              { icon: ShieldCheck, label: "Garantía 12 meses" },
              { icon: Headphones, label: "Asesoría experta" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon className="h-6 w-6 text-primary" />
                <dt className="text-sm font-medium">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}