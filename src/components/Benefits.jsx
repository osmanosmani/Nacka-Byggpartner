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
      <div className="section-shell paper-noise overflow-hidden border-x border-b border-black/8 bg-[rgba(255,248,237,0.92)] px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
        <span className="eyebrow text-[#8e4c26]">Vårt synsätt</span>
        <h2 className="title-main mt-5 text-[2.6rem] text-[#181311] sm:text-[3.25rem]">
          Tillsammans bygger vi mer
        </h2>
        <p className="mt-4 max-w-2xl text-[1.05rem] font-semibold leading-8 text-[#181311]">
          Vår struktur är byggd för att skapa <span className="text-[#ca642f]">bättre flöde, bättre beslut</span> och
          bättre resultat för alla som är del av projektet.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-black/62">
          För att göra det dagliga arbetet lättare för både er och oss behöver
          projektet en stabil plattform bakom kulisserna. Där ryms inte bara
          kompetenta snickare, utan också värderingar, struktur och ett sätt att
          arbeta som gör våra kunder nöjda med pris, kvalitet och kommunikation.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[16px] border border-black/10 bg-white/44 p-6 shadow-[0_10px_30px_rgba(72,46,24,0.04)]"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ca642f]/22 text-[#ca642f]">
                {value.icon}
              </div>
              <h3 className="text-[1.08rem] font-bold uppercase tracking-[0.04em] text-[#181311]">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/62">
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
