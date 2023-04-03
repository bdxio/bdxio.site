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
  SectionSponsorsOffersAndSponsors,
  SectionSponsorsOffers,
} from "#components";



const { $SHOW_PAGE_SPONSORS } = useNuxtApp();

if (!$SHOW_PAGE_SPONSORS) {
  throw createError({ statusCode: 404 });
}

definePageMeta({ layout: "page" });
useHead({ title: "Sponsors | BDX I/O" });

const { data} = await useAPI("/offers", {
});

</script>

<template>
  <main>
    <SectionSponsorsBecomeSponsor />
    <!-- <SectionSponsorsOffersAndSponsors
      v-if="showSponsors && offers"
      :offers="offers"
    /> -->
    <SectionSponsorsOffers
      v-if="data.length !== 0"
      :offers="data"
    />
  </main>
</template>
