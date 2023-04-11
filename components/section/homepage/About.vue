<script setup lang="ts">
import { Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
</script>

<template>
  <section class="py-0 m:py-20 flex flex-col-reverse items-center m:flex-row bg-bdxio-font-light">
    <img
      src="/images/place_de_la_bourse.png"
      class="object-contain w-full m:1/2 max-w-screen-xl"
    >

    <div class="p-section w-full m:1/2">
      <div class="shadow-illustration shadow-bdxio-font-light bg-bdxio-font-light max-w-3xl m-auto">
        <Heading level="2">
          Qu'est-ce que <span class="whitespace-nowrap">{{ ASSOCIATION_NAME }}</span>&nbsp;?
        </Heading>
        <p>
          {{ ASSOCIATION_NAME }} est un conférence bordelaise sur le thème de la programmation et
          de ses métiers annexes.
          <br>Lors de l'édition 2022, nous avons reçu plus de <span class="font-bold">1000 passionné·e·s</span>
          lors d'une journée de découvertes et de bonne humeur&nbsp;!
        </p>
      </div>
    </div>
  </section>
</template>