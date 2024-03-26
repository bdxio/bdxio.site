import { defineNuxtPlugin } from "#imports";

import layouts from "./layouts";
import pages from "./pages";
import sections from "./sections";
import links from "./links";

export default defineNuxtPlugin(() => ({
  provide: {
    featureFlags: {
      layouts,
      pages,
      sections,
      links,
    },
  },
}));
