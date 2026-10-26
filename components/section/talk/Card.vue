<script setup lang="ts">
import type { Talk } from '~/types';

defineProps<{
  talk: Talk;
  to: string;
  startTime?: string;
}>();
</script>

<template>
  <div
    class="card"
    :style="{
      'border-color': talk.category?.color || 'var(--colors-bdxio-blue-light)',
    }"
  >
    <div>
      <h3 class="card-title">
        <NuxtLink :to="to" class="card-link">{{ talk.title }}</NuxtLink>
      </h3>
      <span class="card-level">{{ talk.level }}</span>
      <p v-if="talk.category?.name" class="card-category" :style="{ color: talk.category?.color }">
        {{ talk.category?.name }}
      </p>
    </div>
    <div v-if="talk.speakers?.length || startTime" class="card-footer">
      <div v-if="talk.speakers?.length" class="card-speakers">
        <NuxtLink v-for="speaker in talk.speakers" :key="`speaker-${speaker.id}`" :to="to" class="card-speaker">
          <SectionTalkSpeakerPicture :speaker="speaker" size="small" class="card-speaker-picture" />
          <span class="card-speaker-name">{{ speaker.name }}</span>
        </NuxtLink>
      </div>
      <span v-if="startTime" class="card-time">{{ startTime }}</span>
    </div>
  </div>
</template>

<style scoped lang="css">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 300px;
  padding: 1rem;
  border-left: 4px solid;
  border-radius: 4px;
  box-shadow: 0px 2px 10px rgba(36, 36, 87, 0.2);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: 0px 6px 20px rgba(36, 36, 87, 0.35);
}

.card-title {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  color: var(--colors-bdxio-dark);
}

.card-link {
  color: inherit;
}

.card-link::after {
  content: '';
  position: absolute;
  inset: 0;
}

.card-level {
  font-size: 0.875rem;
  font-weight: 300;
  font-style: italic;
  color: var(--colors-bdxio-dark);
}

.card-category {
  font-size: 0.875rem;
  font-weight: 700;
}

.card-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-top: 1.25rem;
}

.card-speakers {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-speaker {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--colors-bdxio-dark);
}

.card-speaker-picture {
  flex-shrink: 0;
  margin-right: 0 !important;
}

.card-speaker-name {
  font-size: 0.875rem;
}

.card-time {
  margin-left: auto;
  text-align: right;
  font-size: 0.875rem;
  color: var(--colors-bdxio-dark);
}
</style>
