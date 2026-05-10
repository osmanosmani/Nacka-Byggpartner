import heroVideo from '../assets/video.mp4'
import heroPoster from '../assets/img/nacka-byggpartner-gallery (2).jpg'

function Hero() {
  return (
    <section id="home" className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_22px_64px_rgba(71,46,25,0.12)]">
        <div className="paper-noise relative min-h-[470px] px-5 py-8 sm:min-h-[540px] sm:px-8 sm:py-10 md:px-10 lg:min-h-[680px] lg:px-12 lg:py-12">
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

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,238,225,0.88)_0%,rgba(246,238,225,0.82)_34%,rgba(246,238,225,0.58)_58%,rgba(246,238,225,0.28)_100%)] sm:bg-[linear-gradient(90deg,rgba(246,238,225,0.96)_0%,rgba(246,238,225,0.88)_30%,rgba(246,238,225,0.48)_58%,rgba(246,238,225,0.1)_100%)]" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(255,255,255,0.34),transparent_24%),radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

          <div className="relative z-10 max-w-[41rem] py-4 sm:py-6 lg:py-12">
            <span className="eyebrow eyebrow--plain text-[#8e4c26]">
              Komplett partner i byggprocessen
            </span>

            <h1 className="hero-title mt-5 max-w-lg text-[#bb5c2d] sm:mt-6">
              Från plan
              <br />
              till färdigt
              <br />
              projekt
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-black/68 sm:mt-5 sm:text-base">
              Nacka Byggpartner tar helhetsansvar inom arkitektur, projektering,
              konstruktion, design och byggnation med fokus på kvalitet,
              kommunikation och ett resultat som går att lita på.
            </p>

            <div className="mt-6 flex max-w-md justify-center sm:mt-8">
              <a
                href="#contact"
                className="inline-flex min-w-[13.5rem] items-center justify-center rounded-full bg-[#ca642f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b35627] sm:min-w-[14.5rem] sm:px-8"
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
