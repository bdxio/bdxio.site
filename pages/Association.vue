<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Volunteer } from "@bdxio/bdxio.types";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.association.show) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `L'association | ${ASSOCIATION_NAME}` });

const { data: volunteers }: { data: Ref<Volunteer[]> } = await useAPI("/volunteers", {
  params: {
    populate: "*",
    sort: "firstname:asc",
  },
});
</script>

<template>
  <main>
    <SectionAssociationPresentation />
    <SectionAssociationVolunteers
      v-if="volunteers?.length"
      :volunteers="volunteers"
    />
  </main>
</template>
