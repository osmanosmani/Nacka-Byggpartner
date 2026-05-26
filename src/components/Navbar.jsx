import { useEffect, useState } from 'react'
import logo from '../assets/brand-logo.svg'

const navItems = [
  { href: '#home', label: 'Hem' },
  { href: '#about', label: 'Om oss' },
  { href: '#services', label: 'Tjänster' },
  { href: '#gallery', label: 'Projektexempel' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontakt' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hash, setHash] = useState(window.location.hash || '#home')

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home')

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const isActive = (href) => {
    if ((hash === '' || hash === '#home') && href === '#home') return true
    if (hash === href) return true
    if (href === '#about' && (hash === '#/om-oss' || hash === '#/om-oss/kontakt')) return true
    if (href === '#gallery' && (hash === '#/projekt' || hash.startsWith('#/projekt/'))) return true
    if (href === '#services' && hash.startsWith('#/tjanster/')) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 px-2">
      <div className="section-shell">
        <div className="navbar-shell border-x border-black/8 px-4 py-3 backdrop-blur-[14px] sm:px-5 sm:py-4 md:px-7">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <a href="#home" className="flex items-center">
              <img
                src={logo}
                alt="Nacka Byggpartner"
                className="h-[3.15rem] w-auto sm:h-[3.75rem] md:h-[4.1rem] lg:h-[4.95rem]"
              />
            </a>

            <nav className="hidden items-center gap-5 text-[0.82rem] font-semibold uppercase tracking-[0.24em] text-[#1c1914] lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`navbar-link px-2 py-2 border-b-2 border-transparent transition duration-200 ease-out ${
                    isActive(item.href)
                      ? 'text-[#231f1d] border-[#231f1d]'
                      : 'text-[#1c1914]/90 hover:text-[#231f1d] hover:border-[#b86a3f] hover:scale-105'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/80 shadow-sm transition hover:bg-white lg:hidden"
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
            <div className="rounded-[20px] border border-black/10 bg-[rgba(250,245,237,0.98)] px-5 py-5 shadow-[0_25px_60px_rgba(34,24,15,0.18)]">
              <nav className="flex flex-col gap-2 text-sm font-semibold">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`navbar-link rounded-md px-4 py-3 transition duration-200 ease-out ${
                      isActive(item.href)
                        ? 'bg-[#ca642f]/12 text-[#b86a3f]'
                        : 'text-[#181311] hover:bg-black/5 hover:text-[#231f1d]'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
