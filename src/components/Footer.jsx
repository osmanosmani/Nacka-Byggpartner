import { useState } from 'react'
import logo from '../assets/brand-logo.svg'
import contactImage from '../assets/selected-work/contact/closing-photo.jpg'

const CONTACT_EMAIL = 'info@nackabyggpartner.se'
const CONTACT_PHONE = '0705-22 83 22'
const fieldClass =
  'w-full border border-black/8 bg-[#fbf7ef] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#181311] outline-none transition focus:border-[#b55f32] focus:ring-2 focus:ring-[#b55f32]/20'
const labelClass = 'grid gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-black/55'
const socialIconClass =
  'inline-flex h-8 w-8 items-center justify-center rounded-full text-white shadow-sm transition hover:scale-105'

const SOCIAL_LINKS = [
  { name: 'Facebook', href: '', className: 'bg-[#1877f2]' },
  { name: 'Instagram', href: '', className: 'bg-[linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)]' },
  { name: 'YouTube', href: '', className: 'bg-[#ff0000]' },
]

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7.8 4.5h2.3l1.1 4-1.6 1.6a14 14 0 0 0 4.8 4.8l1.6-1.6 4 1.1v2.3a1.8 1.8 0 0 1-1.9 1.8A15.9 15.9 0 0 1 5.9 6.4 1.8 1.8 0 0 1 7.8 4.5Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true" focusable="false">
      <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.5c0-.8.2-1.4 1.4-1.4h1.5V5.6c-.3 0-1.2-.1-2.3-.1-2.2 0-3.7 1.3-3.7 3.9v1.8H8v2.8h2.4v7h3.1Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true" focusable="false">
      <path d="M21 8.5c-.2-1.4-1.3-2.5-2.7-2.7C16.9 5.5 14.7 5.5 12 5.5s-4.9 0-6.3.3C4.3 6 3.2 7.1 3 8.5c-.3 1.4-.3 2.7-.3 3.5s0 2.1.3 3.5c.2 1.4 1.3 2.5 2.7 2.7 1.4.3 3.6.3 6.3.3s4.9 0 6.3-.3c1.4-.2 2.5-1.3 2.7-2.7.3-1.4.3-2.7.3-3.5s0-2.1-.3-3.5ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  )
}

function SocialIcon({ name }) {
  if (name === 'Facebook') return <FacebookIcon />
  if (name === 'Instagram') return <InstagramIcon />
  return <YouTubeIcon />
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
      <div className="section-shell overflow-hidden rounded-b-[28px] border-x border-b border-black/8 bg-[rgba(247,240,232,0.96)] px-5 py-7 text-[#181311] sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-5 xl:grid-cols-[0.76fr_1fr_0.84fr]">
          <div
            className="rounded-[18px] border border-white/6 bg-[#171412] p-5 text-white shadow-[0_18px_40px_rgba(22,15,11,0.14)] sm:p-6"
            style={{ backgroundColor: '#12100f' }}
          >
            <img src={logo} alt="Nacka Byggpartner" className="h-12 w-auto sm:h-14" />
            <h3 className="mt-5 text-[2rem] font-medium tracking-[-0.03em] text-white sm:text-[2.45rem]">
              Kontakt
            </h3>
            <p id="contact-privacy" className="mt-3 max-w-sm text-sm leading-7 text-white/58">
              Din personliga integritet är viktig för oss. Personuppgifter
              registreras i syfte att upprätthålla en god relation och avser
              främst namn, telefonnummer och e-postadress.
            </p>

            <div className="mt-8 grid gap-7 sm:grid-cols-2">
              <div>
                <div className="text-white/78">
                  <PinIcon />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  Adress
                </p>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  Stockholm / Nacka
                </p>
              </div>

              <div>
                <div className="text-white/78">
                  <PhoneIcon />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  Telefon
                </p>
                <p className="mt-3 text-sm leading-7 text-white/76">
                  <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}>{CONTACT_PHONE}</a>
                </p>
              </div>

              <div className="sm:col-span-2">
                <div className="text-white/78">
                  <MailIcon />
                </div>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  E-post
                </p>
                <p className="mt-3 break-words text-sm leading-7 text-white/76">
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d9b07c]">
                  Följ oss
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {SOCIAL_LINKS.map((item) =>
                    item.href ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.name}
                        className={`${socialIconClass} ${item.className}`}
                      >
                        <SocialIcon name={item.name} />
                      </a>
                    ) : (
                      <span
                        key={item.name}
                        role="img"
                        aria-label={`${item.name} kommer snart`}
                        title={`${item.name} kommer snart`}
                        className={`${socialIconClass} ${item.className} cursor-default opacity-90`}
                      >
                        <SocialIcon name={item.name} />
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-[18px] border border-black/6 bg-[#f1e7d8] p-5 text-[#181311] shadow-[0_18px_40px_rgba(22,15,11,0.08)] sm:p-6"
          >
            <h4 className="title-main text-[1.9rem] text-[#201915] sm:text-[2.2rem]">
              Låt oss prata om ditt projekt
            </h4>
            <p className="mt-3 max-w-lg text-sm leading-7 text-black/60">
              Varje hem och varje byggprojekt börjar med ett samtal. Oavsett om du
              planerar nybyggnation, renovering eller vill bolla nästa steg finns
              vi här för att lyssna, vägleda och skapa en trygg väg framåt.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-3" aria-describedby="contact-privacy">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className={labelClass}>
                  Förnamn *
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Förnamn"
                    autoComplete="given-name"
                    required
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
                  Efternamn
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Efternamn"
                    autoComplete="family-name"
                    className={fieldClass}
                  />
                </label>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className={labelClass}>
                  E-post *
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E-post"
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                </label>
                <label className={labelClass}>
                  Telefon
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Telefon"
                    autoComplete="tel"
                    inputMode="tel"
                    className={fieldClass}
                  />
                </label>
              </div>
              <label className={labelClass}>
                Meddelande *
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Meddelande"
                  minLength={8}
                  required
                  className={`${fieldClass} resize-y`}
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#d8b281] px-6 py-3 text-sm font-semibold text-[#181311] transition hover:bg-[#b55f32] hover:text-white sm:w-fit sm:min-w-[180px]"
              >
                Skicka förfrågan
              </button>
            </form>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-black/8 bg-[#efe4d0] shadow-[0_18px_40px_rgba(22,15,11,0.08)]">
            <img
              src={contactImage}
              alt="Nacka Byggpartner projektbild"
              loading="lazy"
              decoding="async"
              className="media-chamfer h-full min-h-[320px] w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-7 border-t border-black/10 pt-4 text-center text-xs leading-6 text-black/50 sm:mt-8 sm:flex sm:items-center sm:justify-between sm:pt-5 sm:text-left">
          <span>(c) 2026 Nacka Byggpartner. All rights reserved.</span>
          <span>Material och struktur anpassad efter levererat underlag.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
