<script setup lang="ts">
import { IconOpenNewWindow } from "#components";

const props = defineProps<{
  newWindow?: true;
}>();
</script>

<template>
  <a
    class="text-bdxio-blue-light"
    :target="props.newWindow ? 'blank' : undefined"
  >
    <slot />
    <IconOpenNewWindow
      v-if="props.newWindow"
      class="ml-4"
      color="#7d7df8"
    />
  </a>
</template>
