"use client"

import { useState, useEffect } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
  productId: string
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch cart from API
  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart')
      if (response.ok) {
        const data = await response.json()
        setCart(data)
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const addToCart = async (productId: string, quantity: number = 1) => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity }),
      })

      if (response.ok) {
        // Refresh cart after adding item
        fetchCart()
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  const removeFromCart = async (id: string) => {
    try {
      const response = await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchCart()
      }
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  const clearCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'DELETE',
      })

      if (response.ok) {
        setCart([])
      }
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  const getCartTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const getCartItemsCount = () => cart.reduce((total, item) => total + item.quantity, 0)

  return { 
    cart, 
    addToCart, 
    removeFromCart, 
    clearCart, 
    getCartTotal, 
    getCartItemsCount,
    loading 
  }
} 