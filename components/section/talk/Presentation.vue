<script setup lang="ts">
import type { Talk } from '~/types';

defineProps<{
  talk: Talk;
  scheduleInfo?: string;
}>();
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
    <div class="flex flex-wrap items-center gap-6 my-12">
      <span v-if="talk.format" class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4">
        {{ talk.format.name }} - {{ talk.format.duration }}
      </span>
      <span v-if="talk.level" class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4">
        {{ talk.level }}
      </span>
      <span v-if="talk.language" class="border-2 border-bdxio-blue-dark rounded-full py-3 px-4 leading-4">
        {{ talk.language }}
      </span>
      <p v-if="scheduleInfo" class="font-bold ml-auto">{{ scheduleInfo }}</p>
    </div>
    <Markdown v-if="talk.abstract" :content="talk.abstract" class="talk-description" />
    <SectionTalkOpenFeedbackFrame v-if="talk.id" :talkId="talk.id" />
  </section>
</template>

<style scoped lang="css">
.talk-description :deep(p) {
  margin-bottom: 1em;
}
</style>
