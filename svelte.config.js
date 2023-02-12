import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import fs from "fs";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
}

export const COMPONENTS = fs.readdirSync("./src/lib/").map(file => {
  return `./src/lib/${file}`;
})
