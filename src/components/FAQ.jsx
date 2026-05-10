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
      <div
        className="section-shell overflow-hidden border-x border-b border-white/8 bg-[#231f1d] px-6 py-12 text-white sm:px-8 sm:py-16 lg:px-10"
        style={{ backgroundColor: '#141210' }}
      >
        <div className="grid gap-10 lg:grid-cols-[0.44fr_1.56fr]">
          <div>
            <span className="eyebrow border-white/12 text-[#e4b291]">Vanliga frågor</span>
            <h2 className="title-main mt-5 text-[2.6rem] text-[#f4efe7] sm:text-[3.4rem]">
              FAQ
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/62">
              Några vanliga frågor om nybyggnation, tillbyggnad, kontrollansvar och hur vi arbetar.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full border border-white/14 px-6 py-3 text-sm font-semibold text-[#e8d4ba] transition hover:bg-[#ca642f] hover:text-white"
            >
              Kontakta oss
            </a>
          </div>

          <div className="space-y-1">
            {items.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <div key={item.question} className="border-b border-white/10 py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <h3 className="text-[1.04rem] font-semibold leading-7 text-[#f4efe7] sm:text-[1.14rem]">
                      {item.question}
                    </h3>
                    <span className="mt-0.5 text-xl font-semibold text-[#d9b07c]">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 sm:text-[0.98rem] sm:leading-8">
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
