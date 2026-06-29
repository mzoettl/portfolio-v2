# portfolio-v2 — matthias zoettl

The second iteration of my photography & filmmaking portfolio.

**v1 was hand-coded almost from scratch. v2 (this one) was "vibe-coded"** — built
conversationally with an AI coding agent — which is half the fun of having both
up here.

🔗 **v1 (hand-coded):** https://github.com/mzoettl  ← _update with the v1 repo link_
🌐 **Live:** _add deploy URL_

## Stack
- [Astro](https://astro.build) (static)
- [Tailwind CSS](https://tailwindcss.com)
- [GSAP](https://gsap.com) for the intro / animations
- [Fancybox](https://fancyapps.com) for the lightbox

## Local development
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Notes
- Gallery images are optimized (≤ ~2400px, ~quality 82). Full-resolution
  originals are kept locally in `.image-originals/` (git-ignored, not deployed).
- The desktop intro plays once per browser session and is skipped on mobile
  (< 1200px) and for `prefers-reduced-motion`.
- To get absolute Open Graph image URLs, set `site` in `astro.config.mjs` to the
  production domain.
