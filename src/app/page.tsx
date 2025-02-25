import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductsSection } from "@/components/products-section"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-8">
        <Hero />
        <ProductsSection />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}

