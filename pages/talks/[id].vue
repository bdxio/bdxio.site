<script setup lang="ts">
// @ts-nocheck
import { definePageMeta, useHead, useRoute, useAPI, computed } from "#imports";
import {
  TalkSectionTheme,
  TalkSectionPresentation,
  TalkSectionSpeaker,
  NuxtLink,
} from "#components";

definePageMeta({ layout: "page" });
useHead({ title: "Talk | BDX I/O" });

const { params } = useRoute();

const { data } = await useAPI(`/talks/${params.id}`, {
  params: { populate: "*" },
});

const { attributes } = data.value.data;

const presentation = computed(() => ({
  title: attributes.title || null,
  level: attributes.level || null,
  language: attributes.language || null,
  abstract: attributes.abstract || null,
  format: attributes.format.data.attributes.name || null,
  openfeedbackUrl: attributes.openfeedbackUrl || null,
  youtubeUrl: attributes.youtubeUrl || null,
}));
const category = computed(
  () => attributes.category.data.attributes.name || null
);
const speakers = computed(() => [
  ...attributes.speakers.data.map(({ attributes }) => attributes),
]);
</script>

<template>
  <main class="section section-talk">
    <TalkSectionTheme :category="category" />
    <TalkSectionPresentation :presentation="presentation" />
    <TalkSectionSpeaker
      v-for="(speaker, index) in speakers"
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
