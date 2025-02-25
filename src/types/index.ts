export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: "laptop" | "2-in-1" | "desktop"
  generation: string
  formFactor: string
  processor: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface User {
  id: string
  email: string
  name: string
  cart: CartItem[]
}

