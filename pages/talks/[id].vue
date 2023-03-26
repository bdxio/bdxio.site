<script setup lang="ts">
// @ts-nocheck
import {
  definePageMeta,
  useHead,
  useRoute,
  useAPI,
  computed,
  createError,
} from "#imports";
import {
  SectionTalkTheme,
  SectionTalkPresentation,
  SectionTalkSpeaker,
  NuxtLink,
} from "#components";

definePageMeta({ layout: "page" });
useHead({ title: "Talk | BDX I/O" });

const { params } = useRoute();

const { data: talk } = await useAPI(`/talks/${params.id}`, {
  params: { populate: "*" },
});

if (!talk.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const presentation = computed(() => ({
  title: talk.value.title || null,
  level: talk.value.level || null,
  language: talk.value.language || null,
  abstract: talk.value.abstract || null,
  format: talk.value.format.name || null,
  openfeedbackUrl: talk.value.openfeedbackUrl || null,
  youtubeUrl: talk.value.youtubeUrl || null,
}));
</script>

<template>
  <main class="section section-talk">
    <SectionTalkTheme :category="talk.category?.name || null" />
    <SectionTalkPresentation :presentation="presentation" />
    <SectionTalkSpeaker
      v-for="(speaker, index) in talk.speakers"
      :key="index"
      :speaker="speaker"
    />
    <NuxtLink
      to="/schedule"
      class="button button-primary button-primary--light backto"
    >
      Voir le programme
    </NuxtLink>
  </main>
</template>

<style lang="scss" scoped>
.section-talk {
  background: #fff;
}

.backto {
  margin: $spc-l auto 0 auto;
  display: block;
}
</style>
