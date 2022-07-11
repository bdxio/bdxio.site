<template>
  <main>
    <section-become-sponsor />
    <section-sponsor-offers-and-sponsors v-if="showSponsors" :offers="offers" />
    <section-sponsor-offers v-else />
  </main>
</template>

<script>
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor.vue";
import SectionSponsorOffersAndSponsors from "~/components/sponsors/SectionSponsorOffersAndSponsors.vue";

import SectionSponsorOffers from "~/components/sponsors/SectionSponsorOffers.vue";

import { formatStrapiData } from "~/helpers";
export default {
  name: "SponsorsPage",
  layout: "page",
  head() {
    return {
      title: "Sponsors | BDX I/O"
    };
  },
  components: {
    SectionBecomeSponsor,
    SectionSponsorOffersAndSponsors,
    SectionSponsorOffers
  },
  computed: {
    showSponsors() {
      return this.$showSponsors2022;
    }
  },
  async asyncData({ $axios, $showSponsors2022 }) {
    if ($showSponsors2022) {
      const offers = await $axios.$get("/api/offers", {
        params: { sort: "id:asc", "populate[sponsors][populate]": "*" }
      });
      return {
        offers: formatStrapiData(offers.data)
      };
    }
  }
};
</script>
