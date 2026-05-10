import { useEffect, useState } from 'react'
import logo from '../assets/brand-logo.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 px-2">
      <div className="section-shell">
        <div className="navbar-shell border-x border-black/8 px-4 py-3 backdrop-blur-[10px] sm:px-5 sm:py-4 md:px-7">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <a href="#home" className="flex items-center">
              <img
                src={logo}
                alt="Nacka Byggpartner"
                className="h-[3.45rem] w-auto sm:h-[4rem] md:h-[4.85rem]"
              />
            </a>

            <nav className="hidden items-center gap-6 text-[0.82rem] font-semibold tracking-[0.08em] text-black/68 md:flex">
              <a href="#home" className="transition hover:text-[#ca642f]">Hem</a>
              <a href="#about" className="transition hover:text-[#ca642f]">Om oss</a>
              <a href="#services" className="transition hover:text-[#ca642f]">Tjänster</a>
              <a href="#gallery" className="transition hover:text-[#ca642f]">Projektexempel</a>
              <a href="#faq" className="transition hover:text-[#ca642f]">FAQ</a>
              <a href="#contact" className="transition hover:text-[#ca642f]">Kontakt</a>
            </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10 bg-white/78 shadow-sm transition hover:bg-white md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={isOpen}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 bg-[#181311] transition duration-300 ${
                    isOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 bg-[#181311] transition duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 bg-[#181311] transition duration-300 ${
                    isOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/35 backdrop-blur-[2px] md:hidden">
          <div className="section-shell mt-[4.7rem]">
            <div className="border border-black/10 bg-[rgba(250,245,237,0.98)] px-5 py-5 shadow-[0_25px_60px_rgba(34,24,15,0.18)]">
              <nav className="flex flex-col gap-2 text-sm font-semibold">
                <a href="#home" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-black/5">Hem</a>
                <a href="#about" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-black/5">Om oss</a>
                <a href="#services" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-black/5">Tjänster</a>
                <a href="#gallery" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-black/5">Projektexempel</a>
                <a href="#faq" onClick={closeMenu} className="rounded-md px-4 py-3 hover:bg-black/5">FAQ</a>
                <a href="#contact" onClick={closeMenu} className="rounded-md bg-[#ca642f] px-4 py-3 text-white">Kontakt</a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
