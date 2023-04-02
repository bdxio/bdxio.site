<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import { computed } from "#imports";
import { Speaker } from "@/types";

interface Props {
  speaker: Speaker;
  size?: "small" | "large";
}

const props = withDefaults(defineProps<Props>(), {
  size: "large",
});

const initials = computed(() => {
  const [firstName, lastName] = props.speaker.name.split(" ");
  return `${firstName[0].toUpperCase()} ${lastName[0].toUpperCase()}`;
});
</script>

<template>
  <div class="mr-6">
    <img
      v-if="speaker.photoUrl"
      class="rounded-full object-cover"
      :class="size === 'small' ? 'h-8 w-8' : 'h-16 w-16'"
      :src="speaker.photoUrl"
      :alt="`Photo de ${speaker.name}`"
    >
    <span
      v-else
      class="flex items-center justify-center rounded-full bg-bdxio-blue-light text-white"
      :class="size === 'small' ? 'h-8 w-8 text-xs' : 'h-16 w-16'"
    >
      {{ initials }}
    </span>
  </div>
</template>