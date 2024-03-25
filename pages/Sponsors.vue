<script setup lang="ts">
import { useHead, useNuxtApp, createError, useAPI } from "#imports";
import { SectionSponsorsBecomeSponsor, SectionSponsorsOffers } from "#components";
import { ASSOCIATION_NAME, EDITION, PREVIOUS_EDITION } from "~/services/constants";
import type { Ref } from "vue";
import type { Offer } from "@bdxio/bdxio.types";

const { $SHOW_PAGE_SPONSORS, $SHOW_LINK_SPONSORING } = useNuxtApp();

if (!$SHOW_PAGE_SPONSORS) {
  throw createError({ statusCode: 404 });
}
useHead({ title: `Sponsors | ${ASSOCIATION_NAME}` });

const { data }: { data: Ref<Offer[]> } = await useAPI("/offers", { params: {
  "filters[edition][year][$eq]": EDITION,
} });

data.value.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
</script>

<template>
  <main>
    <div v-if="$SHOW_LINK_SPONSORING">
      <SectionSponsorsBecomeSponsor />
      <SectionSponsorsOffers
        v-if="data.length !== 0"
        :offers="data"
      />
    </div>
    <SectionSponsors :edition="PREVIOUS_EDITION" />
  </main>
</template>
