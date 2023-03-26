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

definePageMeta({ layout: "homepage" });
useHead({ title: "BDX I/O" });
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
