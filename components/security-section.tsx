import type React from "react"
import Link from "next/link"
import { ShieldCheck, AlertTriangle, HelpCircle } from "lucide-react"

export default function SecuritySection() {
  return (
    <section className="py-6 md:py-16 bg-gray-800">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-12 animate-fadeIn">
          Sikkerhed og Ansvarligt Spil 🔐
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
          <SecurityCard
            icon={<ShieldCheck className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />}
            title="Hvorfor er licens vigtigt?"
            description="En dansk spillelicens sikrer, at casinoet overholder danske love og regler, beskytter dine personlige oplysninger og garanterer fair spil."
            delay={0.1}
          />

          <SecurityCard
            icon={<AlertTriangle className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />}
            title="ROFUS & StopSpillet"
            description="ROFUS er det danske register over frivilligt udelukkede spillere. StopSpillet er en hjælpelinje for personer med spilleproblemer."
            delay={0.2}
          />

          <SecurityCard
            icon={<HelpCircle className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />}
            title="Link til hjælp"
            description="Hvis du eller en du kender har problemer med spil, kan du få hjælp hos følgende organisationer."
            links={[
              { name: "StopSpillet.dk", url: "https://www.stopspillet.dk" },
              { name: "ROFUS", url: "https://www.rofus.nu" },
              { name: "Ludomani.dk", url: "https://www.ludomani.dk" },
            ]}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

interface SecurityCardProps {
  icon: React.ReactNode
  title: string
  description: string
  links?: Array<{ name: string; url: string }>
  delay: number
}

function SecurityCard({ icon, title, description, links, delay }: SecurityCardProps) {
  return (
    <div
      className="bg-gray-900/80 border border-gray-700 rounded-lg p-2 md:p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-900/20 security-card animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-1 md:mb-4 animate-float">{icon}</div>
      <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">{title}</h3>
      <p className="text-gray-300 text-[10px] md:text-base mb-1 md:mb-4">{description}</p>

      {links && (
        <ul className="space-y-1 md:space-y-2">
          {links.map((link, index) => (
            <li
              key={link.name}
              className="animate-slideInRight"
              style={{ animationDelay: `${delay + 0.1 * (index + 1)}s` }}
            >
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center text-[10px] md:text-base transition-all hover:translate-x-1"
              >
                <span className="mr-1 md:mr-2">→</span> {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
