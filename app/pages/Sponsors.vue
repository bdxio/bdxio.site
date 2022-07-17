<template>
  <main>
    <section-become-sponsor />
    <section-sponsor-offers-and-sponsors v-if="showSponsors && offers" :offers="offers" />
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
  data() {
    return {
      offers: []
    };
  },
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
      return this.$showSponsors2022 && this.offers.length;
    }
  },
  async created() {
    if (!this.$showSponsors2022) {
      return;
    }

    const offers = await this.$axios.$get("/api/offers", {
      params: { sort: "id:asc", "populate[sponsors][populate]": "*" }
    });

    this.offers = formatStrapiData(offers.data);
  }
};
</script>
