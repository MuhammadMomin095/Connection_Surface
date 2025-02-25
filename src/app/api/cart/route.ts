import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import prisma from "@/lib/db"
import { authOptions } from "@/app/api/auth/[...nextauth]/options"


export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { productId, quantity } = await req.json()

    const cartItem = await prisma.cartItem.create({
      data: {
        productId,
        quantity,
        userId: session.user.id,
      },
    })

    return NextResponse.json(cartItem)
  } catch (error) {
    return NextResponse.json({ error: "Failed to add to cart" }, { status: 500 })
  }
}

