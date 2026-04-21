import { useState } from 'react'

function FAQ() {
  const items = [
    {
      question: 'Behöver jag en kontrollansvarig?',
      answer:
        'Om åtgärden kräver lov eller anmälan måste du som regel utse en certifierad kontrollansvarig. Det är kommunen som avgör om det krävs i just ditt projekt.',
    },
    {
      question: 'Hur går en tillbyggnad till?',
      answer:
        'Processen börjar vanligtvis med A-ritningar, bygglov och kontroll av om KA behövs. När bygglovet är godkänt tas konstruktionsritningar fram och efter startbesked kan bygget börja.',
    },
    {
      question: 'Vad innebär byggkonsultation?',
      answer:
        'Vi hjälper till med råd på vägen, inköpskonsultation, utvärdering av offerter, kvalitetsbedömning av hantverkstjänster, byggledning och bemanning.',
    },
    {
      question: 'Vad gör en byggprojektledare?',
      answer:
        'Projektledaren hanterar bland annat upphandling av entreprenörer, teknisk rådgivning, inköp, samordning, kontroller och överlämning så att beställaren sparar tid och får det man betalar för.',
    },
    {
      question: 'Kan ni hjälpa om vi vill bygga nytt hus?',
      answer:
        'Ja. Vi kan ta dig genom hela resan från idé, undersökning och projektering till upphandling, genomförande, slutkontroll och slutbesked.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="pt-0">
      <div className="section-shell overflow-hidden border-x border-b border-black/8 bg-[rgba(248,241,229,0.96)] px-6 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.48fr_1.52fr]">
          <div>
            <h2 className="title-main text-[3rem] text-[#181311] sm:text-[4rem]">
              FAQ
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-black/65">
              Här är några vanliga frågor om nybyggnation, tillbyggnad,
              kontrollansvar och hur vi arbetar.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex rounded-xl border border-[#ca642f]/25 px-6 py-3 text-sm font-semibold"
              style={{ color: '#181311' }}
            >
              Kontakta oss
            </a>
          </div>

          <div className="space-y-3">
            {items.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div key={item.question} className="border-b border-black/15 py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <h3 className="text-lg font-bold text-[#181311] sm:text-xl">
                      {item.question}
                    </h3>
                    <span className="text-xl font-bold text-[#ca642f]">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-black/65">
                      {item.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
