function Team() {
  const steps = [
    {
      number: '01',
      title: 'Planera',
      text: 'Varje lyckat projekt börjar med en behovsanalys och en tydlig planering tillsammans med kunden.',
    },
    {
      number: '02',
      title: 'Projektera',
      text: 'Vi tar fram ritningar, beskrivningar och tekniska underlag för att minska risken för missöden.',
    },
    {
      number: '03',
      title: 'Upphandling',
      text: 'Rätt entreprenörer väljs utifrån pris, förmåga, tillgänglighet och kvalitet i relation till projektet.',
    },
    {
      number: '04',
      title: 'Genomföra',
      text: 'Byggmöten, uppföljning och samordning driver processen framåt med kundens intresse i fokus.',
    },
    {
      number: '05',
      title: 'Överlämning',
      text: 'När bygget är klart finns vi kvar för kontroll, trygg överlämning och eventuella frågor.',
    },
  ]

  return (
    <section id="process" className="pt-0">
      <div
        className="section-shell overflow-hidden border-x border-b border-white/8 bg-[#231f1d] px-6 py-10 text-white sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: '#111111' }}
      >
        <div className="text-center">
          <span className="eyebrow border-white/12 text-[#e4b291]">Så funkar det</span>
          <h2 className="title-main mt-5 text-[3.2rem] text-[#ff7f2f] sm:text-[4.5rem]">
            Byggprocessen
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/65">
            Byggprojekt är komplexa och tidskrävande. Därför arbetar vi metodiskt
            genom hela processen från planering till överlämning.
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
              <h3 className="mt-4 title-main text-[2rem] text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
