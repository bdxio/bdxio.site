<script setup lang="ts">
import {
  LayoutFooterNewsletter,
  NuxtLink,
  NuxtImg,
} from "#components";
import { getNavigation, useNuxtApp } from "#imports";

import { ASSOCIATION_NAME } from "~/services/constants";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/10651416/",
    icon: "/images/icons/linkedin.svg",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/bdxio",
    icon: "/images/icons/twitter.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ",
    icon: "/images/icons/youtube.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bdx.io/",
    icon: "/images/icons/instagram.svg",
  },
];

const contactLinks = [
  {
    label: "team@bdxio.fr",
    href: "mailto:team@bdxio.fr",
  },
  {
    label: "partenariats@bdxio.fr",
    href: "mailto:partenariats@bdxio.fr",
  },
];

const navigation = getNavigation();
const { $SHOW_PAGE_LEGAL_NOTICE, $SHOW_PAGE_CODE_OF_CONDUCT, $SHOW_LINK_KIT_COMMUNICATION } = useNuxtApp();

</script>

<template>
  <footer class="p-section !pb-0 mb-8 m:mb-16 flex flex-col">
    <NuxtLink
      to="/"
      class="flex flex-col m:flex-row m:items-center mb-8 m:mb-16"
    >
      <NuxtImg
        src="/images/logo_blue_footer.webp"
        width="160"
        height="58"
        :alt="`Logo de l'association ${ASSOCIATION_NAME}`"
        class="block max-w-[120px] m:max-w-[160px] mb-5 m:mb-0 m:mr-5"
        loading="lazy"
      />
      <span class="text-2xl m:text-4xl font-bold">Bordeaux Developers eXperience</span>
    </NuxtLink>
    <div class="flex flex-col m:flex-row">
      <div class="flex flex-col m:w-1/3 mb-8 m:mb-0">
        <a
          href="https://goo.gl/maps/aScUymM4T4DqeBvz8"
          target="_blank"
          aria-label="lien vers le palais des congrès sur google maps - Nouvelle fenêtre"
          class="block mb-8 m:mb-16"
        >
          <span class="font-bold text-2xl">Palais des Congrès</span><br>
          <span>Avenue Jean Gabriel Domergue<br>33300 BORDEAUX</span>
        </a>
        <ul class="flex">
          <li
            v-for="social in socials"
            :key="social.label"
            class="mr-4"
          >
            <a
              :href="social.href"
              target="_blank"
              :aria-label="`lien vers le compte ${social.label} de ${ASSOCIATION_NAME} - Nouvelle fenêtre`"
            >
              <NuxtImg
                :src="social.icon"
                :alt="`Icône ${social.label}`"
                :aria-label="`Consulter le compte de ${ASSOCIATION_NAME} sur ${social.label}`"
                width="40"
                height="40"
                loading="lazy"
              />
            </a>
          </li>
        </ul>
      </div>
      <nav class="m:w-1/3 mb-8 m:mb-0">
        <ul
          class="flex flex-col"
        >
          <li
            v-for="page in navigation"
            :key="page.path"
            class="mr-5 mb-2 last:mr-0 last:mb-0"
          >
            <NuxtLink
              :to="page.path"
              class="text-2xl m:text-base"
            >
              {{ page.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="m:w-1/3">
        <ul class="mb-8">
          <li
            v-for="link in contactLinks"
            :key="link.label"
            class="mb-2"
          >
            <a
              :href="link.href"
              :title="`Envoyer un mail à ${link.label} - Nouvelle fenêtre`"
            >{{ link.label }}</a>
          </li>
        </ul>
        <LayoutFooterNewsletter />
      </div>
    </div>
    <div class="flex flex-col m:flex-row border-t border-solid border-black mt-8 m:mt-16 pt-8 m:pt-16">
      <span class="text-lg m:mr-16 mb-4 m:mb-0">© {{ new Date().getFullYear() }} - {{ ASSOCIATION_NAME }}</span>
      <NuxtLink
        v-if="$SHOW_PAGE_LEGAL_NOTICE"
        to="/legal-notice"
        class="text-lg m:mr-16 mb-4 m:mb-0"
      >
        Mentions légales
      </NuxtLink>
      <NuxtLink
        v-if="$SHOW_PAGE_CODE_OF_CONDUCT"
        to="/conduct"
        class="text-lg m:mr-16 mb-4 m:mb-0"
      >
        Code de conduite
      </NuxtLink>
      <a
        v-if="$SHOW_LINK_KIT_COMMUNICATION"
        href="/bdxio-kit-communication.zip"
        download
        class="text-lg m:mr-16"
      >
        Kit communication
      </a>
    </div>
  </footer>
</template>
