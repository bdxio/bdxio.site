import { defineNuxtPlugin } from "#imports";

const sectionFlags = {
  SHOW_SECTION_VOLUNTEERS: true,
};

const linkFlags = {
  SHOW_LINK_CFP: true,
  SHOW_LINK_BILLETERIE: true,
  SHOW_LINK_OPENFEEDBACK: true,
  SHOW_LINK_YOUTUBE: true,
  SHOW_LINK_PROGRAMME_PDF: true,
};

const pageFlags = {
  SHOW_PAGE_PROGRAMME: true,
  SHOW_PAGE_SPONSORS: true,
  SHOW_PAGE_ASSOCIATION: true,
  SHOW_PAGE_JOBS: true,
  SHOW_PAGE_TALKS: true,
  SHOW_PAGE_LIVE: true,
};

const FLAGS = {
  ...linkFlags,
  ...pageFlags,
  ...sectionFlags,
};

export default defineNuxtPlugin(() => {
  const flags = Object.entries(FLAGS).reduce((flags, [key, value]) => {
    Object.assign(flags, { [key]: value });
    return flags;
  }, {});

  return {
    provide: flags,
  };
});
