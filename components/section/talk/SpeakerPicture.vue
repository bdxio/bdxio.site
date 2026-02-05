<script setup lang="ts">
import type { Speaker } from "@bdxio/bdxio.types";

interface Props {
  speaker: Speaker;
  size?: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<Props>(), {
  size: "large",
});

const initials = computed(() => {
  const [firstName, lastName] = props.speaker.name.split(" ");

  if (!firstName && !lastName) {
    return "";
  }

  return `${firstName?.length ? firstName[0].toUpperCase() : ""}
   ${lastName?.length ? ` ${lastName[0].toUpperCase()}` : ""}`;
});

function getPictureSizeClasses() {
  switch (props.size) {
    case "small":
      return "h-8 w-8";
    case "medium":
      return "h-12 w-12";
    case "large":
    default:
      return "h-16 w-16";
  }
}
</script>

<template>
  <div class="mr-6">
    <NuxtImg
      v-if="speaker.photoUrl"
      class="rounded-full object-cover"
      :class="getPictureSizeClasses()"
      :src="speaker.photoUrl"
      :alt="`Photo de ${speaker.name}`"
      :aria-label="`Photo de ${speaker.name}`"
      loading="lazy"
    />
    <span
      v-else
      class="flex items-center justify-center rounded-full bg-bdxio-blue-light text-white"
      :class="`${getPictureSizeClasses()} ${size === 'small' && 'text-xs'}`"
    >
      {{ initials }}
    </span>
  </div>
</template>
