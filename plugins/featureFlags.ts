import { defineNuxtPlugin } from "#imports";

const links = {
  SHOW_LINK_CFP: true,
  SHOW_LINK_BILLETERIE: true,
  SHOW_LINK_OPENFEEDBACK: true,
  SHOW_LINK_PROGRAMME_PDF: true,
  SHOW_LINK_LIVE: true,
  SHOW_LINK_SPONSORING: true,
  SHOW_LINK_MATERIEL: true,
};

const pages = {
  SHOW_PAGE_PROGRAMME: true,
  SHOW_PAGE_SPONSORS: true,
  SHOW_PAGE_ASSOCIATION: true,
  SHOW_PAGE_JOBS: true,
  SHOW_PAGE_TALKS: true,
  SHOW_PAGE_SPEAKERS: true,
  SHOW_PAGE_LIVE: true,
  SHOW_PAGE_FAQ: true,
  SHOW_PAGE_CONCOURS_2023: true,
  SHOW_PAGE_CODE_OF_CONDUCT: true,
  SHOW_PAGE_LEGAL_NOTICE: true,
  SHOW_PAGE_WIP: false,
};

export default defineNuxtPlugin(() => {
  return {
    provide: { ...links, ...pages },
  };
});
