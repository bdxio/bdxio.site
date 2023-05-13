<script setup lang="ts">
defineProps<{
  level: "1" | "2" | "3" | "4" | "5" | "6";
}>();
</script>

<template>
  <component
    :is="`h${level}`"
    class="font-body font-light text-bdxio-dark text-xl leading-tight uppercase tracking-[2px] mb-8"
  >
    <slot />
  </component>
</template>
