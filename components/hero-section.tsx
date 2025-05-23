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
      <section className="relative min-h-[calc(50vh-80px)] md:min-h-[calc(60vh-100px)] flex items-center justify-center overflow-hidden">
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
        <div className="relative z-20 text-center px-2 md:px-4 max-w-5xl mx-auto py-4 md:py-8">
          <div
            className={`mb-3 md:mb-6 bg-black/30 backdrop-blur-sm rounded-lg p-3 md:p-8 ${
              isLoaded ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-white glow-text animate-pulse-slow">
              De Bedste Online Casinoer i Danmark
            </h1>
            <p
              className="text-base md:text-xl text-gray-300 mb-1 md:mb-2 animate-slideInRight"
              style={{ animationDelay: "0.2s" }}
            >
              Opdateret til {currentDate}
            </p>
            <p
              className="text-sm md:text-lg text-gray-400 mb-3 md:mb-6 max-w-3xl mx-auto animate-slideInLeft"
              style={{ animationDelay: "0.3s" }}
            >
              Velkommen til Danmarks mest pålidelige guide til online casinoer. Vi har testet og anmeldt de bedste
              danske casinosider, så du kan spille sikkert med de mest fordelagtige bonusser og vilkår.
            </p>

            <button
              onClick={scrollToTable}
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-2 md:py-3 px-4 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 mb-3 md:mb-8 animate-float btn-pulse text-sm md:text-base"
            >
              Se Top Bonusser
              <ChevronDown className="inline ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Responsible gambling footer */}
            <div
              className="text-[10px] md:text-sm text-gray-400 space-y-1 md:space-y-2 animate-slideInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex flex-wrap justify-center items-center gap-1 md:gap-4">
                <button
                  onClick={() => setShowGamalyzeModal(true)}
                  className="text-blue-400 hover:text-blue-300 underline transition-colors text-[10px] md:text-sm"
                >
                  Test dig selv med Gamalyze
                </button>
                <span className="hidden md:inline">|</span>
                <button
                  onClick={() => setShowResponsibleModal(true)}
                  className="text-blue-400 hover:text-blue-300 underline transition-colors text-[10px] md:text-sm"
                >
                  18+ | Spil ansvarligt! | Regler og vilkår gælder
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
