<script setup lang="ts">
import { ref } from "#imports";

const props = defineProps<{
  tag: string
  isOpen?: true
}>();

/**
 * Intentionally disables this rule.
 * In this case, prop value is just used as a starting
 * value, it's not a problem if we lose reactivity afterwards.
 */
/* eslint-disable vue/no-setup-props-destructure */
const open = ref(!!props.isOpen);
/* eslint-enable vue/no-setup-props-destructure */

function toggleOpen() {
  return open.value = !open.value;
}
</script>

<template>
  <component
    :is="tag"
  >
    <div
      tabindex="0"
      class="flex flex-row items-center cursor-pointer"
      @click="toggleOpen"
      @keydown.enter.exact="toggleOpen"
    >
      <CollapseArrowDown :class="`min-w-[15px] mr-4 ${open ? '' : '-rotate-90'}`" />
      <slot name="title" />
    </div>
    <slot
      v-if="open"
      name="content"
    />
  </component>
</template>
