<script setup lang="ts">
import { defineProps } from "vue";
import { useNuxtApp, computed } from "#imports";
import { Heading, OpenFeedback, ShowOnYoutube, NuxtImg } from "#components";
import type { Talk } from "~/types";

const props = defineProps<{
  talk: Talk;
}>();

const { $SHOW_LINK_OPENFEEDBACK, $SHOW_LINK_YOUTUBE } = useNuxtApp();

const duration = computed(() => {
  switch (props.talk.format?.name) {
    case "Quickie":
      return 15;
    case "Hands on lab":
      return 100;
    default:
      return 45;
  }
});
</script>

<template>
  <section class="p-section !pt-0 mb-20">
    <Heading level="1">
      {{ talk.title }}
    </Heading>
    <NuxtImg
      src="/images/drawings/cyan_scribble_3.webp"
      :aria-hidden="true"
      alt=""
      class="underline-scribble"
      loading="lazy"
    />
    <div class="flex flex-wrap gap-6 my-12">
      <span class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4">
        {{ talk.format?.name ? `${talk.format.name} - ` : null }}{{ duration }}min
      </span>
      <span class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4">
        {{ talk.level }}
      </span>
      <span
        v-if="talk.language"
        class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4"
      >
        {{ talk.language }}
      </span>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-if="talk.abstract"
      class="mb-20"
      v-html="$md.render(talk.abstract)"
    />
    <!-- eslint-enable vue/no-v-html -->
    <OpenFeedback
      v-if="$SHOW_LINK_OPENFEEDBACK && talk.openfeedbackUrl"
      :href="talk.openfeedbackUrl"
    />
    <ShowOnYoutube
      v-if="$SHOW_LINK_YOUTUBE && talk.youtubeUrl"
      :href="talk.youtubeUrl"
    />
  </section>
</template>
