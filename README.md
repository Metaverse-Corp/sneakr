# SNEAKR storefront

React + Vite hero landing page with the animated sneaker GIF in `public/sneakr-landing.gif`.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production site to `dist/`. The animated hero asset is referenced at `/sneakr-landing.gif` and is copied from `public/` automatically during build.

## Deploy to Vercel

Import the GitHub repository in Vercel. Use:
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`
