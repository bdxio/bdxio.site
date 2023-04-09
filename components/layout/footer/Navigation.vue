<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { NuxtLink } from "#components";

const instance = useNuxtApp();

const links = [
  {
    name: "Accueil",
    path: "/",
    show: true,
  },
  {
    name: "Programme",
    path: "/programme",
    show: instance.$SHOW_PAGE_PROGRAMME,
  },
  {
    name: "Sponsors",
    path: "/sponsors",
    show: instance.$SHOW_PAGE_SPONSORS,
  },
  {
    name: "FAQ Sponsors",
    path: "/faq",
    show: instance.$SHOW_PAGE_FAQ,
  },
  {
    name: "L'asso",
    path: "/association",
    show: instance.$SHOW_PAGE_ASSOCIATION,
  },
  {
    name: "Jobs",
    path: "/jobs",
    show: instance.$SHOW_PAGE_JOBS,
  },
  {
    name: "Talks",
    path: "/talks",
    show: instance.$SHOW_PAGE_TALKS,
  },
].filter((link) => link.show);
</script>

<template>
  <nav>
    <ul class="flex flex-col">
      <li
        v-for="link in links"
        :key="link.path"
        class="mr-5 mb-2 last:mr-0 last:mb-0"
      >
        <NuxtLink
          :to="link.path"
          class="text-2xl m:text-base"
        >
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
