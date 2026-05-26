# Nacka Byggpartner

Website for Nacka Byggpartner built with React, Vite, and Tailwind CSS 4.

The site includes:

- a video-based hero section
- a modern mobile hamburger menu
- a services section with separate detail pages
- company-specific Swedish copy
- a gallery using real project images
- a contact/footer area adapted to the visual references

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint

## Project Scripts

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build locally:

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
