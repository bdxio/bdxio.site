<script setup lang="ts">
import { useHead, useSeoMeta, useAPI } from "#imports";
import { EDITION } from "./services/constants";

const { data: association } = await useAPI("/association", {
  params: {
    "fields[0]": "name",
  },
});

useHead({
  title: association.value.name,
  meta: [
    {
      name: "description",
      content: `${association.value.name} est une conférence pour les développeur•euse•s, 
        sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
    },
  ],

  htmlAttrs: {
    lang: "fr",
  },
});

useSeoMeta({
  title: association.value.name,
  description: `${association.value.name} est une conférence pour les développeur•euse•s, 
    sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
  ogTitle: association.value.name,
  ogSiteName: association.value.name,
  ogDescription: `${association.value.name} est une conférence pour les développeur•euse•s, 
    sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
  ogType: "website",
  ogImage: "/images/association/team2025.jpeg",
  ogImageAlt: `Photo de l'équipe ${association.value.name} ${Number(EDITION) - 1}`,
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

