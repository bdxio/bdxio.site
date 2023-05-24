<script setup lang="ts">

defineProps<{
  content: string
}>();
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="markdown"
    v-html="$md.render(content)"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>
