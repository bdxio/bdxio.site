<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    level: '1' | '2' | '3' | '4' | '5' | '6';
    font?: 'lato' | 'title';
  }>(),
  {
    font: 'title',
  },
);
</script>

<template>
  <component
    :is="`h${props.level}`"
    :class="[
      props.font === 'lato' ? 'font-lato' : 'font-title',
      'text-4xl m:text-5xl leading-tight m:leading-tight mb-6',
    ]"
  >
    <slot />
  </component>
</template>
