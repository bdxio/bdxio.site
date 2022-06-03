<template>
  <main>
    <section-become-sponsor />
    <section-sponsor-offers />
  </main>
</template>

<script>
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor.vue";
import SectionSponsorOffers from "~/components/sponsors/SectionSponsorOffers.vue";

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
};
</script>
