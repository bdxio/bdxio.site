<script setup lang="ts">
// @ts-nocheck
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
  <ul>
    <li>
      <NuxtLink to="/">Accueil</NuxtLink>
    </li>
    <li v-if="$showProgramme">
      <NuxtLink to="/schedule">Programme</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/sponsors2022">Sponsors</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/asso">L'asso</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/jobs">Jobs</NuxtLink>
    </li>
    <li v-if="$showTalks">
      <NuxtLink to="/talks">Talks</NuxtLink>
    </li>
    <li v-if="$showBilleterie">
      <a
        class="button button-primary--light"
        href="https://www.helloasso.com/associations/bordeaux-developer-experience/evenements/bdx-i-o-2022"
        target="_blank"
      >
        Billetterie
      </a>
    </li>
    <li v-if="$showLive">
      <NuxtLink
        to="/live"
        class="button button-icon button-secondary button-secondary--light"
      >
        Live
        <div class="live" />
      </NuxtLink>
    </li>
    <li v-if="$showYoutube">
      <a
        class="button button-primary--light"
        href="https://www.youtube.com/playlist?list=PLUJzERpatfsWYhMH0NOjSXemQh5Tu9g1W"
        target="_blank"
      >
        Revoir les talks
      </a>
    </li>
    <li v-if="showCfp">
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
