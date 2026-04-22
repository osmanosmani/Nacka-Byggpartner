import { useState } from 'react'
import logo from '../assets/brand-logo.svg'

const CONTACT_EMAIL = 'info@nackabyggpartner.se'

function Footer() {
  const [form, setForm] = useState({
    name: '',
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

    const subject = encodeURIComponent(`Förfrågan från ${form.name || 'webbplatsen'}`)
    const body = encodeURIComponent(
      [
        `Namn: ${form.name || '-'}`,
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
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <img src={logo} alt="Nacka Byggpartner" className="h-12 w-auto sm:h-16" />
            <h3 className="title-main mt-3 text-[2.05rem] text-[#181311] sm:mt-5 sm:text-[2.6rem]">
              Kontakt
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-black/70 sm:mt-4">
              Din personliga integritet är viktig för oss. Personuppgifter
              registreras i syfte att upprätthålla en god relation och avser
              främst namn, telefonnummer och e-postadress.
            </p>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              <div className="min-w-0 rounded-[20px] border border-black/10 bg-white/60 p-4 sm:p-5">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#ca642f]">
                  Kontaktuppgifter
                </div>
                <div className="mt-3 space-y-2 text-sm text-black/72">
                  <p>Stockholm / Nacka</p>
                  <p className="break-all">
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </p>
                  <p>+46 70 000 00 00</p>
                </div>
              </div>

              <div className="min-w-0 rounded-[20px] border border-black/10 bg-white/60 p-4 sm:p-5">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#ca642f]">
                  Navigation
                </div>
                <div className="mt-3 space-y-2 text-sm text-black/72">
                  <p><a href="#about">Om oss</a></p>
                  <p><a href="#services">Tjänster</a></p>
                  <p><a href="#faq">FAQ</a></p>
                  <p><a href="#gallery">Projektexempel</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-4 xl:grid-cols-2 xl:gap-5">
            <div className="min-w-0 rounded-[22px] border border-black/10 bg-white/62 p-4 sm:p-6">
              <h4 className="title-main text-[1.8rem] text-[#181311] sm:text-[2rem]">
                Kontakta oss
              </h4>
              <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:mt-5">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Namn"
                  className="w-full rounded-xl border border-black/10 bg-[#fffdf8] px-4 py-3 text-sm outline-none"
                />
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Tel"
                  className="w-full rounded-xl border border-black/10 bg-[#fffdf8] px-4 py-3 text-sm outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-post"
                  className="w-full rounded-xl border border-black/10 bg-[#fffdf8] px-4 py-3 text-sm outline-none"
                />
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Meddelande"
                  className="w-full resize-y rounded-xl border border-black/10 bg-[#fffdf8] px-4 py-3 text-sm outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#ca642f] px-6 py-3 text-sm font-semibold text-white sm:w-fit"
                >
                  Skicka förfrågan
                </button>
              </form>
            </div>

            <div
              className="min-w-0 rounded-[22px] border border-black/10 bg-[#231f1d] p-4 text-white sm:p-6"
              style={{ backgroundColor: '#111111' }}
            >
              <h4 className="title-main text-[1.8rem] text-[#ff7f2f] sm:text-[2rem]">
                Bli en av oss
              </h4>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Har du erfarenhet från yrket och vill veta mer om hur det är att
                arbeta hos oss är en spontanansökan via formulär ett bra första steg.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Har du lång bakgrund som snickare med erfarenhet av platsansvar
                eller projektansvar får du gärna kontakta oss direkt.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Spontanansökan')}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#fff8ee] px-6 py-3 text-sm font-semibold text-[#231f1d] sm:w-auto"
                style={{ backgroundColor: '#fff8ee', color: '#181311' }}
              >
                Skicka spontanansökan
              </a>
            </div>
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
