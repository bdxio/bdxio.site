<script setup lang="ts">
// @ts-nocheck
import {
  definePageMeta,
  useHead,
  useNuxtApp,
  useConfig,
  useFetch,
  ref,
  shuffleArray,
  formatStrapiData,
} from "#imports";
import { AssociationSectionPresentation } from "#components";

definePageMeta({ layout: "page" });
useHead({ title: "L'association | BDX I/O" });

const volunteers = ref([]);

const { $showVolunteers2022 } = useNuxtApp();

if ($showVolunteers2022) {
  const { API_URL } = useConfig();
  const { data } = await useFetch(`${API_URL}/volunteers`, {
    params: {
      populate: "*",
    },
  });
  volunteers.value = shuffleArray(formatStrapiData(data.value.data));
}
</script>

<template>
  <main>
    <AssociationSectionPresentation />
    <AssociationSectionVolunteers
      v-if="volunteers.length"
      :volunteers="volunteers"
    />
  </main>
</template>
