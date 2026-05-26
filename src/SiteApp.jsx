import { useEffect, useState } from 'react'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import { getServiceBySlug } from './data/services'
import { getGalleryProjectBySlug } from './data/galleryProjects'
import { DEFAULT_SEO, setPageSeo } from './seo'

const sectionIds = new Set(['home', 'about', 'services', 'gallery', 'faq', 'contact'])

function SiteApp() {
  const [hash, setHash] = useState(window.location.hash)
  const serviceMatch = hash.match(/^#\/tjanster\/([^/]+)$/)
  const projectMatch = hash.match(/^#\/projekt\/([^/]+)$/)
  const service = serviceMatch ? getServiceBySlug(serviceMatch[1]) : null
  const project = projectMatch ? getGalleryProjectBySlug(projectMatch[1]) : null

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (service) {
      setPageSeo({
        title: service.title,
        description: service.shortText,
        path: `#/tjanster/${service.slug}`,
      })
      return
    }

    if (project) {
      setPageSeo({
        title: project.title,
        description: project.summary,
        path: `#/projekt/${project.slug}`,
      })
      return
    }

    if (hash === '#/projekt') {
      setPageSeo({
        title: 'Alla projekt',
        description:
          'Se referensprojekt från Nacka Byggpartner inom nybyggnation, tillbyggnad, ombyggnation, tak, fasad och kontroll.',
        path: '#/projekt',
      })
      return
    }

    if (hash === '#/om-oss') {
      setPageSeo({
        title: 'Om oss',
        description:
          'Läs mer om Nacka Byggpartner, vårt arbetssätt, vår byggprocess och hur vi arbetar med kvalitet, ansvar och tydlig kommunikation.',
        path: '#/om-oss',
      })
      return
    }

    if (hash === '#/om-oss/kontakt' || hash === '#contact') {
      setPageSeo({
        title: 'Kontakt',
        description:
          'Kontakta Nacka Byggpartner för byggprojekt i Nacka, Stockholm och närliggande områden.',
        path: '#contact',
      })
      return
    }

    if (hash === '#services') {
      setPageSeo({
        title: 'Byggtjänster',
        description:
          'Byggtjänster inom nybyggnation, tillbyggnation, ombyggnation, kontrollansvarig, byggkonsultation och byggservice.',
        path: '#services',
      })
      return
    }

    setPageSeo(DEFAULT_SEO)
  }, [hash, service, project])

  useEffect(() => {
    const sectionId = hash === '' ? 'home' : hash.startsWith('#/') ? null : hash.slice(1)

    if (sectionId && sectionIds.has(sectionId)) {
      const scrollToSection = () => {
        const target = document.getElementById(sectionId)
        const header = document.querySelector('header')

        if (!target) return

        const headerOffset = header?.getBoundingClientRect().height ?? 0
        const targetTop = target.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: Math.max(targetTop - headerOffset - 16, 0),
          behavior: 'auto',
        })
      }

      const animationFrame = requestAnimationFrame(scrollToSection)
      const firstTimeout = window.setTimeout(scrollToSection, 350)
      const secondTimeout = window.setTimeout(scrollToSection, 900)

      return () => {
        cancelAnimationFrame(animationFrame)
        window.clearTimeout(firstTimeout)
        window.clearTimeout(secondTimeout)
      }
    }

    if (
      hash.match(/^#\/tjanster\/([^/]+)$/) ||
      hash.match(/^#\/projekt\/([^/]+)$/) ||
      hash === '#/om-oss' ||
      hash === '#/om-oss/kontakt' ||
      hash === '#/projekt' ||
      hash === '' ||
      hash === '#home'
    ) {
      if (hash !== '#/om-oss/kontakt') {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }
  }, [hash])

  if (service) {
    return <ServicePage service={service} />
  }

  if (hash === '#/om-oss' || hash === '#/om-oss/kontakt') {
    return <AboutPage hash={hash} />
  }

  if (hash === '#/projekt') {
    return <ProjectsPage />
  }

  if (project) {
    return <ProjectPage key={project.slug} project={project} />
  }

  return <Home />
}

export default SiteApp
