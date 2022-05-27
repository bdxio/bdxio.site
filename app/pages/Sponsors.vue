<template>
  <main>
    <section-become-sponsor />
  </main>
</template>

<script>
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor.vue";

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
  },
};
</script>
