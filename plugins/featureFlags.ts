import { defineNuxtPlugin } from "#imports";

const links = {
  SHOW_LINK_CFP: false,
  SHOW_LINK_BILLETERIE: true,
  SHOW_LINK_OPENFEEDBACK: true,
  SHOW_LINK_YOUTUBE: false,
  SHOW_LINK_PROGRAMME_PDF: true,
  SHOW_LINK_LIVE: false,
};

const pages = {
  SHOW_PAGE_PROGRAMME: true,
  SHOW_PAGE_SPONSORS: true,
  SHOW_PAGE_SPONSORS2022: false,
  SHOW_PAGE_ASSOCIATION: true,
  SHOW_PAGE_JOBS: true,
  SHOW_PAGE_TALKS: false,
  SHOW_PAGE_SPEAKERS: true,
  SHOW_PAGE_LIVE: false,
  SHOW_PAGE_FAQ: true,
};

export default defineNuxtPlugin(() => {
  return {
    provide: { ...links, ...pages },
  };
});
