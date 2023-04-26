<script setup lang="ts">
import { defineProps } from "vue";
import { ref, onMounted } from "#imports";

const props = defineProps<{
  value: number;
  duration?: number;
  step?: number;
}>();

const animatedValue = ref(0);
const animatedInterval = ref<NodeJS.Timer>();

onMounted(() => {
  const interval = ((props.step || 1) * (props.duration || 1000)) / props.value;

  if (interval < 4) {
    console.warn(
      `The interval needed to render ${props.value} in ${props.duration}ms with a step 
      of ${props.step} is lower than 4. You should consider increasing duration or step.`,
    );
  }

  animatedInterval.value = setInterval(() => {
    const result = animatedValue.value + (props.step || 1);
    if (result >= props.value) {
      animatedValue.value = props.value;
      clearInterval(animatedInterval.value);
    } else {
      animatedValue.value = result;
    }
  }, interval);
});
</script>

<template>
  <span>
    {{ animatedValue }}
  </span>
</template>
