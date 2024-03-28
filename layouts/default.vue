<script setup lang="ts">
import { LayoutHeader, LayoutSponsors, LayoutLocation, LayoutFooter } from "#components";
import { useNuxtApp } from "#imports";

const { $featureFlags } = useNuxtApp();

</script>

<template>
  <LayoutHeader :background="$route.name === 'index' ? 'dark' : 'light'" />
  <slot />
  <LayoutSponsors v-if="$route.name !== 'Sponsors' && $featureFlags.sections.layout.sponsors" />
  <LayoutLocation />
  <LayoutFooter />
</template>
