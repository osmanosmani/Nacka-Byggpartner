import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="pt-0">
      <div
        className="section-shell dark-swirl overflow-hidden border-x border-b border-white/8 bg-[#141414] px-5 py-8 text-white sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: '#101010' }}
      >
        <span className="eyebrow border-white/12 text-[#e4b291]">Tjänster</span>

        <div className="mt-5 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <h2 className="title-main text-[2.8rem] text-[#ff7f2f] sm:text-[3.2rem] lg:text-[4.6rem]">
            Våra tjänster
          </h2>
          <p className="max-w-3xl text-base font-medium leading-7 text-white/88 sm:text-lg sm:leading-8">
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
              className="overflow-hidden rounded-[20px] border border-white/10 bg-[#222222] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] xl:col-span-2"
              style={{ backgroundColor: '#1b1b1b' }}
            >
              <div className="p-2 pb-0">
                <div className="overflow-hidden rounded-[16px] bg-[#151515] ring-1 ring-white/8">
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
                <h3 className="title-main text-[2rem] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/82">
                  {service.shortText}
                </p>
                <a
                  href={`#/tjanster/${service.slug}`}
                  className="mt-5 inline-flex rounded-xl border border-white/16 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#ff7f2f]/30 hover:text-[#ffb17e]"
                >
                  Läs mer
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
