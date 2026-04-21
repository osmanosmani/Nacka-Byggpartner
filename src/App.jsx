import { useEffect, useState } from 'react'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import { getServiceBySlug } from './data/services'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const serviceMatch = hash.match(/^#\/tjanster\/([^/]+)$/)

  if (serviceMatch) {
    const service = getServiceBySlug(serviceMatch[1])

    if (service) {
      return <ServicePage service={service} />
    }
  }

  return <Home />
}

export default App
