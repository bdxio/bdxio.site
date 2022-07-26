<template>
  <main>
    <association-section-presentation />
    <association-section-volunteers v-if="volunteers.length" :volunteers="volunteers" />
  </main>
</template>

<script>
import { formatStrapiData } from "~/helpers";

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
    console.log(`${this.$config.cmsApiUrl}/volunteers`);
    const volunteers = await this.$axios.$get(`${this.$config.cmsApiUrl}/volunteers`, {});
    if (!volunteers) return;

    this.volunteers = formatStrapiData(volunteers.data);
  }
};
</script>
