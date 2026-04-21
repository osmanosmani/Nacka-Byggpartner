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

## Project Structure

```text
src/
  assets/          Brand assets, gallery images, video
  components/      Reusable page sections
  data/            Service content and route data
  pages/           Home page and service detail page
```

## Routing

The project currently uses hash-based routing for service detail pages.

Examples:

- `#/tjanster/nybyggnation`
- `#/tjanster/tillbyggnation`
- `#/tjanster/byggservice`

This setup works well on simple static hosting such as GitHub Pages.

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

## GitHub Workflow

Recommended basic workflow:

1. Create a GitHub repository.
2. Connect this local project to the remote repository.
3. Push the main branch.
4. Continue future edits through commits so updates stay trackable.

Typical commands:

```bash
git init
git add .
git commit -m "Initial website setup"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Status

The project builds successfully with:

```bash
npm run lint
npm run build
```
