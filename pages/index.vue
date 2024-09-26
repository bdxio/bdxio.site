<script setup lang="ts">
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

const {
  $featureFlags,
} = useNuxtApp();

if ($featureFlags.pages.wip) {
  navigateTo("/wip");
}

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
    <SectionHomepageHero :edition="edition" />
    <SectionHomepageFigures v-if="$featureFlags.sections.homepage.figures" />
    <SectionHomepageAbout v-if="$featureFlags.sections.homepage.about" />
    <SectionHomepageTheme v-if="$featureFlags.sections.homepage.theme" />
    <SectionHomepageMateriel v-if="$featureFlags.sections.homepage.materiel" />
    <SectionHomepageJourJ v-if="$featureFlags.sections.homepage.jourJ" />
    <SectionHomepageCategories v-if="$featureFlags.sections.homepage.categories" />
    <div
      class="flex flex-col m:flex-row"
    >
      <SectionHomepageSponsor />
      <SectionHomepageParticipants />
    </div>
  </main>
</template>
