import image1 from '../assets/img/nacka-byggpartner-gallery (1).jpg'
import image2 from '../assets/img/nacka-byggpartner-gallery (2).jpg'
import image3 from '../assets/img/nacka-byggpartner-gallery (3).jpg'
import image4 from '../assets/img/nacka-byggpartner-gallery (4).jpg'
import image5 from '../assets/img/nacka-byggpartner-gallery (5).jpg'
import image8 from '../assets/img/nacka-byggpartner-gallery (8).jpg'
import image9 from '../assets/img/nacka-byggpartner-gallery (9).jpg'
import image10 from '../assets/img/nacka-byggpartner-gallery (10).jpg'

export const galleryProjects = [
  {
    title: 'Nybyggt hus i skärgårdsmiljö',
    src: image2,
    homeClass: 'xl:col-span-6',
    homeImageClass: 'h-[260px] object-[center_56%] sm:h-[340px]',
  },
  {
    title: 'Stomresning och tillbyggnad',
    src: image9,
    homeClass: 'xl:col-span-6',
    homeImageClass: 'h-[260px] object-center sm:h-[340px]',
  },
  {
    title: 'Kontrollansvar i produktion',
    src: image1,
    homeClass: 'xl:col-span-4',
    homeImageClass: 'h-[220px] object-center sm:h-[250px]',
  },
  {
    title: 'Ombyggnation av trädäck',
    src: image8,
    homeClass: 'xl:col-span-4',
    homeImageClass: 'h-[220px] object-[center_54%] sm:h-[250px]',
  },
  {
    title: 'Invändig förädling',
    src: image4,
    homeClass: 'xl:col-span-4',
    homeImageClass: 'h-[220px] object-center sm:h-[250px]',
  },
  {
    title: 'Renovering och detaljarbete',
    src: image10,
    homeClass: 'xl:col-span-4',
    homeImageClass: 'h-[220px] object-[center_58%] sm:h-[250px]',
  },
  {
    title: 'Interiör med specialsnickeri',
    src: image3,
    homeClass: 'xl:col-span-4',
    homeImageClass: 'h-[220px] object-center sm:h-[250px]',
  },
  {
    title: 'Platsbyggda detaljer och köksmiljö',
    src: image5,
    homeClass: 'xl:col-span-4',
    homeImageClass: 'h-[220px] object-center sm:h-[250px]',
  },
]

export const featuredGalleryProjects = galleryProjects.slice(0, 5)
