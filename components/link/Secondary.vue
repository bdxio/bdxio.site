<script setup lang="ts">
import { computed } from "#imports";

const props = defineProps<{
  type: "nuxt" | "button" | "link";
  to: string;
  color: "white" | "light" | "grey" | "dark";
}>();

const colorClasses = computed(() => {
  switch (props.color) {
    case "white":
      return "border-bdxio-cream-base text-bdxio-cream-base";
    case "light":
      return "border-bdxio-blue-light text-bdxio-blue-light";
    case "grey":
      return "border-bdxio-dark text-bdxio-dark";
    case "dark":
      return "border-bdxio-blue-dark text-bdxio-blue-dark";
    default:
      return null;
  }
});

const getComponentTag = computed(() => {
  switch (props.type) {
    case "nuxt":
      return "nuxt-link";
    case "button":
      return "button";
    case "link":
    default:
      return "a";
  }
});

</script>

<template>
  <component
    :is="getComponentTag"
    :class="`bg-none border-[2px] border-solid py-[6px] px-4 rounded-lg cursor-pointer duration-300 w-fit
      block ${colorClasses}`"
    :href="to"
  >
    <slot />
  </component>
</template>
