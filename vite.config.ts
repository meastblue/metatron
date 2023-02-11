import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preprocess from "svelte-preprocess";

export default defineConfig({
  build: {
    rollupOptions: {
      input: [],
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
