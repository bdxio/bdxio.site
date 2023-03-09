<script setup lang="ts">
import { definePageMeta, useHead } from "#imports";

definePageMeta({
  layout: "page",
});

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
    <section-jobs />
  </main>
</template>
