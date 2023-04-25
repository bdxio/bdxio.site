<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import {
  SectionHomepageHero,
  SectionHomepageFigures,
  SectionHomepageAbout,
  SectionHomepageTheme,
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
    <SectionHomepageFigures />
    <SectionHomepageAbout />
    <SectionHomepageTheme />
    <SectionHomepageCategories />
    <div class="grid grid-cols-1 m:grid-cols-2">
      <SectionHomepageSponsor />
      <SectionHomepageSpeaker />
    </div>
  </main>
</template>
