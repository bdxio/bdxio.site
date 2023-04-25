<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "#imports";
import { NuxtLink } from "#components";

const props = defineProps<{
    to: string
    color: "white" | "light" | "grey" | "dark"
  }>();

const colorClasses = computed(() => {
  switch (props.color) {
    case "white":
      return "bg-bdxio-cream-base text-bdxio-blue-dark";
    case "light":
      return "bg-bdxio-blue-light text-bdxio-light";
    case "grey":
      return "bg-bdxio-dark text-bdxio-light";
    case "dark":
      return "bg-bdxio-blue-dark text-bdxio-light";
    default:
      return "";
  }
});
</script>

<template>
  <NuxtLink
    :to="to"
    :class="`border-none py-[12px] px-[25px] rounded-lg cursor-pointer duration-300 w-fit block ${colorClasses}`"
  >
    <slot />
  </NuxtLink>
</template>
