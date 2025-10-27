<script setup lang="ts">
import { EDITION } from "~/services/constants";
import type { Talk } from "@bdxio/bdxio.types";

const NUMBER_OF_TALKS_TO_SHOW = 4;

const { data: talks }: { data: Ref<Talk[]> } = await useAPI("/talks", {
  params: {
    populate: "*",
    "pagination[limit]": 100,
    "filters[edition][year][$eq]": EDITION,
  },
});

function shuffleArray(array: Talk[]): Talk[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const randomizeTalks = computed(() => {
  if (!talks.value?.length) return [];
  const firstTalkPerCategory = shuffleArray(talks.value).reduce((acc: Talk[], talk: Talk) => {
    if (!acc.find((t) => t.category?.id === talk.category?.id)) {
      acc.push(talk);
    }
    return acc;
  }, []);
  return firstTalkPerCategory.splice(0, NUMBER_OF_TALKS_TO_SHOW);
});
</script>

<template>
  <section class="p-section flex flex-col items-center
  justify-center bg-bdxio-grey-100 bg-bdxio-cream-base">
    <Heading
      level="2"
      class="text-center"
    >
      Des talks pour partager, apprendre et s’inspirer
    </Heading>
    <ClientOnly>
      <div>
        <ul class="flex flex-wrap justify-center gap-4 my-16 mx-12">
          <li
            v-for="talk in randomizeTalks"
            :key="`talk-${talk.id}`"
            class="flex flex-col justify-between cursor-pointer p-4 border-2 border-solid rounded-lg w-full l:w-1/5"
            :style="{
              'border-color': talk.category?.color || 'black',
            }"
          >
            <NuxtLink :to="`/talks/${talk.id}`">
              <div>
                <h2 class="text-lg">
                  {{ talk.title }}
                </h2>
                <span class="font-light italic text-sm">{{ talk.level }}</span>
                <p
                  v-if="talk.category?.name"
                  class="font-bold text-sm"
                  :style="{ color: talk.category?.color }"
                >
                  {{ talk.category?.name }}
                </p>
              </div>
              <div
                v-if="talk.speakers?.length"
                class="flex"
              >
                <SectionTalkSpeakerPicture
                  v-for="speaker in talk.speakers"
                  :key="`speaker-${speaker.id}`"
                  :speaker="speaker"
                  size="small"
                  class="!mr-2 mt-5"
                />
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </ClientOnly>
    <div>
      <LinkSecondary
        type="link"
        color="grey"
        to="/talks"
        class="flex flex-row items-center"
        aria-label="lien vers la billetterie - Nouvelle fenêtre"
      >
        Découvrir tous les talks
      </LinkSecondary>
    </div>
  </section>
</template>
