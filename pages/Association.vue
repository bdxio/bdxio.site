<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, useAPI, createError } from "#imports";
import { SectionAssociationPresentation, SectionAssociationVolunteers } from "#components";

const { $SHOW_SECTION_VOLUNTEERS, $SHOW_PAGE_ASSOCIATION } = useNuxtApp();

if (!$SHOW_PAGE_ASSOCIATION) {
  throw createError({ statusCode: 404 });
}

definePageMeta({ layout: "page" });
useHead({ title: "L'association | BDX I/O" });

const { data: volunteers } = await useAPI("/volunteers", {
  params: {
    populate: "*",
  },
});
</script>

<template>
  <main>
    <SectionAssociationPresentation />
    <SectionAssociationVolunteers
      v-if="$SHOW_SECTION_VOLUNTEERS && volunteers?.length > 0"
      :volunteers="volunteers"
    />
  </main>
</template>
