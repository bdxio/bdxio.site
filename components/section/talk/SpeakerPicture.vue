<script setup lang="ts">
import type { Speaker } from '~/types';

interface Props {
  speaker: Speaker;
  size?: 'small' | 'medium' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'large',
});

const initials = computed(() => {
  const [firstName, lastName] = props.speaker.name.split(' ');

  if (!firstName?.length && !lastName?.length) {
    return '';
  }

  return `${firstName?.length && firstName[0] ? firstName[0].toUpperCase() : ''}
   ${lastName?.length && lastName[0] ? ` ${lastName[0].toUpperCase()}` : ''}`;
});

const sizeClass = computed(() => `speaker-picture--${props.size}`);
</script>

<template>
  <div class="speaker-picture" :title="speaker.name">
    <NuxtImg
      v-if="speaker.photoUrl"
      class="speaker-picture-image"
      :class="sizeClass"
      :src="speaker.photoUrl"
      :alt="`Photo de ${speaker.name}`"
      :aria-label="`Photo de ${speaker.name}`"
      loading="lazy"
    />
    <span v-else class="speaker-picture-fallback" :class="sizeClass">
      {{ initials }}
    </span>
  </div>
</template>

<style scoped lang="css">
.speaker-picture {
  position: relative;
  margin-right: 1.5rem;
}

.speaker-picture-image {
  border-radius: 9999px;
  object-fit: cover;
}

.speaker-picture-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: var(--colors-bdxio-blue-light);
  color: white;
}

.speaker-picture--small {
  width: 2rem;
  height: 2rem;
}

.speaker-picture-fallback.speaker-picture--small {
  font-size: 0.75rem;
}

.speaker-picture--medium {
  width: 3rem;
  height: 3rem;
}

.speaker-picture--large {
  width: 4rem;
  height: 4rem;
}
</style>
