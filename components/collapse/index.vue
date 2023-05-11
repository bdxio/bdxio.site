<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "#imports";

const props = defineProps<{
  tag: string
  isOpen?: true
}>();

const open = ref(!!props.isOpen);

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
