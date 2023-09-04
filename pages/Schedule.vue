<script setup lang="ts">
import { useHead, useNuxtApp, useAPI, ref, computed, onClickOutside, createError } from "#imports";
import { Heading, ShowOnYoutube, OpenFeedback, NuxtLink, NuxtImg } from "#components";
import { ASSOCIATION_NAME, EDITION, OPENFEEDBACK_URL, KEYNOTES } from "~/services/constants";
import type { Ref } from "vue";
import type { Category, Slot, Talk, Schedule } from "@bdxio/bdxio.types";

const { $SHOW_LINK_OPENFEEDBACK, $SHOW_LINK_YOUTUBE, $SHOW_LINK_PROGRAMME_PDF, $SHOW_PAGE_PROGRAMME } = useNuxtApp();

if (!$SHOW_PAGE_PROGRAMME) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `Programme | ${ASSOCIATION_NAME}` });

const ALL = "all";
const ADVANCED = "Avancé";
const ENGLISH = "Anglais";
const filters: Ref<string[]> = ref([]);
const openPanel = ref(false);
const categoriesWrapper = ref(null);

const [
  { data: categories },
  { data: slots },
  { data: talks },
]: [
  { data: Ref<Category[]> },
  { data: Ref<Slot[]> },
  { data: Ref<Talk[]>}
] =
  await Promise.all([
    useAPI("/categories", { params: {
      "populate": "*",
    } }),
    useAPI("/slots", { params: {
      "sort": "startSlot:asc",
      "filters[editions][year][$contains]": EDITION,
    } }),
    useAPI("/talks", { params: {
      "populate": "*",
      "pagination[limit]": 100,
      "filters[edition][year][$eq]": EDITION,
    } }),
  ]);

const schedule = slots.value.reduce((result, slot) => {
  const slotTalks = talks.value
    .filter((talk) => talk.slot?.startSlot === slot.startSlot)
    .sort((a, b) => {
      if (!a.room || !b.room) return 0;
      if (a?.room.name < b?.room.name) return -1;
      return 1;
    });

  result.push({
    time: `${slot.startSlot.split(":")[0]}h${slot.startSlot.split(":")[1]}`,
    name: slot.name,
    talks: slotTalks,
    rooms: slot.rooms || [],
  });

  return result;
}, [] as Schedule);

const filteredSchedule = computed(() => {
  if (!filters.value.length) {
    return schedule;
  }
  
  return schedule
    .map((scheduleItem) => {
      return {
        ...scheduleItem,
        talks: scheduleItem.talks.filter((talk) => talk.category && filters.value.includes(talk.category.id.toString()),
        ),
      };
    })
    .filter((scheduleItem) => scheduleItem.talks.length);
});

function displayTalkSubInfos(talk: Talk) {
  const formattedSpeakers = talk.speakers.length
    ? talk.speakers
      .map((s) => s.name)
      .toString()
      .replace(",", " / ")
    : "";

  let text = "";

  if (formattedSpeakers) text += `${formattedSpeakers} -`;
  if (talk.format?.name) text += ` ${talk.format.name}`;
  if (talk.format?.duration) text += ` (${talk.format.duration})`;
  if (talk.level) text += ` - Niveau ${talk.level.toLowerCase()}`;

  return text;
}

function setFilter(value: string) {
  if (value === ALL) {
    filters.value = [];
    return;
  }

  filters.value = filters.value.includes(value) ? filters.value.filter((f) => f !== value) : [...filters.value, value];
}

function getCategoryImage(category: Category) {
  return [{
    name: "Frontend",
    icon: "/images/drawings/categories/frontend.webp",
  }, {
    name: "Backend",
    icon: "/images/drawings/categories/backend.webp",
  }, {
    name: "Big Data & I.A.",
    icon: "/images/drawings/categories/bigdataia.webp",
  }, {
    name: "Design & UX",
    icon: "/images/drawings/categories/designux.webp",
  }, {
    name: "Cloud & DevSecOps",
    icon: "/images/drawings/categories/cloudetdevsecops.webp",
  }, {
    name: "Méthodo & Architecture",
    icon: "/images/drawings/categories/methodoarchitecture.webp",
  }, {
    name: "Hors-piste",
    icon: "/images/drawings/categories/horspiste.webp",
  }].find((c) => c.name === category.name)?.icon || "";
}

function openMobilePanel() {
  if (window.innerWidth <= 992) {
    openPanel.value = !openPanel.value;
  }
}

onClickOutside(categoriesWrapper, openMobilePanel);
</script>

<template>
  <main class="p-section section-schedule bg-white">
    <header class="section-schedule__header">
      <Heading
        level="1"
        class="section-schedule__header__title"
      >
        Le programme de la journée
      </Heading>
    </header>
    <section class="section-schedule__body">
      <div class="schedule-download">
        <LinkPrimary
          v-if="$SHOW_LINK_PROGRAMME_PDF"
          color="light"
          href="/bdxio-2023-programme.pdf"
          download="bdxio-2023-programme.pdf"
        >
          Télécharger le programme
        </LinkPrimary>
        <OpenFeedback
          v-if="$SHOW_LINK_OPENFEEDBACK"
          :href="OPENFEEDBACK_URL"
        />
      </div>
      <div class="schedule-container">
        <div
          v-if="categories.length"
          class="categories-container"
        >
          <div
            ref="categoriesWrapper"
            class="categories"
            :class="{ open: openPanel }"
          >
            <span
              class="categories__title"
              @click.prevent="openMobilePanel"
            >
              Filtrer par thème
            </span>
            <ul class="categories__list">
              <li
                class="categories__category all"
                :class="{ active: !filters.length }"
                @click="setFilter(ALL)"
              >
                <span>Tous</span>
              </li>
              <li
                v-for="category in categories"
                :key="category.id"
                class="categories__category"
                :class="{ active: filters.includes(category.id.toString()) }"
                @click="setFilter(category.id.toString())"
              >
                <NuxtImg
                  :src="getCategoryImage(category)"
                  :aria-hidden="true"
                  class="categories__category__image"
                  alt=""
                  width="30"
                  preload
                />
                <span class="categories__category__label">
                  {{ category.name }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          v-if="schedule.length"
          class="slots"
        >
          <div class="schedule">
            <div class="pre-schedule">
              <span class="pre-schedule__circle" />
              <span class="pre-schedule__line" />
            </div>
            <ul>
              <li
                v-for="({ time, name, talks: slotTalks, rooms }, indexSlot) in filteredSchedule"
                :key="`slot-${indexSlot}`"
              >
                <h4 class="slots__slot__hour">
                  {{ time }}
                </h4>
                <div class="slots__slot__infos">
                  <ul
                    v-if="slotTalks.length"
                    class="slots__slot__infos__talks"
                  >
                    <li
                      v-for="(talk, indexTalk) in slotTalks"
                      :key="`slot-${indexSlot}-talk-${indexTalk}`"
                      class="talk"
                    >
                      <div
                        v-if="talk.room"
                        class="room"
                      >
                        {{ talk.room.name }}
                      </div>
                      <NuxtLink :to="`/talks/${talk.id}`">
                        <div class="talk__infos">
                          <NuxtImg
                            v-if="talk.category"
                            class="talk__infos__image"
                            :src="getCategoryImage(talk.category)"
                            :alt="`Catégorie ${talk.category.name}`"
                            :aria-label="`Catégorie ${talk.category.name}`"
                            width="40"
                          />
                          <div class="talk__infos__content">
                            <span class="talk__infos__content__title">
                              {{ talk.title }} {{ talk.language === ENGLISH && "🇬🇧" }}
                            </span>
                            <span class="talk__infos__content__subinfos">
                              {{ displayTalkSubInfos(talk) }} {{ talk.level === ADVANCED && "🌶️" }}
                            </span>
                          </div>
                        </div>
                      </NuxtLink>
                    </li>
                  </ul>
                  <div
                    v-else
                    class="slots__slot__infos__interlude"
                  >
                    <span class="room">
                      {{ rooms.length ? rooms.map(room => room.name).join(", ") : "Communiqué le jour J" }}
                    </span>
                    <span class="slots__slot__infos__interlude__name">
                      {{ name }}
                    </span>
                    <div
                      v-if="$SHOW_LINK_OPENFEEDBACK"
                      class="openfeedback-keynote"
                    >
                      <OpenFeedback
                        v-if="KEYNOTES.some(keynote => keynote.name === name)"
                        :href="KEYNOTES.find(keynote => keynote.name === name)?.openFeedbackLink || ''"
                      />
                    </div>
                    <div
                      v-if="$SHOW_LINK_YOUTUBE"
                      class="youtube-keynote"
                    >
                      <ShowOnYoutube
                        v-if="KEYNOTES.some(keynote => keynote.name === name)"
                        :href="KEYNOTES.find(keynote => keynote.name === name)?.youtubeLink || ''"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="postcss">
ul {
  list-style: none;
}

.section-schedule {
  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__title {
      position: relative;
      z-index: theme('zIndex.0');

      &:before {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        left: -30px;
        bottom: -10px;
        background: url("/images/drawings/blue_presentation_left.webp") center no-repeat;
        background-size: cover;

        @media screen and (min-width: theme('screens.m')) {
          width: 120px;
          height: 120px;
          left: -110px;
        }
      }

      &:after {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        right: -30px;
        bottom: -10px;
        background: url("/images/drawings/blue_presentation_right.webp") center no-repeat;
        background-size: cover;

        @media screen and (min-width: theme('screens.m')) {
          width: 120px;
          height: 120px;
          right: -110px;
        }
      }
    }
  }

  &__body {
    margin-top: 60px;

    @media screen and (min-width: theme('screens.m')) {
      margin-top: 50px;
    }

    .schedule-download {
      margin-bottom: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media screen and (min-width: theme('screens.s')) {
        flex-direction: row;
      }
    }

    .schedule-container {
      @media screen and (min-width: theme('screens.m')) {
        display: flex;
      }
    }

    .categories-container {
      width: 100%;

      @media screen and (min-width: theme('screens.s')) {
        max-width: 345px;
      }
    }
  }

  .categories {
    background-color: theme('colors.grey.100');
    margin-bottom: 100px;
    padding-bottom: 30px;
    height: 60px;
    overflow: hidden;

    &.open {
      height: auto;
    }

    &__list {
      margin-top: 20px;
    }

    &__title {
      text-align: center;
      font-size: 18px;
      height: 30px;
      margin-top: 15px;
      display: block;
      color: theme('colors.grey.400');
      font-weight: theme('fontWeight.bold');
      cursor: pointer;
    }

    &__category {
      opacity: 0.3;
      cursor: pointer;
      display: flex;
      align-items: center;
      line-height: auto;
      height: 60px;

      &.all {
        margin-left: 80px;
      }

      &__image {
        width: 30px;
        height: 30px;
        margin-left: 30px;
        margin-right: 20px;
      }

      &__label {
        line-height: auto;
      }

      &.active {
        opacity: 1;
      }
    }

    @media screen and (min-width: theme('screens.m')) {
      position: sticky;
      top: 0;
      width: inherit;
      height: auto;
      padding: 30px;
      margin-bottom: 0;
      height: auto;

      &__title {
        text-align: center;
        font-size: 18px;
        margin-top: 0;
        display: block;
        color: theme('colors.grey.400');
        font-weight: theme('fontWeight.normal');
        cursor: initial;
      }
    }
  }

  .pre-schedule {
    margin-left: 30px;

    &__circle {
      display: block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: theme('colors.bdxio-blue.base');
      transform: translateX(-34%);
    }

    &__line {
      display: block;
      width: 2px;
      height: 30px;
      background-color: theme('colors.bdxio-blue.base');
    }
  }

  .schedule {
    @media screen and (min-width: theme('screens.m')) {
      margin-left: 100px;
    }
  }

  .slots {
    &__slot {
      &__hour {
        font-size: theme('fontSize.base');
        color: theme('colors.bdxio-blue.base');
        margin: 5px 0;
      }

      &__infos {
        font-size: 1.125rem;
        border-left: 2px solid theme('colors.bdxio-blue.base');
        margin-left: 30px;
        padding: 25px 0 25px 25px;

        @media screen and (min-width: theme('screens.m')) {
          padding: 50px;
        }

        &__interlude {
          &__name {
            font-weight: theme('fontWeight.bold');
            margin-left: 30px;
          }
        }

        &__talks {
          .talk {
            margin-bottom: 30px;

            &__infos {
              display: flex;

              &__image {
                width: 40px;
                height: 40px;
                margin-right: 10px;
              }

              &__content {
                &__title {
                  font-weight: theme('fontWeight.bold');
                  display: block;
                }

                &__subinfos {
                  font-weight: 200;
                }
              }
            }
          }
        }
      }
    }
  }
}

.room {
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 200;
  font-size: 14px;
}

.openfeedback-keynote,
.youtube-keynote {
  margin-left: 30px;
  margin-top: 15px;

  a {
    margin: 0;
    display: inline-block;

    img {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
