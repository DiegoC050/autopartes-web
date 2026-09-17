const brands = ["Bosch", "Brembo", "Denso", "NGK", "Monroe", "Valeo", "KYB", "Michelin"]

export function Brands() {
  return (
    <section id="marcas" className="border-y border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground">
          Trabajamos con las marcas líderes de la industria XDXD
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center text-lg font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}