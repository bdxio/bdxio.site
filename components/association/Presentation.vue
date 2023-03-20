<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { SectionTitle, ButtonSecondary } from "#components";

const { $showProgramme } = useNuxtApp();
</script>

<template>
  <div class="bg-white section section-presentation">
    <header class="flex flex-col items-center justify-center text-center">
      <SectionTitle
        tag="h1"
        class="mb-4 relative z-relative"
      >
        L'asso BDX I/O
      </SectionTitle>
      <p class="m-0">
        Tout connaître sur nous, l’asso n’aura plus aucun <br>
        secret pour vous !
      </p>
    </header>
    <div
      tag="section"
      class="mt-100 m:flex m:justify-between m:gap-x-[40px]"
      gutter-l
      align-center-xs
    >
      <div class="mb-100 mt-4 l:max-w-[500px] l:mb-0 xl:max-w-[650px] basis-full m:basis-1/2">
        <SectionTitle
          section
          tag="h2"
          class="text-green"
        >
          Qui sommes nous ?
        </SectionTitle>
        <SectionTitle
          tag="h2"
          class="my-3"
        >
          Un petit groupe de bénévoles <span class="bordelais">bordelais</span> !
        </SectionTitle>

        <p class="mt-4">
          Nous avons à cœur de vous proposer un événement fédérateur, convivial
          et de grande ampleur. Notre objectif est de permettre à l’ensemble des
          membres de la communauté IT de se rassembler au sein d’une journée de
          conférences dédiées à l’ensemble des métiers du web, et ce depuis 2014
          !
        </p>

        <ButtonSecondary
          v-if="$showProgramme"
          color="dark"
          to="/schedule"
        >
          Découvrir le programme 2022
        </ButtonSecondary>
      </div>
      <div class="flex gap-4 basis-full m:basis-1/2">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  &:after {
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

    @include mobileFirst(m) {
      width: 180px;
      height: 100px;
      right: -60px;
      bottom: -55px;
    }
  }
}

.bordelais {
  position: relative;

  &::after {
    content: "";
    width: 240px;
    height: 100px;
    position: absolute;
    z-index: 0;
    background: url("/images/drawings/green_box.png") center no-repeat;
    background-size: cover;
    top: -10px;
    left: -20px;
  }
}
</style>
