"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 md:h-10 w-40 md:w-48">
              <Image
                src="/dk-bedste-casino-sider-logo.png"
                alt="DK Bedste Casino Sider"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
              Hjem
            </Link>
            <Link href="/spil-sikkert" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
              Spil Sikkert
            </Link>
            <Link
              href="/fortrolighedserklaering"
              className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Fortrolighedserklæring
            </Link>
            <Link
              href="/vilkar-og-betingelser"
              className="text-white hover:text-blue-400 transition-colors text-sm font-medium"
            >
              Vilkår
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 animate-fadeIn">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-white hover:text-blue-400 transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hjem
            </Link>
            <Link
              href="/spil-sikkert"
              className="text-white hover:text-blue-400 transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Spil Sikkert
            </Link>
            <Link
              href="/fortrolighedserklaering"
              className="text-white hover:text-blue-400 transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fortrolighedserklæring
            </Link>
            <Link
              href="/vilkar-og-betingelser"
              className="text-white hover:text-blue-400 transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vilkår
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
