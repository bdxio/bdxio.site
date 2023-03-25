<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import { useRoute, useNuxtApp, computed, ref, watch } from "#imports";
import { NuxtLink, LayoutNavigation } from "#components";
import iconClose from "/images/icons/close.svg";
import iconCloseBlue from "/images/icons/close_blue.svg";
import iconBurger from "/images/icons/burger.svg";
import iconBurgerBlue from "/images/icons/burger_blue.svg";

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
  <header
    :class="`flex justify-center items-center px-4 py-0 m:px-[30px] m:py-[50px] m:justify-between ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'} header`"
  >
    <NuxtLink
      to="/"
    >
      <img
        src="/images/bdxio_logo_blue.png"
        alt="Logo de l'association BDX.IO"
        class="block w-full h-auto max-w-[160px]"
      >
    </NuxtLink>
    <div
      v-if="$showNavigation"
      @click.prevent="toggleMenu"
    >
      <img
        v-if="mobileOpen.value"
        :src="background === 'light' ? iconCloseBlue : iconClose"
        alt="icone pour ouvrir le menu sur mobile"
        class="absolute z-modal right-4 top-4 cursor-pointer m:hidden"
      >
      <img
        v-else
        :src="background === 'light' ? iconBurgerBlue : iconBurger"
        alt="icone pour fermer le menu sur mobile"
        class="absolute z-modal right-4 top-4 cursor-pointer m:hidden"
      >
      <nav
        :class="`absolute z-design w-full top-0 right-full bottom-0 flex justify-center items-center ${mobileOpen.value && 'right-0'}`"
      >
        <LayoutNavigation display-cfp />
      </nav>
    </div>
  </header>
</template>