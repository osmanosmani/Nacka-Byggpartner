function Testimonials() {
  const points = [
    'Beställare, byggföretag, installatörer och konstruktörer arbetar mot samma mål.',
    'Yrkesgruppernas kalendrar och resurser samordnas utifrån projektets bästa.',
    'Öppna kort, tydliga roller och ett gemensamt ansvar skapar större kundnytta.',
  ]

  return (
    <section className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-black/8 bg-[rgba(248,241,229,0.94)] px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <span className="eyebrow text-[#8e4c26]">Samverkan</span>
            <h2 className="title-main mt-5 text-[3.2rem] text-[#c55f2d] sm:text-[4.5rem]">
              Vi bygger tillsammans
            </h2>
            <p className="mt-4 text-sm leading-7 text-black/65">
              Traditionella motparter i ett projekt blir samarbetspartner med er
              som byggherre i fokus. Det ger ett mer strukturerat samarbete och
              en tydligare riktning genom hela byggprocessen.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {points.map((point) => (
              <article
                key={point}
                className="rounded-[22px] border border-black/10 bg-white/60 p-6 shadow-[0_12px_30px_rgba(63,43,24,0.05)]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2e2d8] text-[#ca642f]">
                  +
                </div>
                <p className="text-sm leading-7 text-black/70">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
