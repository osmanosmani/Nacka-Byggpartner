function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="M5 7.5C5 6.12 6.12 5 7.5 5h9C17.88 5 19 6.12 19 7.5v6c0 1.38-1.12 2.5-2.5 2.5H10l-4 3v-3.5A2.5 2.5 0 0 1 5 13.5z" />
    </svg>
  )
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <ellipse cx="12" cy="8" rx="6.5" ry="3.5" />
      <path d="M5.5 8v8c0 1.93 2.91 3.5 6.5 3.5s6.5-1.57 6.5-3.5V8" />
      <path d="M8.5 12.5h7" />
    </svg>
  )
}

function CraftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="m5 17 5-5 3 3 6-6" />
      <path d="M16 9h3v3" />
      <path d="M4.5 19.5h15" />
    </svg>
  )
}

function StructureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <rect x="4.5" y="5" width="15" height="14" rx="2.5" />
      <path d="M8 9h8M8 13h8M8 17h4" />
    </svg>
  )
}

function Benefits() {
  const values = [
    {
      icon: <ChatIcon />,
      title: 'Tydlig kommunikation',
      text: 'Vi stöttar gemensamma processer och gör det dagliga arbetet lättare genom att vara tydliga, tillgängliga och raka genom hela projektet.',
    },
    {
      icon: <CoinIcon />,
      title: 'Kostnadseffektiv kvalitet',
      text: 'Med rötter från Småland söker vi lösningar som håller hög kvalitet, ger verklig kundnytta och samtidigt respekterar budgeten.',
    },
    {
      icon: <CraftIcon />,
      title: 'Rätt attityd och hantverk',
      text: 'Vår kärnverksamhet är att utveckla, bygga och förädla med rätt kompetens, yrkesskicklighet och stolthet i det vi levererar.',
    },
    {
      icon: <StructureIcon />,
      title: 'Stabil plattform bakom kulisserna',
      text: 'Bakom resultatet finns inköp, beräkningar, genomförande, kravställningar och stödfunktioner som skapar trygg struktur i varje steg.',
    },
  ]

  return (
    <section className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-black/8 bg-[rgba(252,246,238,0.9)] px-6 py-12 sm:px-8 sm:py-18 lg:px-10">
        <span className="eyebrow text-[#8e4c26]">Vårt synsätt</span>
        <h2 className="title-main mt-5 text-[2.45rem] text-[#181311] sm:text-[3rem]">
          Tillsammans bygger vi mer
        </h2>
        <div className="editorial-serif mt-4 max-w-2xl text-[1.45rem] leading-[1.15] text-[#6b4d3a] sm:text-[1.75rem]">
          Vår struktur är byggd för att skapa
          <span className="text-[#b86a3f]"> bättre flöde, bättre beslut</span> och bättre resultat.
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
          För att göra det dagliga arbetet lättare för både er och oss behöver
          projektet en stabil plattform bakom kulisserna. Där ryms inte bara
          kompetenta snickare, utan också värderingar, struktur och ett sätt att
          arbeta som gör våra kunder nöjda med pris, kvalitet och kommunikation.
        </p>

        <div className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="border-t border-[#cfb8a0] pt-5"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b86a3f]/18 bg-white/70 text-[#b86a3f]">
                {value.icon}
              </div>
              <h3 className="text-[1rem] font-bold uppercase tracking-[0.08em] text-[#181311]">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/58">
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
