"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"

const products = [
  {
    id: "laptops",
    title: "Laptops",
    image: "/2.png?height=400&width=600",
    href: "/products/laptops"
  },
  {
    id: "2-in-1s",
    title: "2-in-1s",
    image: "/3.png?height=400&width=600",
    href: "/products/2-in-1s"
  },
  {
    id: "all-in-ones",
    title: "All-in-Ones",
    image: "/4.png?height=400&width=600",
    href: "/products/all-in-ones"
  }
]

export function ProductsSection() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const handleView = (href: string) => {
    if (!isAuthenticated) {
      router.push('/login')
    } else {
      router.push(href)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative overflow-hidden rounded-xl bg-white p-6 shadow-lg"
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <motion.div
                className="relative"
                animate={{
                  x: hoveredProduct === product.id ? 20 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.image || "/1.jpg"}
                  alt={product.title}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              <div className="mt-6">
                <Button
                  onClick={() => handleView(product.href)}
                  className="bg-[#3498db] hover:bg-[#2980b9]"
                >
                  View
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
