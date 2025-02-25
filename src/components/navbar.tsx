"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingCart, ChevronDown, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { CartIcon } from './CartIcon'

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [cartCount, setCartCount] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        " top-0 z-50 w-full transition-all duration-200 absolute",
        isScrolled ? "bg-white shadow-md" : "bg-white",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4 md:gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/1.jpg"
              alt="Connection Demo Center Logo"
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input type="search" placeholder="Search for products..." className="w-full bg-gray-100 pl-8" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">My Account</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg">
                <div className="flex flex-col h-full">
                  <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
                  {cartCount === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-gray-500">Your cart is empty</div>
                  ) : (
                    <div className="flex-1">{/* Cart items would go here */}</div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <CartIcon />
          </div>
        </div>

        <nav className="flex h-12 items-center bg-[#3498db] -mx-4 px-4">
          <ul className="flex space-x-8 text-white">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-gray-200">
                How it Works
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-200">
                  Create Demo Kit
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Surface Laptops</DropdownMenuItem>
                  <DropdownMenuItem>Surface Pro</DropdownMenuItem>
                  <DropdownMenuItem>Surface Studio</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/report-win" className="hover:text-gray-200">
                Report A Win
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

