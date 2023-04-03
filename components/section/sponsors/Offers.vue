<script setup lang="ts">
import { defineProps } from "vue";
import { Heading } from "#components";
type Offer = {
  name: string;
  price: number;
  description: string;
  color: string;
  full?: true
}

defineProps<{
  offers: Offer[]
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
      <div
        gutter-m
        class="flex flex-row mt-[75px]"
      >
        <div
          v-for="offer in offers"
          :key="offer.name"
          :class="`w-12/12 s:w-6/12 l:w-3/12 mb-7 xl:mb-0 ${offer.full ? 'cursor-pointer relative z-relative soldout' : ''}`"
        >
          <div :class="`${offer.full && 'opacity-30'}`">
            <span :class="`block font-bold mb-2 uppercase text-[20px] tracking-[3px] ${offer.color}`">{{ offer.name
            }}</span>
            <span class="text-[30px] font-bold font-title">{{ offer.price.toString() }} €</span>
            <p>{{ offer.description }}</p>
          </div>
        </div>
      </div>
    </Heading>
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
