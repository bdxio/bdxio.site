export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  server: {
    port: 3615
  },

  env: {
    API_KEY: process.env.API_KEY,
    VUE_APP_API_KEY: process.env.VUE_APP_API_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BDX I/O",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicons/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicons/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicons/favicon-16x16.png"
      },
      {
        rel: "manifest",
        href: "/favicons/site.webmanifest"
      },
      {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#5bbad5"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/main.scss"],

  styleResources: {
    scss: ["~/assets/styles/_variables.scss", "~/assets/styles/_functions.scss", "~/assets/styles/_mixin.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/featureFlag.client.js", "~/plugins/axios.js"],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module"
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    credentials: "same-origin",
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  },

  publicRuntimeConfig: {
    newsletterUrl: process.env.NEWSLETTER_URL ?? null,
    cmsBaseUrl: process.env.CMS_BASE_URL ?? null,
    cmsApiUrl: process.env.NEXT_PUBLIC_API_URL ?? null
  }
};
