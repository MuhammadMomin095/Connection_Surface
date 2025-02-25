"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"



// Product data mapped by ID
const productData = {
  laptops: {
    id: "laptops",
    name: "Surface Laptop 4",
    description:
      "Experience the perfect balance of sleek design, speed, and immersive audio with the Surface Laptop 4. Powered by 11th Gen Intel® Core™ processors, this laptop delivers exceptional performance for all your computing needs.",
    price: 999.99,
    image: "/1.png?height=400&width=600",
    category: "laptop",
    generation: "11th Gen",
    formFactor: "Laptop",
    processor: "Intel® Core™ i5/i7",
  },
  "2-in-1s": {
    id: "2-in-1s",
    name: "Surface Pro 8",
    description:
      "Transform the way you work and create with the versatile Surface Pro 8. This 2-in-1 device combines the power of a laptop with the flexibility of a tablet, featuring a stunning 13-inch touchscreen and Intel® Evo™ Platform.",
    price: 1099.99,
    image: "/2.png?height=400&width=600",
    category: "2-in-1",
    generation: "Latest Gen",
    formFactor: "2-in-1 Tablet",
    processor: "Intel® Evo™ Platform",
  },
  "all-in-ones": {
    id: "all-in-ones",
    name: "Surface Studio 2",
    description:
      "Unleash your creativity with the Surface Studio 2, featuring a massive 28-inch PixelSense™ Display that transforms from a desktop to a digital canvas. Perfect for creative professionals and power users.",
    price: 3499.99,
    image: "/3.png?height=400&width=600",
    category: "Desktop",
    generation: "Latest Gen",
    formFactor: "All-in-One",
    processor: "Intel® Core™ i7",
  },
}

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)

  // Get product directly from ID
  const product = productData[params.id as keyof typeof productData]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

 

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Button onClick={() => router.push("/")} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-10 py-44">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-[#3498db]">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Generation:</span>
              <span className="text-gray-600">{product.generation}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Form Factor:</span>
              <span className="text-gray-600">{product.formFactor}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Processor:</span>
              <span className="text-gray-600">{product.processor}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Category:</span>
              <span className="text-gray-600">{product.category}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button  className="w-full bg-[#3498db] hover:bg-[#2980b9] h-12 text-lg">
              Add to Cart
            </Button>
            <Button onClick={() => router.push("/")} variant="outline" className="w-full h-12 text-lg">
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
      
    </div>
    <Footer />
    </>
  )
}

