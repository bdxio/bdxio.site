<script setup lang="ts">
import { computed } from "#imports";

type Color = "white" | "light" | "grey" | "dark";

const props = defineProps<
| {
  type: "button" | "link";
  color: Color;
  href: string;
  disabled?: true;
  download?: string;
}
| {
  type: "nuxt",
  href: string;
  color: Color;
}
>();

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
    v-if="type === 'link'"
    :class="`border-none py-2 px-4 rounded-lg duration-300 w-fit block
    ${disabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'} ${colorClasses}`"
    :href="href"
    :download="download"
    :tabindex="disabled ? '-1' : 1"
  >
    <slot />
  </a>

  <button
    v-else-if="type === 'button'"
    :class="`border-none py-2 px-4 rounded-lg
    cursor-pointer duration-300 w-fit block ${colorClasses}`"
  >
    <slot />
  </button>

  <NuxtLink
    v-else-if="type === 'nuxt'"
    :to="href"
    :class="`border-none py-2 px-4 rounded-lg cursor-pointer duration-300 w-fit block ${colorClasses}`"
  >
    <slot />
  </NuxtLink>
</template>
