import { defineConfig } from 'astro/config';

// Static output only: no backend or database.
export default defineConfig({
  output: 'static',
});
