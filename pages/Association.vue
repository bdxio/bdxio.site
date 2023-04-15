<script setup lang="ts">
import { useHead, useNuxtApp, useAPI, createError } from "#imports";
import { SectionAssociationPresentation, SectionAssociationVolunteers } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Ref } from "vue";
import type { Volunteer } from "~/types";

const { $SHOW_SECTION_VOLUNTEERS, $SHOW_PAGE_ASSOCIATION } = useNuxtApp();

if (!$SHOW_PAGE_ASSOCIATION) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `L'association | ${ASSOCIATION_NAME}` });

const { data: volunteers }: { data: Ref<Volunteer[]> } = await useAPI("/volunteers", {
  params: {
    populate: "*",
  },
});
</script>

<template>
  <main>
    <SectionAssociationPresentation />
    <SectionAssociationVolunteers
      v-if="$SHOW_SECTION_VOLUNTEERS && volunteers?.length"
      :volunteers="volunteers"
    />
  </main>
</template>
