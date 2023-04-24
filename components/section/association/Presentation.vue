<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { Heading, HeadingSection, ButtonSecondary } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";

const { LINK_PROGRAMME_PDF } = useNuxtApp();
</script>

<template>
  <div class="bg-white p-section section-presentation">
    <header class="flex flex-col items-center justify-center text-center">
      <Heading
        level="1"
        class="mb-4 relative z-10 scribble"
      >
        L'asso {{ ASSOCIATION_NAME }}
      </Heading>
      <p class="m-0">
        Tout connaître sur nous, l’asso n’aura plus aucun <br>
        secret pour vous !
      </p>
    </header>
    <section
      class="mt-[100px] m:flex m:justify-between m:gap-x-[40px]"
    >
      <div class="mb-100 mt-4 l:max-w-[500px] l:mb-0 xl:max-w-[650px] basis-full m:basis-1/2">
        <HeadingSection
          level="2"
          class="!text-bdxio-blue-base"
        >
          Qui sommes nous ?
        </HeadingSection>
        <Heading
          level="3"
          class="my-3"
        >
          Un petit groupe de bénévoles <span class="relative z-10">bordelais</span> !
        </Heading>
        <p class="mt-4">
          Nous avons à cœur de vous proposer un événement fédérateur, convivial
          et de grande ampleur. Notre objectif est de permettre à l’ensemble des
          membres de la communauté IT de se rassembler au sein d’une journée de
          conférences dédiées à l’ensemble des métiers du web, et ce depuis 2014
          !
        </p>
        <ButtonSecondary
          v-if="LINK_PROGRAMME_PDF"
          color="dark"
          to="/schedule"
        >
          Découvrir le programme {{ EDITION }}
        </ButtonSecondary>
      </div>
      <div class="flex gap-4 basis-full mt-[100px] m:mt-0 m:basis-1/2">
        <div class="w-1/2">
          <picture>
            <source
              type="image/webp"
              srcset="/asso/pic-scene-1.webp"
            >
            <source
              type="image/jpeg"
              srcset="/asso/pic-scene-1.jpg"
            >
            <img
              src="/asso/pic-scene-1.jpg"
              alt="photo de l'équipe prise sur la scene de l'évènement"
              class="w-full mb-4"
            >
          </picture>
          <picture class="w-full mb-4">
            <source
              type="image/webp"
              srcset="/asso/pic-scene-2.webp"
            >
            <source
              type="image/jpeg"
              srcset="/asso/pic-scene-2.jpg"
            >
            <img
              src="/asso/pic-scene-2.jpg"
              alt="photo de l'équipe prise sur la scene de l'évènement"
              class="w-full mb-4"
            >
          </picture>
        </div>
        <div class="w-1/2">
          <picture class="w-full mb-4">
            <source
              type="image/webp"
              srcset="/asso/pic-meeting-1.webp"
            >
            <source
              type="image/jpeg"
              srcset="/asso/pic-meeting-1.jpg"
            >
            <img
              src="/asso/pic-meeting-1.jpg"
              alt="photo de l'équipe prise pendant un meeting bdx io"
              class="w-full mb-4"
            >
          </picture>
          <picture class="w-full mb-4">
            <source
              type="image/webp"
              srcset="/asso/pic-meeting-2.webp"
            >
            <source
              type="image/jpeg"
              srcset="/asso/pic-meeting-2.jpg"
            >
            <img
              src="/asso/pic-meeting-2.jpg"
              alt="photo de l'équipe prise pendant un meeting bdx io"
              class="w-full mb-4"
            >
          </picture>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
.scribble::after {
    content: "";
    display: block;
    width: 150px;
    height: 70px;
    position: absolute;
    z-index: -1;
    right: -30px;
    bottom: -15px;
    transform: rotate(-20deg);
    background: url("/images/drawings/yellow_scribbles.png") center no-repeat;
    background-size: cover;
  }
</style>
