<script setup lang="ts">
import { useHead, useNuxtApp } from "#imports";
import {
  SectionHomepageHero,
  SectionHomepageFigures,
  SectionHomepageAbout,
  SectionHomepageTheme,
  SectionHomepageCategories,
  SectionHomepageSponsor,
  SectionHomepageParticipants,
} from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

const { $SHOW_LINK_SPONSORING, $SHOW_LINK_BILLETERIE } = useNuxtApp();

useHead({ title: ASSOCIATION_NAME });
</script>

<template>
  <main>
    <SectionHomepageHero />
    <SectionHomepageFigures />
    <SectionHomepageAbout />
    <SectionHomepageTheme />
    <SectionHomepageMateriel v-if="$SHOW_LINK_MATERIEL" />
    <SectionHomepageJourJ />
    <SectionHomepageCategories />
    <div class="grid grid-cols-1 m:grid-cols-2">
      <SectionHomepageSponsor v-if="$SHOW_LINK_SPONSORING" />
      <SectionHomepageParticipants v-if="$SHOW_LINK_BILLETERIE" />
    </div>
  </main>
</template>
