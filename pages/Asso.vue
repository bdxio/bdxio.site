<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, useAPI } from "#imports";
import { SectionAssociationPresentation, SectionAssociationVolunteers } from "#components";

definePageMeta({ layout: "page" });
useHead({ title: "L'association | BDX I/O" });

const { $showVolunteers2022 } = useNuxtApp();

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
      v-if="$showVolunteers2022 && volunteers?.length > 0"
      :volunteers="volunteers"
    />
  </main>
</template>
