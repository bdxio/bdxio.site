<script setup lang="ts">
import { formatStrapiData, shuffleArray } from "~/utils";
import {
  definePageMeta,
  useHead,
  ref,
  useFetch,
  computed,
  inject,
} from "#imports";
import { useConfig } from "~/composables";

const { API_URL } = useConfig();
const volunteers = ref([]);
const showVolunteers2022 = computed(
  () => inject("showVolunteers2022") ?? false
);

definePageMeta({
  layout: "page",
});

useHead({
  title: "BDX I/O | L'association",
});

if (showVolunteers2022) {
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
    <association-section-presentation />
    <association-section-volunteers
      v-if="volunteers.length > 0"
      :volunteers="volunteers"
    />
  </main>
</template>
