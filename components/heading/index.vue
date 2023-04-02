<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

interface Props {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

withDefaults(defineProps<Props>(), {
  tag: "h2",
});
</script>

<template>
  <component
    :is="tag"
    class="text-bdxio-font-dark mb-6"
  >
    <slot />
  </component>
</template>
