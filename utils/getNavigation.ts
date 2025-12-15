import { useNuxtApp } from "#imports";
import { EDITION } from "~/services/constants";

type Page = {
  name: string;
  path: string;
  show: boolean;
  type: "internal" | "external";
  design: "link" | "primary";
};

function getLink(path: string, edition: Edition) {
  const isPreviousEdition = edition !== EDITION;
  if (isPreviousEdition) {
    return `/${edition}/${path}`;
  }
  return `/${path}`;
}

export function getNavigation() {
  const instance = useNuxtApp();
  const edition = useEdition();
  const isPreviousEdition = computed(() => edition !== EDITION);

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
      path: getLink("talks", edition),
      show:
        (instance.$featureFlags.pages.talks.show && !instance.$featureFlags.pages.schedule.show) ||
        isPreviousEdition.value,
      type: internal,
      design: link,
    },
    {
      name: "Programme",
      path: getLink("schedule", edition),
      show: instance.$featureFlags.pages.schedule.show,
      type: internal,
      design: link,
    },
    {
      name: "Sponsors",
      path: getLink("sponsors", edition),
      show: instance.$featureFlags.pages.sponsors.show || isPreviousEdition.value,
      type: internal,
      design: link,
    },
    {
      name: "Speakers",
      path: getLink("speakers", edition),
      show: instance.$featureFlags.pages.speakers.show || isPreviousEdition.value,
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
      name: "Proposer un talk",
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
