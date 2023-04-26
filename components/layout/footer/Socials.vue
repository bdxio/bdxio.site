<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/10651416/",
    icon: "/images/icons/linkedin.webp",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/bdxio",
    icon: "/images/icons/twitter.webp",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ",
    icon: "/images/icons/youtube.webp",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bdx.io/",
    icon: "/images/icons/instagram.webp",
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
        :aria-label="`${link.label} ${ASSOCIATION_NAME}`"
      >
        <img
          :src="link.icon"
          :alt="`Icône ${link.label}`"
        >
      </a>
    </li>
  </ul>
</template>
