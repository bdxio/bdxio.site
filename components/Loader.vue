<script setup lang="ts">
defineProps<{
  color: string;
  width: number;
  height: number
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 100"
    :aria-hidden="true"
    fill="none"
    :width="width || 50"
    :height="height || 50"
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
      :fill="color || '#4652F8'"
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
      :fill="color || '#4652F8'"
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
