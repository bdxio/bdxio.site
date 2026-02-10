<script setup lang="ts">
import { ASSOCIATION_NAME, PREVIOUS_EDITIONS } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

const route = useRoute("year");
const year = route.params.year as string;

if (!year || !PREVIOUS_EDITIONS.includes(year)) {
  throw createError({ statusCode: 404, statusMessage: "Edition not found" });
}

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.previousEditions.show) {
  throw createError({ statusCode: 404, statusMessage: "Edition not found" });
}

const edition = useEdition();

useHead({ title: ASSOCIATION_NAME });

const { data }: { data: Ref<Array<Edition>> } = await useAPI("/editions", {
  params: {
    "fields[0]": "date",
    "fields[1]": "year",
    "filters[year][$eq]": edition,
  },
});

const editionData = data.value?.[0];

if (!editionData) {
  throw createError({ statusCode: 404, statusMessage: "Edition data not found" });
}
</script>

<template>
  <main>
    <SectionHomepagePreviousEditionHero
      v-if="editionData"
      :edition="editionData"
    />
    <SectionHomepageFigures :edition="edition" />
    <SectionHomepageTalks :edition="edition" />
    <SectionSponsors :edition="edition" />
    <SectionHomepageAbout v-if="$featureFlags.pages.homepage.sections.about" />
  </main>
</template>
