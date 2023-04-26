<script setup lang="ts">
import { Heading, HeadingSection } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";
</script>

<template>
  <div
    class="p-section flex flex-col bg-bdxio-blue-dark text-bdxio-light m:justify-between l:flex-row"
  >
    <div class="flex flex-col justify-center w-full l:w-5/12">
      <HeadingSection
        level="2"
        class="text-bdxio-light text-subtitle"
      >
        Thème {{ EDITION }}
      </HeadingSection>
      <Heading
        level="3"
        class="text-bdxio-light"
      >
        Cette année nous mettrons à l'honneur le numérique responsable&nbsp;!
      </Heading>
      <p>
        À l'occasion de la <span class="font-bold">8ème édition</span> de {{ ASSOCIATION_NAME }},
        nous avons choisi de mettre en avant le numérique responsable !
        <br><br>
        Le thème n'est pas obligatoire pour participer, mais il est là pour aider les sponsors à choisir des
        animations, inspirer les conférenciers sur les contenus et leurs présentations et donner une unité à la
        conférence.
      </p>
    </div>
    <div class="w-full l:w-5/12 flex justify-center item-center mt-16 m:mt-0">
      <img
        src="/images/illustration-theme.webp"
        alt="Illustration de la planète Terre encerclée de feuilles"
        class="object-contain xs:w-1/2 l:w-full xl:max-w-2xl"
      >
    </div>
  </div>
</template>
