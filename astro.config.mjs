import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
  site: 'https://fabianherrerac.github.io',
  base: '/pensamiento-de-altura',
});
