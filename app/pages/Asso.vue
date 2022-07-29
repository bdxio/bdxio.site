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

    const volunteers = await this.$axios.$get(`${this.$config.cmsApiUrl}/volunteers`, {
      params: {
        populate: "*"
      }
    });
    if (!volunteers) return;

    console.log(formatStrapiData(volunteers.data));
    this.volunteers = formatStrapiData(volunteers.data);
  }
};
</script>
