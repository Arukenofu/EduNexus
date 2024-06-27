// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/style/global.scss'],
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/icon32x32.png',
          sizes: '32x32'
        }
      ]
    }
  },
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
	modules: [
      '@nuxtjs/google-fonts',
      'nuxt-icon',
      "@nuxt/image",
      "nuxt-tiptap-editor",
      "nuxt-monaco-editor"
    ],
	devtools: { enabled: false },
	ssr: true,
	googleFonts: {
        download: true,
        families: {
          'Nunito Sans': '200..900',
          'DM Sans': '200..900',
          'Rubik': '300..900',
          'Manrope': '200..900',
          'JetBrains Mono': '200..800'
        }
  },
  spaLoadingTemplate: false,
  tiptap: {
    prefix: "Tiptap"
  },
});