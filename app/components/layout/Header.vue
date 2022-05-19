<template>
  <header class="header" :class="color">
    <NuxtLink class="logo" to="/">
      <img
        src="~/assets/img/bdxio_logo.png"
        alt="Logo de l'association BDX.IO"
        class="display--block"
      />
    </NuxtLink>
    <div v-if="showMenu">
      <IconBurger
        :open="mobileOpen"
        class="header__burger"
        @click="mobileOpen = !mobileOpen"
      />
      <nav class="header__nav" :class="propClasses">
        <Navigation />
      </nav>
    </div>
  </header>
</template>

<script>
import IconBurger from "~/components/layout/IconBurger.vue";
import Navigation from "./Navigation.vue";

export default {
  name: "Header",
  components: {
    IconBurger,
    Navigation,
  },
  data() {
    return {
      mobileOpen: false,
      showMenu: true,
    };
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "light",
      validator: (value) => ["light", "dark"].includes(value),
    },
    showNavigation: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    propClasses() {
      let classes = this.color;

      if (this.mobileOpen) {
        classes += " mobile-open";
      }
      return classes;
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
