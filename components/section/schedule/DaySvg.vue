<script setup lang="ts">
import type { Speaker, Talk } from '~/types';

const props = defineProps<{
  day: number;
  title: string;
  place?: string;
  talks: Talk[];
  photos: Record<number, string>;
}>();

const BODY_FONT = 'Arial, Helvetica, sans-serif';
const TITLE_FONT = "Merriweather, Georgia, 'Times New Roman', serif";
const DARK = '#373739';
const BLUE_LIGHT = '#7d7df8';
const LOGO_RATIO = 2301.8 / 830.8;

const { width: pageWidth, height: pageHeight } = SCHEDULE_SVG_PAGE;
const margin = SCHEDULE_SVG_MARGIN;
const logoHeight = SCHEDULE_SVG_HEADER_HEIGHT - 4;
const logoWidth = logoHeight * LOGO_RATIO;

const canvas = document.createElement('canvas').getContext('2d')!;

const measure: TextMeasurer = (text, size, variant) => {
  const style = variant === 'italic' ? 'italic' : variant === 'bold' ? 'bold' : 'normal';
  canvas.font = `${style} ${size}px Arial`;
  return canvas.measureText(text).width;
};

const layout = computed(() => buildScheduleSvgLayout(props.talks, measure));

function initials(speaker: Speaker) {
  const [first, last] = speaker.name.split(' ');
  return `${first?.[0]?.toUpperCase() ?? ''}${last?.[0]?.toUpperCase() ?? ''}`;
}
</script>

<template>
  <svg
    v-if="layout"
    xmlns="http://www.w3.org/2000/svg"
    width="297mm"
    height="210mm"
    :viewBox="`0 0 ${pageWidth} ${pageHeight}`"
    :font-family="BODY_FONT"
  >
    <defs>
      <filter :id="`shadow-${day}`" x="-10%" y="-10%" width="120%" height="125%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.6" />
        <feOffset dy="1.2" result="blur" />
        <feFlood flood-color="#242457" flood-opacity="0.25" />
        <feComposite in2="blur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <template v-for="card in layout.cards" :key="card.id">
        <clipPath :id="`card-${card.id}`">
          <rect :x="card.x" :y="card.y" :width="card.width" :height="card.height" rx="4" />
        </clipPath>
        <clipPath v-for="{ speaker, x, y } in card.speakers" :id="`speaker-${card.id}-${speaker.id}`" :key="speaker.id">
          <circle :cx="x + layout.speakerSize / 2" :cy="y + layout.speakerSize / 2" :r="layout.speakerSize / 2" />
        </clipPath>
      </template>
    </defs>

    <rect :width="pageWidth" :height="pageHeight" fill="white" />

    <text
      :x="margin.left"
      :y="margin.top + 26"
      :font-family="TITLE_FONT"
      font-size="26"
      font-weight="700"
      :fill="DARK"
      v-text="title"
    />
    <rect
      :x="pageWidth - margin.right - logoWidth"
      :y="margin.top - 2"
      :width="logoWidth"
      :height="logoHeight"
      rx="3"
      fill="#4652f8"
    />
    <image
      href="/images/logo-bdxio.svg"
      :x="pageWidth - margin.right - logoWidth"
      :y="margin.top - 2"
      :width="logoWidth"
      :height="logoHeight"
    />

    <text
      v-for="room in layout.rooms"
      :key="room.id"
      :x="room.x"
      :y="room.y"
      :font-size="layout.fontSizes.room"
      text-anchor="middle"
      :fill="DARK"
      v-text="room.name"
    />

    <text
      v-for="time in layout.times"
      :key="time.time"
      :x="time.x"
      :y="time.y"
      :font-size="layout.fontSizes.time"
      text-anchor="end"
      :fill="DARK"
      v-text="time.time"
    />

    <g v-for="card in layout.cards" :key="card.id">
      <rect
        :x="card.x"
        :y="card.y"
        :width="card.width"
        :height="card.height"
        rx="4"
        fill="white"
        :filter="`url(#shadow-${day})`"
      />
      <rect
        :x="card.x"
        :y="card.y"
        :width="layout.border"
        :height="card.height"
        :fill="card.color"
        :clip-path="`url(#card-${card.id})`"
      />
      <text
        v-for="line in card.title"
        :key="`title-${line.y}`"
        :x="line.x"
        :y="line.y"
        :font-size="layout.fontSizes.title"
        font-weight="700"
        :fill="DARK"
        v-text="line.text"
      />
      <text
        v-for="line in card.level"
        :key="`level-${line.y}`"
        :x="line.x"
        :y="line.y"
        :font-size="layout.fontSizes.meta"
        font-style="italic"
        :fill="DARK"
        v-text="line.text"
      />
      <text
        v-for="line in card.category"
        :key="`category-${line.y}`"
        :x="line.x"
        :y="line.y"
        :font-size="layout.fontSizes.meta"
        font-weight="700"
        :fill="card.color"
        v-text="line.text"
      />
      <template v-for="{ speaker, x, y } in card.speakers" :key="speaker.id">
        <image
          v-if="photos[speaker.id]"
          :href="photos[speaker.id]"
          :x="x"
          :y="y"
          :width="layout.speakerSize"
          :height="layout.speakerSize"
          preserveAspectRatio="xMidYMid slice"
          :clip-path="`url(#speaker-${card.id}-${speaker.id})`"
        />
        <template v-else>
          <circle
            :cx="x + layout.speakerSize / 2"
            :cy="y + layout.speakerSize / 2"
            :r="layout.speakerSize / 2"
            :fill="BLUE_LIGHT"
          />
          <text
            :x="x + layout.speakerSize / 2"
            :y="y + layout.speakerSize * 0.62"
            :font-size="layout.speakerSize * 0.375"
            text-anchor="middle"
            fill="white"
            v-text="initials(speaker)"
          />
        </template>
      </template>
    </g>

    <text
      v-if="place"
      :x="pageWidth - margin.right"
      :y="pageHeight - margin.bottom + 2"
      font-size="9"
      text-anchor="end"
      :fill="DARK"
      v-text="place"
    />
  </svg>
</template>
