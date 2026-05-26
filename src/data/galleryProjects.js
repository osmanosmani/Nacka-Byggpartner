import nybyggHero from '../assets/selected-work/projects/nybyggnation-visualisering/hero.jpg'
import nybygg1 from '../assets/selected-work/projects/nybyggnation-visualisering/detail-1.png'
import nybygg2 from '../assets/selected-work/projects/nybyggnation-visualisering/detail-2.png'

import tillbyggHero from '../assets/selected-work/projects/tillbyggnad-stomresning/hero.jpg'
import tillbygg1 from '../assets/selected-work/projects/tillbyggnad-stomresning/detail-1.jpg'
import tillbygg2 from '../assets/selected-work/projects/tillbyggnad-stomresning/detail-2.jpg'

import altanHero from '../assets/selected-work/projects/altan-utomhusmiljo/hero.jpg'
import altan1 from '../assets/selected-work/projects/altan-utomhusmiljo/detail-1.jpg'
import altan2 from '../assets/selected-work/projects/altan-utomhusmiljo/detail-2.jpg'

import interiorHero from '../assets/selected-work/projects/kok-badrum/hero.jpg'
import interior1 from '../assets/selected-work/projects/kok-badrum/detail-1.jpg'
import interior2 from '../assets/selected-work/projects/kok-badrum/detail-2.jpg'

import facadeHero from '../assets/selected-work/projects/tak-fasad/hero.jpg'
import facade1 from '../assets/selected-work/projects/tak-fasad/detail-1.jpg'
import facade2 from '../assets/selected-work/projects/tak-fasad/detail-2.jpg'

import controlHero from '../assets/selected-work/projects/kontroll-kvalitet/hero.jpeg'
import control1 from '../assets/selected-work/projects/kontroll-kvalitet/detail-1.jpg'
import control2 from '../assets/selected-work/projects/kontroll-kvalitet/detail-2.jpg'

export const galleryProjects = [
  {
    slug: 'nybyggt-hus-skargardsmiljo',
    title: 'Nybyggnation och visualisering',
    summary:
      'Från första modell till visualisering och färdig känsla – ett projekt med fokus på helhetsgrepp och riktning.',
    category: 'Nybyggnation',
    location: 'Stockholm / skärgårdsmiljö',
    cover: nybyggHero,
    images: [nybyggHero, nybygg1, nybygg2],
    body:
      'Det här projektet visar hur en nybyggnation kan utvecklas från tidiga modeller och visualiseringar till ett tydligt arkitektoniskt uttryck. Fokus har legat på att skapa lugna proportioner, bra ljusförhållanden och en helhet där material, metod och rumslighet håller ihop.',
    details: [
      'Tidiga modeller och visualiseringar som stöd i besluten',
      'Tydlig riktning mellan arkitektur, funktion och genomförande',
      'En process där uttryck och byggbarhet vägs samman från start',
    ],
  },
  {
    slug: 'stomresning-tillbyggnad',
    title: 'Tillbyggnad och stomresning',
    summary:
      'Exempel på tillbyggnad där volym, höjder och genomförande kräver samordning redan från första skedet.',
    category: 'Tillbyggnation',
    location: 'Nacka / Storstockholm',
    cover: tillbyggHero,
    images: [tillbyggHero, tillbygg1, tillbygg2],
    body:
      'Här syns ett projekt där tillbyggnad och stomresning ställt krav på tydliga underlag, rätt prioriteringar och ett genomförande som följer husets förutsättningar. Arbetet har handlat om att skapa ny yta utan att tappa helheten i proportioner, material och användning.',
    details: [
      'Samordning av nya volymer mot befintlig byggnad',
      'Tydligt fokus på konstruktion, nivåer och utförande',
      'Tillbyggnad med både teknisk och estetisk omsorg',
    ],
  },
  {
    slug: 'ombyggnation-tradack',
    title: 'Altan och utomhusmiljö',
    summary:
      'Förädling av utemiljö där altan, rörelser och nivåskillnader formar en mer användbar helhet.',
    category: 'Ombyggnation',
    location: 'Stockholm',
    cover: altanHero,
    images: [altanHero, altan1, altan2],
    body:
      'Det här projektet visar hur en utomhusmiljö kan lyftas med rätt nivåer, tydliga rörelser och välavvägda detaljer. När altaner, trappor och anslutningar planeras rätt blir resultatet både mer användbart och mer harmoniskt i relation till huset.',
    details: [
      'Fokus på altan, anslutningar och naturliga rörelser',
      'Detaljarbete som stärker både funktion och uttryck',
      'Ombyggnation som lyfter hela utemiljön, inte bara en yta',
    ],
  },
  {
    slug: 'invandig-foradling',
    title: 'Kök och badrum',
    summary:
      'Invändig förädling där materialmöten, förvaring och belysning ger ett mer sammanhållet resultat.',
    category: 'Invändig förädling',
    location: 'Nacka / Stockholm',
    cover: interiorHero,
    images: [interiorHero, interior1, interior2],
    body:
      'Invändiga projekt kräver ofta hög precision i både mått, material och känsla. Här har fokus legat på kök och badrum där trä, sten, belysning och fasta detaljer samspelar för att skapa en varm och genomarbetad helhet som fungerar i vardagen.',
    details: [
      'Kök och badrum med tydlig materialpalett',
      'Samspelet mellan funktion, förvaring och belysning',
      'Noggrann detaljering för ett lugnt och hållbart uttryck',
    ],
  },
  {
    slug: 'renovering-detaljarbete',
    title: 'Tak och fasad',
    summary:
      'Projekt som visar hur tak, fasad och yttre delar kan förädlas med rätt utförande och hållbar riktning.',
    category: 'Byggservice',
    location: 'Storstockholm',
    cover: facadeHero,
    images: [facadeHero, facade1, facade2],
    body:
      'När tak, fasad och klimatskal behöver uppdateras krävs åtgärder som både skyddar och lyfter huset som helhet. Det här projektet samlar exempel där uttryck, hållbarhet och teknisk funktion möts i ett mer långsiktigt resultat.',
    details: [
      'Tak- och fasadåtgärder med fokus på livslängd',
      'Förbättrat klimatskal och starkare helhetsintryck',
      'Utförande som balanserar funktion, estetik och underhåll',
    ],
  },
  {
    slug: 'interior-specialsnickeri',
    title: 'Kontroll och kvalitet',
    summary:
      'Exempel på hur kontroll, uppföljning och byggbarhet skapar trygghet från stomme till färdig miljö.',
    category: 'Kontrollansvarig / konsultation',
    location: 'Stockholm',
    cover: controlHero,
    images: [controlHero, control1, control2],
    body:
      'Ett bra byggprojekt bygger inte bara på ritningar och utförande, utan också på uppföljning, kontroll och förmågan att se helheten i rätt skede. Här visas exempel på hur kvalitetssäkring, byggbarhet och slutresultat hänger samman genom hela processen.',
    details: [
      'Uppföljning och kontroll som del av projektets kvalitet',
      'Tidiga beslut som minskar risker senare i processen',
      'Tydlig koppling mellan byggskede, kontroll och färdig leverans',
    ],
  },
]

export const featuredGalleryProjects = galleryProjects.slice(0, 6)

export function getGalleryProjectBySlug(slug) {
  return galleryProjects.find((project) => project.slug === slug)
}

export function getGalleryProjectIndex(slug) {
  return galleryProjects.findIndex((project) => project.slug === slug)
}
