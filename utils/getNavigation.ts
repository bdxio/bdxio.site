import { useNuxtApp, useRuntimeConfig } from "#imports";

type Page = {
  name: string;
  path: string;
  show: boolean;
  type: "internal" | "external";
  design: "link" | "primary";
};

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
      show: instance.$featureFlags.pages.wip,
      type: internal,
      design: link,
    },
    {
      name: "Talks",
      path: "/talks",
      show: instance.$featureFlags.pages.talks && instance.$featureFlags.pages.schedule,
      type: internal,
      design: link,
    },
    {
      name: "Programme",
      path: "/schedule",
      show: instance.$featureFlags.pages.schedule,
      type: internal,
      design: link,
    },
    {
      name: "Sponsors",
      path: "/sponsors",
      show: instance.$featureFlags.pages.sponsors,
      type: internal,
      design: link,
    },
    {
      name: "Speakers",
      path: "/speakers",
      show: instance.$featureFlags.pages.speakers && !instance.$featureFlags.pages.schedule,
      type: internal,
      design: link,
    },
    {
      name: "FAQ",
      path: "/faq",
      show: instance.$featureFlags.pages.faq,
      type: internal,
      design: link,
    },
    {
      name: "Association",
      path: "/association",
      show: instance.$featureFlags.pages.association,
      type: internal,
      design: link,
    },
    {
      name: "Jobs",
      path: "/jobs",
      show: instance.$featureFlags.pages.jobs,
      type: internal,
      design: link,
    },
    {
      name: "En live",
      path: "/live",
      show: instance.$featureFlags.pages.live,
      type: internal,
      design: link,
    },
    {
      name: "Billetterie",
      path: "/ticketing",
      show: instance.$featureFlags.pages.ticketing,
      type: internal,
      design: link,
    },
    {
      name: "CFP",
      path: `https://conference-hall.io/public/event/${config.public.CONFERENCE_HALL_EVENT_ID}`,
      show: instance.$featureFlags.links.cfp,
      type: external,
      design: primary,
    },
  ]
    .filter((page) => page.show)
    .sort((a, b) => a.name.localeCompare(b.name));

  return pages;
}
