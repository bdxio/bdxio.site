<script setup lang="ts">
import { ASSOCIATION_NAME, STANDARD_TALK_TYPE } from '~/services/constants';
import { ALL_CATEGORIES } from '~/components/section/talk/CategoryFilter.vue';
import type { Edition, Talk } from '~/types';

const edition = useEdition();

useHead({ title: `Talks | ${ASSOCIATION_NAME}` });

const currentFilter = ref(ALL_CATEGORIES);

const [{ data: editions }, { data: talks }]: [{ data: Ref<Edition[]> }, { data: Ref<Talk[]> }] = await Promise.all([
  useAPI('/editions', {
    params: {
      'fields[0]': 'date',
      'filters[year][$eq]': edition,
    },
  }),
  useAPI('/talks', {
    params: {
      populate: '*',
      'pagination[limit]': 100,
      'filters[edition][year][$eq]': edition,
      'filters[type][$eq]': STANDARD_TALK_TYPE,
      'filters[backup][$eq]': false,
    },
  }),
]);

if (!editions.value[0]) {
  throw createError({ statusCode: 404, statusMessage: 'Edition not found' });
}

const editionData = editions.value[0];

function getStartTime(talk: Talk) {
  return getTalkScheduleInfo(editionData.date, talk);
}

const categories = computed(() => getTalksCategories(talks.value));

function compareTalks(a: Talk, b: Talk) {
  const dayDiff = (a.day ?? Infinity) - (b.day ?? Infinity);
  if (dayDiff !== 0) return dayDiff;

  const startSlotDiff = (a.slot?.startSlot ?? '').localeCompare(b.slot?.startSlot ?? '');
  if (startSlotDiff !== 0) return startSlotDiff;

  return compareRoomNames(a.room?.name ?? '', b.room?.name ?? '');
}

const filteredTalks = computed(() => {
  if (!talks.value?.length) return [];

  const sortedTalks = [...talks.value].sort(compareTalks);

  if (currentFilter.value === ALL_CATEGORIES) return sortedTalks;
  return sortedTalks.filter((talk) => talk.category?.id.toString() === currentFilter.value);
});
</script>

<template>
  <main class="talks-page">
    <Heading level="1" class="talks-title">
      Les talks <span v-if="filteredTalks.length" class="talks-count">({{ filteredTalks.length }})</span>
    </Heading>

    <SectionTalkCategoryFilter v-model="currentFilter" :categories="categories" />
    <div class="talks-list-wrapper">
      <ul class="talks-list">
        <li v-for="talk in filteredTalks" :key="`talk-${talk.id}`">
          <SectionTalkCard :talk="talk" :to="`/talks/${talk.id}`" :start-time="getStartTime(talk)" />
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="css">
.talks-page {
  background-color: white;
  max-width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media screen and (min-width: theme('screens.l')) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  @media screen and (min-width: theme('screens.xl')) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media screen and (min-width: theme('screens.xxl')) {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  @media screen and (min-width: theme('screens.xxxl')) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
}

.talks-title {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem !important;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: theme('screens.s')) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media screen and (min-width: theme('screens.l')) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media screen and (min-width: theme('screens.xl')) {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media screen and (min-width: theme('screens.xxl')) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media screen and (min-width: theme('screens.xxxl')) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

.talks-title:before {
  content: '';
  display: block;
  width: 120px;
  height: 120px;
  position: absolute;
  left: -110px;
  bottom: -20px;
  background: url('/images/drawings/blue_presentation_left.webp') center no-repeat;
  background-size: cover;
}

.talks-title:after {
  content: '';
  display: block;
  width: 120px;
  height: 120px;
  position: absolute;
  right: -110px;
  bottom: -20px;
  background: url('/images/drawings/blue_presentation_right.webp') center no-repeat;
  background-size: cover;
}

.talks-count {
  font-size: 1.5rem;
}

.talks-list-wrapper {
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: theme('screens.s')) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media screen and (min-width: theme('screens.l')) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media screen and (min-width: theme('screens.xl')) {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  @media screen and (min-width: theme('screens.xxl')) {
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media screen and (min-width: theme('screens.xxxl')) {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

.talks-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
</style>
