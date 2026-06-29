import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Production URL — used for absolute Open Graph / social-share image URLs.
  // Change this if your Vercel project name (or custom domain) differs.
  site: 'https://matthiaszoettl.vercel.app',
  integrations: [tailwind()],
});
