import Link from "next/link"
import Image from "next/image"

export default function PlaySafelyPage() {
  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      <h1 className="text-3xl font-bold mb-6">Spil Sikkert</h1>

      <div className="prose prose-invert max-w-none">
        <h2>Ansvarligt spil</h2>
        <p>
          På dkbedstecasinosider.com tager vi ansvarligt spil meget alvorligt. Vi ønsker, at vores besøgende skal have
          en positiv og underholdende oplevelse med online gambling, men vi er også opmærksomme på, at gambling kan føre
          til problemer for nogle mennesker.
        </p>

        <h2>Tegn på problematisk spilleadfærd</h2>
        <p>Her er nogle tegn, der kan indikere, at du eller en, du kender, har et spilleproblem:</p>
        <ul>
          <li>Spiller for mere, end du har råd til at tabe</li>
          <li>Låner penge for at spille</li>
          <li>Bruger mere og mere tid på at spille</li>
          <li>Bliver irriteret eller urolig, når du ikke spiller</li>
          <li>Lyver om, hvor meget du spiller</li>
          <li>Spiller for at undslippe problemer eller negative følelser</li>
        </ul>

        <h2>Værktøjer til ansvarligt spil</h2>
        <p>Der er flere værktøjer til rådighed for at hjælpe dig med at holde dit spil under kontrol:</p>
        <ul>
          <li>
            <strong>Indbetalingsgrænser:</strong> Sæt grænser for, hvor meget du kan indbetale på din konto.
          </li>
          <li>
            <strong>Tabsgrænser:</strong> Sæt grænser for, hvor meget du kan tabe over en bestemt periode.
          </li>
          <li>
            <strong>Tidsgrænser:</strong> Sæt grænser for, hvor lang tid du kan spille.
          </li>
          <li>
            <strong>Selvudelukkelse:</strong> Udeluk dig selv fra at spille i en bestemt periode eller permanent.
          </li>
        </ul>

        <h2>ROFUS - Register Over Frivilligt Udelukkede Spillere</h2>
        <p>
          ROFUS er et register over spillere, der frivilligt har udelukket sig selv fra at spille online. Når du
          registrerer dig i ROFUS, kan du ikke spille på nogen dansk-licenseret online casino eller betting-side.
        </p>
        <div className="my-6">
          <Link
            href="https://www.spillemyndigheden.dk/rofus#ROFUS/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center"
          >
            <Image src="/rofus.png" alt="ROFUS" width={124} height={124} className="mr-2" />
            Besøg ROFUS
          </Link>
        </div>

        <h2>StopSpillet - National hjælpelinje</h2>
        <p>
          StopSpillet er en gratis og anonym hjælpelinje for personer med spilleproblemer og deres pårørende. Du kan
          ringe til StopSpillet på 70 22 28 25 alle dage fra 9-21.
        </p>
        <div className="my-6">
          <Link
            href="https://www.stopspillet.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center"
          >
            <Image src="/stopspillet.png" alt="StopSpillet" width={124} height={124} className="mr-2" />
            Besøg StopSpillet
          </Link>
        </div>

        <h2>Ludomani.dk - Behandling og rådgivning</h2>
        <p>Ludomani.dk tilbyder behandling og rådgivning til personer med spilleproblemer og deres pårørende.</p>
        <div className="my-6">
          <Link
            href="https://www.ludomani.dk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center"
          >
            <Image src="/ludomani.png" alt="Ludomani" width={124} height={124} className="mr-2" />
            Besøg Ludomani.dk
          </Link>
        </div>
      </div>
    </div>
  )
}
