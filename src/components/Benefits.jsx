function Benefits() {
  const values = [
    {
      title: 'Rätt attityd',
      text: 'Vi tror på ansvar, yrkesstolthet och ett professionellt bemötande i varje projekt.',
    },
    {
      title: 'Kommunikation',
      text: 'God kommunikation är en grundförutsättning för trygghet och ett bra slutresultat.',
    },
    {
      title: 'Kostnadseffektiv kvalitet',
      text: 'Med rötter från Småland arbetar vi med smarta lösningar, hög kvalitet och tydliga löften.',
    },
    {
      title: 'Tydliga stödfunktioner',
      text: 'Bakom kulisserna finns inköp, beräkningar, kravställningar och kompetenta snickare.',
    },
  ]

  return (
    <section className="pt-0">
      <div className="section-shell paper-noise overflow-hidden border-x border-b border-black/8 bg-[rgba(255,248,237,0.92)] px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
        <span className="eyebrow text-[#8e4c26]">Vårt synsätt</span>
        <h2 className="title-main mt-5 text-[3.1rem] text-[#181311] sm:text-[4.3rem]">
          Tillsammans bygger vi mer
        </h2>
        <p className="mt-5 max-w-3xl text-xl font-semibold leading-9 text-[#181311]">
          Vårt arbete bygger på <span className="text-[#ca642f]">kvalitet, pris och kommunikation</span>
          {' '}med en stabil plattform bakom kulisserna.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-black/65">
          För att göra det dagliga arbetet lättare för både er och oss behöver
          projektet struktur, planering och värderingar som bär hela processen.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[22px] border border-black/10 bg-white/55 p-6 shadow-[0_10px_30px_rgba(72,46,24,0.06)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#ca642f]/20 text-[#ca642f]">
                +
              </div>
              <h3 className="title-main text-[2rem] text-[#181311]">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/65">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
