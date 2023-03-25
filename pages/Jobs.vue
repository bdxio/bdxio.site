<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";
import { SectionJobs } from "#components";

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
    <SectionJobs />
  </main>
</template>
