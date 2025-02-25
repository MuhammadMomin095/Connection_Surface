"use client"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Trash2 } from "lucide-react"
import { useCart } from "@/hooks/useCart"

export default function CartPage() {
  const { cart, removeFromCart, clearCart, getCartTotal } = useCart()

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <div className="text-xl font-bold">Total: ${getCartTotal().toFixed(2)}</div>
            </div>
            <Button className="mt-4 w-full bg-[#3498db] hover:bg-[#2980b9]">Proceed to Checkout</Button>
          </>
        )}
      </div>
    </>
  )
}

