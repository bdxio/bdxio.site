<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
</script>

<template>
  <NuxtLink
    to="/"
    class="flex flex-col m:flex-row m:items-center mb-8 m:mb-16"
  >
    <img
      src="/images/logo_blue.webp"
      :alt="`Logo de l'association ${ASSOCIATION_NAME}`"
      class="block max-w-[120px] m:max-w-[160px] mb-5 m:mb-0 m:mr-5"
    >
    <span class="text-2xl m:text-4xl font-bold">Bordeaux Developers eXperience</span>
  </NuxtLink>
</template>
