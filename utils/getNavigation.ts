import { useNuxtApp } from '#imports';
import { PREVIOUS_EDITIONS } from '~/services/constants';

type Page = {
  name: string;
  path: string;
  show: boolean;
  type: 'internal' | 'external';
  design: 'link' | 'primary';
};

const link = 'link' as const;
const primary = 'primary' as const;
const internal = 'internal' as const;
const external = 'external' as const;

export function getPreviousEditionsNavigation() {
  const instance = useNuxtApp();

  return PREVIOUS_EDITIONS.map((edition) => ({
    name: `Édition ${edition}`,
    path: `/${edition}`,
    show: instance.$featureFlags.pages.previousEditions.menu,
    type: internal,
    design: link,
  }));
}

export function getNavigation() {
  const instance = useNuxtApp();

  return computed(() => {
    const pages: Page[] = [
      {
        name: 'Accueil',
        path: '/',
        show: true,
        type: internal,
        design: link,
      },
      {
        name: 'Talks',
        path: '/talks',
        show: instance.$featureFlags.pages.talks.menu,
        type: internal,
        design: link,
      },
      {
        name: 'Programme',
        path: '/schedule',
        show: instance.$featureFlags.pages.schedule.menu,
        type: internal,
        design: link,
      },
      {
        name: 'Sponsors',
        path: '/sponsors',
        show: instance.$featureFlags.pages.sponsors.menu,
        type: internal,
        design: link,
      },
      {
        name: 'Speakers',
        path: '/speakers',
        show: instance.$featureFlags.pages.speakers.menu,
        type: internal,
        design: link,
      },
      {
        name: 'Faq',
        path: '/faq',
        show: instance.$featureFlags.pages.faq.menu,
        type: internal,
        design: link,
      },
      {
        name: 'Association',
        path: '/association',
        show: instance.$featureFlags.pages.association.menu,
        type: internal,
        design: link,
      },
      {
        name: 'Jobs',
        path: '/jobs',
        show: instance.$featureFlags.pages.jobs.menu,
        type: internal,
        design: link,
      },
      {
        name: 'En live',
        path: '/live',
        show: instance.$featureFlags.pages.live.menu,
        type: internal,
        design: link,
      },
      {
        name: 'Billetterie',
        path: 'https://www.billetweb.fr/bdx-i-o-2026',
        show: instance.$featureFlags.pages.ticketing.menu,
        type: external,
        design: primary,
      },
      {
        name: 'Proposer un talk',
        path: 'https://conference-hall.io/bdx-i-o-2026',
        show: instance.$featureFlags.links.cfp,
        type: external,
        design: primary,
      },
    ]
      .filter((page) => page.show)
      .sort((a, b) => a.name.localeCompare(b.name));

    return pages;
  });
}
