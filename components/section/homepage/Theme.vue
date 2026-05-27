<script setup lang="ts">
import type { EditionYear } from '~/services/constants';

const props = defineProps<{
  edition?: EditionYear;
}>();

const edition = props.edition || useEdition();
const ticketingPath = "https://www.billetweb.fr/bdx-i-o-2026";
</script>

<template>
  <div class="flex flex-col m:justify-between l:flex-row block--white">
    <div class="p-section flex flex-col justify-center items-center text-center w-full min-h-[23rem] l:min-h-0 l:w-1/2 block--yellow font-lato">
      <Heading
        level="2"
        font="lato"
        class="text-4xl m:text-6xl l:text-7xl leading-tight m:leading-tight"
      >
        <span class="inline-block whitespace-nowrap">
          <span class="font-light">La</span>
          <span class="font-bold"> billetterie {{ edition }} </span>
        </span>
        <br>
        <span class="inline-block">
          <span class="font-light"> est </span>
          <span class="font-bold">ouverte !</span>
        </span>
      </Heading>
      <LinkSecondary
        type="link"
        :to="ticketingPath"
        color="dark"
        class="mt-10 text-xl m:text-2xl py-4"
      >
        <span class="font-bold"> Je veux mon billet ! </span>
      </LinkSecondary>
    </div>
    <div class="p-section w-full min-h-[16rem] l:min-h-0 l:w-1/2 flex justify-center items-center">
      <NuxtImg
        src="/images/illustrations/back-to-school-2026.png"
        alt="Illustration avec le test Back to school
         ecrit au milieu entouré d'une pomme, un cahier, un cartable et d'autres objets qui rappel l'école"
        :aria-hidden="true"
        class="w-full h-auto object-contain"
        loading="lazy"
        provider="ipx"
      />
    </div>
  </div>
</template>
