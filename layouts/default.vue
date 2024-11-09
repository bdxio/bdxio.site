<script setup lang="ts">
const { $featureFlags } = useNuxtApp();
</script>

<template>
  <LayoutHeader :background="$route.name === 'index' ? 'dark' : 'light'" />
  <slot />
  <LayoutSponsors v-if="$featureFlags.sections.layout.sponsors" />
  <LayoutLocation />
  <LayoutFooter />
</template>
