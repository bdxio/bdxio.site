<template>
  <main>
    <section-become-sponsor />
    <section-sponsor-offers-and-sponsors v-if="offers" :offers="offers" />
    section
  </main>
</template>

<script>
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor.vue";
import SectionSponsorOffersAndSponsors from "~/components/sponsors/SectionSponsorOffersAndSponsors.vue";
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
    SectionSponsorOffersAndSponsors
  },
  async asyncData({ $axios }) {
    const offers = await $axios.$get("/api/offers", {
      params: { sort: "id:asc", "populate[sponsors][populate]": "*" }
    });
    return {
      offers: formatStrapiData(offers.data)
    };
  }
};
</script>
