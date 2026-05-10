import { useEffect, useState } from 'react'
import ProjectLightbox from './ProjectLightbox'
import { featuredGalleryProjects } from '../data/galleryProjects'

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const goPrev = () => {
    setActiveIndex((current) => {
      if (current === null) return 0
      return current === 0 ? featuredGalleryProjects.length - 1 : current - 1
    })
  }

  const goNext = () => {
    setActiveIndex((current) => {
      if (current === null) return 0
      return current === featuredGalleryProjects.length - 1 ? 0 : current + 1
    })
  }

  useEffect(() => {
    if (activeIndex === null) return undefined

    const onKeyDown = (event) => {
      const previousIndex =
        activeIndex === 0 ? featuredGalleryProjects.length - 1 : activeIndex - 1
      const nextIndex =
        activeIndex === featuredGalleryProjects.length - 1 ? 0 : activeIndex + 1

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
    <section id="gallery" className="pt-0">
      <div
        className="section-shell dark-swirl overflow-hidden border-x border-b border-white/8 bg-[#231f1d] px-5 py-8 text-white sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: '#151210' }}
      >
        <div>
          <span className="eyebrow border-white/12 text-[#e4b291]">Projektexempel</span>
          <h2 className="title-main mt-4 text-[2.9rem] text-[#ff7f2f] sm:mt-5 sm:text-[4.5rem]">
            Galleri
          </h2>
        </div>

        <div className="mt-8 grid gap-x-5 gap-y-8 xl:grid-cols-12">
          {featuredGalleryProjects.map((project, index) => (
            <article key={project.title} className={project.homeClass}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="block w-full overflow-hidden bg-[#1b1715] p-3 text-left shadow-[0_16px_40px_rgba(8,8,8,0.22)] transition hover:-translate-y-0.5"
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className={`w-full object-cover transition duration-500 hover:scale-[1.02] ${project.homeImageClass}`}
                />
                <div className="mx-auto -mt-2 w-[84%] border border-white/6 bg-[#302823] px-5 py-5 text-center shadow-[0_14px_36px_rgba(8,8,8,0.22)] sm:px-7">
                  <h3 className="title-main text-[1.55rem] tracking-[0.05em] text-white sm:text-[1.8rem]">
                    {project.title}
                  </h3>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#/projekt"
            className="inline-flex items-center gap-3 border border-[#e7c18e]/35 bg-[#d7b385] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#231f1d] transition hover:bg-[#e4c194]"
          >
            Alla projekt
            <span aria-hidden="true" className="text-sm leading-none">
              →
            </span>
          </a>
        </div>
      </div>

      <ProjectLightbox
        projects={featuredGalleryProjects}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onSelect={setActiveIndex}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  )
}

export default Gallery
