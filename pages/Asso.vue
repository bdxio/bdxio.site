<template>
  <main>
    <association-section-presentation />
    <association-section-volunteers v-if="volunteers.length" :volunteers="volunteers" />
  </main>
</template>

<script>
import { formatStrapiData, shuffleArray } from "~/utils";

export default {
  name: "AssociationPage",
  layout: "page",
  data() {
    return {
      volunteers: []
    };
  },
  async asyncData({ $showVolunteers2022, error, $axios, $config }) {
    if (!$showVolunteers2022) {
      return error({ statusCode: 404 });
    }

    const volunteers = await $axios.$get(`${$config.cmsApiUrl}/volunteers`, {
      params: {
        populate: "*"
      }
    });
    if (!volunteers) return;

    return {
      volunteers: shuffleArray(formatStrapiData(volunteers.data))
    };
  }
};
</script>
