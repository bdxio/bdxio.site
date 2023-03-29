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
  <main class="section bg-white section-talk">
    <SectionTalkTheme :category="talk.category?.name || null" />
    <SectionTalkPresentation :presentation="presentation" />
    <SectionTalkSpeaker
      v-for="(speaker, index) in talk.speakers"
      :key="index"
      :speaker="speaker"
    />
    <LinkPrimaryNuxt
      color="light"
      to="/schedule"
      class="block mt-5 mx-auto mb-0"
    >
      Voir le programme
    </LinkPrimaryNuxt>
  </main>
</template>
