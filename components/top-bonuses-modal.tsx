"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import type { Casino } from "@/types/casino"
import { StarRating } from "@/components/star-rating"

interface TopBonusesModalProps {
  casinos: Casino[]
}

export default function TopBonusesModal({ casinos }: TopBonusesModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-2xl max-w-2xl w-full p-6 relative animate-fadeIn">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
          <span className="sr-only">Luk</span>
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-white">Top Bonusser</h2>

        <div className="space-y-4">
          {casinos.map((casino, index) => (
            <div
              key={casino.id}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 hover:border-blue-500/50 transition-all"
            >
              {casino.label && (
                <div className="absolute -top-2 -left-2 bg-blue-600 text-xs font-bold px-2 py-1 rounded">
                  {casino.label}
                </div>
              )}

              <div className="flex-shrink-0">
                <Image
                  src={casino.logo || `/placeholder.svg?height=60&width=120&query=${casino.name} logo`}
                  alt={casino.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="font-bold text-lg">{casino.name}</h3>
                <p className="text-blue-400">{casino.bonus}</p>
                <div className="mt-1">
                  <StarRating rating={casino.rating} />
                </div>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={casino.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md inline-block transition-colors"
                >
                  FÅ BONUS! *
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-4">* = reklamelinks</p>
      </div>
    </div>
  )
}
