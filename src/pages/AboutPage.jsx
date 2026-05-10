import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import heroImage from '../assets/img/nacka-byggpartner-gallery (2).jpg'
import detailImage from '../assets/img/nacka-byggpartner-gallery (11).jpg'

function AboutPage({ hash }) {
  useEffect(() => {
    if (hash === '#/om-oss/kontakt') {
      const contactSection = document.getElementById('contact')
      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <div className="page-shell text-[#181311]">
      <Navbar />

      <section className="px-2 pb-6 pt-4 sm:px-6 sm:pb-10 sm:pt-8">
        <div className="section-shell overflow-hidden rounded-[34px] border border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_28px_80px_rgba(71,46,25,0.14)]">
          <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-10">
            <div>
              <a href="#about" className="eyebrow text-[#8e4c26]">
                Tillbaka till startsidan
              </a>
              <h1 className="title-main mt-5 text-[2.8rem] text-[#c55f2d] sm:text-[3.8rem] lg:text-[5rem]">
                Om oss
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Nacka Byggpartner har sitt ursprung från Småland och Lanner Bygg,
                men tar nu steget längre och är därmed en komplett partner som
                inte bara levererar nyckelfärdigt utan användarfärdigt.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Vi kan ta ett helhetsansvar med både arkitektur, projektering,
                konstruktion, design och byggnation med fokus på kvalitet,
                kommunikation och ett resultat som går att lita på.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-black/10 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/62">
                  Helhetsansvar
                </span>
                <span className="rounded-full border border-black/10 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/62">
                  Kommunikation
                </span>
                <span className="rounded-full border border-black/10 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black/62">
                  Hantverk
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] bg-[#efe5d4] p-2 shadow-[0_16px_40px_rgba(44,28,15,0.12)]">
              <img
                src={heroImage}
                alt="Nacka Byggpartner projekt"
                className="media-chamfer h-[240px] w-full rounded-[16px] object-cover sm:h-[320px] lg:h-[460px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 py-4 sm:px-6 sm:py-8">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[26px] bg-[rgba(248,241,229,0.95)] px-5 py-6 shadow-[0_20px_60px_rgba(71,46,25,0.08)] sm:rounded-[32px] sm:px-8 sm:py-8">
            <div className="border-b border-black/10 pb-7">
              <span className="eyebrow text-[#8e4c26]">Vilka är vi</span>
              <h2 className="title-main mt-4 text-[2rem] text-[#181311] sm:text-[2.55rem]">
                Ett sammansvetsat lagbygge med yrkesstolthet
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Med rätt attityd, kompetens, yrkesskicklighet och kommunikation
                har vi de delar som behövs för att uppnå ett gott resultat som
                lever upp till era förväntningar.
              </p>
              <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Vi är ett sammansvetsat lagbygge bestående av skickliga utövare
                med hög yrkesstolthet som brinner för det vi gör och för att få
                er som kund nöjd. Vi lägger stor vikt vid attityd och ansvar.
              </p>
            </div>

            <div className="border-b border-black/10 py-7">
              <span className="eyebrow text-[#8e4c26]">Vårt synsätt</span>
              <h2 className="title-main mt-4 text-[2rem] text-[#181311] sm:text-[2.55rem]">
                Tillsammans bygger vi mer
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Vår struktur är att stötta gemensamma processer och göra det
                dagliga arbetet lättare för er likväl som för oss i det
                gemensamma projektet.
              </p>
              <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Vår kärnverksamhet är att utveckla, bygga och förädla på ett sätt
                som gör våra kunder nöjda med både pris, kvalitet och
                kommunikation. Om vi inte anser oss ha förmågan att leverera ett
                resultat som vi kan stå bakom tackar vi hellre nej.
              </p>
            </div>

            <div className="pt-7">
              <span className="eyebrow text-[#8e4c26]">Samverkan</span>
              <h2 className="title-main mt-4 text-[2rem] text-[#181311] sm:text-[2.55rem]">
                Ett projekt där alla arbetar mot samma mål
              </h2>
              <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Vi verkar i en mer strukturerad samarbetsform där beställare,
                byggföretag, installatörer, konstruktörer och andra yrkesgrupper
                gemensamt löser ett byggprojekt med kundens intresse som fokus.
              </p>
              <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Våra underentreprenörer och yrkesgrupper verkar tillsammans som
                ett team under hela byggprocessen, där alla ställer upp för
                varandra och jobbar mot samma mål. På så vis används resurser och
                yrkeskunskaper mer effektivt med största möjliga kundnytta i
                centrum.
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-[24px] bg-[#efe5d4] p-2 shadow-[0_18px_50px_rgba(71,46,25,0.1)]">
              <img
                src={detailImage}
                alt="Detalj från byggprojekt"
                className="media-chamfer h-[260px] w-full rounded-[16px] object-cover sm:h-[320px]"
              />
            </div>

            <div className="rounded-[24px] border border-black/10 bg-white/64 p-5 shadow-[0_18px_50px_rgba(71,46,25,0.06)] sm:p-6">
              <span className="eyebrow text-[#8e4c26]">Kärnvärden</span>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border border-black/8 bg-[#fffaf2] p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ca642f]">
                    Litet team
                  </div>
                  <p className="mt-2 text-sm leading-7 text-black/66">
                    Ett litet team med lång erfarenhet, tydligt ansvar och nära dialog.
                  </p>
                </div>
                <div className="rounded-[18px] border border-black/8 bg-[#fffaf2] p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ca642f]">
                    Teamkänsla
                  </div>
                  <p className="mt-2 text-sm leading-7 text-black/66">
                    Sann teamkänsla där samverkan och yrkesstolthet driver arbetet framåt.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#231f1d] p-5 text-white shadow-[0_18px_50px_rgba(28,21,18,0.2)] sm:rounded-[28px] sm:p-6">
              <h3 className="title-main text-[1.9rem] text-[#ff7f2f] sm:text-[2.2rem]">
                Bli en av oss
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/78">
                Har du en bra erfarenhet av yrket och vill veta mer om hur det är
                att arbeta hos oss är en spontanansökan via formuläret här nedan
                en bra början.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/78">
                Har du lång bakgrund som snickare med erfarenhet av platsansvar
                eller projektansvar får du också gärna kontakta oss direkt.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#/om-oss/kontakt"
                  className="inline-flex items-center justify-center rounded-xl bg-[#ca642f] px-6 py-3 text-sm font-semibold text-white"
                >
                  Kontakta oss
                </a>
                <a
                  href="mailto:info@nackabyggpartner.se?subject=Spontanansökan"
                  className="inline-flex items-center justify-center rounded-xl border border-white/14 px-6 py-3 text-sm font-semibold text-white/90"
                >
                  Skicka spontanansökan
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default AboutPage
