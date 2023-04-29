export default defineNuxtConfig({
  devServer: {
    port: 3615,
  },
  typescript: {
    strict: true,
  },
  imports: {
    autoImport: false,
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@vue-macros/nuxt", "@vueuse/nuxt"],
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
});
