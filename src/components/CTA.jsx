function CTA() {
  return (
    <section className="pt-0">
      <div className="section-shell relative overflow-hidden border-x border-b border-[#b45728] bg-[#ca642f] px-6 py-16 text-center text-white sm:px-8">
        <div className="cta-saw cta-saw-left" />
        <div className="cta-saw cta-saw-right" />

        <div className="relative z-10">
          <h2 className="title-main text-[3rem] text-white sm:text-[4.5rem]">
            Bygg med
            <br />
            trygg process
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90">
            Hör av dig om du vill diskutera ett projekt, behöver råd i processen
            eller söker en partner som kan ta ansvar för helheten.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex rounded-xl bg-[#fff8ee] px-7 py-3 text-sm font-semibold text-[#231f1d]"
            style={{ backgroundColor: '#fff8ee', color: '#181311' }}
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
