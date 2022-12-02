<template>
  <ul>
    <li>
      <nuxt-link to="/">Accueil</nuxt-link>
    </li>
    <li v-if="showProgramme">
      <NuxtLink to="/schedule">Programme</NuxtLink>
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
    <li>
      <nuxt-link to="/live" class="button button-icon button-secondary button-secondary--light"
        >Live
        <div class="live"
      /></nuxt-link>
    </li>
    <li v-if="showCfp">
      <a
        class="button button-icon button-secondary button-secondary--light"
        href="https://conference-hall.io/public/event/OJC5Ou5YJodfetgSJCa3"
        target="_blank"
      >
        CFP
        <open-new-window :color="iconColor" :borderColor="iconBorderColor" />
      </a>
    </li>
  </ul>
</template>

<script>
import css from "~/assets/styles/main.scss";

export default {
  name: "TheNavigation",
  props: {
    displayCfp: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showCfp() {
      return this.displayCfp && this.$showCfp;
    },
    showBilleterie() {
      return this.$showBilleterie;
    },
    showTalks() {
      return this.$showTalks;
    },
    showProgramme() {
      return this.$showProgramme;
    },
    showLive() {
      return this.$showLive;
    },
    iconBorderColor() {
      return css?.primaryLight ?? "#ffffff";
    },
    iconColor() {
      return css?.light ?? "#ffffff";
    }
  }
};
</script>

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
