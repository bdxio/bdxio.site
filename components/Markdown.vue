<script setup lang="ts">
import { useNuxtApp } from "#imports";

defineProps<{
  content: string
}>();

const { $md } = useNuxtApp();

</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="markdown"
    v-html="$md.render(content)"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>
