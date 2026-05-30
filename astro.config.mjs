import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://viragtrading.co.in',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/products': '/products/'
  },
  integrations: [tailwind(), sitemap()],
});
