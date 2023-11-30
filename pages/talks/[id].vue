<script setup lang="ts">
import { useHead, useRoute, useNuxtApp, useAPI, createError } from "#imports";
import { SectionTalkCategory, SectionTalkPresentation, SectionTalkSpeaker } from "#components";
import { ASSOCIATION_NAME, CLOSING_TALK_TYPE, EDITION } from "~/services/constants";
import type { Ref } from "vue";
import type { Talk } from "@bdxio/bdxio.types";

useHead({ title: `Talk | ${ASSOCIATION_NAME}` });

const { params }: {params: Record<string, string>} = useRoute();

const { $SHOW_PAGE_PROGRAMME } = useNuxtApp();

const { data: talk }: { data: Ref<Talk> } = await useAPI(`/talks/${params.id}`, {
  params: { populate: "*" },
});

if (!talk.value || talk.value?.edition?.year !== EDITION || talk.value?.type === CLOSING_TALK_TYPE) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
</script>

<template>
  <main class="p-section bg-white">
    <SectionTalkCategory
      v-if="talk.category"
      :category="talk.category"
    />
    <SectionTalkPresentation :talk="talk" />
    <SectionTalkSpeaker
      v-for="speaker in talk.speakers"
      :key="speaker.id"
      :speaker="speaker"
    />
    <LinkPrimaryNuxt
      v-if="$SHOW_PAGE_PROGRAMME"
      color="light"
      to="/schedule"
      class="block mt-5 mx-auto mb-0"
    >
      Voir le programme
    </LinkPrimaryNuxt>
  </main>
</template>
