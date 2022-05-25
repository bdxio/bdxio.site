<template>
  <main>
    <section-become-sponsor />
  </main>
</template>

<script>
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor";

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
