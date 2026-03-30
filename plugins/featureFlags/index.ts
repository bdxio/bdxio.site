import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => ({
  provide: {
    featureFlags: {
      pages: {
        homepage: {
          show: true,
          sections: {
            wip: false,
            figures: true,
            about: true,
            theme: false,
            materiel: false,
            dDay: false,
            categories: true,
            sponsor: true,
            lastYearSponsors: true,
            participant: false,
            talks: false,
          },
        },
        previousEditions: {
          show: true,
        },
        sponsors: {
          show: true,
          sections: {
            becomeSponsor: true,
            offers: true,
          },
          links: {
            downloadPdf: true,
          },
        },
        schedule: {
          show: false,
          links: {
            downloadPdf: false,
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
        talks: { show: false },
        speakers: { show: false },
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
        sponsoringPdf: false,
        live: false,
        materiel: false,
        kitCommunication: false,
      },
      messages: {
        soldout: false,
      },
    },
  },
}));
