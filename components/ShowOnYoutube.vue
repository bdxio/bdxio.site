<script setup lang="ts">

import { LinkPrimary, IconYouTube } from "#components";

defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <LinkPrimary
    color="light"
    :href="href"
    target="_blank"
    class="mx-auto mt-8"
  >
    Voir sur YouTube
    <IconYouTube class="ml-1 inline-block" />
  </LinkPrimary>
</template>