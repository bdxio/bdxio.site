<script setup lang="ts">
import { defineProps } from "vue";
import { Heading } from "#components";
type Offer = {
  label: string;
  price: number;
  description: string;
  color: string;
  full?: true;
};

defineProps<{
  offers: Offer[];
}>();
</script>

<template>
  <section
    id="offers"
    class="section bg-white"
  >
    <Heading
      level="3"
      class="text-center relative z-relative title"
    >
      Les offres
    </Heading>
    <div
      gutter-m
      class="flex gap-8 flex-col m:flex-row mt-[75px]"
    >
      <div
        v-for="offer in offers"
        :key="offer.label"
        :class="`mb-7 xl:mb-0 ${
          offer.full ? 'cursor-not-allowed relative z-relative soldout' : ''
        }`"
      >
        <div :class="`${offer.full ? 'opacity-30' : ''}`">
          <span
            :class="`block font-bold uppercase text-[20px] tracking-[3px] text-bdxio-blue-dark ${offer.color}`"
          >{{ offer.label }}</span>
          <span class="block text-4xl font-bold font-title my-4">{{ offer.price }} €</span>
          <p class="text-[22px] font-normal">
            {{ offer.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.title::after {
  content: "";
  width: 170px;
  height: 45px;
  position: absolute;
  z-index: -1;
  background: url("/images/drawings/purple_underline.png") no-repeat;
  background-size: contain;
  right: 52%;
  bottom: -40px;
  transform: translateX(100%);
}

.soldout::after {
  content: "complet";
  text-transform: uppercase;
  width: 100px;
  height: 50px;

  font-size: 15px;
  padding: 5px 10px;
  font-weight: 700;
}
</style>
