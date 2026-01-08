// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages deployment config
  // Update 'site' to your GitHub Pages URL when ready
  site: 'https://trenchsec.github.io',
  // If deploying to https://yourusername.github.io/portfolio-website
  // uncomment the line below:
  // base: '/portfolio-website',

  // Build output
  output: 'static',

  // Build optimizations
  build: {
    inlineStylesheets: 'auto',
  },

  // Vite config
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
