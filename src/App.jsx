import { useEffect, useState } from 'react'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicePage from './pages/ServicePage'
import { getServiceBySlug } from './data/services'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (
      hash.match(/^#\/tjanster\/([^/]+)$/) ||
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

  return <Home />
}

export default App
