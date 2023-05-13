<script setup lang="ts">
import { LinkPrimary, NuxtImg } from "#components";

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
    aria-label="lien pour voir sur youtube - Nouvelle fenêtre"
  >
    Voir sur YouTube
    <NuxtImg
      src="/images/icons/youtube.svg"
      width="40"
      loading="lazy"
      alt=""
      :aria-hidden="true"
      class="ml-1 inline-block"
    />
  </LinkPrimary>
</template>
