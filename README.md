# Nacka Byggpartner

Modern business website for a Swedish construction company, built with React, Vite, and Tailwind CSS.

## Live Website

[https://dev.nackabyggpartner.se](https://dev.nackabyggpartner.se)

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Responsive design
- ESLint

## Project Overview

This project was created as a modern, responsive business website for Nacka Byggpartner. The focus was on clean design, usability, service presentation, visual structure, and a professional online presence.

## Project Features

- Responsive layout for desktop and mobile
- Modern video-based hero section
- Service presentation pages
- Gallery and project imagery
- Contact section
- SEO-friendly structure
- Production build with Vite
- Hash-based detail routes for static hosting

## Project Note

This project is presented as part of my personal portfolio to demonstrate frontend development, responsive design, and modern web implementation skills.

All rights to brand identity, business content, and visual materials belong to their respective owners. The code is shared for portfolio and learning purposes only.

## Project Scripts

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

Run the full pre-publish check:

```bash
npm run check
```

## Project Structure

```text
src/
  assets/          Brand assets, gallery images, video
  components/      Reusable page sections
  data/            Service content and route data
  pages/           Home, about, project, and service detail pages
```

## Routing

The project uses hash-based routing for service and project detail pages.

Examples:

- `#/tjanster/nybyggnation`
- `#/tjanster/tillbyggnation`
- `#/tjanster/byggservice`
- `#/projekt`
- `#/projekt/renovering-detaljarbete`

This setup works well on simple static hosting because all URLs are served from
`index.html`; the route state stays after `#`.

## Assets

Real company images are stored in:

```text
src/assets/img/
```

Hero background video is stored in:

```text
src/assets/video.mp4
```

## Publishing Notes

Before publishing, verify:

1. The final logo, phone number, and contact details are correct.
2. The selected project images are approved for public use.
3. The video size is acceptable for production hosting.
4. The production domain is correct in `src/seo.js`, `index.html`,
   `public/robots.txt`, and `public/sitemap.xml`.

## Production Deploy

Build the production files:

```bash
npm ci
npm run check
```

Upload the contents of `dist/` to the hosting web root, usually `public_html/`,
`www/`, or the folder assigned to the domain.

Hosting config files are copied into `dist/` during build:

- `public/.htaccess` is for Apache/cPanel hosting.
- `public/web.config` is for IIS/Windows hosting.

Only one of these files is normally used by the server; the other is ignored.

After upload, verify:

1. The homepage loads at the final domain.
2. The menu and all section links work on mobile and desktop.
3. Service routes such as `/#/tjanster/nybyggnation` open correctly.
4. Project routes such as `/#/projekt/renovering-detaljarbete` open correctly.
5. `robots.txt`, `sitemap.xml`, and `og-image.jpg` are reachable from the root.

## Status

The project builds successfully with:

```bash
npm run lint
npm run build
```
