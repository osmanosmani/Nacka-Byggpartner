export const SITE_URL = 'https://nackabyggpartner.se'
export const SITE_NAME = 'Nacka Byggpartner'

export const DEFAULT_SEO = {
  title: 'Nacka Byggpartner | Byggtjänster i Stockholm',
  description:
    'Nacka Byggpartner erbjuder byggtjänster i Stockholm med omnejd - helhetsansvar för arkitektur, projektering och byggnation.',
  path: '/',
}

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

function setMeta(attribute, key, content) {
  if (!content) return

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]')

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }

  element.setAttribute('href', url)
}

function normalizeDescription(description) {
  const normalized = description.replace(/\s+/g, ' ').trim()

  if (normalized.length <= 158) return normalized

  return `${normalized.slice(0, 155).trim()}...`
}

function routeUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`
  if (path.startsWith('#')) return `${SITE_URL}/${path}`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function setPageSeo({ title, description, path = '/' }) {
  const pageTitle = title?.includes(SITE_NAME) ? title : `${title || SITE_NAME} | ${SITE_NAME}`
  const pageDescription = normalizeDescription(description || DEFAULT_SEO.description)
  const pageUrl = routeUrl(path)
  const canonicalUrl = `${SITE_URL}/`

  document.title = pageTitle
  setCanonical(canonicalUrl)

  setMeta('name', 'description', pageDescription)
  setMeta('property', 'og:title', pageTitle)
  setMeta('property', 'og:description', pageDescription)
  setMeta('property', 'og:url', pageUrl)
  setMeta('property', 'og:image', DEFAULT_IMAGE)
  setMeta('name', 'twitter:title', pageTitle)
  setMeta('name', 'twitter:description', pageDescription)
  setMeta('name', 'twitter:image', DEFAULT_IMAGE)
}
