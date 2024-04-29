import { useNuxtApp, useRuntimeConfig } from "#imports";
import { PREVIOUS_EDITION } from "~/services/constants";

type Page = {
  name: string;
  path: string;
  show: boolean;
  type: "internal" | "external";
  design: "link" | "primary";
};

function getShowPage(featureFlag?: unknown) {
  return featureFlag ? true : false;
}

export function getNavigation() {
  const instance = useNuxtApp();
  const config = useRuntimeConfig();

  const link = "link" as const;
  const primary = "primary" as const;
  const internal = "internal" as const;
  const external = "external" as const;

  const pages: Page[] = [
    {
      name: "Accueil",
      path: "/",
      show: getShowPage(!instance.$featureFlags.pages.wip),
      type: internal,
      design: link,
    },
    {
      name: "Talks",
      path: "/talks",
      show:
        instance.$featureFlags.pages.talks &&
        !instance.$featureFlags.pages.schedule
          ? true
          : false,
      type: internal,
      design: link,
    },
    {
      name: "Programme",
      path: "/schedule",
      show: getShowPage(instance.$featureFlags.pages.schedule),
      type: internal,
      design: link,
    },
    {
      name: "Sponsors",
      path: "/sponsors",
      show: getShowPage(instance.$featureFlags.pages.sponsors),
      type: internal,
      design: link,
    },
    {
      name: "Speakers",
      path: "/speakers",
      show:
        instance.$featureFlags.pages.speakers &&
        !instance.$featureFlags.pages.schedule
          ? true
          : false,
      type: internal,
      design: link,
    },
    {
      name: "FAQ",
      path: "/faq",
      show: getShowPage(instance.$featureFlags.pages.faq),
      type: internal,
      design: link,
    },
    {
      name: "Association",
      path: "/association",
      show: getShowPage(instance.$featureFlags.pages.association),
      type: internal,
      design: link,
    },
    {
      name: "Jobs",
      path: "/jobs",
      show: getShowPage(instance.$featureFlags.pages.jobs),
      type: internal,
      design: link,
    },
    {
      name: "Live",
      path: "/live",
      show: getShowPage(instance.$featureFlags.pages.live),
      type: internal,
      design: primary,
    },
    {
      name: "Billeterie",
      path: "https://www.billetweb.fr/bdxio-2023",
      show: instance.$featureFlags.links.ticketing,
      type: external,
      design: primary,
    },
    {
      name: "CFP",
      path: `https://conference-hall.io/public/event/${config.public.CONFERENCE_HALL_EVENT_ID}`,
      show: instance.$featureFlags.links.cfp,
      type: external,
      design: primary,
    },
  ].filter((page) => page.show === true);

  return pages;
}
