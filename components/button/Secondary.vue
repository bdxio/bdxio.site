<script setup lang="ts">
import { computed } from "#imports";

const props = defineProps<{
  color: "white" | "light" | "grey" | "dark";
  disabled?: boolean;
}>();

const colorClasses = computed(() => {
  switch (props.color) {
    case "white":
      return "border-bdxio-cream-base text-bdxio-cream-base";
    case "light":
      return "border-bdxio-blue-light text-bdxio-blue-light hover:border-bdxio-blue-dark hover:text-bdxio-blue-dark";
    case "grey":
      return "border-bdxio-dark text-bdxio-dark";
    case "dark":
      return "border-bdxio-blue-dark text-bdxio-blue-dark hover:border-bdxio-blue-light hover:text-bdxio-blue-light";
    default:
      return null;
  }
});
</script>

<template>
  <button
    :class="`block bg-none border-[2px] border-solid py-2 px-4 rounded-lg cursor-pointer duration-300
      ${disabled && 'pointer-events-none opacity-30'} ${colorClasses}`"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
