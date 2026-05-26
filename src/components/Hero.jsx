import heroVideo from '../assets/video.mp4'
import heroPoster from '../assets/img/nacka-byggpartner-gallery (2).jpg'

function Hero() {
  return (
    <section id="home" className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-white/60 bg-[rgba(251,244,232,0.94)] shadow-[0_22px_64px_rgba(71,46,25,0.12)]">
        <div className="paper-noise relative min-h-[500px] px-5 py-8 sm:min-h-[580px] sm:px-8 sm:py-10 md:px-10 lg:min-h-[740px] lg:px-12 lg:py-12">
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroPoster}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,231,0.76)_0%,rgba(247,241,231,0.7)_28%,rgba(247,241,231,0.36)_58%,rgba(247,241,231,0.16)_100%)] sm:bg-[linear-gradient(90deg,rgba(247,241,231,0.9)_0%,rgba(247,241,231,0.76)_34%,rgba(247,241,231,0.26)_64%,rgba(247,241,231,0.06)_100%)]" />
          <div className="absolute inset-0 backdrop-blur-[1.5px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(255,255,255,0.26),transparent_24%),radial-gradient(circle_at_42%_40%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

          <div className="relative z-10 flex min-h-[inherit] items-end">
            <div className="max-w-[39rem] py-8 sm:py-10 lg:py-16">
              <span className="eyebrow text-[#8e4c26]">
                Komplett partner i byggprocessen
              </span>

              <h1 className="hero-title mt-4 max-w-xl text-[#b55f32] sm:mt-5">
                Från plan
                <br />
                till färdigt
                <br />
                projekt
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-black/66 sm:mt-6 sm:text-[1.02rem] sm:leading-8">
                Nacka Byggpartner tar helhetsansvar inom arkitektur, projektering,
                konstruktion, design och byggnation med fokus på kvalitet,
                kommunikation och ett resultat som går att lita på.
              </p>

              <div className="mt-7 flex max-w-md justify-start sm:mt-8">
                <a
                  href="#contact"
                  className="inline-flex min-w-[13.5rem] items-center justify-center rounded-full border border-[#b86a3f]/18 bg-[#fbf7ef] px-7 py-3.5 text-sm font-semibold text-[#2a221d] transition duration-200 hover:border-[#ca642f]/38 hover:bg-[#ca642f] hover:text-white sm:min-w-[14.5rem] sm:px-8"
                >
                  Kontakta oss
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
