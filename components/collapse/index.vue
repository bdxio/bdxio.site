<script lang="ts" setup>
import { ref, defineProps } from "vue";

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
      class="flex flex-row items-center cursor-pointer"
      @click="toggleOpen"
    >
      <CollapseArrowDown :class="`min-w-[15px] mr-4 ${open ? '' : 'rotate-180'}`" />
      <slot name="title" />
    </div>
    <slot
      v-if="open"
      name="content"
    />
  </component>
</template>