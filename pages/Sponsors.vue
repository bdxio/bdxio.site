<script setup lang="ts">
// @ts-nocheck
import {
  definePageMeta,
  useHead,
  useNuxtApp,
  useAPI,
  computed,
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

const { data: offers } = await useAPI("/offers", {
  params: { sort: "id:asc", "populate[sponsors][populate]": "*" },
});

const showSponsors = computed(() => data?.value?.length && $showSponsors2022);
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
