<template>
  <main>
    <section-jobs />
  </main>
</template>

<script>
import SectionJobs from "~/components/jobs/SectionJobs.vue";

export default {
  name: "JobsPage",
  layout: "page",
  head() {
    return {
      title: "Jobs | BDX I/O",
      script: [
        {
          src: "https://widget.welovedevs.com/jobs-widget.js",
          type: "module"
        }
      ]
    };
  },
  components: {
    SectionJobs
  }
};
</script>
