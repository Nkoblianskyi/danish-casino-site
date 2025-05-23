import HeroSection from "@/components/hero-section"
import BonusTable from "@/components/bonus-table"
import SelectionMethodSection from "@/components/selection-method-section"
import SecuritySection from "@/components/security-section"
import TopCasinosModal from "@/components/top-casinos-modal"
import { getCasinos } from "@/lib/data"

export default function Home() {
  const casinos = getCasinos()

  return (
    <main className="min-h-screen">
      <HeroSection />
      <BonusTable casinos={casinos} />
      <SelectionMethodSection />
      <SecuritySection />
      <TopCasinosModal casinos={casinos} />
    </main>
  )
}
