<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";

const props = defineProps<{
  background: "light" | "dark";
}>();

const menu = reactive({ isOpen: false });

const route = useRoute();

const icon = computed(() => {
  return menu.isOpen
    ? {
      src: props.background === "light" ? "/images/icons/close_blue.svg" : "/images/icons/close.svg",
      alt: "Icône croix",
    }
    : {
      src: props.background === "light" ? "/images/icons/burger_blue.svg" : "/images/icons/burger.svg",
      alt: "Icône navigation",
    };

});

const toggleMenu = () => {
  menu.isOpen = !menu.isOpen;
};

watch(
  () => route.path,
  () => {
    menu.isOpen = false;
  },
  { deep: true, immediate: true },
);
</script>

<template>
  <header
    :class="`flex justify-between items-center m:justify-between m:items-center py-5 m:py-8 px-7 m:px-12
      ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'}`"
  >
    <NuxtLink
      to="/"
      tabindex="1"
    >
      <NuxtImg
        src="/images/logo_blue_header.webp"
        :alt="`Logo de l'association ${ASSOCIATION_NAME}`"
        width="139"
        height="50"
        aria-label="Retourner sur la page d'accueil"
        class="relative block h-auto max-w-[120px] m:max-w-[160px] z-30"
      />
    </NuxtLink>
    <img
      :src="icon.src"
      :alt="icon.alt"
      :aria-label="menu.isOpen ? 'Fermer la fenêtre' : 'Ouvrir la fenêtre'"
      class="cursor-pointer m:hidden relative z-30"
      @click.prevent="toggleMenu"
    >
    <LayoutHeaderNavigation
      :background="background"
      :open="menu.isOpen"
    />
  </header>
</template>
