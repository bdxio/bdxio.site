<script setup lang="ts">
import { useHead, useNuxtApp, createError, useAPI } from "#imports";
import { SectionSponsorsBecomeSponsor, SectionSponsorsOffers } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Ref } from "vue";
import type { Offer } from "~/types";

const { $SHOW_PAGE_SPONSORS } = useNuxtApp();

if (!$SHOW_PAGE_SPONSORS) {
  throw createError({ statusCode: 404 });
}

useHead({ title: `Sponsors | ${ASSOCIATION_NAME}` });

const { data }: { data: Ref<Offer[]> } = await useAPI("/offers", {});
data.value.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
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
