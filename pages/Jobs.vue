<script setup lang="ts">
import { ASSOCIATION_NAME } from '~/services/constants';

definePageMeta({ featureFlag: 'jobs' });

useHead({
  title: `Offres d'emploi | ${ASSOCIATION_NAME}`,
  script: [
    {
      src: 'https://widget.welovedevs.com/jobs-widget.js',
      type: 'module',
    },
  ],
});
</script>

<template>
  <main>
    <SectionJobs />
  </main>
</template>
