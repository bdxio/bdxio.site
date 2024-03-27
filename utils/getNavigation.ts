import { useNuxtApp, useRuntimeConfig } from "#imports";
import { PREVIOUS_EDITION } from "~/services/constants";

type Page = {
  name: string;
  path: string;
  show: boolean;
  type: "internal" | "external";
  design: "link" | "primary";
};

export function getNavigation() {
  const { $featureFlags } = useNuxtApp();
  const config = useRuntimeConfig();

  const link = "link" as const;
  const primary = "primary" as const;
  const internal = "internal" as const;
  const external = "external" as const;

  const pages: Page[] = [
    {
      name: "Accueil",
      path: "/",
      show: !$featureFlags.pages.wip,
      type: internal,
      design: link,
    },
    {
      name: "Talks",
      path: "/talks",
      show: $featureFlags.pages.talks && $featureFlags.pages.schedule,
      type: internal,
      design: link,
    },
    {
      name: "Programme",
      path: "/schedule",
      show: $featureFlags.pages.schedule,
      type: internal,
      design: link,
    },
    {
      name: `Sponsors ${PREVIOUS_EDITION}`,
      path: "/alumni-sponsors",
      show: $featureFlags.pages.alumni.sponsors,
      type: internal,
      design: link,
    },
    {
      name: "Speakers",
      path: "/speakers",
      show: $featureFlags.pages.speakers && $featureFlags.pages.schedule,
      type: internal,
      design: link,
    },
    {
      name: "FAQ",
      path: "/faq",
      show: $featureFlags.pages.faq,
      type: internal,
      design: link,
    },
    {
      name: "Association",
      path: "/association",
      show: $featureFlags.pages.association,
      type: internal,
      design: link,
    },
    {
      name: "Jobs",
      path: "/jobs",
      show: $featureFlags.pages.jobs,
      type: internal,
      design: link,
    },
    {
      name: "Live",
      path: "/live",
      show: $featureFlags.pages.live,
      type: internal,
      design: primary,
    },
    {
      name: "Billeterie",
      path: "https://www.billetweb.fr/bdxio-2023",
      show: $featureFlags.links.billeterie,
      type: external,
      design: primary,
    },
    {
      name: "CFP",
      path: `https://conference-hall.io/public/event/${config.public.CONFERENCE_HALL_EVENT_ID}`,
      show: $featureFlags.links.cfp,
      type: external,
      design: primary,
    },
  ].filter((page) => page.show === true);

  return pages;
}
