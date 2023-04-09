<script setup lang="ts">
import { Heading, HeadingSection } from "#components";
</script>

<template>
  <section
    class="p-section bg-no-repeat bg-contain bg-right-bottom bg-grey-100"
    style="background-image: url('/images/illustration_palais_congres.png')"
  >
    <div class="relative pb-52 s:pb-20 m:pb-0">
      <div class="relative bg-grey-100 s:max-w-[50%] boxshadow">
        <HeadingSection
          level="2"
          class="text-subtitle"
        >
          Transports
        </HeadingSection>
        <Heading level="3">
          Comment rejoindre<br>l'évènement ?
        </Heading>
        <div class="flex flex-col gap-1 mb-[30px]">
          <span class="font-bold text-2xl">Palais des Congrès</span>
          <span>Avenue Jean Gabriel Domergue<br>33300 BORDEAUX</span>
        </div>
        <div>
          <span class="font-bold text-2xl">Transport en commun :
          </span>
          <span>Bus 15 ou Tram C</span>
        </div>
        <div>
          <span class="font-bold text-2xl">Vélo : </span>
          <span>
            Parking vélo disponible et station VCub à proximité
          </span>
        </div>
        <div>
          <span class="font-bold text-2xl">Voiture : </span>
          <span>Parking gratuit sur place</span>
        </div>
      </div>
      <span class="italic absolute right-0 top-0 hidden m:block">À seulement 10 min de Bordeaux !</span>
    </div>
  </section>
</template>

<style lang="postcss" scoped>

.boxshadow {
  box-shadow: 0px 0px 30px 20px #f5f5f5;
}
</style>
