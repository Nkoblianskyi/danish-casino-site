"use client"

import { X } from "lucide-react"
import Link from "next/link"

interface ResponsibleGamblingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResponsibleGamblingModal({ isOpen, onClose }: ResponsibleGamblingModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn">
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-2xl max-w-4xl w-full p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors hover:rotate-90"
        >
          <X size={24} />
          <span className="sr-only">Luk</span>
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-white animate-slideInRight">
          Ansvarligt Spil & Vilkår
        </h2>

        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <div
            className="bg-red-900/30 border border-red-700 rounded-lg p-4 animate-fadeIn animate-glow"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-lg font-bold text-red-200 mb-2">18+ | Spil ansvarligt!</h3>
            <p className="text-red-200">
              Du skal være mindst 18 år for at spille på online casinoer i Danmark. Spil kun for det, du har råd til at
              tabe.
            </p>
          </div>

          <div className="animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-bold text-white mb-3">Om bedstedanskebettingsider.com</h3>
            <p className="mb-4">
              bedstedanskebettingsider.com is an independent professional comparison site supported by referral fees
              from the sites which are ranked on the site. The Casino site and information that we present are from
              companies from which bedstedanskebettingsider.com receives compensation. This compensation impacts the
              ranking of the sites. Other factors, including our own opinions, your location, and the likelihood of
              signing up, may also impact how the ranking of the sites appears to a particular user.
              bedstedanskebettingsider.com cannot and does not present information about every Casino site or Casino
              site offer available.
            </p>
          </div>

          <div
            className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 animate-slideInRight"
            style={{ animationDelay: "0.3s" }}
          >
            <h3 className="text-lg font-bold text-yellow-200 mb-3">Hjælp og Support</h3>
            <div className="space-y-2 text-yellow-200">
              <p>
                <strong>Test dig selv med Gamalyze!</strong> - Få professionel vurdering af dine spillevaner
              </p>
              <p>
                <strong>StopSpillet</strong> - Ring til 70 22 28 25 for anonym rådgivning
              </p>
              <p>
                <strong>ROFUS</strong> - Udeluk dig selv fra alle danske spillesider
              </p>
            </div>
          </div>

          <div className="animate-slideInLeft" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-bold text-white mb-3">Vigtige Links</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link
                  href="https://www.stopspillet.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → StopSpillet.dk
                </Link>
                <Link
                  href="https://www.rofus.nu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → ROFUS Selvudelukkelse
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  href="https://www.ludomani.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → Ludomani.dk
                </Link>
                <Link
                  href="https://www.gamalyze.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-400 hover:text-blue-300 transition-colors hover:translate-x-1 inline-block"
                >
                  → Gamalyze Test
                </Link>
              </div>
            </div>
          </div>

          <div
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 animate-slideInRight"
            style={{ animationDelay: "0.5s" }}
          >
            <h3 className="text-lg font-bold text-white mb-3">Ansvarsfraskrivelse</h3>
            <p className="text-sm">
              Links markeret med * er reklamelinks, der kan bidrage til sidens indtjening. Vi anbefaler kun casinoer,
              som vi mener er sikre og pålidelige. Regler og vilkår gælder altid for alle bonusser og tilbud. Læs altid
              de fulde vilkår på casinoets hjemmeside før tilmelding.
            </p>
          </div>

          <div className="text-center border-t border-gray-700 pt-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-gray-400">
              18+ | Spil ansvarligt – Test dig selv med Gamalyze! | Regler og vilkår gælder | StopSpillet – Ring til 70
              22 28 25 | Udeluk dig via ROFUS | Links markeret med * er reklamelinks, der kan bidrage til sidens
              indtjening.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
