<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute, ref, watch } from "#imports";
import { NuxtLink, LayoutNavigation } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

defineProps<{
  background: "light" | "dark";
}>();

const open = ref(false);
const { path } = useRoute();

const toggleMenu = () => {
  open.value = !open.value;
};

watch(
  () => path,
  () => {
    open.value = false;
  },
);
</script>

<template>
  <header
    :class="`flex justify-between items-center m:justify-between m:items-start py-5 m:py-8 px-7 m:px-12
      ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'}`"
  >
    <NuxtLink
      to="/"
    >
      <img
        src="/images/bdxio_logo_blue.png"
        :alt="`Logo de l'association ${ASSOCIATION_NAME}`"
        class="block w-full h-auto max-w-[120px] m:max-w-[160px]"
      >
    </NuxtLink>
    <img
      v-if="open"
      :src="background === 'light' ? '/images/icons/close_blue.svg' : '/images/icons/close.svg'"
      alt="Icône navigation"
      class="cursor-pointer m:hidden relative z-20"
      @click.prevent="toggleMenu"
    >
    <img
      v-else
      :src="background === 'light' ? '/images/icons/burger_blue.svg' : '/images/icons/burger.svg'"
      alt="Icône croix"
      class="cursor-pointer m:hidden"
      @click.prevent="toggleMenu"
    >
    <nav
      :class="`fixed m:static top-0 bottom-0 z-10 w-full flex justify-center m:justify-end items-center
          min-h-full m:min-h-auto
          ${open ? 'right-0' : 'right-full'}
          ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'} m:bg-none`
      "
    >
      <LayoutNavigation :background="background" />
    </nav>
  </header>
</template>