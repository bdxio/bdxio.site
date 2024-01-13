<script setup lang="ts">
import { computed } from "#imports";

const props = defineProps<{
    type: "nuxt" | "button" | "link";
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

const tag = computed(() => {
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

const getProps = computed(() => {
  switch (props.type) {
    case "nuxt":
      return {
        to: props.href,
      };
    case "button":
      return {
        type: "button",
      };
    case "link":
    default:
      return {
        href: props.href,
        target: "_blank",
        rel: "noopener noreferrer",
        tabindex: props.disabled ? "-1" : 1,
        download: props.download,
      };
  }
});
</script>

<template>
  <component
    :is="tag"
    v-bind="getProps"
    :class="`border-none py-2 px-4 rounded-lg duration-300 w-fit block
    ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'} ${colorClasses}`"
  >
    <slot />
  </component>
</template>
