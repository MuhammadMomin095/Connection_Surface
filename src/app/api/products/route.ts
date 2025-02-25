import prisma from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const generation = searchParams.get("generation")
    const formFactor = searchParams.get("formFactor")
    const processor = searchParams.get("processor")

    let where = {}

    if (generation) {
      where = { ...where, generation }
    }
    if (formFactor) {
      where = { ...where, formFactor }
    }
    if (processor) {
      where = { ...where, processor }
    }

    const products = await prisma.product.findMany({ where })
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

