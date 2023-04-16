<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import type { IconProps } from "~/types";

withDefaults(defineProps<IconProps>(), {
  color: "#4652F8", /* @TODO: Use variable from Tailwind */
  width: 50,
  height: 50,
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 100"
    fill="none"
    :width="width"
    :height="height"
  >
    <circle
      :fill="color"
      stroke="none"
      cx="6"
      cy="50"
      r="6"
    >
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.1"
      />
    </circle>
    <circle
      :fill="color"
      stroke="none"
      cx="26"
      cy="50"
      r="6"
    >
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.2"
      />
    </circle>
    <circle
      :fill="color"
      stroke="none"
      cx="46"
      cy="50"
      r="6"
    >
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.3"
      />
    </circle>
  </svg>
</template>