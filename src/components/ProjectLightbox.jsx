function ProjectLightbox({ projects, activeIndex, onClose, onSelect, onPrev, onNext }) {
  if (activeIndex === null) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(10,10,10,0.9)] px-4 py-6 sm:px-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1240px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-0 top-[-3.25rem] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-xl text-white transition hover:bg-white/14"
          aria-label="Stäng bildspel"
        >
          ×
        </button>

        <div className="rounded-[28px] border border-white/6 bg-[#241f1b] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6">
          <div className="grid items-center gap-4 lg:grid-cols-[72px_1fr_72px]">
            <button
              type="button"
              onClick={onPrev}
              className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fff8ee] text-2xl text-[#1d1b19] shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition hover:scale-105"
              aria-label="Föregående bild"
            >
              ‹
            </button>

            <div className="grid gap-4 md:grid-cols-3">
              {[-1, 0, 1].map((offset) => {
                const index = (activeIndex + offset + projects.length) % projects.length
                const project = projects[index]
                const isActive = offset === 0

                return (
                  <div
                    key={`${project.title}-${offset}`}
                    className={`overflow-hidden rounded-[8px] border border-white/10 bg-[#191513] ${
                      isActive ? 'opacity-100' : 'opacity-70'
                    }`}
                  >
                    <img
                      src={project.src}
                      alt={project.title}
                      className="h-[240px] w-full object-cover sm:h-[320px]"
                    />
                  </div>
                )
              })}
            </div>

            <button
              type="button"
              onClick={onNext}
              className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#fff8ee] text-2xl text-[#1d1b19] shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition hover:scale-105"
              aria-label="Nästa bild"
            >
              ›
            </button>
          </div>

          <div className="mt-5 text-center">
            <div className="title-main text-[1.8rem] text-white sm:text-[2.1rem]">
              {projects[activeIndex].title}
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
              Bild {activeIndex + 1} av {projects.length}
            </p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => onSelect(index)}
                className={`overflow-hidden rounded-[6px] border ${
                  index === activeIndex ? 'border-[#d9b07c]' : 'border-white/10'
                }`}
                aria-label={`Visa ${project.title}`}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="h-20 w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectLightbox
