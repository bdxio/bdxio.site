<script setup lang="ts">
import { ASSOCIATION_NAME, CLOSING_TALK_TYPE } from '~/services/constants';
import type { Talk } from '~/types';

const edition = useEdition();

useHead({ title: `Talk | ${ASSOCIATION_NAME}` });

const { params }: { params: Record<string, string> } = useRoute();

const { data: talk }: { data: Ref<Talk> } = await useAPI(`/talks/${params.id}`, {
  params: { populate: '*' },
});

if (!talk.value || talk.value?.edition?.year !== edition || talk.value?.type === CLOSING_TALK_TYPE) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' });
}
</script>

<template>
  <main class="p-section bg-white">
    <SectionTalkCategory v-if="talk.category" :category="talk.category" />
    <SectionTalkPresentation :talk="talk" />
    <SectionTalkSpeaker v-for="speaker in talk.speakers" :key="speaker.id" :speaker="speaker" />
  </main>
</template>
