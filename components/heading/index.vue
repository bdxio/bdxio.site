<script setup lang="ts">
defineProps<{
  level: "1" | "2" | "3" | "4" | "5" | "6";
}>();
</script>

<template>
  <component
    :is="`h${level}`"
    class="font-title text-bdxio-font-dark text-4xl m:text-5xl leading-tight m:leading-tight mb-6"
  >
    <slot />
  </component>
</template>
