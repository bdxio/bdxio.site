<script setup lang="ts">
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
      return "bg-bdxio-blue-light text-bdxio-font-light";
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
  <NuxtLink
    :to="to"
    :class="`border-none py-[12px] px-[25px] rounded-[8px] cursor-pointer duration-300 w-fit block ${colorClasses}`"
  >
    <slot />
  </NuxtLink>
</template>