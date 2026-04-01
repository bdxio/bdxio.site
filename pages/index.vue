<script setup lang="ts">
import { ASSOCIATION_NAME, PREVIOUS_EDITION } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

const { $featureFlags } = useNuxtApp();
const editionYear = useEdition();

useHead({ title: ASSOCIATION_NAME });

const { data }: { data: Ref<Array<Edition>> } = await useAPI("/editions", {
  params: {
    "fields[0]": "date",
    "fields[1]": "year",
    "filters[year][$eq]": editionYear,
  },
});

if (!data.value.length || !data.value[0]) {
  throw createError({ statusCode: 404, statusMessage: "Edition not found" });
}

const editionData = data.value[0];
</script>

<template>
  <main>
    <SectionHomepageHeroEditionAnnounced
      v-if="$featureFlags.pages.homepage.sections.heroEditionAnnounced"
      :edition="editionData"
    />
    <SectionHomepageHeroDDay v-if="$featureFlags.pages.homepage.sections.heroDDay"
                             :edition="editionData"
    />
    <SectionHomepageHeroComingBackSoon v-if="$featureFlags.pages.homepage.sections.heroComingBackSoon" />
    <SectionHomepageFigures v-if="$featureFlags.pages.homepage.sections.figures" />
    <div
      v-if="$featureFlags.pages.homepage.sections.participants || $featureFlags.pages.homepage.sections.sponsors"
      class="flex flex-col m:flex-row"
    >
      <SectionHomepageSponsors v-if="$featureFlags.pages.homepage.sections.sponsors"
                               :edition="editionData"
      />
      <SectionHomepageParticipants v-if="$featureFlags.pages.homepage.sections.participants"
                                   :edition="editionData"
      />
    </div>
    <SectionHomepageTalks v-if="$featureFlags.pages.homepage.sections.talks" />
    <SectionHomepageTheme v-if="$featureFlags.pages.homepage.sections.theme" />
    <SectionSponsorsList v-if="$featureFlags.pages.homepage.sections.lastYearSponsors"
                         :edition="PREVIOUS_EDITION"
    />
    <SectionHomepageMateriel v-if="$featureFlags.pages.homepage.sections.materiel" />
    <SectionHomepageCategories v-if="$featureFlags.pages.homepage.sections.categories" />
    <SectionHomepageAbout v-if="$featureFlags.pages.homepage.sections.about" />
  </main>
</template>
