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
  $SHOW_PAGE_WIP,
  $SHOW_SECTION_HOMEPAGE_FIGURES,
  $SHOW_SECTION_HOMEPAGE_ABOUT,
  $SHOW_LINK_SPONSORING,
  $SHOW_LINK_BILLETERIE,
  $SHOW_SECTION_HOMEPAGE_JOUR_J,
  $SHOW_SECTION_HOMEPAGE_THEME,
  $SHOW_SECTION_HOMEPAGE_MATERIEL,
} = useNuxtApp();

if ($SHOW_PAGE_WIP) {
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
    <SectionHomepageFigures v-if="$SHOW_SECTION_HOMEPAGE_FIGURES" />
    <SectionHomepageAbout v-if="$SHOW_SECTION_HOMEPAGE_ABOUT" />
    <SectionHomepageTheme v-if="$SHOW_SECTION_HOMEPAGE_THEME" />
    <SectionHomepageMateriel v-if="$SHOW_SECTION_HOMEPAGE_MATERIEL" />
    <SectionHomepageJourJ v-if="$SHOW_SECTION_HOMEPAGE_JOUR_J" />
    <SectionHomepageCategories v-if="$SHOW_SECTION_HOMEPAGE_CATEGORIES" />
    <div class="grid grid-cols-1 m:grid-cols-2">
      <SectionHomepageSponsor v-if="$SHOW_LINK_SPONSORING" />
      <SectionHomepageParticipants v-if="$SHOW_LINK_BILLETERIE" />
    </div>
  </main>
</template>
