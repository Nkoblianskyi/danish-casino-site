import type { Casino } from "@/types/casino"

export function getCasinos(): Casino[] {
  return [
    {
      id: "betinia",
      name: "Betinia",
      url: "https://betinia.dk/dk/",
      bonus: "100% Bonus Op Til 1000 Kr",
      rating: 9.9,
      label: "TOP VALG",
      terms: "Min. 18 år | Kun nye spillere | Min. indbetaling 100 kr...",
      logo: "/betinia.png",
    },
    {
      id: "campobet",
      name: "Campobet",
      url: "https://campobet.dk/dk/",
      bonus: "100% Bonus Op Til 1000 Kr",
      rating: 9.7,
      label: "NYT CASINO",
      terms: "Min. 18 år | Kun nye spillere | Min. indbetaling 100 kr...",
      logo: "/campo.webp",
    },
    // {
    //   id: "mrvegas",
    //   name: "Mr Vegas",
    //   url: "https://mrvegas.com/dk/",
    //   bonus: "100% Op Til 1,000 Kr",
    //   rating: 9.8,
    //   label: "TOP CASINO",
    //   terms: "Min. 18 år | Kun nye spillere | Min. indbetaling 100 kr...",
    //   logo: "/placeholder.svg?height=60&width=120&query=Mr Vegas logo",
    // },
    // {
    //   id: "expekt",
    //   name: "Expekt",
    //   url: "https://expekt.dk/dk/",
    //   bonus: "Få 50 Gyldne Freespins",
    //   rating: 9.8,
    //   label: "MEST POPULÆRE",
    //   terms: "Min. 18 år | Kun nye spillere | Min. indbetaling 100 kr...",
    //   logo: "/placeholder.svg?height=60&width=120&query=Expekt logo",
    // },
    // {
    //   id: "casinodays",
    //   name: "Casino Days",
    //   url: "https://casinodays.com/dk/",
    //   bonus: "100% Op Til 500 Kr",
    //   rating: 9.5,
    //   terms: "Min. 18 år | Kun nye spillere | Min. indbetaling 100 kr...",
    //   logo: "/placeholder.svg?height=60&width=120&query=Casino Days logo",
    // },
  ]
}
