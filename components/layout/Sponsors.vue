<script setup lang="ts">
import { useAPI } from "#imports";
import { Heading, HeadingSection, NuxtImg } from "#components";
import { EDITION } from "~/services/constants";
import type { Ref } from "vue";
import type { Sponsor, Offer } from "@bdxio/bdxio.types";

const [{ data: offers }, { data: sponsors }]: [{ data: Ref<Offer[]> }, { data: Ref<Sponsor[]> }] = await Promise.all([
  useAPI("/offers", { params: {
    "filters[edition][year][$eq]": EDITION,
  } }),
  useAPI("/sponsors", { params: {
    "populate": "*",
    "pagination[limit]": 1000,
  } }),
]);

const displayableSponsors = sponsors.value
  .map(sponsor => ({
    ...sponsor,
    offer: sponsor.offers?.find(offer => offers.value.map(o => o.id).includes(offer.id)),
  }))
  .filter(sponsor => sponsor.offer && sponsor.logo);

displayableSponsors.sort((a, b) => {
  if (a.offer.price !== b.offer.price) {
    return parseFloat(b.offer.price) - parseFloat(a.offer.price);
  }
  return a.name.localeCompare(b.name);
});

const displayableOffers = offers.value.filter(offer =>
  displayableSponsors.some(sponsor => sponsor.offer.id === offer.id),
);

displayableOffers.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
</script>

<template>
  <section class="p-section bg-bdxio-blue-darker">
    <Heading
      level="2"
      class="title text-bdxio-light text-center !mb-10"
    >
      Ils nous soutiennent&nbsp;!
    </Heading>
    <div
      v-for="(offer, offerIndex) in displayableOffers"
      :key="offer.id"
      class="flex flex-col items-center justify-center mb-12"
    >
      <HeadingSection
        level="3"
        class="text-bdxio-light !mb-0"
      >
        {{ offer.label }}
      </HeadingSection>
      <ul class="flex flex-wrap items-center justify-center w-full s:w-4/5 m:w-3/5">
        <li
          v-for="sponsor in displayableSponsors.filter(sponsor => sponsor.offer.id === offer.id)"
          :key="sponsor.id"
        >
          <component
            :is="sponsor.url ? 'a' : 'span'"
            :href="sponsor.url"
            :target="sponsor.url && '_blank'"
            :class="`flex items-center justify-center p-4 m-4 bg-bdxio-light rounded-lg h-24 w-24
              ${offerIndex === 0 ? 'xs:h-32 xs:w-32' : null}`"
          >
            <NuxtImg
              :src="sponsor.logo.url"
              :width="offerIndex === 0 ? 96 : 64"
              :alt="`Logo ${sponsor.name}`"
            />
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>
