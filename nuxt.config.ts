export default defineNuxtConfig({
  // Ajout pour Server API: Bluesky feed fetching
  nitro: {
    preset: 'netlify'
  },

  devServer: {
    port: 3615,
  },

  typescript: {
    strict: true,
  },

  imports: {
    autoImport: true,
  },

  experimental: {
    typedPages: true,
  },

  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vue-macros/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "nuxt-simple-sitemap",
  ],

  plugins: ["~/plugins/featureFlags/index.ts"],
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      autoprefixer: {},
      tailwindcss: {},
    },
  },

  runtimeConfig: {
    public: {
      API_TOKEN: process.env.API_TOKEN,
      API_URL: process.env.API_URL,
      NEWSLETTER_URL: process.env.NEWSLETTER_URL,
      OPENFEEDBACK_URL: process.env.OPENFEEDBACK_URL,
      CONFERENCE_HALL_EVENT_ID: process.env.CONFERENCE_HALL_EVENT_ID,
      BLUESKY_IDENTIFIER: process.env.BLUESKY_IDENTIFIER,
      BLUESKY_PASSWORD: process.env.BLUESKY_PASSWORD,
    },
  },

  googleFonts: {
    families: {
      Merriweather: {
        wght: [700],
        ital: [700],
      },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["jobs-widget", "LinkPrimaryNuxt"].includes(tag),
    },
  },

  image: {
    provider: "ipx",
    screens: {
      xs: 320,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400,
      "2xl": 1600,
    },
  },
});
