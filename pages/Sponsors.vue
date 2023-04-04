<script setup lang="ts">
import {
  definePageMeta,
  useHead,
  useNuxtApp,
  createError,
  useAPI,
} from "#imports";
import {
  SectionSponsorsBecomeSponsor,
  SectionSponsorsOffers,
} from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";


const { $SHOW_PAGE_SPONSORS } = useNuxtApp();

if (!$SHOW_PAGE_SPONSORS) {
  throw createError({ statusCode: 404 });
}

definePageMeta({ layout: "page" });
useHead({ title: `Sponsors | ${ASSOCIATION_NAME}` });

const { data } = await useAPI("/offers", {
});

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
