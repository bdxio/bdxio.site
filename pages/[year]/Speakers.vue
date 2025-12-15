<script setup lang="ts">
import { ASSOCIATION_NAME, CLOSING_TALK_TYPE, EDITION } from "~/services/constants";

import type { Ref } from "vue";
import type { Talk, Speaker } from "@bdxio/bdxio.types";

const edition = useEdition();
const { $featureFlags } = useNuxtApp();
const isPreviousEdition = edition !== EDITION;

type SpeakerId = Speaker["id"];
type SpeakersWithTalkId = Speaker & { talkId: number };
type SpeakersRecordWithTalkId = Record<SpeakerId, SpeakersWithTalkId>;

// Allow speakers page for previous editions even if feature flag is disabled
if (!$featureFlags.pages.speakers.show && !isPreviousEdition) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `Speakers | ${ASSOCIATION_NAME}` });

const { data: talksWithSpeakers }: { data: Ref<Talk[]> } = await useAPI("/talks", {
  params: {
    populate: "*",
    "pagination[limit]": 100,
    "filters[edition][year][$eq]": edition,
    "filters[type][$ne]": CLOSING_TALK_TYPE,
  },
});

const speakers: ComputedRef<SpeakersRecordWithTalkId> = computed(() => {
  if (!talksWithSpeakers.value?.length) return {};

  return talksWithSpeakers.value.reduce((acc: SpeakersRecordWithTalkId, talk: Talk) => {
    if (!talk.speakers?.length) return acc;

    talk.speakers.forEach((speaker: Speaker) => {
      if (!acc[speaker.id]) {
        acc[speaker.id] = { ...speaker, talkId: talk.id };
      } else {
        // If speaker already exists, we can merge the talkId
        acc[speaker.id].talkId = talk.id;
      }
    });

    return acc;
  }, {});
});

const sortedSpeakers = computed(() => Object.values(speakers.value).sort((a, b) => a.name.localeCompare(b.name)));

const route = useRoute();
const year = route.params.year as string;
</script>

<template>
  <main class="p-section bg-white flex flex-col">
    <Heading
      level="1"
      class="title relative block mx-auto !mb-16"
    >
      Les speakers
    </Heading>
    <p v-if="sortedSpeakers.length === 0">
      Aucun speaker pour l'édition {{ edition }}
    </p>
    <ul
      v-else
      class="flex flex-row flex-wrap items-center justify-start"
    >
      <li
        v-for="(speaker, index) in sortedSpeakers"
        :key="`speaker-${index}`"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-14"
      >
        <NuxtLink
          :to="`/${year}/talks/${speaker.talkId}`"
          class="flex items-start justify-start"
        >
          <SectionTalkSpeakerPicture
            :key="`speaker-${speaker.id}`"
            :speaker="speaker"
            size="medium"
          />
          <div>
            <div class="text-[18px]">
              {{ speaker.name }}
            </div>
            <ul
              v-if="getSpeakerSocialsLinks(speaker).length > 0"
              class="flex flex-wrap gap-2 mt-2"
            >
              <li
                v-for="(link, indexLink) in getSpeakerSocialsLinks(speaker)"
                :key="indexLink"
              >
                <a
                  v-if="link.url"
                  :href="link.url"
                  target="_blank"
                  :aria-label="`Lien vers le ${link.label} du speaker ${speaker.name} - Nouvelle fenêtre`"
                >
                  <NuxtImg
                    :src="`/images/${link.imgPath}`"
                    :alt="link.alt"
                    :aria-label="link.alt"
                    :width="24"
                    :height="24"
                  />
                </a>
              </li>
            </ul>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>
