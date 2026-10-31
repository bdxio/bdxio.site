export const featureFlags = {
  pages: {
    homepage: {
      sections: {
        heroEditionAnnounced: false,
        heroDDay: false,
        heroComingBackSoon: true,
        figures: false,
        talks: false,
        about: true,
        theme: false,
        materiel: false,
        categories: false,
        previousEditionSponsors: true,
        currentEditionSponsors: false,
        becomingSponsor: false,
        participants: false,
      },
    },
    previousEditions: {
      page: true,
      menu: true,
    },
    sponsors: {
      page: true,
      menu: true,
      sections: {
        becomeSponsor: false,
        offers: false,
        sponsorsList: true,
      },
      links: {
        downloadPdf: true,
      },
    },
    schedule: {
      page: false,
      menu: false,
      links: {
        downloadPdf: false,
      },
    },
    association: { page: true, menu: true },
    jobs: { page: true, menu: true },
    talks: { page: true, menu: true },
    speakers: { page: true, menu: true },
    live: { page: false, menu: false },
    faq: { page: true, menu: true },
    scheduleSvg: { page: true },
    codeOfConduct: { page: true },
    legalNotice: { page: true },
    ticketing: {
      menu: false,
      links: {
        ticketing: true,
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
    kitCommunication: false,
  },
  messages: {
    soldout: false,
  },
};

type Pages = typeof featureFlags.pages;

export type PageFeatureFlag = {
  [Key in keyof Pages]: Pages[Key] extends { page: boolean } ? Key : never;
}[keyof Pages];

export function isPageEnabled(flag: string) {
  const page: unknown = featureFlags.pages[flag as keyof Pages];

  if (!page || typeof page !== 'object' || !('page' in page) || typeof page.page !== 'boolean') {
    throw new Error(`Unknown page feature flag "${flag}"`);
  }

  return page.page;
}
