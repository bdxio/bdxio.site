<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";

const { $featureFlags } = useNuxtApp();

const { background } = defineProps<{
  background: "light" | "dark";
}>();
</script>

<template>
  <MessagesSoldOut v-if="$featureFlags.messages.soldout" />
  <header :class="background === 'dark' ? 'block--dark' : 'block--light'">
    <NuxtLink to="/">
      <NuxtImg
        src="/images/logo-bdxio.svg"
        :alt="`Logo de l'association ${ASSOCIATION_NAME}`"
        width="139"
        height="50"
        aria-label="Retourner sur la page d'accueil"
        class="logo"
      />
    </NuxtLink>
    <LayoutHeaderNavigation :background="background" />
  </header>
</template>

<style scoped>
header {
  @apply flex justify-between items-center m:justify-between m:items-center py-5 m:py-8 px-7 m:px-12;

  --colors-link: currentColor;
}

.logo {
  @apply relative block h-auto max-w-[120px] m:max-w-[160px] z-30;
}
</style>
