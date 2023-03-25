<script setup lang="ts">
import { SectionTitle } from "#components";
</script>

<template>
  <section
    id="join-us"
    class="section bg-no-repeat bg-contain bg-grey-100 guidage"
  >
    <div class="relative pb-[450px] s:pb-0">
      <div class="relative bg-grey-100 shadow-guidage s:max-w-[50%] infos">
        <SectionTitle
          section
          tag="h2"
          class="mx-[30px] my-0"
        >
          Transports
        </SectionTitle>
        <SectionTitle tag="h3">
          Comment rejoindre<br>l'évènement ?
        </SectionTitle>
        <div class="flex flex-col gap-1 mb-[30px] address-container">
          <span class="title">Palais des congrès</span>
          <span class="description">
            Avenue Jean Gabriel Domergue <br>
            33300 BORDEAUX
          </span>
        </div>

        <div>
          <span class="leading-7 font-bold text-2xl">Transport en commun :</span>
          <span class="leading-[26px]">Bus 15 ou Tram C</span>
        </div>
        <div>
          <span class="leading-7 font-bold text-2xl">Vélo :</span>
          <span class="leading-[26px]">
            Parking vélo disponible et station VCub à proximité
          </span>
        </div>
        <div>
          <span class="leading-7 font-bold text-2xl">Voiture :</span>
          <span class="leading-[26px]">Parking gratuit sur place</span>
        </div>
      </div>
      <span class="italic absolute right-0 top-0 hidden m:block">À seulement 10 min de Bordeaux !</span>
    </div>
  </section>
</template>

<style lang="css" scoped>
.guidage {
  background-image: url("/images/illustration_palais_congres.png");
  background-position-x: left;
  background-position-y: bottom;
}

@media screen and (min-width: 768px) {
  .guidage {
    background-position-x: right;

  }
}
</style>
