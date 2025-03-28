// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'http://soulnovo.com',

  integrations: [mdx(), react(), tailwind({
      applyBaseStyles: false,
  }), icon(), sitemap()],

  markdown: {
      shikiConfig: {
          theme: 'plastic',
      },
  },

  experimental: {
      svg: true,
  },

  adapter: vercel()
});