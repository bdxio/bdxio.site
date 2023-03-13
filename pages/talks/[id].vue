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

const { data: talk } = await useAPI(`/talks/${params.id}`, {
  params: { populate: "*" },
});

const presentation = computed(() => ({
  title: talk.title || null,
  level: talk.level || null,
  language: talk.language || null,
  abstract: talk.abstract || null,
  format: talk.format.name || null,
  openfeedbackUrl: talk.openfeedbackUrl || null,
  youtubeUrl: talk.youtubeUrl || null,
}));
</script>

<template>
  <main class="section section-talk">
    <TalkSectionTheme :category="talk.category?.name || null" />
    <TalkSectionPresentation :presentation="presentation" />
    <TalkSectionSpeaker
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
