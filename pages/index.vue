<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import {
  SectionHomepageHero,
  SectionHomepageKeyConcepts,
  SectionHomepageAbout,
  SectionHomepageAnnualTheme,
  SectionHomepageCategories,
  SectionHomepageSponsor,
  SectionHomepageSpeaker,
} from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

definePageMeta({ layout: "homepage" });
useHead({ title: ASSOCIATION_NAME });
</script>

<template>
  <main>
    <SectionHomepageHero />
    <SectionHomepageKeyConcepts />
    <SectionHomepageAbout />
    <SectionHomepageAnnualTheme />
    <SectionHomepageCategories />
    <div no-gutter>
      <div
        s12
        m6
        class="sponsor-container"
      >
        <SectionHomepageSponsor />
      </div>
      <div
        s12
        m6
        class="speaker-container"
      >
        <SectionHomepageSpeaker />
      </div>
    </div>
  </main>
</template>
