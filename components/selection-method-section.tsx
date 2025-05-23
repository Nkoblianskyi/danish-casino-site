import type React from "react"
import { Shield, Gamepad2, Users, Scale } from "lucide-react"

export default function SelectionMethodSection() {
  return (
    <section className="py-6 md:py-16 bg-gray-900">
      <div className="container mx-auto px-2 md:px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-12 animate-fadeIn">
          Sådan Udvælger Vi De Bedste Casinoer
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8">
          <MethodCard
            icon={<Shield className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />}
            title="Licens og regulering"
            description="Vi sikrer, at alle casinoer har en gyldig dansk licens og overholder ROFUS-reglerne for ansvarligt spil."
            delay={0.1}
          />

          <MethodCard
            icon={<Scale className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />}
            title="Bonusbetingelser og fairplay"
            description="Vi gennemgår alle bonusbetingelser for at sikre, at de er fair og gennemsigtige for spillerne."
            delay={0.2}
          />

          <MethodCard
            icon={<Gamepad2 className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />}
            title="Spiludvalg og software"
            description="Vi vurderer udvalget af spil og kvaliteten af softwareudviklerne for at sikre den bedste spiloplevelse."
            delay={0.3}
          />

          <MethodCard
            icon={<Users className="w-6 h-6 md:w-10 md:h-10 text-blue-400" />}
            title="Brugeroplevelse og support"
            description="Vi tester brugeroplevelsen og kundeservice for at sikre, at spillerne får den bedste support."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

interface MethodCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function MethodCard({ icon, title, description, delay }: MethodCardProps) {
  return (
    <div
      className="bg-gray-800/50 border border-gray-700 rounded-lg p-2 md:p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-900/20 method-card animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-1 md:mb-4 animate-float">{icon}</div>
      <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-2">{title}</h3>
      <p className="text-gray-300 text-[10px] md:text-base">{description}</p>
    </div>
  )
}
