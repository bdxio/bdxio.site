<script setup lang="ts">
import { defineProps } from "vue";
import { useNuxtApp, computed } from "#imports";
import { NuxtLink, LinkPrimary, LinkSecondary } from "#components";
import { EDITION } from "~/services/constants";

const props = defineProps<{
  background?: "light" | "dark";
  mobileOpen?: boolean;
}>();

const {
  $SHOW_LINK_BILLETERIE,
  $SHOW_LINK_YOUTUBE,
  $SHOW_LINK_CFP,
  $SHOW_PAGE_TALKS,
  $SHOW_PAGE_PROGRAMME,
  $SHOW_LINK_LIVE,
  $SHOW_PAGE_SPONSORS,
  $SHOW_PAGE_SPONSORS2022,
  $SHOW_PAGE_ASSOCIATION,
  $SHOW_PAGE_JOBS,
  $SHOW_PAGE_FAQ,
} = useNuxtApp();

const linkColor = computed(() => {
  if (!props.background) {
    return "text-bdxio-font-dark";
  }
  return props.background === "dark" ? "text-bdxio-font-light" : "text-bdxio-blue-dark";
});

</script>

<template>
  <ul class="flex flex-col justify-center items-center m:flex-row m:justify-end">
    <li class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0">
      <NuxtLink
        to="/"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        Accueil
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_PROGRAMME"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <NuxtLink
        to="/programme"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        Programme
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_SPONSORS"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <NuxtLink
        to="/sponsors"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        Sponsors
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_FAQ"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <NuxtLink
        to="/faq"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        FAQ Sponsors
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_SPONSORS2022"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <NuxtLink
        to="/sponsors2022"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        Sponsors {{ EDITION }}
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_ASSOCIATION"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <NuxtLink
        to="/association"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        L'asso
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_JOBS"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <NuxtLink
        to="/jobs"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        Jobs
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_TALKS"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <NuxtLink
        to="/talks"
        :class="`no-underline text-2xl m:text-base ${linkColor}`"
      >
        Talks
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_LINK_LIVE"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <LinkSecondary
        to="#"
        color="light"
        target="_blank"
      >
        <div class="flex items-center">
          Live
          <div class="live" />
        </div>
        <!-- <IconOpenNewWindow :color="iconColor" :borderColor="iconBorderColor" /> -->
      </LinkSecondary>
    </li>
    <li
      v-if="$SHOW_LINK_BILLETERIE"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <LinkPrimary
        color="light"
        to="https://www.helloasso.com/associations/bordeaux-developer-experience/evenements/bdx-i-o-2022"
        target="_blank"
      >
        Billetterie
      </LinkPrimary>
    </li>
    <li
      v-if="$SHOW_LINK_YOUTUBE"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <LinkPrimary
        color="light"
        to="https://www.youtube.com/playlist?list=PLUJzERpatfsWYhMH0NOjSXemQh5Tu9g1W"
        target="_blank"
      >
        Revoir les talks
      </LinkPrimary>
    </li>
    <li
      v-if="$SHOW_LINK_CFP"
      class="mb-8 m:mb-0 m:mr-5 last:mr-0 last:mb-0"
    >
      <LinkSecondary
        to="https://conference-hall.io/public/event/OJC5Ou5YJodfetgSJCa3"
        color="light"
        target="_blank"
      >
        CFP
        <!-- <IconOpenNewWindow :color="iconColor" :borderColor="iconBorderColor" /> -->
      </LinkSecondary>
    </li>
  </ul>
</template>

<style lang="css" scoped>
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
    background: url("/images/drawings/blue_underline.png") no-repeat
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
