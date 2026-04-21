import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import { services } from '../data/services'

function ServicePage({ service }) {
  return (
    <div className="page-shell text-[#181311]">
      <Navbar />

      <section className="px-2 pb-8 pt-4 sm:px-6 sm:pb-14 sm:pt-8">
        <div className="section-shell overflow-hidden rounded-[38px] border border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_28px_80px_rgba(71,46,25,0.14)]">
          <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10 lg:py-10">
            <div>
              <a
                href="#services"
                className="eyebrow text-[#8e4c26]"
              >
                Tillbaka till tjänster
              </a>
              <h1 className="title-main mt-5 text-[2.9rem] text-[#c55f2d] sm:text-[4rem] lg:text-[5.4rem]">
                {service.title}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/72 sm:mt-5 sm:text-base sm:leading-8">
                {service.intro}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="tel:0705228322"
                  className="inline-flex items-center justify-center rounded-xl bg-[#231f1d] px-6 py-3 text-sm font-semibold text-white sm:px-7"
                  style={{ backgroundColor: '#0f0f0f', color: '#ffffff' }}
                >
                  Ring 0705-22 83 22
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#ca642f] px-6 py-3 text-sm font-semibold text-white sm:px-7"
                  style={{ color: '#ffffff' }}
                >
                  Kontakta oss
                </a>
              </div>
            </div>

            <img
              src={service.image}
              alt={service.title}
              className="h-[240px] w-full rounded-[24px] object-cover shadow-[0_16px_40px_rgba(44,28,15,0.12)] sm:h-[320px] sm:rounded-[28px] lg:h-[460px]"
            />
          </div>
        </div>
      </section>

      <section className="px-2 py-4 sm:px-6 sm:py-8">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[26px] bg-[rgba(248,241,229,0.95)] px-5 py-6 shadow-[0_20px_60px_rgba(71,46,25,0.08)] sm:rounded-[32px] sm:px-8 sm:py-8">
            {service.sections.map((section) => (
              <div key={section.heading} className="border-b border-black/10 py-6 first:pt-0 last:border-b-0 last:pb-0">
                <h2 className="title-main text-[2rem] text-[#181311] sm:text-[2.5rem] lg:text-[3rem]">
                  {section.heading}
                </h2>
                <p className="mt-4 text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] bg-[#231f1d] p-5 text-white shadow-[0_18px_50px_rgba(28,21,18,0.2)] sm:rounded-[28px] sm:p-6">
              <h3 className="title-main text-[1.9rem] text-[#ff7f2f] sm:text-[2.2rem]">
                I korthet
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/78">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#ff7f2f]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] bg-[rgba(248,241,229,0.95)] p-5 shadow-[0_18px_50px_rgba(71,46,25,0.08)] sm:rounded-[28px] sm:p-6">
              <h3 className="title-main text-[1.9rem] text-[#181311] sm:text-[2.2rem]">
                Fler tjänster
              </h3>
              <div className="mt-5 space-y-3">
                {services
                  .filter((item) => item.slug !== service.slug)
                  .map((item) => (
                    <a
                      key={item.slug}
                      href={`#/tjanster/${item.slug}`}
                      className="block rounded-[18px] border border-black/10 bg-white/50 px-4 py-4 text-sm font-semibold text-black/72 transition hover:border-[#ca642f]/30 hover:bg-white/85 hover:text-[#ca642f]"
                    >
                      {item.title}
                    </a>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default ServicePage
