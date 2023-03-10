<script setup lang="ts">
import { definePageMeta, useHead, useFetch, computed, inject } from "#imports";
import { formatStrapiData, shuffleArray } from "~/utils";
import { useConfig } from "~/composables";
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor.vue";
import SectionSponsorOffersAndSponsors from "~/components/sponsors/SectionSponsorOffersAndSponsors.vue";
import SectionSponsorOffers from "~/components/sponsors/SectionSponsorOffers.vue";

definePageMeta({ layout: "page" });
useHead({ title: "Sponsors | BDX I/O" });

const showSponsors2022 = inject("showSponsors2022");

if (!showSponsors2022) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

const { API_URL } = useConfig();
const { data } = await useFetch(`${API_URL}/offers`, {
  params: { sort: "id:asc", "populate[sponsors][populate]": "*" },
});

const showSponsors = computed(() => data?.value?.length && showSponsors2022);

const offers = formatStrapiData(data.value.data).map((offer) => {
  if (offer.sponsors?.data?.length) {
    offer.sponsors.data = shuffleArray(formatStrapiData(offer.sponsors.data));
  }
  return offer;
});
</script>

<template>
  <main>
    <section-become-sponsor />
    <section-sponsor-offers-and-sponsors
      v-if="showSponsors && offers"
      :offers="offers"
    />
    <section-sponsor-offers v-else />
  </main>
</template>
