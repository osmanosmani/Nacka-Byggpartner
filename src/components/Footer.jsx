import { useState } from 'react'
import logo from '../assets/brand-logo.svg'
import contactImage from '../assets/img/nacka-byggpartner-gallery (11).jpg'

const CONTACT_EMAIL = 'info@nackabyggpartner.se'
const CONTACT_PHONE = '0705-22 83 22'

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
      <path d="M7.8 4.5h2.3l1.1 4-1.6 1.6a14 14 0 0 0 4.8 4.8l1.6-1.6 4 1.1v2.3a1.8 1.8 0 0 1-1.9 1.8A15.9 15.9 0 0 1 5.9 6.4 1.8 1.8 0 0 1 7.8 4.5Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.5c0-.8.2-1.4 1.4-1.4h1.5V5.6c-.3 0-1.2-.1-2.3-.1-2.2 0-3.7 1.3-3.7 3.9v1.8H8v2.8h2.4v7h3.1Z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.9 7.1c.8-.1 1.5-.4 2.1-.8-.3.8-.9 1.4-1.6 1.8.7 0 1.3-.2 1.9-.5-.5.7-1 1.3-1.7 1.8v.7c0 4.5-3.4 9.7-9.7 9.7-1.9 0-3.7-.6-5.2-1.6h.8c1.6 0 3.1-.5 4.2-1.5-1.5 0-2.8-1-3.2-2.4.2 0 .4.1.7.1.3 0 .6 0 .9-.1-1.6-.3-2.7-1.7-2.7-3.3v-.1c.5.3 1 .4 1.6.4-.9-.6-1.5-1.6-1.5-2.8 0-.6.2-1.2.5-1.7 1.7 2.1 4.3 3.5 7.2 3.6-.1-.3-.1-.5-.1-.8 0-1.9 1.5-3.4 3.4-3.4 1 0 1.9.4 2.5 1.1.8-.1 1.5-.4 2.1-.8-.3.8-.8 1.5-1.5 1.9Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M21 8.5c-.2-1.4-1.3-2.5-2.7-2.7C16.9 5.5 14.7 5.5 12 5.5s-4.9 0-6.3.3C4.3 6 3.2 7.1 3 8.5c-.3 1.4-.3 2.7-.3 3.5s0 2.1.3 3.5c.2 1.4 1.3 2.5 2.7 2.7 1.4.3 3.6.3 6.3.3s4.9 0 6.3-.3c1.4-.2 2.5-1.3 2.7-2.7.3-1.4.3-2.7.3-3.5s0-2.1-.3-3.5ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  )
}

function Footer() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const fullName = [form.firstName, form.lastName].filter(Boolean).join(' ')
    const subject = encodeURIComponent(`Förfrågan från ${fullName || 'webbplatsen'}`)
    const body = encodeURIComponent(
      [
        `Förnamn: ${form.firstName || '-'}`,
        `Efternamn: ${form.lastName || '-'}`,
        `Telefon: ${form.phone || '-'}`,
        `E-post: ${form.email || '-'}`,
        '',
        'Meddelande:',
        form.message || '-',
      ].join('\n'),
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <footer id="contact" className="pb-8">
      <div className="section-shell overflow-hidden rounded-b-[28px] border-x border-b border-black/8 bg-[rgba(248,241,229,0.96)] px-5 py-7 text-[#181311] sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-5 xl:grid-cols-[0.78fr_1fr_0.82fr]">
          <div
            className="rounded-[22px] border border-white/8 bg-[#141210] p-5 text-white shadow-[0_20px_60px_rgba(22,15,11,0.18)] sm:p-6"
            style={{ backgroundColor: '#111111' }}
          >
            <img src={logo} alt="Nacka Byggpartner" className="h-12 w-auto sm:h-14" />
            <h3 className="mt-5 text-[2rem] font-semibold tracking-[-0.03em] text-white sm:text-[2.5rem]">
              Kontakt
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/60">
              Din personliga integritet är viktig för oss. Personuppgifter
              registreras i syfte att upprätthålla en god relation och avser
              främst namn, telefonnummer och e-postadress.
            </p>

            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              <div>
                <div className="text-white/82">
                  <PinIcon />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  Adress
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Stockholm / Nacka
                </p>
              </div>

              <div>
                <div className="text-white/82">
                  <PhoneIcon />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  Telefon
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}>{CONTACT_PHONE}</a>
                </p>
              </div>

              <div>
                <div className="text-white/82">
                  <MailIcon />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  E-post
                </p>
                <p className="mt-3 break-all text-sm leading-7 text-white/78">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  Följ oss
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <a
                    href="#contact"
                    aria-label="Facebook"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-white transition hover:scale-105"
                  >
                    <FacebookIcon />
                  </a>
              
                  <a
                    href="#contact"
                    aria-label="Instagram"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)] text-white transition hover:scale-105"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#contact"
                    aria-label="YouTube"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff0000] text-white transition hover:scale-105"
                  >
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-[22px] border border-white/8 bg-[#26231f] p-5 text-white shadow-[0_20px_60px_rgba(22,15,11,0.18)] sm:p-6"
            style={{ backgroundColor: '#2a2622' }}
          >
            <h4 className="title-main text-[2rem] text-white sm:text-[2.35rem]">
              Låt oss prata om ditt projekt
            </h4>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/68">
              Varje hem och varje byggprojekt börjar med ett samtal. Oavsett om du
              planerar nybyggnation, renovering eller vill bolla nästa steg finns
              vi här för att lyssna, vägleda och skapa en trygg väg framåt.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Förnamn"
                  className="w-full border border-white/10 bg-[#f6eee2] px-4 py-3 text-sm text-[#181311] outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Efternamn"
                  className="w-full border border-white/10 bg-[#f6eee2] px-4 py-3 text-sm text-[#181311] outline-none"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-post"
                  className="w-full border border-white/10 bg-[#f6eee2] px-4 py-3 text-sm text-[#181311] outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Telefon"
                  className="w-full border border-white/10 bg-[#f6eee2] px-4 py-3 text-sm text-[#181311] outline-none"
                />
              </div>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Meddelande"
                className="w-full resize-y border border-white/10 bg-[#f6eee2] px-4 py-3 text-sm text-[#181311] outline-none"
              />
              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center bg-[#d8b281] px-6 py-3 text-sm font-semibold text-[#181311] transition hover:bg-[#e3bf94] sm:w-fit sm:min-w-[180px]"
              >
                Skicka förfrågan
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-black/10 bg-[#e9decc] shadow-[0_20px_60px_rgba(22,15,11,0.12)]">
            <img
              src={contactImage}
              alt="Nacka Byggpartner projektbild"
              className="h-full min-h-[320px] w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-7 border-t border-black/10 pt-4 text-center text-xs leading-6 text-black/55 sm:mt-8 sm:flex sm:items-center sm:justify-between sm:pt-5 sm:text-left">
          <span>(c) 2026 Nacka Byggpartner. All rights reserved.</span>
          <span>Material och struktur anpassad efter levererat underlag.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
