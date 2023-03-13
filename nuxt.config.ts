export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  imports: {
    autoImport: false,
  },
  modules: ["@vueuse/nuxt"],
  css: ["@/assets/styles/main.scss"],
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
    API_TOKEN: process.env.API_TOKEN,
    public: {
      API_URL: process.env.API_URL,
    },
  },
});
