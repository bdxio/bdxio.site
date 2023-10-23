<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { LinkPrimary, NuxtImg } from "#components";

const { $SHOW_LINK_YOUTUBE } = useNuxtApp();

defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <LinkPrimary
    v-if="$SHOW_LINK_YOUTUBE && href"
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
