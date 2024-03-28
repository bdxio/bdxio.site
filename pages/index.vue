<script setup lang="ts">
import {
  useHead,
  useNuxtApp,
  type Ref,
  useAPI,
  navigateTo,
} from "#imports";
import {
  SectionHomepageHero,
  SectionHomepageFigures,
  SectionHomepageAbout,
  SectionHomepageTheme,
  SectionHomepageCategories,
  SectionHomepageSponsor,
  SectionHomepageParticipants,
} from "#components";
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
    <div class="grid grid-cols-1 m:grid-cols-2">
      <SectionHomepageSponsor v-if="$featureFlags.sections.sponsors.becomeSponsor" />
      <SectionHomepageParticipants v-if="$featureFlags.links.ticketing" />
    </div>
  </main>
</template>
