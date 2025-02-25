"use client"

import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'

export function CartIcon() {
  const { getCartItemsCount, loading } = useCart()
  const itemCount = getCartItemsCount()

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="h-6 w-6" />
      {!loading && itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </span>
      )}
    </Link>
  )
} 