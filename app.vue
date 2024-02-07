<script setup lang="ts">
import { useHead, useSeoMeta } from "#imports";
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
  
  htmlAttrs: {
    lang: "fr",
  },
});

useSeoMeta({
  title: ASSOCIATION_NAME,
  description: `${ASSOCIATION_NAME} est une conférence pour les développeur•euse•s, 
    sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
  ogTitle: ASSOCIATION_NAME,
  ogSiteName: ASSOCIATION_NAME,
  ogDescription: `${ASSOCIATION_NAME} est une conférence pour les développeur•euse•s, 
    sur les technologies de demain, organisée tous les ans depuis 2014 à Bordeaux.`,
  ogType: "website",
  ogImage: "/images/association/team2023.webp",
  ogImageAlt: `Photo de l'équipe ${ASSOCIATION_NAME} 2023`,
  ogUrl: "https://bdxio.fr",

});

</script>

<template>
  <div class="font-body text-base text-bdxio-blue-dark font-normal">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
