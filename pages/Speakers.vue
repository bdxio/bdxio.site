<script setup lang="ts">
import { useHead, useAPI, computed, getSpeakerSocialsLinks } from "#imports";
import { NuxtImg, SectionTalkSpeakerPicture, Heading } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";

import type { Ref } from "vue";
import type { Talk, Speaker } from "@bdxio/bdxio.types";

useHead({ title: `Speakers | ${ASSOCIATION_NAME}` });

const { data: talksWithSpeakers }: {data: Ref<Talk[]>} = await useAPI("/talks", { params: {
  "populate": "speakers",
  "pagination[limit]": 100,
  "filters[edition][year][$eq]": EDITION,
  "fields[0]": "speakers",
} });

const speakers = computed(() => {
  if (!talksWithSpeakers.value.length) return [];

type SpeakersWithTalkId = Array<Speaker & {
talkId: number;
}>;

return talksWithSpeakers.value.reduce((acc: SpeakerWithTalkId, talk: Talk) => {
  if (!talk.speakers.length) return acc;


  talk.speakers.forEach(speaker => acc.push({ ...speaker, talkId: talk.id }));
  return acc;
}, []).sort((a,b) => a.name.localeCompare(b.name));
});
</script>

<template>
  <main class="p-section bg-white flex flex-col">
    <Heading
      level="1"
      class="title relative block mx-auto !mb-16"
    >
      Les speakers
    </Heading>
    <p v-if="speakers.length === 0">
      Aucun speaker pour l'édition {{ EDITION }}
    </p>
    <ul
      v-else
      class="flex flex-row flex-wrap items-center justify-start"
    >
      <li
        v-for="(speaker, index) in speakers"
        :key="`speaker-${index}`"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-14"
      >
        <NuxtLink
          :to="`/talks/${speaker.talkId}`"
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
                    loading="lazy"
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
