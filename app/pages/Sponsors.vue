<template>
  <main>
    <section-become-sponsor />
    <section-guidage />
  </main>
</template>

<script>
import SectionBecomeSponsor from "~/components/sponsors/SectionBecomeSponsor";
import SectionGuidage from "~/components/homepage/SectionGuidage";

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
    SectionGuidage,
  },
};
</script>
