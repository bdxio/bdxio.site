import { defineNuxtPlugin } from "#imports";

const links = {
  SHOW_LINK_CFP: false,
  SHOW_LINK_BILLETERIE: false,
  SHOW_LINK_OPENFEEDBACK: false,
  SHOW_LINK_PROGRAMME_PDF: false,
  SHOW_LINK_LIVE: false,
  SHOW_LINK_SPONSORING: false,
  SHOW_LINK_MATERIEL: false,
};

const pages = {
  SHOW_PAGE_PROGRAMME: false,
  SHOW_PAGE_SPONSORS: true,
  SHOW_PAGE_ASSOCIATION: true,
  SHOW_PAGE_JOBS: false,
  SHOW_PAGE_TALKS: false,
  SHOW_PAGE_SPEAKERS: false,
  SHOW_PAGE_LIVE: false,
  SHOW_PAGE_FAQ: false,
  SHOW_PAGE_CONCOURS_2023: false,
  SHOW_PAGE_CODE_OF_CONDUCT: false,
  SHOW_PAGE_LEGAL_NOTICE: false,
  SHOW_PAGE_WIP: true,
};

export default defineNuxtPlugin(() => {
  return {
    provide: { ...links, ...pages },
  };
});
