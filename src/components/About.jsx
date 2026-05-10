import image2 from '../assets/selected-work/about/company-overview.jpg'

function About() {
  return (
    <section id="about" className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-black/8 bg-[rgba(248,241,229,0.92)] px-6 py-12 sm:px-8 sm:py-18 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="max-w-sm lg:pt-2">
            <span className="eyebrow text-[#8e4c26]">Om oss</span>
            <h2 className="title-main mt-5 text-[2.3rem] text-[#181311] sm:text-[2.85rem]">
              Vilka är vi?
            </h2>
            <p className="mt-5 text-sm leading-7 text-black/58">
              Nacka Byggpartner har sitt ursprung från Småland och Lanner Bygg,
              men tar nu steget längre som en komplett partner som inte bara
              levererar nyckelfärdigt utan användarfärdigt.
            </p>

            <a
              href="#/om-oss"
              className="mt-7 inline-flex items-center justify-center rounded-full border border-[#b86a3f]/22 px-6 py-3 text-sm font-semibold text-[#8e4c26] transition hover:bg-[#b86a3f] hover:text-white"
            >
              Läs mer
            </a>
          </div>

          <div>
            <p className="max-w-3xl text-[0.86rem] font-semibold uppercase tracking-[0.18em] text-[#8e4c26]/88 sm:text-[0.92rem]">
              Ett förtroendebyggt samarbete mellan människor, material och metod.
            </p>
            <h3 className="mt-5 max-w-3xl text-[1.7rem] font-bold leading-tight text-[#181311] sm:text-[2.15rem]">
              Vi är ett <span className="text-[#ca642f]">sammansvetsat lagbygge</span> med
              yrkesstolthet, ansvar och tydlig kommunikation.
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-black/62 sm:text-base sm:leading-8">
              Vi kan ta ett helhetsansvar med både arkitektur, projektering,
              konstruktion, design och byggnation. Med rätt attityd, kompetens,
              yrkesskicklighet och kommunikation har vi de delar som behövs för
              att uppnå ett gott resultat som lever upp till förväntningarna.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-black/62 sm:text-base sm:leading-8">
              Vi lägger stor vikt vid attityd och ansvar. Om vi inte anser oss ha
              förmågan att leverera ett resultat som vi kan stå bakom tackar vi
              hellre nej, och vi tar aldrig oss an ett arbete som vi inte har
              kunskap, behörighet eller certifiering för.
            </p>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[14px] bg-[#ede1cf] p-2 shadow-[0_18px_50px_rgba(51,32,17,0.08)] sm:p-3">
          <img
            src={image2}
            alt="Färdigt husprojekt från Nacka Byggpartner"
            className="media-chamfer h-[280px] w-full rounded-[8px] object-cover object-center sm:h-[460px] lg:h-[560px]"
          />
        </div>
      </div>
    </section>
  )
}

export default About
