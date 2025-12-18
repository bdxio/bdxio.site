<script setup lang="ts">
import { EDITION } from "~/services/constants";

const { $featureFlags } = useNuxtApp();
const edition = useEdition();
const isPreviousEdition = computed(() => edition !== EDITION);
</script>

<template>
  <LayoutHeader :background="$route.name === 'index' ? 'dark' : 'light'" />
  <slot />
  <LayoutSponsors v-if="!isPreviousEdition && $featureFlags.layout.sponsors" />
  <LayoutLocation v-if="!isPreviousEdition && $featureFlags.layout.location" />
  <LayoutFooter />
</template>
