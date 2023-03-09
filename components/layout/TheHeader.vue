<script setup lang="ts">
import { computed, inject, ref, watch, useRoute } from "#imports";

const mobileOpen = ref(false);
const route = useRoute();

const props = defineProps<{
  background: "light" | "dark";
}>();

const showNavigation = computed(() => inject("showNavigation") ?? false);
const propClasses = computed(() => {
  let classes = props.background.toString();

  if (mobileOpen.value) {
    classes += " mobile-open";
  }
  return classes;
});

const toggleMenu = () => (mobileOpen.value = !mobileOpen.value);

watch(
  () => route.path,
  () => {
    mobileOpen.value = false;
  }
);
</script>

<template>
  <header class="header" :class="background">
    <nuxt-link class="logo" to="/">
      <img
        src="~/assets/img/bdxio_logo_blue.png"
        alt="Logo de l'association BDX.IO"
        class="display--block"
      />
    </nuxt-link>
    <div v-if="showNavigation" @click.prevent="toggleMenu">
      <img
        v-if="mobileOpen"
        :src="
          background === 'light'
            ? require('~/assets/img/icons/close_blue.svg')
            : require('~/assets/img/icons/close.svg')
        "
        alt="icone pour ouvrir le menu sur mobile"
        class="header__burger hidden-m"
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
      />
      <nav class="header__nav" :class="propClasses">
        <the-navigation display-cfp />
      </nav>
    </div>
  </header>
</template>
