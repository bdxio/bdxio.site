<script setup lang="ts">
// @ts-nocheck
import { definePageMeta, useHead, useNuxtApp, useAPI } from "#imports";
import { AssociationSectionPresentation } from "#components";

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
    <AssociationSectionPresentation />
    <AssociationSectionVolunteers
      v-if="$showVolunteers2022"
      :volunteers="volunteers"
    />
  </main>
</template>
