<script setup lang="ts">
import { ASSOCIATION_NAME, CLOSING_TALK_TYPE } from '~/services/constants';
import type { Edition, Talk } from '~/types';

const edition = useEdition();

useHead({ title: `Talk | ${ASSOCIATION_NAME}` });

const { params }: { params: Record<string, string> } = useRoute();

const { $featureFlags } = useNuxtApp();

const [{ data: editions }, { data: talk }]: [{ data: Ref<Edition[]> }, { data: Ref<Talk> }] = await Promise.all([
  useAPI('/editions', {
    params: {
      'fields[0]': 'date',
      'filters[year][$eq]': edition,
    },
  }),
  useAPI(`/talks/${params.id}`, {
    params: { populate: '*' },
  }),
]);

if (!talk.value || talk.value?.edition?.year !== edition || talk.value?.type === CLOSING_TALK_TYPE) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' });
}

if (!editions.value[0]) {
  throw createError({ statusCode: 404, statusMessage: 'Edition not found' });
}

const scheduleInfo = getTalkScheduleInfo(editions.value[0].date, talk.value);
</script>

<template>
  <main class="p-section bg-white">
    <SectionTalkCategory v-if="talk.category" :category="talk.category" />
    <SectionTalkPresentation :talk="talk" :schedule-info="scheduleInfo" />
    <SectionTalkSpeaker v-for="speaker in talk.speakers" :key="speaker.id" :speaker="speaker" />
    <LinkSecondary
      v-if="$featureFlags.pages.schedule.page"
      color="light"
      to="/schedule"
      type="link"
      class="block mt-5 mx-auto mb-0"
    >
      Voir le programme
    </LinkSecondary>
  </main>
</template>
