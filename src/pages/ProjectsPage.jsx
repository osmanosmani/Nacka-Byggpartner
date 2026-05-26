import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { galleryProjects } from '../data/galleryProjects'

function ProjectsPage() {
  return (
    <div className="page-shell text-[#181311]">
      <Navbar />

      <section className="px-2 pb-6 pt-4 sm:px-6 sm:pb-10 sm:pt-8">
        <div className="section-shell overflow-hidden rounded-[34px] border border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_28px_80px_rgba(71,46,25,0.12)]">
          <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:px-10 lg:py-10">
            <div>
              <a href="#gallery" className="eyebrow text-[#8e4c26]">
                Tillbaka till startsidan
              </a>
              <h1 className="title-main mt-5 text-[2.6rem] text-[#181311] sm:text-[3.5rem] lg:text-[4.6rem]">
                Alla projekt
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/62 sm:text-base sm:leading-8">
                Här samlar vi projekt, detaljer och miljöer som visar hur Nacka Byggpartner arbetar i praktiken.
                Fler referensprojekt kommer att fyllas på efter hand.
              </p>
            </div>

            <div className="rounded-[18px] border border-black/8 bg-white/54 p-5 sm:p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#b86a3f]">
                Referensprojekt
              </p>
              <p className="mt-3 text-sm leading-7 text-black/58">
                Klicka på ett projekt för att öppna en egen projektsida med fler bilder och mer information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 py-4 sm:px-6 sm:py-8">
        <div
          className="section-shell overflow-hidden border-x border-b border-black/6 bg-[#f7f1e5] px-5 py-10 text-[#181311] sm:px-8 sm:py-14 lg:px-10"
          style={{ backgroundColor: '#F7F1E5' }}
        >
          <div className="grid gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {galleryProjects.map((project) => (
              <article key={project.slug}>
                <a
                  href={`#/projekt/${project.slug}`}
                  className="group block pb-12 text-left transition hover:-translate-y-0.5"
                >
                  <div className="relative">
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="media-chamfer h-[240px] w-full object-cover shadow-[0_18px_34px_rgba(37,26,18,0.12)] transition duration-500 group-hover:scale-[1.02] sm:h-[280px]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-1/2 justify-center px-4">
                      <div className="flex h-[68px] w-full max-w-[332px] items-center justify-center border border-[#b99365]/24 bg-[rgba(220,192,154,0.75)] px-6 text-center shadow-[0_14px_28px_rgba(37,26,18,0.16)] backdrop-blur-[4px] sm:h-[72px] sm:max-w-[348px]">
                        <h2 className="font-[Barlow_Condensed] text-[0.98rem] font-semibold uppercase tracking-[0.14em] text-[#231f1d] sm:text-[1.06rem]">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mt-[3rem] w-[84%] text-center">
                    <p className="text-sm leading-7 text-black/56">{project.summary}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default ProjectsPage
