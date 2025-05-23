import Image from "next/image"
import type { Casino } from "@/types/casino"
import { StarRating } from "@/components/star-rating"

interface BonusTableProps {
  casinos: Casino[]
}

export default function BonusTable({ casinos }: BonusTableProps) {
  return (
    <section
      id="bonus-table"
      className="py-4 md:py-12 bg-gray-900 relative"
      style={{
        backgroundImage: "url('/casino-background-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/80 z-0"></div>
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8 animate-fadeIn">
          Bedste Casino Bonusser
        </h2>

        <div className="overflow-x-auto -mx-2 md:mx-0">
          <div className="min-w-[320px] md:w-full">
            {casinos.map((casino, index) => (
              <div
                key={casino.id}
                className="mb-2 md:mb-4 bg-gray-800/50 border border-gray-700 rounded-lg p-2 md:p-4 hover:border-blue-500/50 transition-all relative casino-card animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {casino.label && (
                  <span className="absolute -top-1 -left-1 bg-blue-600 text-xs font-bold px-1 py-0.5 md:px-2 md:py-1 rounded text-[10px] md:text-xs z-10 label-badge">
                    {casino.label}
                  </span>
                )}

                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex-shrink-0 w-16 md:w-auto bg-slate-200">
                    <Image
                      src={casino.logo || `/placeholder.svg?height=80&width=160&query=${casino.name} logo`}
                      alt={casino.name}
                      width={180}
                      height={100}
                      className="h-18 md:h-24 w-auto object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-bold text-sm md:text-2xl">{casino.name}</h3>
                    <p className="text-blue-400 text-xs md:text-xl">{casino.bonus}</p>
                    <div className="mt-1 md:mt-2 flex">
                      <StarRating rating={casino.rating} size="xs" />
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col items-end gap-1 md:gap-2">
                    <div className="text-xl md:text-4xl font-bold text-yellow-500 animate-pulse-slow">
                      {casino.rating}
                    </div>
                    <a
                      href={casino.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 md:py-3 md:px-6 rounded-md inline-block transition-colors text-xs md:text-lg btn-pulse"
                    >
                      FÅ BONUS! *
                    </a>
                  </div>
                </div>

                <div className="mt-2 md:mt-3 pt-2 border-t border-gray-600">
                  <p className="text-[8px] md:text-[10px] text-gray-500 leading-tight">
                    18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8 eller højere og få et 100 kr. free bet til brug
                    på sportsspil efter det kvalificerende spil er afgjort | Gyldig i 7 dage | Generelle regler og
                    vilkår er altid gældende | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS | Links markeret med * er
                    reklamelinks, der kan bidrage til sidens indtjening.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[10px] md:text-xs text-gray-400 mt-2 md:mt-4">* = reklamelinks</p>

        <div
          className="mt-4 md:mt-8 bg-gray-800/50 border border-gray-700 rounded-lg p-2 md:p-6 animate-fadeIn"
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="text-sm md:text-xl font-bold mb-1 md:mb-4">Vilkår og betingelser</h3>
          <p className="text-[10px] md:text-sm text-gray-300">
            18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8 eller højere og få et 100 kr. free bet til brug på
            sportsspil efter det kvalificerende spil er afgjort | Gyldig i 7 dage | Generelle regler og vilkår er altid
            gældende | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS
          </p>
        </div>
      </div>
    </section>
  )
}
