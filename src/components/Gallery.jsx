import { featuredGalleryProjects } from '../data/galleryProjects'

function Gallery() {
  return (
    <section id="gallery" className="pt-0">
      <div
        className="section-shell overflow-hidden border-x border-b border-black/6 bg-[#f7f1e5] px-5 py-10 text-[#181311] sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: '#F7F1E5' }}
      >
        <div>
          <span className="eyebrow text-[#8e4c26]">Projektexempel</span>
          <h2 className="title-main mt-4 text-[2.45rem] text-[#181311] sm:mt-5 sm:text-[3.35rem]">
            Galleri
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-black/58 sm:text-base">
            Ett urval av projekt och detaljer som visar materialkänsla, process och resultat.
          </p>
        </div>

        <div className="mt-8 grid gap-x-5 gap-y-8 lg:grid-cols-3">
          {featuredGalleryProjects.map((project) => (
            <article key={project.slug}>
              <a
                href={`#/projekt/${project.slug}`}
                className="group block pb-12 text-left transition hover:-translate-y-0.5"
              >
                <div className="relative">
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="media-chamfer h-[240px] w-full object-cover shadow-[0_18px_34px_rgba(37,26,18,0.12)] transition duration-500 group-hover:scale-[1.02] sm:h-[280px]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-1/2 justify-center px-4">
                    <div className="flex h-[68px] w-full max-w-[332px] items-center justify-center border border-[#b99365]/24 bg-[rgba(220,192,154,0.75)] px-6 text-center shadow-[0_14px_28px_rgba(37,26,18,0.16)] backdrop-blur-[4px] sm:h-[72px] sm:max-w-[348px]">
                      <h3 className="font-['Barlow_Condensed'] text-[0.98rem] font-semibold uppercase tracking-[0.14em] text-[#231f1d] sm:text-[1.06rem]">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#/projekt"
            className="inline-flex items-center gap-3 border border-[#d4b287]/55 bg-[#dcc09a] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#231f1d] transition hover:bg-[#e6c9a4]"
          >
            Alla projekt
            <span aria-hidden="true" className="text-sm leading-none">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
