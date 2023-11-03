<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
import { useHead, useNuxtApp, createError } from "#imports";

import { Heading, LinkPrimary } from "#components";

const { $SHOW_PAGE_CONCOURS_2023 } = useNuxtApp();

if (!$SHOW_PAGE_CONCOURS_2023) {
  throw createError({ statusCode: 404 });
}

useHead({
  title: `Jeu concours 2023 | ${ASSOCIATION_NAME}`,
});
</script>

<template>
  <main class="bg-white p-section flex flex-col gap-3 lg:max-w-[900px] mx-auto">
    <Heading
      level="1"
      class="relative z-0 title  w-fit mx-auto"
    >
      Jeu concours
    </Heading>

    <p class="block mx-auto ">
      Cette année l'équipe vous propose un jeu concours au plus près de nos sponsors.
      Tente de gagner des places exclusives pour les 10 ans de BDX I/O.
    </p>

    <div class="flex flex-col gap-2 justify-center items-center">
      <Heading
        level="2"
        class="mt-6 !text-3xl"
      >
        Règles du jeu
      </Heading>
      <p>
        Le principe du jeu est de résoudre 8 énigmes sur la thématique de cette édition 2023 :
        <span class="font-bold">Le numérique responsable</span> 🌱 <br><br>
  
        Pour t'aider à répondre des indices seront présents sur les différents stands.
        N'hésitez pas à aller <span class="font-bold">voir nos sponsors !</span><br>
        Mais attention, des anecdotes sur l'association se cachent parmis les indices.<br><br>
  
        À la fin de la journée, 10 participants seront tirées au sort parmi les bonnes réponses
        et remporterons XXXXXXXXXXX. <br>
  
        Bonne chance !
      </p>
  
      <LinkPrimary
        color="light"
        href="https://docs.google.com/forms/d/1-9tuJtSCXdLv2XkBS_RqIa1KlRS8QwAlVepr7wqOHdg/edit"
        class="mt-8"
      >
        Tenter votre chance
      </LinkPrimary>
    </div>
  </main>
</template>

<style scoped lang="css">
.title:before {
  content: "";
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  left: -100px;
  bottom: -10px;
  background: url("/images/drawings/blue_presentation_left.webp") center no-repeat;
  background-size: cover;

  @media screen and (min-width: theme('screens.m')) {
    width: 120px;
    height: 120px;
    left: -110px;
  }
}

.title:after {
  content: "";
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  right: -100px;
  bottom: -10px;
  background: url("/images/drawings/blue_presentation_right.webp") center no-repeat;
  background-size: cover;

  @media screen and (min-width: theme('screens.m')) {
    width: 120px;
    height: 120px;
    right: -110px;
  }
}
</style>
