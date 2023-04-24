<script setup lang="ts">
import { useHead } from "#imports";
import { ASSOCIATION_NAME } from "~/services/constants";

useHead({
  title: ASSOCIATION_NAME,
  meta: [
    {
      name: "description",
      content: `${ASSOCIATION_NAME} est une conférence pour les développeur•euse•s, 
        sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
    },
  ],
});
</script>

<template>
  <div class="font-body text-base text-bdxio-blue-dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
