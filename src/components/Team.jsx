function Team() {
  const steps = [
    {
      number: '01',
      title: 'Planera',
      text: 'Varje lyckat projekt börjar med behovsanalys, relation och en tydlig plan för hur målen ska nås tillsammans.',
    },
    {
      number: '02',
      title: 'Projektera',
      text: 'Vi tar fram ritningar, beskrivningar och tekniska underlag som gör processen tydligare och minskar onödiga risker.',
    },
    {
      number: '03',
      title: 'Samordna',
      text: 'Entreprenörer, leveranser och beslut synkas så att alla arbetar mot samma mål med kundens intresse i fokus.',
    },
    {
      number: '04',
      title: 'Genomföra',
      text: 'Med struktur, kommunikation och uppföljning driver vi bygget framåt på ett sätt som skapar trygghet i vardagen.',
    },
    {
      number: '05',
      title: 'Överlämna',
      text: 'När bygget är klart säkerställer vi ett ordnat avslut, tydlig överlämning och ett resultat vi kan stå bakom.',
    },
  ]

  return (
    <section id="process" className="pt-0">
      <div
        className="section-shell overflow-hidden border-x border-b border-white/8 bg-[#231f1d] px-6 py-10 text-white sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: '#111111' }}
      >
        <div className="text-center">
          <span className="eyebrow border-white/12 text-[#e4b291]">Vår process</span>
          <h2 className="title-main mt-5 text-[3rem] text-[#ff7f2f] sm:text-[4.05rem]">
            Bra byggprojekt börjar med meningsfulla relationer
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/65">
            Byggt på förtroende. Skapat med avsikt. Nacka Byggpartner bygger inte
            bara, vi skapar bestående värden genom personlig service, tydlig
            kommunikation och ett samarbete som håller ihop hela processen.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[20px] border border-white/10 bg-[#2b2623] p-6"
              style={{ backgroundColor: '#1d1d1d' }}
            >
              <div className="title-main text-5xl text-[#ff7f2f]">{step.number}</div>
              <h3 className="mt-4 title-main text-[1.8rem] text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
