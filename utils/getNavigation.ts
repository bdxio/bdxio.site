import { useNuxtApp, useRuntimeConfig } from "#imports";
import { EDITION } from "~/services/constants";

type Page = {
    name: string,
    path: string,
    show: boolean;
    type: "internal" | "external"
    design: "link" | "primary"
}

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
      show: getShowPage(!instance.$SHOW_PAGE_WIP),
      type: internal,
      design: link,
    },
    {
      name: "Talks",
      path: "/talks",
      show: getShowPage(instance.$SHOW_PAGE_TALKS && !instance.$SHOW_PAGE_PROGRAMME),
      type: internal,
      design: link,
    },
    {
      name: "Programme",
      path: "/schedule",
      show: getShowPage(instance.$SHOW_PAGE_PROGRAMME),
      type: internal,
      design: link,
    },
    {
      name: `Sponsors ${EDITION}`,
      path: "/sponsors",
      show: getShowPage(instance.$SHOW_PAGE_SPONSORS),
      type: internal,
      design: link,
    },
    {
      name: "Speakers",
      path: "/speakers",
      show: getShowPage(instance.$SHOW_PAGE_SPEAKERS && !instance.$SHOW_PAGE_PROGRAMME),
      type: internal,
      design: link,
    },
    {
      name: "FAQ",
      path: "/faq",
      show: getShowPage(instance.$SHOW_PAGE_FAQ),
      type: internal,
      design: link,
    },
    {
      name: "Association",
      path: "/association",
      show: getShowPage(instance.$SHOW_PAGE_ASSOCIATION),
      type: internal,
      design: link,
    },
    {
      name: "Jobs",
      path: "/jobs",
      show: getShowPage(instance.$SHOW_PAGE_JOBS),
      type: internal,
      design: link,
    },
    {
      name: "Live",
      path: "/live",
      show: getShowPage(instance.$SHOW_PAGE_LIVE),
      type: internal,
      design: primary,
    },
    {
      name:"Billeterie",
      path: "https://www.billetweb.fr/bdxio-2023",
      show: getShowPage(instance.$SHOW_LINK_BILLETERIE),
      type: external,
      design:  primary,
    },
    {
      name: "CFP",
      path: `https://conference-hall.io/public/event/${config.public.CONFERENCE_HALL_EVENT_ID}`,
      show: getShowPage(instance.$SHOW_LINK_CFP),
      type: external,
      design: primary,
    },

  ].filter((page) => page.show);

  return pages;
}
