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
  $SHOW_PAGE_LIVE,
  $SHOW_PAGE_SPONSORS,
  $SHOW_PAGE_SPONSORS2022,
  $SHOW_PAGE_ASSOCIATION,
  $SHOW_PAGE_JOBS,
} = useNuxtApp();

const linkColor = computed(() => {
  if (!props.background) {
    return "text-bdxio-font-dark";
  }
  return props.background === "dark" ? "text-bdxio-font-light" : "text-bdxio-blue-dark";
});

const mobileOpenClass = computed(() => props.mobileOpen ? "mb-[100px]" : null);

</script>

<template>
  <ul class="flex flex-col justify-center items-center m:flex-row m:justify-end">
    <li :class="`m-0 m:mr-5 ${mobileOpenClass}`">
      <NuxtLink
        to="/"
        :class="`no-underline text-2xl m:text-[22px] ${linkColor} ${mobileOpenClass}`"
      >
        Accueil
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_PROGRAMME"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
    >
      <NuxtLink
        to="/programme"
        :class="`no-underline text-2xl m:text-[22px] ${linkColor} ${mobileOpenClass}`"
      >
        Programme
      </NuxtLink>
    </li>
    <li 
      v-if="$SHOW_PAGE_SPONSORS"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
    >
      <NuxtLink
        to="/sponsors"
        :class="`no-underline text-2xl m:text-[22px] ${linkColor} ${mobileOpenClass}`"
      >
        Sponsors
      </NuxtLink>
    </li>    
    <li 
      v-if="$SHOW_PAGE_SPONSORS2022"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
    >
      <NuxtLink
        to="/sponsors2022"
        :class="`no-underline text-2xl m:text-[22px] ${linkColor} ${mobileOpenClass}`"
      >
        Sponsors {{ EDITION }}
      </NuxtLink>
    </li>
    <li 
      v-if="$SHOW_PAGE_ASSOCIATION"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
    >
      <NuxtLink
        to="/association"
        :class="`no-underline text-2xl m:text-[22px] ${linkColor} ${mobileOpenClass}`"
      >
        L'asso
      </NuxtLink>
    </li>
    <li 
      v-if="$SHOW_PAGE_JOBS"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
    >
      <NuxtLink
        to="/jobs"
        :class="`no-underline text-2xl m:text-[22px] ${linkColor} ${mobileOpenClass}`"
      >
        Jobs
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_TALKS"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
    >
      <NuxtLink
        to="/talks"
        :class="`no-underline text-2xl m:text-[22px] ${linkColor} ${mobileOpenClass}`"
      >
        Talks
      </NuxtLink>
    </li>
    <li
      v-if="$SHOW_PAGE_LIVE"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
    >
      <LinkSecondaryNuxt
        color="light"
        to="/live"
      >
        <div class="flex items-center">
          Live
          <div class="live" />
        </div>
      </LinkSecondaryNuxt>
    </li>
    <li
      v-if="$SHOW_LINK_BILLETERIE"
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
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
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
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
      :class="`m-0 m:mr-5 ${mobileOpenClass}`"
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
