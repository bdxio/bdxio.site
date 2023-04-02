<script setup lang="ts">
import { computed } from "#imports";

const props = defineProps<{
    color: "white" | "light" | "grey" | "dark"
  }>();

const colorClasses = computed(() => {
  switch (props.color) {
    case "white":
      return "bg-bdxio-cream-base text-bdxio-blue-dark";
    case "light":
      return "bg-bdxio-blue-light text-bdxio-font-light hover:text-bdxio-font-light";
    case "grey": 
      return "bg-bdxio-font-dark text-bdxio-font-light";
    case "dark":
      return "bg-bdxio-blue-dark text-bdxio-font-light";
    default:
      return "";
  }
});

</script>

<template>
  <a
    :class="`border-none py-[12px] px-[25px] rounded-[8px] cursor-pointer duration-300 w-fit block ${colorClasses}`"
  >
    <slot />
  </a>
</template>