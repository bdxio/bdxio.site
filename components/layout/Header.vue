<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute, ref, watch } from "#imports";
import { NuxtLink, LayoutNavigation } from "#components";

defineProps<{
  background: "light" | "dark";
}>();

const mobileOpen = ref(false);
const { path } = useRoute();

const toggleMenu = () => {
  mobileOpen.value = !mobileOpen.value;
};

watch(
  () => path,
  () => {
    mobileOpen.value = false;
  },
);
</script>

<template>
  <header
    :class="`pt-3 flex justify-center items-center px-4 py-0 m:px-[30px] m:py-[50px] m:justify-between 
      ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'} header`"
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
    <div @click.prevent="toggleMenu">
      <img
        v-if="mobileOpen"
        :src="background === 'light' ? '/images/icons/close_blue.svg' : '/images/icons/close.svg'"
        alt="icone pour ouvrir le menu sur mobile"
        class="absolute z-modal right-4 top-4 cursor-pointer m:hidden"
      >
      <img
        v-else
        :src="background === 'light' ? '/images/icons/burger_blue.svg' : '/images/icons/burger.svg'"
        alt="icone pour fermer le menu sur mobile"
        class="absolute z-modal right-4 top-4 cursor-pointer m:hidden"
      >
      <nav
        :class="`absolute z-design w-full top-0 bottom-0 flex justify-center items-center 
          ${mobileOpen ? 'right-0' : 'right-full'} ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'} 
          m:static m:block m:w-full m:bg-none`"
      >
        <LayoutNavigation
          :background="background"
          :mobile-open="mobileOpen"
        />
      </nav>
    </div>
  </header>
</template>