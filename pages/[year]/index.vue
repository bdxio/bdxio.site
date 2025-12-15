<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

const route = useRoute();
const year = route.params.year as string;

if (!year || !["2022", "2023", "2024", "2025", "2026"].includes(year)) {
  throw createError({ statusCode: 404, statusMessage: "Edition not found" });
}

const { $featureFlags } = useNuxtApp();
const edition = useEdition();

useHead({ title: ASSOCIATION_NAME });

const { data }: { data: Ref<Array<Edition>> } = await useAPI("/editions", {
  params: {
    "fields[0]": "date",
    "fields[1]": "year",
    "filters[year][$eq]": edition,
  },
});

const editionData = data.value[0];
</script>

<template>
  <main>
    <SectionHomepageWip v-if="$featureFlags.pages.homepage.sections.wip" />
    <SectionHomepageDDay
      v-else-if="$featureFlags.pages.homepage.sections.dDay"
      :edition="editionData"
    />
    <SectionHomepageHero
      v-else
      :edition="editionData"
    />
    <SectionHomepageFigures
      v-if="$featureFlags.pages.homepage.sections.figures"
      :edition="edition"
    />
    <SectionHomepageTalks
      v-if="$featureFlags.pages.homepage.sections.talks"
      :edition="edition"
    />
    <div
      v-if="$featureFlags.pages.homepage.sections.participant || $featureFlags.pages.homepage.sections.sponsor"
      class="flex flex-col m:flex-row"
    >
      <SectionHomepageSponsor
        v-if="$featureFlags.pages.homepage.sections.sponsor"
        :edition="edition"
      />
      <SectionHomepageParticipants
        v-if="$featureFlags.pages.homepage.sections.participant"
        :edition="edition"
      />
    </div>
    <SectionHomepageAbout v-if="$featureFlags.pages.homepage.sections.about" />
  </main>
</template>
