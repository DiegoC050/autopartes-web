import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  return (
    <section id="catalogo" className="border-y border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Productos destacados</h2>
            <p className="mt-2 text-muted-foreground">Los favoritos de nuestros clientes, listos para instalar.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}