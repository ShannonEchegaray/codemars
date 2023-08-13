import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import UnoCSS from 'unocss/astro';
import compressor from "astro-compressor";
import prefetch from "@astrojs/prefetch";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx(), compressor(), prefetch(), sitemap(), UnoCSS({
    injectReset: true
  })],
  experimental: {
    viewTransitions: true,
    assets: true
  }
});
