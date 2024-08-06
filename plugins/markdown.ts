import MarkdownIt from "markdown-it";
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
      }),
    },
  };
});
