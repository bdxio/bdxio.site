<script setup lang="ts">
import { NuxtImg } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

const links = [
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
</script>

<template>
  <ul class="flex">
    <li
      v-for="link in links"
      :key="link.label"
      class="mr-4"
    >
      <a
        :href="link.href"
        target="_blank"
        :aria-label="`lien vers le compte ${link.label} de ${ASSOCIATION_NAME} - Nouvelle fenêtre`"
      >
        <NuxtImg
          :src="link.icon"
          :alt="`Icône ${link.label}`"
          :aria-label="`Consulter le compte de ${ASSOCIATION_NAME} sur ${link.label}`"
          width="40"
          height="40"
          loading="lazy"
        />
      </a>
    </li>
  </ul>
</template>
