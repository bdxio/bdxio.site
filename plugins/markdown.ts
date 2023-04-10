import { defineNuxtPlugin } from "#imports";
import MarkdownIt from "markdown-it";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: new MarkdownIt(),
    },
  };
});
