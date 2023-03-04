
<script setup lang="ts">
import { computed, inject } from "#imports";

const props = defineProps<{
  displayCfp: boolean;
}>();

const showCfp = computed(
  () => (props.displayCfp && inject("showCfp")) ?? false
);
const showBilleterie = computed(() => inject("showBilleterie"));
const showTalks = computed(() => inject("showTalks"));
const showProgramme = computed(() => inject("showProgramme"));
const showLive = computed(() => inject("showLive"));
const showYoutube = computed(() => inject("showYoutube"));
</script>

<template>
  <ul>
    <li>
      <nuxt-link to="/">Accueil</nuxt-link>
    </li>
    <li v-if="showProgramme">
      <nuxt-link to="/schedule">Programme</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/sponsors2022">Sponsors</nuxt-link>
    </li>
    <li>
      <NuxtLink to="/asso">L'asso</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/jobs">Jobs</NuxtLink>
    </li>
    <li v-if="showTalks">
      <nuxt-link to="/talks">Talks</nuxt-link>
    </li>
    <li v-if="showBilleterie">
      <a
        class="button button-primary--light"
        href="https://www.helloasso.com/associations/bordeaux-developer-experience/evenements/bdx-i-o-2022"
        target="_blank"
      >
        Billetterie
      </a>
    </li>
    <li v-if="showLive">
      <nuxt-link
        to="/live"
        class="button button-icon button-secondary button-secondary--light"
        >Live
        <div class="live"
      /></nuxt-link>
    </li>
    <li v-if="showYoutube">
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
        <!-- <open-new-window :color="iconColor" :borderColor="iconBorderColor" /> -->
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
