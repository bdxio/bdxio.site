<template>
  <main><program /></main>
</template>

<script>
export default {
  name: "ProgrammePage",
  layout: "page",
  data() {
    return {
      talks: []
    };
  },
  head() {
    return {
      title: "Programme | BDX I/O"
    };
  },
  components: {},
  async fetch() {
    if (!this.$showProgramme) return;

    const talks = await this.$axios.$get(`${this.$config.cmsApiUrl}/talks`);
    if (!talks) return;
  }
};
</script>
