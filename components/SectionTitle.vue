<script setup lang="ts">
// @ts-nocheck
import { withDefaults, defineProps } from "vue";

interface Props {
  tag?: "h1" | "h2" | "h3" | "h4";
  color?: "light" | "dark";
  section?: true;
}

withDefaults(defineProps<Props>(), {
  tag: "h2",
  color: "dark",
  section: false,
});
</script>

<template>
  <component
    :is="tag"
    :class="{
      'title--section': section,
      'title--subsection': !section,
      'title--light': color === 'light',
      'title--dark': color === 'dark',
    }"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.title {
  &--section {
    font-family: $font-family-body;
    font-size: 20px;
    font-weight: $font-weight-light;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    letter-spacing: 2px;
  }

  &.dark {
    color: $primary-dark;
  }

  &.light {
    color: $light-font;
  }
}
</style>
