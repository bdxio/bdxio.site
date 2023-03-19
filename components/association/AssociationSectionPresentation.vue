<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { SectionTitle, NuxtLink } from "#components";

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
      class="mt-100 flex justify-between section-presentation__body"
      gutter-l
      align-center-xs
    >
      <div
        xs12
        m6
        class="mb-100 mt-4 l:max-w-[500px] l:mb-0 xl:max-w-[650px] section-presentation__body__content"
      >
        <SectionTitle
          section
          tag="h2"
          class="text-green section-presentation__body__content__pre-title"
        >
          Qui sommes nous ?
        </SectionTitle>
        <SectionTitle
          tag="h2"
          class="my-3 bordelais"
        >
          Un petit groupe de bénévoles <span class="boxed">bordelais</span> !
        </SectionTitle>

        <p class="mt-4">
          Nous avons à cœur de vous proposer un événement fédérateur, convivial
          et de grande ampleur. Notre objectif est de permettre à l’ensemble des
          membres de la communauté IT de se rassembler au sein d’une journée de
          conférences dédiées à l’ensemble des métiers du web, et ce depuis 2014
          !
        </p>

        <NuxtLink
          v-if="$showProgramme"
          to="/schedule"
          class="mt-8 button button-secondary button-secondary--dark"
        >
          Découvrir le programme 2022
        </NuxtLink>
      </div>
      <div
        xs12
        m6
        class="flex gap-4 section-presentation__body__imgs"
      >
        <div class="w-1/2">
          <picture class="w-full mb-4">
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
              class="picture"
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
              class="picture"
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
              class="picture"
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
              class="picture"
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
