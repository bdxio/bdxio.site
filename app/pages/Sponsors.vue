<template>
  <main>
    <section-become-sponsor />
    <section-sponsor-offers v-if="offers" :offers="offers" />
    section
  </main>
</template>

<script>
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor.vue";
import SectionSponsorOffers from "~/components/sponsors/SectionSponsorOffers.vue";
import { formatStrapiData } from "~/helpers";

export default {
  name: "SponsorsPage",
  layout: "page",
  head() {
    return {
      title: "Sponsors | BDX I/O",
    };
  },
  components: {
    SectionBecomeSponsor,
    SectionSponsorOffers,
  },
  async asyncData({ $axios }) {
    const offers = await $axios.$get("offers");
    const sponsors = await $axios.$get("sponsors");
    return {
      offers: formatStrapiData(offers.data),
      sponsors: formatStrapiData(sponsors.data)
    };
  }
};
</script>
