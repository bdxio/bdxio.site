<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, createError } from "#imports";
import { SectionJobs } from "#components";

const {$SHOW_PAGE_JOBS} = useNuxtApp();

if(!$SHOW_PAGE_JOBS) {
  throw createError({ statusCode: 404 });
}

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
