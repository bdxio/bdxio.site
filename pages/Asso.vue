<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, useAPI } from "#imports";
import { SectionAssociationPresentation, SectionAssociationVolunteers } from "#components";

definePageMeta({ layout: "page" });
useHead({ title: "L'association | BDX I/O" });

const { $SHOW_SECTION_VOLUNTEERS } = useNuxtApp();

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
