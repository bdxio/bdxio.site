<script setup lang="ts">
import { Heading } from "#components";
type Offer = {
  name: string;
  price: number;
  description: string;
  color: string;
  soldout?: true
}
const offers: Offer[] = [
  {
    name: "Balthazar",
    price: 5000,
    description: `Le pack complet du partenariat pour offrir de la visibilité à votre
          entreprise avant l’événement et avoir une expérience unique le jour J.`,
    color: "text-purple",
    soldout: true,
  },
  {
    name: "Impériale",
    price: 2500,
    description: `Le partenariat qui nous séduit tous ! Valorisez votre marque le jour
          de l’événement et permettez au plus grand nombre de venir échanger
          avec vous.`,
    color: "text-green",
  },
  {
    name: "Magnum",
    price: 1000,
    description: `Apportez votre soutien à BDX I/O avec cette offre et faite retentir
          votre nom auprès de la communauté bordelaise.`,
    color: "text-yellow",
  },
  {
    name: "Startup",
    price: 500,
    description: `Pour que chacun puisse nous soutenir à petit prix. Les startups
          accèdent au village startup qui comprend un mange debout dans l’espace
          pluriel le jour J.`,
    color: "text-orange",
  },
];


</script>

<template>
  <section
    id="offers"
    class="section bg-white"
  >
    <Heading
      tag="h3"
      class="text-center relative z-relative title"
    >
      Les offres
      <div
        gutter-m
        class="flex mt-[75px]"
      >
        <div
          v-for="offer in offers"
          :key="offer.name"
          :class="`basis-full s:basis-1/2 l:basis-3/12 mb-7 xl:mb-0 ${offer.soldout && 'cursor-pointer relative z-relative soldout'}`"
        >
          <div :class="`${offer.soldout && 'opacity-30'}`">
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
