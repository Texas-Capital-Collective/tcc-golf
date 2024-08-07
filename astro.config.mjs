import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://academydallasgolf.netlify.app',
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: netlify()
});