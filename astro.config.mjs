import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx(), UnoCSS({
		injectReset: true,
	})]
});
