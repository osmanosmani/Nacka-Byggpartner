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
    <header className="sticky top-0 z-50 px-2 pt-4">
      <div className="section-shell">
        <div className="rounded-t-[26px] border border-black/10 bg-[rgba(255,249,239,0.92)] px-4 py-3 shadow-[0_18px_50px_rgba(56,39,22,0.08)] backdrop-blur sm:px-5 sm:py-4 md:px-7">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <a href="#home" className="flex items-center">
              <img
                src={logo}
                alt="Nacka Byggpartner"
                className="h-10 w-auto sm:h-12 md:h-14"
              />
            </a>

            <nav className="hidden items-center gap-7 text-sm font-semibold text-black/75 md:flex">
              <a href="#home" className="transition hover:text-[#ca642f]">Hem</a>
              <a href="#about" className="transition hover:text-[#ca642f]">Om oss</a>
              <a href="#services" className="transition hover:text-[#ca642f]">Tjänster</a>
              <a href="#process" className="transition hover:text-[#ca642f]">Så funkar det</a>
              <a href="#gallery" className="transition hover:text-[#ca642f]">Projektexempel</a>
              <a href="#faq" className="transition hover:text-[#ca642f]">FAQ</a>
              <a href="#contact" className="transition hover:text-[#ca642f]">Kontakt</a>
            </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-sm transition hover:bg-white md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={isOpen}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-[#181311] transition duration-300 ${
                    isOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded-full bg-[#181311] transition duration-300 ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded-full bg-[#181311] transition duration-300 ${
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
          <div className="section-shell mt-[5.25rem]">
            <div className="rounded-[24px] border border-black/10 bg-[rgba(255,249,239,0.98)] px-5 py-5 shadow-[0_25px_60px_rgba(34,24,15,0.18)]">
              <nav className="flex flex-col gap-2 text-sm font-semibold">
                <a href="#home" onClick={closeMenu} className="rounded-xl px-4 py-3 hover:bg-black/5">Hem</a>
                <a href="#about" onClick={closeMenu} className="rounded-xl px-4 py-3 hover:bg-black/5">Om oss</a>
                <a href="#services" onClick={closeMenu} className="rounded-xl px-4 py-3 hover:bg-black/5">Tjänster</a>
                <a href="#process" onClick={closeMenu} className="rounded-xl px-4 py-3 hover:bg-black/5">Så funkar det</a>
                <a href="#gallery" onClick={closeMenu} className="rounded-xl px-4 py-3 hover:bg-black/5">Projektexempel</a>
                <a href="#faq" onClick={closeMenu} className="rounded-xl px-4 py-3 hover:bg-black/5">FAQ</a>
                <a href="#contact" onClick={closeMenu} className="rounded-xl bg-[#ca642f] px-4 py-3 text-white">Kontakt</a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
