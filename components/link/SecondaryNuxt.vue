<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "#imports";
import { NuxtLink } from "#components";

const props = defineProps<{
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
</script>

<template>
  <NuxtLink
    :to="to"
    :class="`bg-none border-[2px] border-solid py-[12px] px-[25px] rounded-lg cursor-pointer duration-300 w-fit
      block ${colorClasses}`"
  >
    <slot />
  </NuxtLink>
</template>