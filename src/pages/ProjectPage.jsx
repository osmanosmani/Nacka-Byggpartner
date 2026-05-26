import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { galleryProjects, getGalleryProjectIndex } from '../data/galleryProjects'

function ProjectPage({ project }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current === 0 ? project.images.length - 1 : current - 1))
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) => (current === project.images.length - 1 ? 0 : current + 1))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [project.images.length])

  const projectIndex = useMemo(() => getGalleryProjectIndex(project.slug), [project.slug])
  const previousProject = galleryProjects[(projectIndex - 1 + galleryProjects.length) % galleryProjects.length]
  const nextProject = galleryProjects[(projectIndex + 1) % galleryProjects.length]

  const previousImageIndex = activeIndex === 0 ? project.images.length - 1 : activeIndex - 1
  const nextImageIndex = activeIndex === project.images.length - 1 ? 0 : activeIndex + 1

  return (
    <div className="page-shell text-[#181311]">
      <Navbar />

      <section className="px-2 pb-6 pt-4 sm:px-6 sm:pb-10 sm:pt-8">
        <div className="section-shell overflow-hidden rounded-[34px] border border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_28px_80px_rgba(71,46,25,0.12)]">
          <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <a href="#/projekt" className="eyebrow text-[#8e4c26]">
              Tillbaka till alla projekt
            </a>

            <div className="mx-auto mt-6 max-w-[920px] text-center">
              <h1 className="title-main text-[2.7rem] text-[#181311] sm:text-[3.8rem]">
                {project.title}
              </h1>
            </div>

            <div className="mx-auto mt-8 max-w-[980px]">
              <div className="grid items-center gap-3 md:grid-cols-[72px_1fr_72px]">
                <button
                  type="button"
                  onClick={() => setActiveIndex(previousImageIndex)}
                  className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-[#1d1b19] shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition hover:scale-105"
                  aria-label="Föregående bild"
                >
                  ‹
                </button>

                <div className="grid gap-3 md:grid-cols-3">
                  {[previousImageIndex, activeIndex, nextImageIndex].map((imageIndex, visualIndex) => {
                    const isActive = visualIndex === 1

                    return (
                      <div
                        key={`${project.slug}-${imageIndex}-${visualIndex}`}
                        className={`overflow-hidden bg-[#1f1a17] ${isActive ? 'opacity-100' : 'opacity-78'}`}
                      >
                        <img
                          src={project.images[imageIndex]}
                          alt={`${project.title} bild ${imageIndex + 1}`}
                          decoding="async"
                          className="media-chamfer h-[240px] w-full object-cover sm:h-[340px]"
                        />
                      </div>
                    )
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveIndex(nextImageIndex)}
                  className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-[#1d1b19] shadow-[0_10px_20px_rgba(0,0,0,0.12)] transition hover:scale-105"
                  aria-label="Nästa bild"
                >
                  ›
                </button>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="bg-[#313846] p-6 text-white sm:p-8">
                  <p className="text-base leading-9 text-white/88 sm:text-[1.05rem]">
                    {project.body}
                  </p>
                </div>

                <div className="bg-[#efe4d2] p-6 text-[#181311] sm:p-8">
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#b86a3f]">
                    Projektfakta
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
                        Kategori
                      </div>
                      <div className="mt-1 text-sm leading-7 text-black/72">{project.category}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
                        Plats
                      </div>
                      <div className="mt-1 text-sm leading-7 text-black/72">{project.location}</div>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-black/68">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#b86a3f]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`#/projekt/${previousProject.slug}`}
                  className="inline-flex min-w-[112px] items-center justify-center border border-[#c79b6e]/55 px-5 py-3 text-sm font-medium text-[#8e4c26] transition hover:bg-[#f0e3cf]"
                >
                  Föregående
                </a>
                <a
                  href="#/projekt"
                  className="inline-flex min-w-[72px] items-center justify-center border border-[#c79b6e]/55 px-5 py-3 text-lg font-semibold text-[#8e4c26] transition hover:bg-[#f0e3cf]"
                  aria-label="Alla projekt"
                >
                  ◦
                </a>
                <a
                  href={`#/projekt/${nextProject.slug}`}
                  className="inline-flex min-w-[112px] items-center justify-center border border-[#c79b6e]/55 px-5 py-3 text-sm font-medium text-[#8e4c26] transition hover:bg-[#f0e3cf]"
                >
                  Nästa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}

export default ProjectPage
