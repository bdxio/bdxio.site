<script setup lang="ts">
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

const { $featureFlags } = useNuxtApp();

useHead({ title: ASSOCIATION_NAME });

const { data }: { data: Ref<Array<Edition>> } = await useAPI("/editions", {
  params: {
    "fields[0]": "date",
    "fields[1]": "year",
    "filters[year][$eq]": EDITION,
  },
});

const edition = data.value[0];
</script>

<template>
  <main>
    <SectionHomepageWip v-if="$featureFlags.pages.homepage.sections.wip" />
    <SectionHomepageDDay
      v-else-if="$featureFlags.pages.homepage.sections.dDay"
      :edition="edition"
    />
    <SectionHomepageHero
      v-else
      :edition="edition"
    />
    <SectionHomepageFigures v-if="$featureFlags.pages.homepage.sections.figures" />
    <SectionHomepageTalks v-if="$featureFlags.pages.homepage.sections.talks" />
    <SectionHomepageTheme v-if="$featureFlags.pages.homepage.sections.theme" />
    <SectionHomepageMateriel v-if="$featureFlags.pages.homepage.sections.materiel" />
    <SectionHomepageCategories v-if="$featureFlags.pages.homepage.sections.categories" />
    <div
      v-if="$featureFlags.pages.homepage.sections.participant || $featureFlags.pages.homepage.sections.sponsor"
      class="flex flex-col m:flex-row"
    >
      <SectionHomepageSponsor v-if="$featureFlags.pages.homepage.sections.sponsor" />
      <SectionHomepageParticipants v-if="$featureFlags.pages.homepage.sections.participant" />
    </div>
    <SectionHomepageAbout v-if="$featureFlags.pages.homepage.sections.about" />
  </main>
</template>
