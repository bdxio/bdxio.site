<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "#imports";

const props = defineProps<{
    color: "white" | "light" | "grey" | "dark";
    href: string;
    disabled?: true;
    download?: string;
}>();

const colorClasses = computed(() => {
  switch (props.color) {
    case "white":
      return "bg-bdxio-cream-base text-bdxio-blue-dark";
    case "light":
      return "bg-bdxio-blue-light text-bdxio-light hover:text-bdxio-light";
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
  <a
    :class="`border-none py-[12px] px-[25px] rounded-lg duration-300 w-fit block
    ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'} ${colorClasses}`"
    :href="href"
    :download="download"
  >
    <slot />
  </a>
</template>
