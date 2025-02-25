"use client"

import { motion } from "framer-motion"
import { PenLine, Briefcase, CheckCircle, Plane, RotateCcw, Trophy } from "lucide-react"

const steps = [
  {
    icon: PenLine,
    title: "REGISTRATION",
    description: "Complete the registration process to start using the portal",
    number: 1,
  },
  {
    icon: Briefcase,
    title: "CREATE DEMO KIT",
    description: "Choose between different products for a 30-day demo",
    number: 2,
  },
  {
    icon: CheckCircle,
    title: "CHECKOUT",
    description: "Fill out the form with shipping & opportunity details and checkout easily",
    number: 3,
  },
  {
    icon: Plane,
    title: "ORDER SHIPMENT",
    description: "Seamless overnight shipment to customer after order approval",
    number: 4,
  },
  {
    icon: RotateCcw,
    title: "RETURN ORDER",
    description: "Simple order return using hard/soft copy of provided prepaid return label",
    number: 5,
  },
  {
    icon: Trophy,
    title: "REPORT A WIN",
    description: "Close customer after demo period and enter win details",
    number: 6,
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Card */}
              <div className="relative bg-white rounded-lg p-6 shadow-lg">
                {/* Blue L-shaped corner - Top */}
                <div className="absolute -top-px -left-px w-[30%] h-[2px] bg-[#3498db] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-px -left-px w-[2px] h-[30%] bg-[#3498db] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Blue L-shaped corner - Bottom */}
                <div className="absolute -bottom-px -right-px w-[30%] h-[2px] bg-[#3498db] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-px -right-px w-[2px] h-[30%] bg-[#3498db] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#3498db]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {/* Number Tab */}
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#3498db] rounded-br-lg flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

