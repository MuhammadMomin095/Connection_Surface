import type React from "react"
import { Laptop, Monitor, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Connection Surface Demos</h1>
            <p className="text-gray-600 text-lg">
              The Connection Surface Demos program was designed and developed by Connection and Intel® to give Account
              Executives the unique opportunity to order Connection Demo Kits and have them delivered to their most
              valuable customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="/1.jpg" alt="Intel Logo" className="h-8" />
              <img src="/1.jpg" alt="Microsoft Surface Logo" className="h-8" />
              <img src="/1.jpg" alt="Connection Logo" className="h-8" />
            </div>
            <Button size="lg" className="w-fit bg-[#3498db] hover:bg-[#2980b9]">
              Create Demo Kit
            </Button>
          </div>
          <div className="relative hidden lg:block">
            <img
              src="/1.jpg"
              alt="Surface Laptop"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FilterCard icon={Laptop} title="Generation" description="Filter by device generation" />
            <FilterCard icon={Monitor} title="Form Factor" description="Choose your preferred form factor" />
            <FilterCard icon={Cpu} title="Processor" description="Select processor specifications" />
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <Icon className="h-8 w-8 text-[#3498db]" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  )
}

