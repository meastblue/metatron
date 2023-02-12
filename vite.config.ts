import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from "svelte-preprocess";

import { COMPONENTS } from "./svelte.config.js";

export default defineConfig({
  build: {
    rollupOptions: {
      input: COMPONENTS,
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  plugins: [svelte({
    preprocess: preprocess(),
    compilerOptions: {
      customElement: true
    }
  })],
});
