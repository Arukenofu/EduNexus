// https://nuxt.com/docs/api/configuration/nuxt-config

import { head } from "./config/head";
import { routeRules } from "./config/routeRules";
import { runtimeConfig } from "./config/runtimeConfig";
import { fonts } from "./config/fonts";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    "@nuxt/image",
    "nuxt-tiptap-editor",
    "nuxt-monaco-editor"
  ],
  app: {
    ...head
  },
  routeRules: {
    ...routeRules
  },
  runtimeConfig: {
    ...runtimeConfig
  },
  googleFonts: {
    ...fonts
  },
  css: ['~/style/global.scss'],
	typescript: {
		shim: false,
	},
  plugins: [
    '~/plugins/click-outside.client.ts'
  ],
	devtools: { enabled: false },
	ssr: true,
  spaLoadingTemplate: false,
  tiptap: {
    prefix: "Tiptap"
  },
});