<script setup lang="ts">
import type { Edition } from "~/services/constants";
import type { Offer } from "@bdxio/bdxio.types";

const props = defineProps<{
  edition?: Edition;
}>();

const edition = props.edition || useEdition();

const getOfferColorClass = (offer: Offer["label"]) => {
  switch (offer) {
    case "Startup":
      return "text-orange";
    case "Magnum":
      return "text-yellow";
    case "Impériale":
      return "text-green";
    case "Balthazar":
      return "text-purple";
    default:
      return "text-bdxio-blue-base";
  }
};

const { data: offers }: { data: Ref<Offer[]> } = await useAPI("/offers", { params: {
  "filters[edition][year][$eq]": edition,
} });

</script>

<template>
  <section class="p-section bg-white">
    <Heading
      level="2"
      class="text-center relative z-10 title"
    >
      Les offres
    </Heading>
    <div
      v-if="offers.length === 0"
      class="text-center italic mt-16"
    >
      Pas d'offre actuellement pour l'édition {{ edition }}
    </div>
    <div
      v-else
      class="flex gap-8 flex-col m:flex-row mt-[75px]"
    >
      <div
        v-for="offer in offers"
        :key="offer.label"
        :class="`mb-7 xl:mb-0 w-full m:w-1/4
        ${offer.full ? 'cursor-not-allowed relative z-10' : null}`"
      >
        <div :class="`${offer.full ? 'opacity-30' : ''}`">
          <span
            :class="`block font-bold uppercase text-xl tracking-[3px] ${getOfferColorClass(offer.label)}`"
          >
            {{ offer.label }}
          </span>
          <span class="block text-4xl font-bold font-title my-4">{{ offer.price }} €</span>
          <p class="text-lg font-normal">
            {{ offer.description }}
          </p>
          <div
            v-if="offer.full"
            :class="`uppercase w-fit text-sm px-4 py-2 bg-bdxio-blue-darker text-white mt-4`"
          >
            Complet
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="css">
.title::after {
  content: "";
  width: 170px;
  height: 45px;
  position: absolute;
  z-index: -1;
  background: url("/images/drawings/purple_underline.webp") no-repeat;
  background-size: contain;
  right: 52%;
  bottom: -40px;
  transform: translateX(100%);
}
</style>
