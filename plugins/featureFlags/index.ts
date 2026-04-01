import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(() => ({
  provide: {
    featureFlags: {
      pages: {
        homepage: {
          show: true,
          sections: {
            heroEditionAnnounced: true,
            heroDDay: false,
            heroComingBackSoon: false,
            figures: true,
            about: true,
            theme: false,
            materiel: false,
            categories: true,
            lastYearSponsors: true,
            sponsors: true,
            participants: false,
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
            sponsorsList: false,
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
        sponsoringPdf: true,
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
