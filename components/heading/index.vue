<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  level: "1" | "2" | "3" | "4" | "5" | "6";
}>();
</script>

<template>
  <component
    :is="`h${level}`"
    class="font-title text-bdxio-font-dark text-4xl m:text-5xl eading-tight mb-6"
  >
    <slot />
  </component>
</template>
