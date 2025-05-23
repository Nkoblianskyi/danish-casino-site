"use client"

import { useState, useEffect } from "react"
import { formatDate } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import GamalyzeModal from "@/components/gamalyze-modal"
import ResponsibleGamblingModal from "@/components/responsible-gambling-modal"

export default function HeroSection() {
  const [currentDate, setCurrentDate] = useState("")
  const [showGamalyzeModal, setShowGamalyzeModal] = useState(false)
  const [showResponsibleModal, setShowResponsibleModal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setCurrentDate(formatDate(new Date()))
    setIsLoaded(true)
  }, [])

  const scrollToTable = () => {
    const tableElement = document.getElementById("bonus-table")
    if (tableElement) {
      tableElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="relative h-[260px] max-h-[260px] flex items-center justify-center overflow-hidden">
        {/* Background video/image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90 z-10"
            style={{ backgroundImage: "url('/dark-casino-roulette.png')" }}
          ></div>
          <video autoPlay muted loop className="w-full h-full object-cover" poster="/dark-casino-roulette.png">
            <source src="#" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-2 md:px-4 max-w-5xl mx-auto py-4">
          <div
            className={`bg-black/30 backdrop-blur-sm rounded-lg p-3 md:p-6 ${isLoaded ? "animate-fadeIn" : "opacity-0"
              }`}
          >
            <h1 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white glow-text animate-pulse-slow">
              De Bedste Online Casinoer i Danmark
            </h1>
            <p
              className="text-sm md:text-base text-gray-300 mb-1 animate-slideInRight"
              style={{ animationDelay: "0.2s" }}
            >
              Opdateret til {currentDate}
            </p>
            <p
              className="text-xs md:text-sm text-gray-400 mb-2 md:mb-4 max-w-3xl mx-auto animate-slideInLeft"
              style={{ animationDelay: "0.3s" }}
            >
              Velkommen til Danmarks mest pålidelige guide til online casinoer med de bedste bonusser og vilkår.
            </p>

            <button
              onClick={scrollToTable}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-1 md:py-2 px-3 md:px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 mb-1 md:mb-2 animate-float btn-pulse text-xs md:text-sm"
            >
              Se Top Bonusser
              <ChevronDown className="inline ml-1 w-3 h-3 md:w-4 md:h-4" />
            </button>

            {/* Responsible gambling footer */}
            <div className="text-[8px] md:text-xs text-gray-400 animate-slideInUp" style={{ animationDelay: "0.5s" }}>
              <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2">
                <button
                  onClick={() => setShowGamalyzeModal(true)}
                  className="text-blue-400 hover:text-blue-300 underline transition-colors text-[8px] md:text-xs"
                >
                  Test dig selv med Gamalyze
                </button>
                <span className="hidden md:inline">|</span>
                <button
                  onClick={() => setShowResponsibleModal(true)}
                  className="text-blue-400 hover:text-blue-300 underline transition-colors text-[8px] md:text-xs"
                >
                  18+ | Spil ansvarligt!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <GamalyzeModal isOpen={showGamalyzeModal} onClose={() => setShowGamalyzeModal(false)} />
      <ResponsibleGamblingModal isOpen={showResponsibleModal} onClose={() => setShowResponsibleModal(false)} />
    </>
  )
}
