<script setup lang="ts">
import { defineProps } from "vue";
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
    :to="href"
    target="_blank"
    class="mx-auto"
  >
    Voir sur YouTube
    <IconYouTube class="ml-1 inline-block" />
  </LinkPrimary>
</template>