// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://usuario.github.io',
  base: '/MiPortafolio',
  vite: {
    plugins: [tailwindcss()]
  }
});