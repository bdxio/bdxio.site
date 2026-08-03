<script setup lang="ts">
import { ASSOCIATION_NAME } from '~/services/constants';
import { ALL_CATEGORIES } from '~/components/section/talk/CategoryFilter.vue';
import type { Edition, Room, Talk } from '~/types';

const currentFilter = ref(ALL_CATEGORIES);

const edition = useEdition();

useHead({ title: `Programme | ${ASSOCIATION_NAME}` });

const [{ data: editions }, { data: talks }]: [{ data: Ref<Edition[]> }, { data: Ref<Talk[]> }] = await Promise.all([
  useAPI('/editions', {
    params: {
      'fields[0]': 'date',
      'fields[1]': 'duration',
      'filters[year][$eq]': edition,
    },
  }),
  useAPI('/talks', {
    params: {
      populate: '*',
      'pagination[limit]': 100,
      'filters[edition][year][$eq]': edition,
      'filters[backup][$eq]': false,
    },
  }),
]);

if (!editions.value[0]) {
  throw createError({ statusCode: 404, statusMessage: 'Edition not found' });
}

const editionData = editions.value[0];

const categories = computed(() => getTalksCategories(talks.value));

function isDimmed(talk?: Talk) {
  return currentFilter.value !== ALL_CATEGORIES && talk?.category?.id.toString() !== currentFilter.value;
}

const dayFormatter = new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
const yearFormatter = new Intl.DateTimeFormat('fr-FR', { year: 'numeric' });

function getDayDate(day: number) {
  const date = getEditionDayDate(editionData.date, day);
  return { label: dayFormatter.format(date), year: yearFormatter.format(date) };
}

function formatTime(time: string) {
  return time.slice(0, 5);
}

function buildGrid(dayTalks: Talk[]) {
  const rooms = sortRooms(
    dayTalks.reduce((result, talk) => {
      if (talk.room && !result.some((room) => room.id === talk.room?.id)) {
        result.push(talk.room);
      }
      return result;
    }, [] as Room[])
  );

  const times = [...new Set(dayTalks.filter((talk) => talk.slot).map((talk) => talk.slot!.startSlot))].sort();

  const rows = times.map((time) => ({
    time,
    cells: rooms.map((room) => ({
      room,
      talk: dayTalks.find((talk) => talk.slot?.startSlot === time && talk.room?.id === room.id),
    })),
  }));

  return { rooms, rows };
}

const pageTitle = computed(() => {
  const duration = editionData.duration || 1;
  return duration > 1 ? `Le programme des ${duration} jours` : 'Le programme de la journée';
});

const days = computed(() => {
  const duration = editionData.duration || 1;

  return Array.from({ length: duration }, (_, index) => {
    const day = index + 1;
    const dayTalks = talks.value.filter((talk) => talk.day === day);

    return {
      day,
      ...getDayDate(day),
      ...buildGrid(dayTalks),
    };
  });
});
</script>

<template>
  <main class="schedule">
    <header class="schedule-header">
      <Heading level="1" class="schedule-title"> {{ pageTitle }} </Heading>
    </header>
    <SectionTalkCategoryFilter v-model="currentFilter" :categories="categories" />
    <section class="schedule-days">
      <div v-for="group in days" :key="group.day" class="schedule-day">
        <div class="schedule-day-header">
          <h2 class="schedule-day-title">
            {{ group.label }} <span class="schedule-day-year">{{ group.year }}</span>
          </h2>
          <LinkPrimary
            type="link"
            color="light"
            target="_blank"
            class="schedule-day-download"
            :href="`/programme-bdxio-${edition}-${group.day}.pdf`"
            :download="`programme-bdxio-${edition}-${group.day}.pdf`"
          >
            <span class="schedule-day-download-label">Télécharger</span>
          </LinkPrimary>
        </div>
        <div class="schedule-table-scroll">
          <table class="schedule-table">
            <thead>
              <tr>
                <th class="schedule-cell-corner" />
                <th v-for="room in group.rooms" :key="room.id" class="schedule-cell-room">
                  {{ room.name }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in group.rows" :key="row.time">
                <th class="schedule-cell-time">
                  {{ formatTime(row.time) }}
                </th>
                <td v-for="cell in row.cells" :key="cell.room.id" class="schedule-cell-talk">
                  <SectionTalkCard
                    v-if="cell.talk"
                    :talk="cell.talk"
                    :to="`/talks/${cell.talk.id}`"
                    class="schedule-talk-card"
                    :class="{ 'schedule-talk-card--dimmed': isDimmed(cell.talk) }"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="css">
.schedule {
  background-color: white;
  max-width: 100vw;
  overflow: hidden;
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

.schedule-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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

.schedule-title {
  position: relative;
  z-index: 0;
  margin-bottom: 4rem !important;
}

.schedule-title:before {
  content: '';
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  left: -30px;
  bottom: -10px;
  background: url('/images/drawings/blue_presentation_left.webp') center no-repeat;
  background-size: cover;

  @media screen and (min-width: theme('screens.m')) {
    width: 120px;
    height: 120px;
    left: -110px;
  }
}

.schedule-title:after {
  content: '';
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  right: -30px;
  bottom: -10px;
  background: url('/images/drawings/blue_presentation_right.webp') center no-repeat;
  background-size: cover;

  @media screen and (min-width: theme('screens.m')) {
    width: 120px;
    height: 120px;
    right: -110px;
  }
}

.schedule-days {
  margin-top: 3.5rem;

  @media screen and (min-width: theme('screens.md')) {
    margin-top: 3rem;
  }
}

.schedule-day {
  margin-bottom: 3rem;
}

.schedule-day-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: theme('screens.s')) {
    gap: 3rem;
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

.schedule-day-download-label {
  display: none;

  @media screen and (min-width: theme('screens.s')) {
    display: inline;
  }
}

.schedule-day-title {
  font-family: theme('fontFamily.title');
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  white-space: nowrap;
  margin: 0;

  @media screen and (min-width: theme('screens.m')) {
    font-size: 1.875rem;
  }
}

.schedule-day-year {
  display: none;

  @media screen and (min-width: theme('screens.s')) {
    display: inline;
  }
}

.schedule-table-scroll {
  overflow-x: auto;
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

.schedule-table {
  border-collapse: collapse;
  width: 100%;
}

.schedule-cell-corner {
  padding: 0.5rem;
  text-align: left;
}

.schedule-cell-room {
  padding: 0.5rem;
  text-align: center;
}

.schedule-cell-time {
  padding: 0.5rem;
  text-align: right;
  vertical-align: top;
  white-space: nowrap;
}

.schedule-cell-talk {
  padding: 0.5rem;
  vertical-align: top;
}

.schedule-talk-card {
  transition: opacity 0.2s ease;
}

.schedule-talk-card--dimmed {
  opacity: 0.1;
}
</style>
