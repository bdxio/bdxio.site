<script setup lang="ts">
// @ts-nocheck
import {
  definePageMeta,
  useHead,
  useNuxtApp,
  useAPI,
  computed,
  formatStrapiData,
  shuffleArray,
} from "#imports";
import {
  SponsorsSectionBecomeSponsor,
  SponsorsSectionSponsorOffers,
  SponsorsSectionSponsorOffersAndSponsors,
} from "#components";

definePageMeta({ layout: "page" });
useHead({ title: "Sponsors | BDX I/O" });

const { $showSponsors2022 } = useNuxtApp();

if (!$showSponsors2022) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const { data } = await useAPI("/offers", {
  params: { sort: "id:asc", "populate[sponsors][populate]": "*" },
});

const showSponsors = computed(() => data?.value?.length && $showSponsors2022);

const offers = formatStrapiData(data.value.data).map((offer) => {
  if (offer.sponsors?.data?.length) {
    offer.sponsors.data = shuffleArray(formatStrapiData(offer.sponsors.data));
  }
  return offer;
});
</script>

<template>
  <main>
    <SponsorsSectionBecomeSponsor />
    <SponsorsSectionSponsorOffersAndSponsors
      v-if="showSponsors && offers"
      :offers="offers"
    />
    <SponsorsSectionSponsorOffers v-else />
  </main>
</template>
