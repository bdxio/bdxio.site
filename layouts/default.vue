<script setup lang="ts">
import { LayoutHeader, LayoutSponsors, LayoutLocation, LayoutFooter } from "#components";
import { useNuxtApp } from "#imports";

const { $SHOW_SECTION_LAYOUT_SPONSORS } = useNuxtApp();

</script>

<template>
  <LayoutHeader :background="$route.name === 'index' ? 'dark' : 'light'" />
  <slot />
  <LayoutSponsors v-if="$route.name !== 'Sponsors' && $SHOW_SECTION_LAYOUT_SPONSORS" />
  <LayoutLocation />
  <LayoutFooter />
</template>
