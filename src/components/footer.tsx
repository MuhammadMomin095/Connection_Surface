"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const footerLinks = [
  {
    title: "Resources",
    links: [
      { name: "Safety Policy", href: "/safety-policy" },
      { name: "Live Inventory", href: "/inventory" },
      { name: "Order Details", href: "/orders" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Form Factors", href: "/form-factors" },
      { name: "Processors", href: "/processors" },
      { name: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Dispatch", href: "/dispatch" },
      { name: "EOL", href: "/eol" },
      { name: "Feedback", href: "/feedback" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Logo and Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block">
                <img
                  src="/1.jpg"
                  alt="Connection Demo Center"
                  className="h-12 w-auto"
                />
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-lg"
            >
              The Connection Surface Demos program was designed and developed by
              Connection and Intel® to give Account Executives the unique
              opportunity to order Connection Demo Kits and have them delivered to
              their most valuable customers.
            </motion.p>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((column, columnIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + columnIndex * 0.1 }}
              >
                <h3 className="font-semibold text-gray-900 mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-600 hover:text-[#3498db] transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t text-center text-gray-600"
        >
          © Copyright {new Date().getFullYear()} Connection Surface Demos
        </motion.div>
      </div>
    </footer>
  )
}
