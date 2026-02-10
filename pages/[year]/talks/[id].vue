<script setup lang="ts">
import { ASSOCIATION_NAME, CLOSING_TALK_TYPE } from "~/services/constants";
import type { Talk } from "@bdxio/bdxio.types";

const edition = useEdition();

useHead({ title: `Talk | ${ASSOCIATION_NAME}` });

const { params }: { params: Record<string, string> } = useRoute();

const { $featureFlags } = useNuxtApp();

const { data: talk }: { data: Ref<Talk> } = await useAPI(`/talks/${params.id}`, {
  params: { populate: "*" },
});

if (!talk.value || talk.value?.edition?.year !== edition || talk.value?.type === CLOSING_TALK_TYPE) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const route = useRoute();
const year = route.params.year as string;
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
    <LinkSecondary
      v-if="$featureFlags.pages.schedule.show"
      color="light"
      :to="`/${year}/schedule`"
      type="link"
      class="block mt-5 mx-auto mb-0"
    >
      Voir le programme
    </LinkSecondary>
  </main>
</template>
