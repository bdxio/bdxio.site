<script setup lang="ts">
import { Ref } from "vue";
import { useHead, useRoute, useAPI, createError } from "#imports";
import { SectionTalkCategory, SectionTalkPresentation, SectionTalkSpeaker } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Talk } from "~/types";

useHead({ title: `Talk | ${ASSOCIATION_NAME}` });

const { params } = useRoute();

const { data: talk }: { data: Ref<Talk>} = await useAPI(`/talks/${params.id}`, {
  params: { populate: "*" },
});

if (!talk.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}
</script>

<template>
  <main class="section bg-white">
    <SectionTalkCategory :category="talk.category" />
    <SectionTalkPresentation :talk="talk" />
    <SectionTalkSpeaker
      v-for="speaker in talk.speakers"
      :key="speaker.id"
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
