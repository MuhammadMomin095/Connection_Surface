"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") || "/"
  const { login } = useAuth()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(formData.email, formData.password)
      router.push(redirect)
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-blue-600 text-xl">Welcome back</h2>
          <h1 className="mt-2 text-3xl font-bold">Sign in to your account</h1>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Username or E-mail
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="remember-me"
              checked={formData.rememberMe}
              onCheckedChange={(checked: boolean) => setFormData((prev) => ({ ...prev, rememberMe: checked as boolean }))}
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
              Keep me signed in
            </label>
          </div>

          <div className="space-y-4">
            <Button type="submit" className="w-full bg-[#3498db] hover:bg-[#2980b9]">
              Login
            </Button>
            <Button type="button" variant="outline" className="w-full" onClick={() => router.push("/register")}>
              Register
            </Button>
          </div>

          <div className="text-center">
            <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

