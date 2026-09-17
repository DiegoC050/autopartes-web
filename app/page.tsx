import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoCta } from "@/components/promo-cta"
import { Brands } from "@/components/brands"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PromoCta />
        <Brands />
      </main>
      <SiteFooter />
    </div>
  )
}
