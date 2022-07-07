<template>
  <ul>
    <li>
      <nuxt-link to="/">Accueil</nuxt-link>
    </li>
    <!-- <li>
          <NuxtLink to="/schedule">Programme</NuxtLink>
        </li> -->
    <li>
      <nuxt-link to="/sponsors">Sponsors</nuxt-link>
    </li>
    <li>
      <NuxtLink to="/asso">L'asso</NuxtLink>
    </li>
    <li>
      <a
        class="button button-secondary--light"
        href="https://www.helloasso.com/associations/bordeaux-developer-experience/evenements/bdx-i-o-2022"
        target="_blank"
      >
        Billetterie
      </a>
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
    iconBorderColor() {
      return css?.primaryLight ?? "#ffffff";
    },
    iconColor() {
      return css?.light ?? "#ffffff";
    }
  }
};
</script>
