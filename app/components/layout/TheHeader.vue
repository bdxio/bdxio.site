<template>
  <header class="header" :class="background">
    <NuxtLink class="logo" to="/">
      <img
        src="~/assets/img/bdxio_logo.png"
        alt="Logo de l'association BDX.IO"
        class="display--block"
      />
    </NuxtLink>
    <div v-if="showNavigation">
      <img
        v-if="mobileOpen"
        :src="
          background === 'light'
            ? require('~/assets/img/icons/close_blue.svg')
            : require('~/assets/img/icons/close.svg')
        "
        alt="icone pour ouvrir le menu sur mobile"
        class="header__burger hidden-m"
        @click="mobileOpen = !mobileOpen"
      />
      <img
        v-else
        :src="
          background === 'light'
            ? require('~/assets/img/icons/burger_blue.svg')
            : require('~/assets/img/icons/burger.svg')
        "
        alt="icone pour fermer le menu sur mobile"
        class="header__burger hidden-m"
        @click="mobileOpen = !mobileOpen"
      />
      <nav class="header__nav" :class="propClasses">
        <TheNavigation />
      </nav>
    </div>
  </header>
</template>

<script>
import TheNavigation from "./TheNavigation.vue";

export default {
  name: "TheHeader",
  components: {
    TheNavigation,
  },
  data() {
    return {
      mobileOpen: false,
    };
  },
  props: {
    background: {
      type: String,
      required: false,
      default: "light",
      validator: (value) => ["light", "dark"].includes(value),
    },
  },
  computed: {
    propClasses() {
      let classes = this.background;

      if (this.mobileOpen) {
        classes += " mobile-open";
      }
      return classes;
    },
    showNavigation() {
      console.log(this.$showNavigation);
      return this.$showNavigation ?? false;
    },
  },
  methods: {
    toggleMenu() {
      return (this.mobileOpen = !this.mobileOpen);
    },
  },
  watch: {
    "$route.path"() {
      this.mobileOpen = false;
    },
  },
};
</script>
