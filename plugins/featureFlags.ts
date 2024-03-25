import { defineNuxtPlugin } from "#imports";

const links = {
  SHOW_LINK_CFP: false,
  SHOW_LINK_BILLETERIE: false,
  SHOW_LINK_OPENFEEDBACK: false,
  SHOW_LINK_PROGRAMME_PDF: false,
  SHOW_LINK_LIVE: false,
  SHOW_LINK_SPONSORING: false,
  SHOW_LINK_MATERIEL: false,
  SHOW_LINK_KIT_COMMUNICATION: false,
};

const sections = {
  SHOW_SECTION_FIGURES: true,
  SHOW_SECTION_ABOUT: true,
  SHOW_SECTION_THEME: false,
  SHOW_SECTION_MATERIEL: false,
  SHOW_SECTION_JOUR_J: false,
  SHOW_SECTION_HOMEPAGE_CATEGORIES: false,
  SHOW_SECTION_LAYOUT_SPONSORS: false,
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
  SHOW_PAGE_CODE_OF_CONDUCT: true,
  SHOW_PAGE_LEGAL_NOTICE: false,
  SHOW_PAGE_WIP: true,
};

export default defineNuxtPlugin(() => {
  return {
    provide: { ...links, ...pages, ...sections },
  };
});
