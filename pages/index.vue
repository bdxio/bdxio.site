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
    <div class="flex flex-col m:flex-row">
      <SectionHomepageSponsor class="!w-full !m:w-1/2" />
      <SectionHomepageSpeaker class="!w-full !m:w-1/2" />
    </div>
  </main>
</template>
