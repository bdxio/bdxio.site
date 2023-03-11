<script setup lang="ts">
// @ts-nocheck
import { definePageMeta, useHead } from "#imports";
import { JobsSectionJobs } from "#components";

definePageMeta({ layout: "page" });
useHead({
  title: "Jobs | BDX I/O",
  script: [
    {
      src: "https://widget.welovedevs.com/jobs-widget.js",
      type: "module",
    },
  ],
});
</script>

<template>
  <main>
    <JobsSectionJobs />
  </main>
</template>
