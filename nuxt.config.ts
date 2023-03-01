export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
  css: ["@/assets/styles/main.scss"],
  imports: {
    autoImport: false,
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
});
