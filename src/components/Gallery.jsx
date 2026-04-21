import image1 from '../assets/img/nacka-byggpartner-gallery (1).jpg'
import image2 from '../assets/img/nacka-byggpartner-gallery (2).jpg'
import image4 from '../assets/img/nacka-byggpartner-gallery (4).jpg'
import image8 from '../assets/img/nacka-byggpartner-gallery (8).jpg'
import image9 from '../assets/img/nacka-byggpartner-gallery (9).jpg'
import image10 from '../assets/img/nacka-byggpartner-gallery (10).jpg'
import image11 from '../assets/img/nacka-byggpartner-gallery (11).jpg'

function Gallery() {
  const images = [
    {
      src: image2,
      tileClass: 'h-[240px] sm:h-[320px] md:col-span-2 md:row-span-2',
      imageClass: 'object-[center_56%]',
    },
    {
      src: image9,
      tileClass: 'h-[170px] sm:h-[150px] md:col-span-4',
      imageClass: 'object-center',
    },
    {
      src: image1,
      tileClass: 'h-[170px] sm:h-[150px] md:col-span-2',
      imageClass: 'object-center',
    },
    {
      src: image4,
      tileClass: 'h-[170px] sm:h-[150px] md:col-span-2',
      imageClass: 'object-center',
    },
    {
      src: image8,
      tileClass: 'h-[190px] sm:h-[200px] md:col-span-2',
      imageClass: 'object-[center_54%]',
    },
    {
      src: image10,
      tileClass: 'h-[190px] sm:h-[200px] md:col-span-2',
      imageClass: 'object-[center_58%]',
    },
    {
      src: image11,
      tileClass: 'h-[190px] sm:h-[200px] md:col-span-2',
      imageClass: 'object-[center_38%]',
    },
  ]

  return (
    <section id="gallery" className="pt-0">
      <div
        className="section-shell dark-swirl overflow-hidden border-x border-b border-white/8 bg-[#231f1d] px-5 py-8 text-white sm:px-8 sm:py-14 lg:px-10"
        style={{ backgroundColor: '#101010' }}
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="eyebrow border-white/12 text-[#e4b291]">Projektexempel</span>
            <h2 className="title-main mt-4 text-[2.9rem] text-[#ff7f2f] sm:mt-5 sm:text-[4.5rem]">
              Galleri
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#fff8ee] px-6 py-3 text-sm font-semibold text-[#231f1d] sm:w-auto sm:rounded-2xl sm:px-7"
            style={{ backgroundColor: '#fff8ee', color: '#181311' }}
          >
            Kontakta oss
          </a>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-6">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`rounded-[18px] bg-[#181311] p-1.5 ring-1 ring-white/8 ${image.tileClass}`}
            >
              <div className="h-full overflow-hidden rounded-[14px]">
                <img
                  src={image.src}
                  alt={`Projektbild ${index + 1}`}
                  className={`h-full w-full object-cover transition duration-500 hover:scale-[1.02] ${image.imageClass}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
