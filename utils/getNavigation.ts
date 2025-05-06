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
      show: true,
      type: internal,
      design: link,
    },
    {
      name: "Talks",
      path: "/talks",
      show: instance.$featureFlags.pages.talks.show && instance.$featureFlags.pages.schedule.show,
      type: internal,
      design: link,
    },
    {
      name: "Programme",
      path: "/schedule",
      show: instance.$featureFlags.pages.schedule.show,
      type: internal,
      design: link,
    },
    {
      name: "Sponsors",
      path: "/sponsors",
      show: instance.$featureFlags.pages.sponsors.show,
      type: internal,
      design: link,
    },
    {
      name: "Speakers",
      path: "/speakers",
      show: instance.$featureFlags.pages.speakers.show && !instance.$featureFlags.pages.schedule.show,
      type: internal,
      design: link,
    },
    {
      name: "Faq",
      path: "/faq",
      show: instance.$featureFlags.pages.faq.show,
      type: internal,
      design: link,
    },
    {
      name: "Association",
      path: "/association",
      show: instance.$featureFlags.pages.association.show,
      type: internal,
      design: link,
    },
    {
      name: "Jobs",
      path: "/jobs",
      show: instance.$featureFlags.pages.jobs.show,
      type: internal,
      design: link,
    },
    {
      name: "En live",
      path: "/live",
      show: instance.$featureFlags.pages.live.show,
      type: internal,
      design: link,
    },
    {
      name: "Billetterie",
      path: "/ticketing",
      show: instance.$featureFlags.pages.ticketing.show,
      type: internal,
      design: link,
    },
    {
      name: "CFP",
      path: "https://conference-hall.io/bdx-i-o-2025",
      show: instance.$featureFlags.links.cfp,
      type: external,
      design: primary,
    },
  ]
    .filter((page) => page.show)
    .sort((a, b) => a.name.localeCompare(b.name));

  return pages;
}
