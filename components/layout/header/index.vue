<script setup lang="ts">
import { defineProps } from "vue";
import { useRoute, ref, watch, computed } from "#imports";
import { NuxtLink, LayoutHeaderNavigation, NuxtImg } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

const props = defineProps<{
  background: "light" | "dark";
}>();

const open = ref(false);
const { path } = useRoute();

const icon = computed(() => {
  return open.value
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
    :class="`flex justify-between items-center m:justify-between m:items-center py-5 m:py-8 px-7 m:px-12
      ${background === 'dark' ? 'bg-bdxio-blue-dark' : 'bg-white'}`"
  >
    <NuxtLink
      to="/"
    >
      <NuxtImg
        src="/images/logo_blue_header.webp"
        :alt="`Logo de l'association ${ASSOCIATION_NAME}`"
        width="139"
        height="50"
        class="relative block w-full h-auto max-w-[120px] m:max-w-[160px] z-30"
      />
    </NuxtLink>
    <NuxtImg
      :src="icon.src"
      :alt="icon.alt"
      class="cursor-pointer m:hidden relative z-30"
      width="27"
      @click.prevent="toggleMenu"
    />
    <LayoutHeaderNavigation
      :background="background"
      :open="open"
    />
  </header>
</template>
