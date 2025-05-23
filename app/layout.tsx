import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import TopCasinosModal from "@/components/top-casinos-modal"
import { getCasinos } from "@/lib/data"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "De Bedste Online Casinoer i Danmark | dkbedstecasinosider.com",
  description: "Find de bedste online casinoer med bonusser for spillere i Danmark.",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const casinos = getCasinos()

  return (
    <html lang="da" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <div className="pt-16 md:pt-20">{children}</div>
          <Footer />
          <CookieBanner />
          <TopCasinosModal casinos={casinos} />
        </ThemeProvider>
      </body>
    </html>
  )
}
