<script setup lang="ts">
import { useHead, useNuxtApp, createError } from "#imports";
import { SectionJobs } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.jobs) {
  throw createError({ statusCode: 404 });
}

useHead({
  title: `Offres d'emploi | ${ASSOCIATION_NAME}`,
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
