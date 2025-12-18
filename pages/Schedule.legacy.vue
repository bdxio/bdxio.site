<script setup lang="ts">
import { ASSOCIATION_NAME, CLOSING_TALK_TYPE } from "~/services/constants";
import type { Category, Slot, Talk, Schedule } from "@bdxio/bdxio.types";

const edition = useEdition();
const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.scheduleLegacy.show) {
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
      "populate": "*",
      "sort": "startSlot:asc",
      "filters[editions][year][$contains]": edition,
    } }),
    useAPI("/talks", { params: {
      "populate": "*",
      "pagination[limit]": 100,
      "filters[edition][year][$eq]": edition,
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
        talks: scheduleItem.talks
          ?.filter((talk) => talk.category && filters.value.includes(talk.category.id.toString())),
      };
    })
    .filter((scheduleItem) => scheduleItem.talks?.length);
});

function displayTalkSubInfos(talk: Talk) {
  const formattedSpeakers = talk.speakers?.length
    ? talk.speakers
      .map((s) => s.name)
      .join(" / ")
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

function displayMobilePanel() {
  if (window.innerWidth <= 1024) {
    openPanel.value = !openPanel.value;
  }
}

onClickOutside(categoriesWrapper, () => {
  if (window.innerWidth <= 1024 && openPanel.value) {
    displayMobilePanel();
  }
  
});
</script>

<template>
  <main class="p-section  bg-white">
    <header class="flex flex-col justify-center items-center text-center ">
      <Heading
        level="1"
        class="relative z-0 title"
      >
        Le programme de la journée
      </Heading>
    </header>
    <section class="mt-14 md:mt-12">
      <div class="flex flex-col gap-3 justify-center items-center mb-12">
        <LinkPrimary
          v-if="$featureFlags.pages.schedule.links.downloadPdf"
          type="link"
          color="light"
          href="/bdxio-2024-programme.pdf"
          download="bdxio-2024-programme.pdf"
          class="whitespace-nowrap"
        >
          Télécharger le programme
        </LinkPrimary>
        <LinkSecondary
          v-if="$featureFlags.pages.speakers.show"
          type="nuxt"
          to="/speakers"
          color="dark"
          tabindex="1"
        >
          Nos speakers
        </LinkSecondary>
        <OpenFeedback />
      </div>
      <div class="flex flex-col lg:flex-row">
        <div
          v-if="categories.length"
          class="w-full lg:max-w-[375px]"
        >
          <div
            ref="categoriesWrapper"
            class="bg-grey-100 mb-12 pb-7 h-[60px] overflow-hidden lg:sticky lg:top-0 lg:mb-0 lg:h-auto"
            :class="{ '!h-full': openPanel }"
          >
            <span
              class="text-center text-lg mt-4 block h-7 text-grey-400
              font-bold cursor-pointer lg:cursor-default "
              @click.prevent="displayMobilePanel"
            >
              Filtrer par thème
            </span>
            <ul class="mt-5 list-none">
              <li
                class="flex items-center leading-normal h-14 opacity-30 cursor-pointer ml-20"
                :class="{ 'opacity-100': !filters.length }"
                tabindex="1"
                @click="setFilter(ALL)"
                @keydown.enter.exact="setFilter(ALL)"
              >
                Tous
              </li>
              <li
                v-for="category in categories"
                :key="category.id"
                class="flex items-center leading-normal h-14 opacity-30 cursor-pointer"
                :class="{ 'opacity-100': filters.includes(category.id.toString()) }"
                tabindex="1"
                @click="setFilter(category.id.toString())"
                @keydown.enter.exact="setFilter(category.id.toString())"
              >
                <NuxtImg
                  :src="getCategoryImage(category)"
                  :aria-hidden="true"
                  class="w-7 h-7 ml-7 mr-5"
                  alt=""
                  width="30"
                  preload
                />
                <span class="leading-normal">
                  {{ category.name }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          v-if="schedule.length"
        >
          <div class="lg:ml-[100px]">
            <div class="ml-7">
              <span class="block w-[7px] h-[7px] rounded-full bg-bdxio-blue-base -translate-x-[34%]" />
              <span class="block w-[2px] h-[30px] bg-bdxio-blue-base" />
            </div>
            <ul>
              <li
                v-for="({ time, name, talks: slotTalks, rooms }, indexSlot) in filteredSchedule"
                :key="`slot-${indexSlot}`"
              >
                <h4 class="text-bdxio-blue-base my-1 mx-0 text-base">
                  {{ time }}
                </h4>
                <div class="text-lg border-l-[2px] border-l-solid border-l-bdxio-blue-base ml-7 p-8 lg:p-12">
                  <ul
                    v-if="slotTalks?.length"
                    class="flex flex-col gap-8"
                  >
                    <li
                      v-for="(talk, indexTalk) in slotTalks"
                      :key="`slot-${indexSlot}-talk-${indexTalk}`"
                      class="talk"
                    >
                      <div
                        v-if="talk.room"
                        class="uppercase tracking-[2px] font-extralight text-sm"
                      >
                        {{ talk.room.name }}
                      </div>
                      <NuxtLink
                        v-if="talk.type !== CLOSING_TALK_TYPE"
                        :to="`/talks/${talk.id}`"
                      >
                        <div class="flex">
                          <NuxtImg
                            v-if="talk.category"
                            class="w-[40px] h-[40px] mr-2"
                            :src="getCategoryImage(talk.category)"
                            :alt="`Catégorie ${talk.category.name}`"
                            :aria-label="`Catégorie ${talk.category.name}`"
                            width="40"
                          />
                          <div class="font-bold">
                            {{ talk.title }} {{ talk.language === ENGLISH ? "🇬🇧" : null }}
                            <div class="font-extralight">
                              {{ displayTalkSubInfos(talk) }} {{ talk.level === ADVANCED ? "🌶️" : null }}
                            </div>
                          </div>
                        </div>
                      </NuxtLink>
                      <div v-else>
                        <div class="font-bold">
                          Keynote de fermeture
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div
                    v-else
                  >
                    <div class="uppercase tracking-[2px] font-extralight text-sm">
                      {{ rooms?.length ? rooms.map(room => room.name).join(", ") : "Communiqué le jour J" }}
                    </div>
                    <div class="font-bold">
                      {{ name }}
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

<style scoped lang="css">
.title:before {
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

.title:after {
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
</style>
