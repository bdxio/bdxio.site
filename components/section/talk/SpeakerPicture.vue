<script setup lang="ts">
import { defineProps } from "vue";
import { computed } from "#imports";
import { Speaker } from "@/types";

const props = defineProps<{
  speaker: Speaker;
}>();

const initials = computed(() => {
  const [firstName, lastName] = props.speaker.name.split(" ");
  return `${firstName[0].toUpperCase()} ${lastName[0].toUpperCase()}`;
});
</script>

<template>
  <div class="mr-6">
    <img
      v-if="speaker.photoUrl"
      class="h-16 w-16 rounded-full object-cover"
      :src="speaker.photoUrl"
      :alt="`Photo de ${speaker.name}`"
    >
    <span
      v-else
      class="flex items-center justify-center h-16 w-16 rounded-full bg-bdxio-blue-light text-white"
    >
      {{ initials }}
    </span>
  </div>
</template>