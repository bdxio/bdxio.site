<script setup lang="ts">
import { defineProps } from "vue";
import { useNuxtApp } from "#imports";
import { NuxtLink, LinkPrimary, LinkSecondary } from "#components";

defineProps<{
  background?: "light" | "dark";
  open: boolean;
}>();

const instance = useNuxtApp();

const pages = [
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
  <nav
    :class="`flex justify-center m:justify-end items-center w-full fixed m:static top-0 bottom-0 z-20
      min-h-full m:min-h-auto ${open ? 'right-0' : 'right-full'}
      ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'} m:bg-none`"
  >
    <ul class="flex flex-col m:flex-row justify-center m:justify-end items-center">
      <li
        v-for="page in pages"
        :key="page.name"
        class="mb-8 m:mb-0 m:mr-10 last:mr-0 last:mb-0"
      >
        <NuxtLink
          :to="page.path"
          :class="`no-underline text-2xl m:text-base
          ${background === 'dark' ? 'text-bdxio-light' : 'text-bdxio-blue-dark'}`"
        >
          {{ page.name }}
        </NuxtLink>
      </li>
      <li
        v-if="instance.$SHOW_LINK_LIVE"
        class="mb-8 m:mb-0 m:mr-10 last:mr-0 last:mb-0"
      >
        <LinkSecondary
          to="#"
          color="light"
          aria-label="lien vers le live - Nouvelle fenêtre"
          target="_blank"
        >
          <div class="flex items-center">
            Live
            <div class="live" />
          </div>
        </LinkSecondary>
      </li>
      <li
        v-if="instance.$SHOW_LINK_BILLETERIE"
        class="mb-8 m:mb-0 m:mr-10 last:mr-0 last:mb-0"
      >
        <LinkPrimary
          color="light"
          href="https://www.helloasso.com/associations/bordeaux-developer-experience/evenements/bdx-i-o-2022"
          target="_blank"
          title="lien vers la billeterie - Nouvelle fenêtre"
        >
          Billetterie
        </LinkPrimary>
      </li>
      <li
        v-if="instance.$SHOW_LINK_YOUTUBE"
        class="mb-8 m:mb-0 m:mr-10 last:mr-0 last:mb-0"
      >
        <LinkPrimary
          color="light"
          href="https://www.youtube.com/playlist?list=PLUJzERpatfsWYhMH0NOjSXemQh5Tu9g1W"
          target="_blank"
          title="lien vers le replay youtube - Nouvelle fenêtre"
        >
          Revoir les talks
        </LinkPrimary>
      </li>
      <li
        v-if="instance.$SHOW_LINK_CFP"
        class="mb-8 m:mb-0 m:mr-10 last:mr-0 last:mb-0"
      >
        <LinkSecondary
          to="https://conference-hall.io/public/event/OJC5Ou5YJodfetgSJCa3"
          color="light"
          target="_blank"
          aria-label="lien vers le CFP conference hall - Nouvelle fenêtre"
        >
          CFP
        </LinkSecondary>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="postcss">
.router-link-exact-active {
  position: relative;
  pointer-events: none;
}

.router-link-exact-active::after {
  content: "";
  width: 90px;
  height: 30px;
  display: block;
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: url("/images/drawings/blue_underline.webp") no-repeat
    center / cover;
}

.live {
  margin-left: 15px;
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);
  }
  65% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);
  }
  90% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);
  }
}
</style>
