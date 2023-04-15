<script setup lang="ts">
import { Ref } from "vue";
import { useHead, useNuxtApp, createError, useAPI } from "#imports";
import { SectionSponsorsBecomeSponsor, SectionSponsorsOffers } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Offer } from "~/types";

const { $SHOW_PAGE_SPONSORS } = useNuxtApp();

if (!$SHOW_PAGE_SPONSORS) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `Sponsors | ${ASSOCIATION_NAME}` });

const { data }: { data: Ref<Offer[]> } = await useAPI("/offers", {});
</script>

<template>
  <main>
    <SectionSponsorsBecomeSponsor />
    <SectionSponsorsOffers
      v-if="data.length !== 0"
      :offers="data"
    />
  </main>
</template>
