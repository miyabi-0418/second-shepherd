// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://miyabi-0418.github.io',
  base: '/second-shepherd',

  vite: {
    plugins: [tailwindcss()]
  }
});