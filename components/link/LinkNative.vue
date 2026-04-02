<script setup lang="ts">
const { target = undefined } = defineProps<{
  target?: string;
}>();
</script>

<template>
  <a>
    <slot />
    <IconOpenNewWindow v-if="target === '_blank'" class="icon" />
  </a>
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 0.15em;
  margin-left: 0.1em;
}
</style>
