import nybyggImage from '../assets/selected-work/services/nybyggnation/hero.png'
import tillbyggImage from '../assets/selected-work/services/tillbyggnation/hero.jpg'
import ombyggImage from '../assets/selected-work/services/ombyggnation/hero.jpg'
import kontrollImage from '../assets/selected-work/services/kontrollansvarig/hero.jpeg'
import konsultImage from '../assets/selected-work/services/byggkonsultation/hero.png'
import serviceImage from '../assets/selected-work/services/byggservice/hero.jpg'

export const services = [
  {
    slug: 'nybyggnation',
    title: 'Nybyggnation',
    shortText:
      'Vi tar ett helhetsgrepp från idé och projektering till samordning, utförande och färdigt hem.',
    image: nybyggImage,
    intro:
      'Att bygga nytt ger stora möjligheter, men kräver också struktur, rätt prioriteringar och trygg samordning. Vi hjälper dig genom hela resan från första skiss till färdigt hus.',
    sections: [
      {
        heading: 'Från första tanke till färdig byggnad',
        body:
          'Processen börjar med behovsanalys, platsens förutsättningar och ett tydligt program. Därefter följer projektering, dialog med kommunen, materialval, planering av resurser och ett genomförande där varje steg hålls ihop på ett kontrollerat sätt.',
      },
      {
        heading: 'Ett hem som håller över tid',
        body:
          'När du bygger nytt skapar du rätt förutsättningar från början. Det ger bättre kontroll över funktion, drift, material och ekonomi samtidigt som huset kan anpassas fullt ut efter hur du vill leva och använda det.',
      },
    ],
    highlights: [
      'Helhetsansvar från skiss och projektering till färdig byggnation',
      'Tydlig samordning mellan ritningar, beslut och produktion',
      'Fokus på material, funktion och långsiktig kvalitet',
    ],
  },
  {
    slug: 'tillbyggnation',
    title: 'Tillbyggnation',
    shortText:
      'Ritningar, bygglov, materialval och startbesked samordnas så att din tillbyggnad får en trygg och tydlig process.',
    image: tillbyggImage,
    intro:
      'Att bygga till är ofta ett bättre alternativ än att flytta. Med rätt planering kan en tillbyggnad skapa mer yta, bättre flöde och ett hem som fungerar bättre för nästa fas i livet.',
    sections: [
      {
        heading: 'En tydlig väg från skiss till byggstart',
        body:
          'Tillbyggnader börjar ofta med A-ritningar och kontroll mot detaljplanen. Därefter följer lov- eller anmälningsfrågor, tekniska underlag, materialval och planering av genomförandet så att projektet står stabilt redan innan första spadtaget.',
      },
      {
        heading: 'Mer plats med rätt proportioner',
        body:
          'En lyckad tillbyggnad handlar inte bara om fler kvadratmeter. Den ska också kännas naturlig i relation till huset, tomten och hur ytorna används i vardagen. Därför arbetar vi med både funktion och helhet i varje lösning.',
      },
    ],
    highlights: [
      'Samordning av ritningar, bygglov och tekniska beslut',
      'Tydlig struktur inför startbesked och byggstart',
      'Lösningar som passar husets uttryck och vardagens behov',
    ],
  },
  {
    slug: 'ombyggnation',
    title: 'Ombyggnation',
    shortText:
      'Vi hjälper dig att utveckla befintliga ytor med rätt planlösning, detaljering och praktiska beslut längs vägen.',
    image: ombyggImage,
    intro:
      'Ombyggnation handlar om att förädla det som redan finns. Det kan vara allt från att öppna upp ett hem invändigt till att bygga om uteplatser, entréer eller andra ytor så att de fungerar bättre i vardagen.',
    sections: [
      {
        heading: 'När befintliga ytor behöver fungera bättre',
        body:
          'En ombyggnation kan uppstå när familjen växer, när flöden inte längre fungerar eller när en utemiljö behöver ett nytt uttryck. Vi hjälper till att hitta rätt nivå på åtgärden och att planera den med tydlig riktning.',
      },
      {
        heading: 'Detaljer som lyfter helheten',
        body:
          'I många ombyggnader ligger den stora skillnaden i utförandet. Materialmöten, höjder, trappsteg, räcken, övergångar och ytskikt behöver spela ihop för att resultatet ska kännas genomarbetat och hållbart över tid.',
      },
    ],
    highlights: [
      'Ombyggnation av både invändiga och utvändiga ytor',
      'Praktiska lösningar för funktion, uttryck och hållbarhet',
      'Noggrannhet i detaljer som påverkar helhetsintrycket',
    ],
  },
  {
    slug: 'kontrollansvarig',
    title: 'Kontrollansvarig',
    shortText:
      'En erfaren kontrollansvarig förenklar bygget, hjälper med kontrollplan och ser till att projektet följer rätt krav.',
    image: kontrollImage,
    intro:
      'Många projekt kräver en certifierad kontrollansvarig. Med rätt person i rollen blir processen tydligare, tryggare och bättre förankrad mot både kommunen och de tekniska kraven.',
    sections: [
      {
        heading: 'När en KA behövs',
        body:
          'Om en åtgärd kräver lov eller anmälan måste du som regel utse en kontrollansvarig. Kommunen avgör behovet i projektet och godkänner den person som föreslås, vilket gör det viktigt att komma in med rätt kompetens redan tidigt.',
      },
      {
        heading: 'En roll som skapar ordning och trygghet',
        body:
          'Den kontrollansvarige hjälper till med kontrollplan, tekniskt samråd, uppföljning under projektet och det utlåtande som ligger till grund för slutbesked. Rollen skapar struktur och minskar risken för onödiga felsteg i genomförandet.',
      },
    ],
    highlights: [
      'Hjälp med kontrollplan, samråd och uppföljning',
      'Stöd genom byggprocessen och mot kommunen',
      'Tryggare projekt med rätt dokumentation och kontroll',
    ],
  },
  {
    slug: 'byggkonsultation',
    title: 'Byggkonsultation',
    shortText:
      'Vi stöttar med råd, offertutvärdering, kvalitetsbedömning, byggledning och beslut som kräver erfaren blick.',
    image: konsultImage,
    intro:
      'Byggkonsultation passar dig som behöver klarhet i delar av processen och vill fatta bättre beslut innan eller under ett projekt.',
    sections: [
      {
        heading: 'Rådgivning när besluten är viktiga',
        body:
          'Vi hjälper dig när du ska bygga om, bygga till eller starta ett nytt projekt men behöver stöd i vägvalen. Det kan handla om att läsa ritningar, jämföra offerter, förstå konsekvenser i utförandet eller hitta rätt nivå i projektets upplägg.',
      },
      {
        heading: 'Erfarenhet som gör processen tydligare',
        body:
          'Med lång erfarenhet från projektering och genomförande kan vi bidra med det utifrånperspektiv som behövs för att skapa trygghet, tydlighet och bättre beslut innan problemen uppstår.',
      },
    ],
    highlights: [
      'Utvärdering av offerter och entreprenörer',
      'Byggledning och praktisk rådgivning',
      'Stöd i planering, prioritering och tekniska beslut',
    ],
  },
  {
    slug: 'byggservice',
    title: 'Byggservice',
    shortText:
      'Dränering, tak, fasad och tilläggsisolering är exempel på insatser där praktisk nytta och hållbarhet går hand i hand.',
    image: serviceImage,
    intro:
      'Byggservice omfattar de viktiga insatser som förbättrar funktion, energieffektivitet och livslängd i huset över tid.',
    sections: [
      {
        heading: 'Tak, fasad och klimatskal',
        body:
          'Slitna tak, fuktutsatta fasader eller gamla lösningar i klimatskalet påverkar både uttryck och funktion. Vi hjälper till att planera åtgärder som stärker huset och samtidigt skapar ett mer hållbart resultat.',
      },
      {
        heading: 'Åtgärder som märks i vardagen',
        body:
          'Tilläggsisolering, förbättrade ytterdelar och rätt utförda serviceinsatser kan sänka energibehovet, minska underhållet och skapa ett tryggare boende. Det är ofta de här insatserna som gör störst skillnad över tid.',
      },
    ],
    highlights: [
      'Tak- och fasadåtgärder med fokus på hållbarhet',
      'Praktiska förbättringar av husets funktion och skydd',
      'Lösningar som stärker både ekonomi och boendekvalitet',
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}
