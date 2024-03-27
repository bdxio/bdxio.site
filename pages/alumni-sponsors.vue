<script setup lang="ts">
import { useHead, useNuxtApp, createError } from "#imports";
import { SectionSponsorsListingSponsors } from "#components";
import { ASSOCIATION_NAME, PREVIOUS_EDITION } from "~/services/constants";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.alumni.sponsors) {
  throw createError({ statusCode: 404 });
}
useHead({ title: `Sponsors ${PREVIOUS_EDITION} | ${ASSOCIATION_NAME}` });

</script>

<template>
  <main>
    <SectionSponsorsListingSponsors
      v-if="$featureFlags.sections.sponsors.listing"
      :title="`Nos sponsors ${PREVIOUS_EDITION}`"
      :edition="PREVIOUS_EDITION"
    />
  </main>
</template>
