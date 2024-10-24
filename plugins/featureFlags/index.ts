import { defineNuxtPlugin } from "#imports";

import pages from "./pages";
import sections from "./sections";
import links from "./links";
import messages from "./messages";

export default defineNuxtPlugin(() => ({
  provide: {
    featureFlags: {
      pages,
      sections,
      links,
      messages,
    },
  },
}));
