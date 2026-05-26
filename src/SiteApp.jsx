import { useEffect, useState } from 'react'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import { getServiceBySlug } from './data/services'
import { getGalleryProjectBySlug } from './data/galleryProjects'

const sectionIds = new Set(['home', 'about', 'services', 'gallery', 'faq', 'contact'])

function SiteApp() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

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

  const serviceMatch = hash.match(/^#\/tjanster\/([^/]+)$/)
  const projectMatch = hash.match(/^#\/projekt\/([^/]+)$/)

  if (serviceMatch) {
    const service = getServiceBySlug(serviceMatch[1])

    if (service) {
      return <ServicePage service={service} />
    }
  }

  if (hash === '#/om-oss' || hash === '#/om-oss/kontakt') {
    return <AboutPage hash={hash} />
  }

  if (hash === '#/projekt') {
    return <ProjectsPage />
  }

  if (projectMatch) {
    const project = getGalleryProjectBySlug(projectMatch[1])

    if (project) {
      return <ProjectPage key={project.slug} project={project} />
    }
  }

  return <Home />
}

export default SiteApp
