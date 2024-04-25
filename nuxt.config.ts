// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/style/global.scss'],
	typescript: {
		shim: false,
	},
  plugins: [
    '~/plugins/click-outside.client.ts'
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.APIBASE
    }
  },
	modules: ['@nuxtjs/google-fonts', 'nuxt-icon', "@nuxt/image"],
	devtools: { enabled: false },
	ssr: false,
	googleFonts: {
        download: true,
        families: {
          'Nunito Sans': '200..900',
          'DM Sans': '200..900',
          'Rubik': '300..900',
          'Manrope': '200..900'
        }
  },
  routeRules : {
    '/': {

    }
  },
});