import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => ({
  provide: {
    featureFlags: {
      pages: {
        homepage: {
          show: true,
          sections: {
            wip: true,
            figures: true,
            about: true,
            theme: true,
            materiel: false,
            dDay: false,
            categories: true,
            sponsor: true,
            participant: true,
            talks: true,
          },
        },
        sponsors: {
          show: true,
          sections: {
            becomeSponsor: false,
            offers: false,
          },
          links: {
            downloadPdf: true,
          },
        },
        schedule: {
          show: true,
          links: {
            downloadPdf: true,
          },
        },
        scheduleLegacy: {
          show: false,
          links: {
            downloadPdf: false,
          },
        },
        association: { show: true },
        jobs: { show: false },
        talks: { show: true },
        speakers: { show: true },
        live: { show: false },
        faq: { show: true },
        codeOfConduct: { show: true },
        legalNotice: { show: true },
        ticketing: {
          show: false,
          links: {
            ticketing: false,
          },
        },
      },
      layout: {
        sponsors: false,
        location: false,
      },
      links: {
        cfp: false,
        openfeedback: false,
        schedulePdf: false,
        sponsoringPdf: true,
        live: false,
        materiel: false,
        kitCommunication: true,
      },
      messages: {
        soldout: false,
      },
    },
  },
}));
