import image2 from '../assets/img/nacka-byggpartner-gallery (2).jpg'

function About() {
  return (
    <section id="about" className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-black/8 bg-[rgba(248,241,229,0.92)] px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-sm">
            <span className="eyebrow text-[#8e4c26]">Om oss</span>
            <h2 className="title-main mt-5 text-[3.3rem] text-[#181311] sm:text-[4.4rem]">
              Vilka är vi?
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/65">
              Nacka Byggpartner har sitt ursprung från Småland och Lanner Bygg,
              men tar nu steget längre som en komplett partner som inte bara
              levererar nyckelfärdigt utan användarfärdigt.
            </p>
          </div>

          <div>
            <h3 className="max-w-3xl text-3xl font-extrabold leading-tight text-[#181311] sm:text-4xl">
              Vi är ett <span className="text-[#ca642f]">sammansvetsat lagbygge</span>
              {' '}med yrkesstolthet, ansvar och tydlig kommunikation.
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-black/65 sm:text-base">
              Vi kan ta ett helhetsansvar med både arkitektur, projektering,
              konstruktion, design och byggnation. Med rätt attityd, kompetens,
              yrkesskicklighet och kommunikation har vi de delar som behövs för
              att uppnå ett gott resultat som lever upp till förväntningarna.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-black/65 sm:text-base">
              Vi lägger stor vikt vid attityd och ansvar. Om vi inte anser oss ha
              förmågan att leverera ett resultat som vi kan stå bakom tackar vi
              hellre nej, och vi tar aldrig oss an ett arbete som vi inte har
              kunskap, behörighet eller certifiering för.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[30px] bg-[#efe5d4] p-2 shadow-[0_18px_50px_rgba(51,32,17,0.12)] sm:p-3">
          <img
            src={image2}
            alt="Färdigt husprojekt från Nacka Byggpartner"
            className="h-[260px] w-full rounded-[24px] object-cover object-[center_58%] sm:h-[420px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}

export default About
