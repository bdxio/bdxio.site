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

import { formatStrapiData, shuffleArray } from "~/helpers";
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
  async asyncData({ $axios, $config, error, $showSponsors2022 }) {
    if (!$showSponsors2022) {
      return error({ statusCode: 404 });
    }

    const offers = await $axios.$get(`${$config.cmsApiUrl}/offers`, {
      params: { sort: "id:asc", "populate[sponsors][populate]": "*" }
    });

    if (!offers) return;

    const offersWithshuffledSponsors = formatStrapiData(offers.data).map((offer) => {
      if (!offer.sponsors.data.length) {
        return offer;
      }

      offer.sponsors.data = shuffleArray(formatStrapiData(offer.sponsors.data));
      return offer;
    });

    return {
      offers: offersWithshuffledSponsors
    };
  }
};
</script>
