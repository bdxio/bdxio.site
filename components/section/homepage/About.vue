<script setup lang="ts">
import { ASSOCIATION_NAME, PREVIOUS_EDITION } from "~/services/constants";
</script>

<template>
  <section class="py-0 m:py-20 flex flex-col-reverse items-center m:flex-row bg-bdxio-grey-100 bg-bdxio-cream-base">
    <NuxtImg
      src="/images/illustrations/place_de_la_bourse.webp"
      class="w-full object-contain m:1/2 max-w-screen-xl"
      alt=""
      :aria-hidden="true"
      loading="lazy"
      width="648"
      height="366"
    />
    <div class="p-section w-full m:1/2">
      <div class="shadow-illustration shadow-bdxio-cream-base bg-bdxio-cream-base max-w-3xl m-auto">
        <Heading level="2">
          Qu'est-ce que <span class="whitespace-nowrap">{{ ASSOCIATION_NAME }}</span>&nbsp;?
        </Heading>
        <p>
          {{ ASSOCIATION_NAME }} est une conférence bordelaise sur le thème de la programmation et
          de ses métiers annexes.
          <br>Lors de l'édition {{ PREVIOUS_EDITION }},
          nous avons reçu plus de <span class="font-bold">1000 passionné·e·s</span>
          lors d'une journée de découvertes et de bonne humeur&nbsp;!
        </p>
      </div>
    </div>
  </section>
</template>
