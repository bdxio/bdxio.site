export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  imports: {
    autoImport: false,
  },
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "@vue-macros/nuxt", "@vueuse/nuxt"],
  css: ["~/assets/styles/main.scss", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
      "tailwindcss/nesting": {},
      "postcss-import": {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/styles/_variables.scss";
            @import "~/assets/styles/_mixins.scss";
          `,
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      API_TOKEN: process.env.API_TOKEN,
      API_URL: process.env.API_URL,
    },
  },
  googleFonts: {
    families: {
      Merriweather: {
        wght: [700],
        ital: [700],
      },
      Lato: {
        wght: [300, 400, 700],
        ital: [300,400, 700],
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
