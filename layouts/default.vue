<script setup lang="ts">
const { $featureFlags } = useNuxtApp();
</script>

<template>
  <LayoutHeader :background="$route.name === 'index' ? 'dark' : 'light'" />
  <slot />
  <LayoutSponsors v-if="$featureFlags.layout.sponsors" />
  <LayoutLocation v-if="$featureFlags.layout.location" />
  <LayoutFooter />
</template>
