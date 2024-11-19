<script setup lang="ts">
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.sponsors.show) {
  throw createError({ statusCode: 404 });
}
useHead({ title: `Sponsors | ${ASSOCIATION_NAME}` });

</script>

<template>
  <main>
    <SectionSponsorsBecomeSponsor v-if="$featureFlags.pages.sponsors.sections.becomeSponsor" />
    <SectionSponsorsOffers
      v-if="$featureFlags.pages.sponsors.sections.offers"
    />
    <SectionSponsors :edition="EDITION" />
  </main>
</template>
