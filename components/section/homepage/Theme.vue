<script setup lang="ts">
import { Heading, HeadingSection, NuxtImg } from "#components";
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
        IA&nbsp;-&nbsp;entre progrès et préoccupations
      </Heading>
      <p class="font-medium">
        Notre objectif est de mettre en lumière les avancées extraordinaires que ces technologies offrent,
        tout en abordant de manière franche les <strong>défis éthiques</strong>
        et les <strong>dilemmes sociaux</strong> qu'elles suscitent.
        <br><br>
        <strong>Le thème n'est pas obligatoire pour participer</strong>,
        mais il est là pour aider les sponsors à choisir des
        animations, inspirer les conférenciers sur les contenus et leurs présentations et donner une unité à la
        conférence.
      </p>
    </div>
    <div class="w-full l:w-5/12 flex justify-center item-center mt-16 m:mt-0">
      <NuxtImg
        src="/images/illustrations/theme.webp"
        alt="Illustration de la planète Terre connectée et entourée de feuillages"
        :aria-hidden="true"
        class="object-contain xs:w-1/2 l:w-full xl:max-w-2xl"
        loading="lazy"
        width="640"
        height="625"
        size="xs:50vw lg:100vw"
      />
    </div>
  </div>
</template>
