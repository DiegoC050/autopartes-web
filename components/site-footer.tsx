"use client"

import { Wrench, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const columns = [
  {
    title: "Catálogo",
    links: ["Motor", "Frenos", "Suspensión", "Eléctrico", "Iluminación", "Llantas"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Sucursales", "Blog", "Trabaja con nosotros", "Mayoreo"],
  },
  {
    title: "Ayuda",
    links: ["Envíos y entregas", "Devoluciones", "Garantías", "Rastrea tu pedido", "Contacto"],
  },
]

export function SiteFooter() {
  return (
    <footer id="soporte" className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="text-lg tracking-tight">
                Torque<span className="text-primary">Parts</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Tu tienda de confianza en autopartes. Calidad garantizada y el mejor servicio para tu vehículo.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> 800 123 4567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> ventas@torqueparts.mx
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> CDMX, México
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border/60 bg-card p-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold">Suscríbete y recibe ofertas exclusivas</h3>
            <p className="mt-1 text-sm text-muted-foreground">Promociones y novedades directo a tu correo.</p>
          </div>
          <form className="mt-4 flex gap-2 sm:mt-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              className="h-11 w-full rounded-md border border-input bg-secondary/50 px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary sm:w-64"
            />
            <Button type="submit" className="h-11 shrink-0 px-5">
              Suscribirme
            </Button>
          </form>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} TorqueParts. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}