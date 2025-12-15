<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";

const edition = useEdition();
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
      :edition="edition"
    />
    <SectionSponsors :edition="edition" />
  </main>
</template>

