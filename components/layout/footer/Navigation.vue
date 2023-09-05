<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { NuxtLink } from "#components";

const instance = useNuxtApp();

const pages = [
  {
    name: "Accueil",
    path: "/",
    show: true,
  },
  {
    name: "Programme",
    path: "/schedule",
    show: instance.$SHOW_PAGE_PROGRAMME,
  },
  {
    name: "Sponsors",
    path: "/sponsors",
    show: instance.$SHOW_PAGE_SPONSORS,
  },
  {
    name: "FAQ",
    path: "/faq",
    show: instance.$SHOW_PAGE_FAQ,
  },
  {
    name: "Association",
    path: "/association",
    show: instance.$SHOW_PAGE_ASSOCIATION,
  },
  {
    name: "Offres d'emploi",
    path: "/jobs",
    show: instance.$SHOW_PAGE_JOBS,
  },
  {
    name: "Talks",
    path: "/talks",
    show: instance.$SHOW_PAGE_TALKS,
  },
].filter((page) => page.show);
</script>

<template>
  <nav>
    <ul
      class="flex flex-col"
    >
      <li
        v-for="page in pages"
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
</template>
