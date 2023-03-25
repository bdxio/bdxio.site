<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

interface Props {
  tag?: "h1" | "h2" | "h3" | "h4";
  color?: "light" | "dark";
  section?: true;
}

withDefaults(defineProps<Props>(), {
  tag: "h2",
  color: "dark",
  section: undefined,
});
</script>

<template>
  <component
    :is="tag"
    :class="{
      'text-xl font-light leading-6 uppercase p-0 m-0 tracking-[2px': section,
      'title--subsection': !section,
      'text-bdxio-font-light': color === 'light',
      'text-bdxio-font-dark': color === 'dark',
    }"
  >
    <slot />
  </component>
</template>