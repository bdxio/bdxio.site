<template>
  <main>
    <association-section-presentation />
    <association-section-volunteers v-if="volunteers.length" :volunteers="volunteers" />
  </main>
</template>

<script>
import { formatStrapiData, shuffleArray } from "~/helpers";

export default {
  name: "AssociationPage",
  layout: "page",
  data() {
    return {
      volunteers: []
    };
  },
  async fetch() {
    if (!this.$showVolunteers2022) {
      return;
    }

    const volunteers = await this.$axios.$get(`${this.$config.cmsApiUrl}/volunteers`, {
      params: {
        populate: "*"
      }
    });
    if (!volunteers) return;

    this.volunteers = shuffleArray(formatStrapiData(volunteers.data));
  }
};
</script>
