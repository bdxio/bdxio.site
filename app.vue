<script setup lang="ts">
import { useHead } from "#imports";

useHead({
  title: "BDX I/O",
  meta: [
    {
      name: "description",
      content: "BDX I/O est une conférence pour les développeur•euse•s, sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
