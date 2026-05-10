function Testimonials() {
  const reviews = [
    {
      name: 'Anna Lindberg',
      text: 'Vi upplevde tydlig kommunikation, bra struktur och ett resultat som kändes genomtänkt från början till slut.',
    },
    {
      name: 'Johan Ekström',
      text: 'Det märktes att de arbetade metodiskt och höll vad de lovade. Projektet kändes tryggt genom hela processen.',
    },
    {
      name: 'Maria Sjöberg',
      text: 'Professionellt bemötande, god planering och hög kvalitet i utförandet. En väldigt positiv upplevelse för oss.',
    },
  ]

  return (
    <section className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-black/8 bg-[rgba(248,241,229,0.94)] px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div>
          <span className="eyebrow text-[#8e4c26]">Omdömen</span>
          <h2 className="title-main mt-5 text-[2.9rem] text-[#c55f2d] sm:text-[3.9rem]">
            Vad våra kunder säger
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="border border-black/10 bg-white/58 p-6 shadow-[0_12px_30px_rgba(63,43,24,0.05)]"
            >
              <div className="text-[1.1rem] tracking-[0.24em] text-[#ca642f]">
                ★★★★★
              </div>
              <p className="mt-4 text-sm leading-7 text-black/68">
                {review.text}
              </p>
              <p className="mt-5 text-sm font-semibold text-[#181311]">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
