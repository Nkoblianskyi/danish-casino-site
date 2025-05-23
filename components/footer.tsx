"use client"

import Image from "next/image"
import { useState } from "react"
import GamalyzeModal from "@/components/gamalyze-modal"
import ResponsibleGamblingModal from "@/components/responsible-gambling-modal"
import Link from "next/link"
import { Shield, Info, FileText, ExternalLink } from "lucide-react"

export default function Footer() {
  const [showGamalyzeModal, setShowGamalyzeModal] = useState(false)
  const [showResponsibleModal, setShowResponsibleModal] = useState(false)

  return (
    <>
      <footer className="bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/dark-casino-roulette.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
            }}
          ></div>
        </div>

        {/* Main footer content */}
        <div className="relative z-10">
          {/* Top section with logo and responsible gambling */}
          <div className="container mx-auto px-4 pt-10 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-6">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Dk Bedste Casino Sider</h2>
                <p className="text-gray-400 text-xs md:text-sm max-w-md">
                  Din guide til de bedste online casinoer i Danmark med eksklusive bonusser og pålidelige anmeldelser.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/50 shadow-lg w-full md:w-auto  mx-4">
                <p className="text-white font-bold mb-6 text-center text-xl md:text-2xl">Ansvarligt Spil</p>
                <div className="flex space-x-10 items-center justify-center w-full">
                  <Link
                    href="https://www.stopspillet.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-4 transition-all transform hover:scale-110 shadow-md"
                  >
                    <Image src="/stopspillet.png" alt="StopSpillet" width={48} height={48} className="w-32 h-12" />
                  </Link>
                  <Link
                    href="https://www.rofus.nu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-4  transition-all transform hover:scale-110 shadow-md"
                  >
                    <Image src="/rofus.png" alt="ROFUS" width={48} height={48} className="w-32 h-12" />
                  </Link>
                  <Link
                    href="https://www.ludomani.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-4 transition-all transform hover:scale-110 shadow-md"
                  >
                    <Image src="/ludomani.png" alt="Ludomani" width={48} height={48} className="w-32 h-12" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Middle section with links */}
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-white font-bold">Sikkerhed</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/spil-sikkert"
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      Spil Sikkert
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => setShowResponsibleModal(true)}
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      Ansvarligt Spil
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Info className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-white font-bold">Information</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/cookiepolitik"
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      Cookiepolitik
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/fortrolighedserklaering"
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      Fortrolighedserklæring
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <FileText className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-white font-bold">Juridisk</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/vilkar-og-betingelser"
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      Vilkår og Betingelser
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white text-sm flex items-center group">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      Ansvarsfraskrivelse
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <ExternalLink className="w-5 h-5 text-blue-400 mr-2" />
                  <h3 className="text-white font-bold">Hjælp</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://www.stopspillet.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      StopSpillet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.rofus.nu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      ROFUS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.ludomani.dk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 group-hover:w-2 transition-all"></span>
                      Ludomani.dk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section with disclaimer */}
          <div className="bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="text-center">
                <p className="text-gray-500 text-xs mb-2">
                  18+ | Spil ansvarligt! | Regler og vilkår gælder | StopSpillet – Ring til 70 22 28 25 | Udeluk dig via
                  ROFUS
                </p>
                <p className="text-gray-500 text-xs">
                  © {new Date().getFullYear()} dkbedstecasinosider.com. Alle rettigheder forbeholdes. Links markeret med
                  * er reklamelinks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <GamalyzeModal isOpen={showGamalyzeModal} onClose={() => setShowGamalyzeModal(false)} />
      <ResponsibleGamblingModal isOpen={showResponsibleModal} onClose={() => setShowResponsibleModal(false)} />
    </>
  )
}
