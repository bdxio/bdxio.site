<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, createError } from "#imports";
import { SectionJobs } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

const { $SHOW_PAGE_JOBS } = useNuxtApp();

if (!$SHOW_PAGE_JOBS) {
  throw createError({ statusCode: 404 });
}

definePageMeta({ layout: "page" });
useHead({
  title: `Jobs | ${ASSOCIATION_NAME}`,
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
