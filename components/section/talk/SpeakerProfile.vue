<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import { computed } from "#imports";

const props = defineProps<{
  speaker: {
    name: string;
    photoUrl?: string;
  };
}>();

const initials = computed(() => {
  const splittedSpeakerName = props.speaker.name.split(" ");
  return `${splittedSpeakerName[0][0].toUpperCase()}`;
});
</script>

<template>
  <div>
    <img
      v-if="speaker.photoUrl"
      class="speaker-picture"
      :src="speaker.photoUrl"
      :alt="`Photo de ${speaker.name}`"
    >
    <div
      v-else
      class="custom-profil"
    >
      <span>{{ initials }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.speaker-picture {
  height: 64px;
  width: 64px;
  border-radius: 50%;
  margin-right: $spc-s;
  object-fit: cover;
}

.custom-profil {
  border-radius: 50%;
  background: $primary-light;
  color: white;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: $spc-s;

  span {
    line-height: 1;
  }
}
</style>
