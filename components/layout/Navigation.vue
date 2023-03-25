<script setup lang="ts">
import { defineProps } from "vue";
import { useNuxtApp, computed } from "#imports";
import { NuxtLink } from "#components";

const props = defineProps<{
  displayCfp: boolean;
}>();

const {
  $showBilleterie,
  $showTalks,
  $showProgramme,
  $showLive,
  $showYoutube,
  $showCfp,
} = useNuxtApp();

const showCfp = computed(() => (props.displayCfp && $showCfp) ?? false);
</script>

<template>
  <ul class="flex flex-col justify-center items-center">
    <li class="m-0">
      <NuxtLink
        to="/"
        class="no-underline text-2xl m:text-[22px]"
      >
        Accueil
      </NuxtLink>
    </li>
    <li
      v-if="$showProgramme"
      class="m-0"
    >
      <NuxtLink
        to="/schedule"
        class="no-underline text-[25px] m:text-base"
      >
        Programme
      </NuxtLink>
    </li>
    <li class="m-0">
      <NuxtLink
        to="/sponsors2022"
        class="no-underline text-[25px] m:text-base"
      >
        Sponsors
      </NuxtLink>
    </li>
    <li class="m-0">
      <NuxtLink
        to="/asso"
        class="no-underline text-[25px] m:text-base"
      >
        L'asso
      </NuxtLink>
    </li>
    <li class="m-0">
      <NuxtLink
        to="/jobs"
        class="no-underline text-[25px] m:text-base"
      >
        Jobs
      </NuxtLink>
    </li>
    <li
      v-if="$showTalks"
      class="m-0"
    >
      <NuxtLink
        to="/talks"
        class="no-underline text-[25px] m:text-base"
      >
        Talks
      </NuxtLink>
    </li>
    <li
      v-if="$showBilleterie"
      class="m-0"
    >
      <a
        class="button button-primary--light"
        href="https://www.helloasso.com/associations/bordeaux-developer-experience/evenements/bdx-i-o-2022"
        target="_blank"
      >
        Billetterie
      </a>
    </li>
    <li
      v-if="$showLive"
      class="m-0"
    >
      <NuxtLink
        to="/live"
        class="button button-icon button-secondary button-secondary--light"
      >
        Live
        <div class="live" />
      </NuxtLink>
    </li>
    <li
      v-if="$showYoutube"
      class="m-0"
    >
      <a
        class="button button-primary--light"
        href="https://www.youtube.com/playlist?list=PLUJzERpatfsWYhMH0NOjSXemQh5Tu9g1W"
        target="_blank"
      >
        Revoir les talks
      </a>
    </li>
    <li
      v-if="showCfp"
      class="m-0"
    >
      <a
        class="button button-icon button-secondary button-secondary--light"
        href="https://conference-hall.io/public/event/OJC5Ou5YJodfetgSJCa3"
        target="_blank"
      >
        CFP
        <!-- <IconsOpenNewWindow :color="iconColor" :borderColor="iconBorderColor" /> -->
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
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
