import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="pt-0">
      <div
        className="section-shell dark-swirl overflow-hidden border-x border-b border-white/8 bg-[#141414] px-5 py-8 text-white sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: '#101010' }}
      >
        <span className="eyebrow border-white/12 text-[#e4b291]">Tjänster</span>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <h2 className="title-main text-[2.45rem] text-[#ff7f2f] sm:text-[2.85rem] lg:text-[4rem]">
            Våra tjänster
          </h2>
          <p className="max-w-3xl text-[0.96rem] font-medium leading-7 text-white/74 sm:text-[1.02rem] sm:leading-8">
            Oavsett om det handlar om att bygga nytt, bygga om, bygga till eller
            få rätt stöd i processen arbetar vi med
            <span className="text-[#ff7f2f]">
              {' '}tydliga underlag, samordning och kvalitet i varje steg
            </span>.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="overflow-hidden rounded-[12px] border border-white/10 bg-[#1b1b1b] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] xl:col-span-2"
            >
              <div className="p-2 pb-0">
                <div className="overflow-hidden rounded-[6px] bg-[#151515] ring-1 ring-white/8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`h-44 w-full object-cover transition duration-500 hover:scale-[1.02] ${
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

              <div className="p-5 pt-4">
                <h3 className="title-main text-[1.72rem] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.94rem] leading-7 text-white/72">
                  {service.shortText}
                </p>
                <a
                  href={`#/tjanster/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f1a36d] transition hover:text-[#ffbf96]"
                >
                  <span>Läs mer</span>
                  <span aria-hidden="true" className="text-base leading-none">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
