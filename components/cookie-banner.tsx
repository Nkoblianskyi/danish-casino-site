"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3 md:p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
        <p className="text-gray-300 text-xs md:text-sm text-center sm:text-left">
          Vi bruger cookies for at sikre, at vi giver dig den bedste oplevelse på vores hjemmeside.
        </p>
        <div className="flex gap-2">
          <Button
            onClick={acceptCookies}
            variant="default"
            size="sm"
            className="text-xs md:text-sm py-1 px-3 md:py-2 md:px-4"
          >
            Ok
          </Button>
          <Button variant="outline" size="sm" asChild className="text-xs md:text-sm py-1 px-3 md:py-2 md:px-4">
            <Link href="/cookiepolitik">Læs mere</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
