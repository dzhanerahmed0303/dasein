// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://dzhaner.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [mdx(), sitemap(), pagefind(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },
});
