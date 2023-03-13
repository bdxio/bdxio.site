<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import { useRoute, useNuxtApp, computed, ref, watch } from "#imports";
import { NuxtLink, LayoutTheNavigation } from "#components";
import iconClose from "~/assets/img/icons/close.svg";
import iconCloseBlue from "~/assets/img/icons/close_blue.svg";
import iconBurger from "~/assets/img/icons/burger.svg";
import iconBurgerBlue from "~/assets/img/icons/burger_blue.svg";

const props = defineProps<{
  background: "light" | "dark";
}>();

const mobileOpen = ref(false);
const { path } = useRoute();
const { $showNavigation } = useNuxtApp();

const propClasses = computed(() => {
  let classes = props.background.toString();

  if (mobileOpen.value) {
    classes += " mobile-open";
  }
  return classes;
});

const toggleMenu = () => (mobileOpen.value = !mobileOpen.value);

watch(
  () => path,
  () => {
    mobileOpen.value = false;
  }
);
</script>

<template>
  <header class="header" :class="background">
    <NuxtLink class="logo" to="/">
      <img
        src="~/assets/img/bdxio_logo_blue.png"
        alt="Logo de l'association BDX.IO"
        class="display--block"
      />
    </NuxtLink>
    <div v-if="$showNavigation" @click.prevent="toggleMenu">
      <img
        v-if="mobileOpen"
        :src="background === 'light' ? iconCloseBlue : iconClose"
        alt="icone pour ouvrir le menu sur mobile"
        class="header__burger hidden-m"
      />
      <img
        v-else
        :src="background === 'light' ? iconBurgerBlue : iconBurger"
        alt="icone pour fermer le menu sur mobile"
        class="header__burger hidden-m"
      />
      <nav class="header__nav" :class="propClasses">
        <LayoutTheNavigation display-cfp />
      </nav>
    </div>
  </header>
</template>
