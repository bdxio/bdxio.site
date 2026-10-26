import type { NuxtPage } from 'nuxt/schema';
import { fileURLToPath } from 'node:url';
import { EDITION } from './services/constants';
import { isPageEnabled } from './services/featureFlags';

const SCHEDULE_PDF_DAYS = [1, 2];

function removeDisabledPages(pages: NuxtPage[]) {
  for (let index = pages.length - 1; index >= 0; index--) {
    const page = pages[index]!;
    const flag = page.meta?.featureFlag;

    if (typeof flag === 'string' && !isPageEnabled(flag)) {
      pages.splice(index, 1);
    } else if (page.children) {
      removeDisabledPages(page.children);
    }
  }
}

export default defineNuxtConfig({
  site: {
    url: 'bdxio.fr',
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
    extraPageMetaExtractionKeys: ['featureFlag'],
  },

  hooks: {
    // Disabled pages are dropped before Nuxt collects the routes to prerender, otherwise their 404 breaks generate.
    'pages:resolved': removeDisabledPages,
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  plugins: ['~/plugins/featureFlags/index.ts'],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
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
      DRAFT_TALKS: process.env.DRAFT_TALKS,
    },
  },

  googleFonts: {
    families: {
      Merriweather: {
        wght: [700],
        ital: [700],
      },
      Lato: {
        wght: [300, 700],
      }
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['jobs-widget', 'LinkPrimaryNuxt'].includes(tag),
    },
  },

  image: {
    provider: 'ipx',
    screens: {
      xs: 320,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400,
      '2xl': 1600,
    },
  },

  nitro: {
    serverAssets: [{ baseName: 'fonts', dir: fileURLToPath(new URL('./node_modules/@fontsource/merriweather/files', import.meta.url)) }],
    prerender: {
      routes: SCHEDULE_PDF_DAYS.map((day) => `/programme/bdxio-${EDITION}-${day}.pdf`),
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        'markdown-it',
        'fetch-jsonp', // CJS
      ],
    },
  },
});
