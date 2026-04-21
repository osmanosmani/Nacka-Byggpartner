import heroVideo from '../assets/video.mp4'
import heroPoster from '../assets/img/nacka-byggpartner-gallery (2).jpg'

function Hero() {
  return (
    <section id="home" className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_28px_80px_rgba(71,46,25,0.14)]">
        <div className="paper-noise relative min-h-[480px] px-5 py-6 sm:min-h-[540px] sm:px-8 sm:py-8 md:px-10 lg:min-h-[700px] lg:px-12 lg:py-12">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,239,225,0.95)_0%,rgba(247,239,225,0.9)_36%,rgba(247,239,225,0.68)_58%,rgba(247,239,225,0.4)_100%)] sm:bg-[linear-gradient(90deg,rgba(247,239,225,0.97)_0%,rgba(247,239,225,0.92)_35%,rgba(247,239,225,0.56)_60%,rgba(247,239,225,0.14)_100%)]" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.72),transparent_28%),radial-gradient(circle_at_44%_38%,rgba(255,255,255,0.14),transparent_18%)]" />

          <div className="relative z-10 max-w-[42rem] py-4 sm:py-6 lg:py-14">
            <span className="eyebrow text-[#8e4c26]">Komplett partner i byggprocessen</span>

            <h1 className="title-main mt-5 max-w-xl text-[3rem] text-[#c55f2d] sm:mt-6 sm:text-[4rem] lg:text-[6.3rem]">
              Från plan
              <br />
              till färdigt
              <br />
              projekt
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-black/72 sm:mt-5 sm:text-base">
              Nacka Byggpartner tar helhetsansvar inom arkitektur, projektering,
              konstruktion, design och byggnation med fokus på kvalitet,
              kommunikation och ett resultat som går att lita på.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="tel:0705228322"
                className="inline-flex items-center justify-center rounded-xl bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#242424] sm:px-7"
                style={{ backgroundColor: '#0f0f0f', color: '#ffffff' }}
              >
                Ring 0705-22 83 22
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#ca642f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b35627] sm:px-7"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
