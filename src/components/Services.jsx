import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="pt-0">
      <div
        className="section-shell dark-swirl overflow-hidden border-x border-b border-white/8 bg-[#141312] px-5 py-10 text-white sm:px-8 sm:py-16 lg:px-10"
        style={{ backgroundColor: '#12100f' }}
      >
        <span className="eyebrow border-white/12 text-[#e4b291]">Tjänster</span>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <h2 className="title-main text-[2.3rem] text-[#FF7F2F] sm:text-[2.6rem] lg:text-[3.5rem]">
            Våra tjänster
          </h2>
          <p className="max-w-3xl text-[0.95rem] leading-7 text-white/68 sm:text-[1rem] sm:leading-8">
            Oavsett om det handlar om att bygga nytt, bygga om, bygga till eller få rätt stöd i processen
            arbetar vi med <span className="text-[#FF7F2F]">tydliga underlag, samordning och kvalitet</span> i varje steg.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="border border-white/8 bg-[#161412] xl:col-span-2"
            >
              <div className="p-2.5 pb-0">
                <div className="overflow-hidden bg-[#100f0e] ring-1 ring-white/6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`media-chamfer h-44 w-full object-cover transition duration-500 hover:scale-[1.02] ${
                      index === 0 ? 'object-[center_42%]' :
                      index === 1 ? 'object-center' :
                      index === 2 ? 'object-[center_68%]' :
                      index === 3 ? 'object-center' :
                      index === 4 ? 'object-[center_44%]' :
                      'object-center'
                    }`}
                  />
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <h3 className="title-main text-[1.58rem] text-[#FF7F2F]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-7 text-white/68">
                  {service.shortText}
                </p>
                <a
                  href={`#/tjanster/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-[#FF7F2F] transition hover:text-white"
                >
                  <span>Läs mer</span>
                  <span aria-hidden="true" className="text-sm leading-none">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
