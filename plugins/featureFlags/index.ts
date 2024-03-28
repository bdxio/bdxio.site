import { defineNuxtPlugin } from "#imports";

import pages from "./pages";
import sections from "./sections";
import links from "./links";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      featureFlags: {
        pages,
        sections,
        links,
      },
    },
  };
});
