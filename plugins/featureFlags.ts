import { defineNuxtPlugin } from "#imports";


const sectionsFlags = {
  SHOW_SECTION_VOLUNTEERS: false,
}

const linksFlags = {
  SHOW_LINK_CFP: true,
  SHOW_LINK_BILLETERIE: false,
  SHOW_LINK_OPENFEEDBACK: false,
  SHOW_LINK_YOUTUBE: false,
  SHOW_LINK_PROGRAMME_PDF: false
}

const pageFlags = {
  SHOW_PAGE_PROGRAMME: false,
  SHOW_PAGE_SPONSORS: false,
  SHOW_PAGE_ASSOCIATION: false,
  SHOW_PAGE_JOBS: false,
  SHOW_PAGE_TALKs: false,
  SHOW_PAGE_LIVE: false,
}

const FLAGS = {
  ...linksFlags,
  ...pageFlags,
  ...sectionsFlags
};

export default defineNuxtPlugin(() => {
  const flags = Object.entries(FLAGS).reduce((flags, [key, value]) => {
    Object.assign(flags, {
     [key]: value
    })
    return flags;
  }, {});

  return {
    provide: flags,
  };
});
