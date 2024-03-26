<script setup lang="ts">
import { useHead, useNuxtApp, useAPI, createError } from "#imports";
import {
  SectionAssociationPresentation,
  SectionAssociationVolunteers,
} from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Ref } from "vue";
import type { Volunteer } from "@bdxio/bdxio.types";

const {
  $featureFlags,
} = useNuxtApp();

if (!$featureFlags.pages.association) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `L'association | ${ASSOCIATION_NAME}` });

const { data: volunteers }: { data: Ref<Volunteer[]> } = await useAPI(
  "/volunteers",
  {
    params: {
      populate: "*",
      "filters[active][$eq]": "true",
      sort: "firstname:asc",
    },
  },
);
</script>

<template>
  <main>
    <SectionAssociationPresentation v-if="$featureFlags.sections.association.presentation" />
    <SectionAssociationVolunteers
      v-if="volunteers?.length && $featureFlags.sections.association.volunteers"
      :volunteers="volunteers"
    />
  </main>
</template>
