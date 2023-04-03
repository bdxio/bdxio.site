<script setup lang="ts">
import {
  definePageMeta,
  useHead,
  useNuxtApp,
  createError,
  useAPI,
  computed,
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

const { data: offers } = await useAPI("/offers", {
  params: { sort: "id:asc", "populate[sponsors][populate]": "*" },
});

const showSponsors = computed(() => offers.value?.length && $SHOW_PAGE_SPONSORS);
</script>

<template>
  <main>
    <SectionSponsorsBecomeSponsor />
    <SectionSponsorsOffersAndSponsors
      v-if="showSponsors && offers"
      :offers="offers"
    />
    <SectionSponsorsOffers v-else />
  </main>
</template>
