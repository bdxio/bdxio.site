<script setup lang="ts">
import type { Talk } from "@bdxio/bdxio.types";

const props = defineProps<{
  talk: Talk;
}>();

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
  <section class="!pt-0 m:p-16 l:p-20 xl:p-24 xxl:p-28 xxxl:p-32 mb-20">
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
      <span
        v-if="talk.level"
        class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4"
      >
        {{ talk.level }}
      </span>
      <span
        v-if="talk.language"
        class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4"
      >
        {{ talk.language }}
      </span>
    </div>
    <Markdown
      v-if="talk.abstract"
      :content="talk.abstract"
    />
    <SectionTalkOpenFeedbackFrame
      v-if="talk.id"
      :talkId="talk.id"
    />
  </section>
</template>
