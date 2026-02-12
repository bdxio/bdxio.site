<script setup lang="ts">
import { useAPI, useHead, useSeoMeta } from "#imports";
import { ASSOCIATION_NAME, EDITION } from "./services/constants";

const { data: association } = await useAPI("/association", {
  params: {
    "fields[0]": "name",
  },
});

const associationName = association?.value?.name ?? ASSOCIATION_NAME;

useHead({
  title: associationName,
  meta: [
    {
      name: "description",
      content: `${associationName} est une conférence pour les développeur•euse•s,
        sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
    },
  ],

  htmlAttrs: {
    lang: "fr",
  },
});

useSeoMeta({
  title: associationName,
  description: `${associationName} est une conférence pour les développeur•euse•s,
    sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
  ogTitle: associationName,
  ogSiteName: associationName,
  ogDescription: `${associationName} est une conférence pour les développeur•euse•s,
    sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
  ogType: "website",
  ogImage: "/images/association/team2025.jpeg",
  ogImageAlt: `Photo de l'équipe ${associationName} ${Number(EDITION) - 1}`,
  ogUrl: "https://bdxio.fr",
});
</script>

<template>
  <div class="font-body text-xl text-bdxio-blue-dark font-normal">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
