import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import ProjectLightbox from '../components/ProjectLightbox'
import { galleryProjects } from '../data/galleryProjects'

function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  const goPrev = () => {
    setActiveIndex((current) => {
      if (current === null) return 0
      return current === 0 ? galleryProjects.length - 1 : current - 1
    })
  }

  const goNext = () => {
    setActiveIndex((current) => {
      if (current === null) return 0
      return current === galleryProjects.length - 1 ? 0 : current + 1
    })
  }

  useEffect(() => {
    if (activeIndex === null) return undefined

    const onKeyDown = (event) => {
      const previousIndex = activeIndex === 0 ? galleryProjects.length - 1 : activeIndex - 1
      const nextIndex = activeIndex === galleryProjects.length - 1 ? 0 : activeIndex + 1

      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') setActiveIndex(previousIndex)
      if (event.key === 'ArrowRight') setActiveIndex(nextIndex)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex])

  return (
    <div className="page-shell text-[#181311]">
      <Navbar />

      <section className="px-2 pb-6 pt-4 sm:px-6 sm:pb-10 sm:pt-8">
        <div className="section-shell overflow-hidden rounded-[34px] border border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_28px_80px_rgba(71,46,25,0.14)]">
          <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:px-10 lg:py-10">
            <div>
              <a href="#gallery" className="eyebrow text-[#8e4c26]">
                Tillbaka till startsidan
              </a>
              <h1 className="title-main mt-5 text-[2.8rem] text-[#c55f2d] sm:text-[3.8rem] lg:text-[5rem]">
                Alla projekt
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black/72 sm:text-base sm:leading-8">
                Här samlar vi projekt, detaljer och miljöer som visar hur Nacka
                Byggpartner arbetar i praktiken. Fler referensprojekt kommer att
                fyllas på efter hand.
              </p>
            </div>

            <div className="rounded-[20px] border border-black/8 bg-white/60 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ca642f]">
                Referensprojekt
              </p>
              <p className="mt-3 text-sm leading-7 text-black/66">
                Klicka på en bild för att öppna bildspelet och bläddra mellan
                samtliga projektbilder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-2 py-4 sm:px-6 sm:py-8">
        <div
          className="section-shell dark-swirl overflow-hidden border-x border-b border-white/8 bg-[#231f1d] px-5 py-8 text-white sm:px-8 sm:py-14 lg:px-10"
          style={{ backgroundColor: '#151210' }}
        >
          <div className="grid gap-x-5 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
            {galleryProjects.map((project, index) => (
              <article key={project.title}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="block w-full overflow-hidden bg-[#1b1715] p-3 text-left shadow-[0_16px_40px_rgba(8,8,8,0.22)] transition hover:-translate-y-0.5"
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-[240px] w-full object-cover sm:h-[280px]"
                  />
                  <div className="mx-auto -mt-2 w-[84%] border border-white/6 bg-[#302823] px-5 py-5 text-center shadow-[0_14px_36px_rgba(8,8,8,0.22)] sm:px-7">
                    <h2 className="title-main text-[1.5rem] tracking-[0.05em] text-white sm:text-[1.72rem]">
                      {project.title}
                    </h2>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />

      <ProjectLightbox
        projects={galleryProjects}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelect={setActiveIndex}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  )
}

export default ProjectsPage
