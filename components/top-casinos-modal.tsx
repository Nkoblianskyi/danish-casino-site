"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import type { Casino } from "@/types/casino"
import { StarRating } from "@/components/star-rating"

interface TopCasinosModalProps {
  casinos: Casino[]
}

export default function TopCasinosModal({ casinos }: TopCasinosModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal after 1 second
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  // Only show top 3 casinos
  const topCasinos = casinos.slice(0, 3)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 animate-fadeIn">
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-2xl w-full max-w-sm md:max-w-md relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
          <span className="sr-only">Luk</span>
        </button>

        <div className="p-3 md:p-4">
          <h2 className="text-lg md:text-xl font-bold text-center mb-3 text-white">Top 3 Casinoer</h2>

          <div className="space-y-2">
            {topCasinos.map((casino, index) => (
              <div
                key={casino.id}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-2 hover:border-blue-500/50 transition-all relative"
              >
                {casino.label && (
                  <span className="absolute -top-1 -left-1 bg-blue-600 text-[10px] font-bold px-1 py-0.5 rounded z-10 label-badge">
                    {casino.label}
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-12 md:w-16">
                    <Image
                      src={casino.logo || `/placeholder.svg?height=60&width=120&query=${casino.name} logo`}
                      alt={casino.name}
                      width={120}
                      height={60}
                      className="h-8 md:h-10 w-auto object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-bold text-xs md:text-sm">{casino.name}</h3>
                    <p className="text-blue-400 text-[10px] md:text-xs">{casino.bonus}</p>
                    <div className="mt-1 flex">
                      <StarRating rating={casino.rating} size="xs" />
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={casino.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md inline-block transition-colors text-[10px] md:text-xs"
                    >
                      FÅ BONUS! *
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[8px] md:text-[10px] text-gray-400 mt-2 text-center">
            * = reklamelinks | 18+ | Spil ansvarligt
          </p>
        </div>
      </div>
    </div>
  )
}
