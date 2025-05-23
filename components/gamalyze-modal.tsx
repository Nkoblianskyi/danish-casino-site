"use client"

import { X } from "lucide-react"

interface GamalyzeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GamalyzeModal({ isOpen, onClose }: GamalyzeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fadeIn">
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-2xl max-w-2xl w-full p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors hover:rotate-90"
        >
          <X size={24} />
          <span className="sr-only">Luk</span>
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-white animate-slideInRight">
          Test dig selv med Gamalyze
        </h2>

        <div className="prose prose-invert max-w-none text-gray-300">
          <p className="mb-4 animate-slideInLeft" style={{ animationDelay: "0.1s" }}>
            Gamalyze er et professionelt værktøj, der hjælper dig med at vurdere dine spillevaner og identificere
            eventuelle tegn på problematisk spilleadfærd.
          </p>

          <h3 className="text-lg font-bold text-white mb-3 animate-slideInRight" style={{ animationDelay: "0.2s" }}>
            Hvad er Gamalyze?
          </h3>
          <p className="mb-4 animate-slideInLeft" style={{ animationDelay: "0.3s" }}>
            Gamalyze er en videnskabeligt baseret test, der analyserer dine spillevaner og giver dig personlig feedback
            om dit spillemønster. Testen er udviklet af eksperter inden for spilleafhængighed og adfærdspsykologi.
          </p>

          <h3 className="text-lg font-bold text-white mb-3 animate-slideInRight" style={{ animationDelay: "0.4s" }}>
            Hvorfor teste dig selv?
          </h3>
          <ul className="mb-4 space-y-2 animate-slideInLeft" style={{ animationDelay: "0.5s" }}>
            <li>• Få indsigt i dine spillevaner</li>
            <li>• Identificer eventuelle risikofaktorer tidligt</li>
            <li>• Modtag personlige anbefalinger</li>
            <li>• Tag kontrol over dit spil</li>
          </ul>

          <div
            className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 mb-4 animate-fadeIn animate-glow"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-blue-200">
              <strong>Vigtigt:</strong> Testen er helt anonym og fortrolig. Dine svar gemmes ikke, og du kan tage testen
              så mange gange, du ønsker.
            </p>
          </div>

          <div className="text-center animate-slideInUp" style={{ animationDelay: "0.7s" }}>
            <a
              href="https://www.gamalyze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md inline-block transition-all hover:scale-105 btn-pulse"
            >
              Start Gamalyze Test
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
