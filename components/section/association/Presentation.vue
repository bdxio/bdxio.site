<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { Heading, HeadingSection, ButtonSecondary, NuxtImg } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";

const { LINK_PROGRAMME_PDF } = useNuxtApp();
</script>

<template>
  <div class="bg-white p-section">
    <section class="text-center">
      <Heading
        level="1"
        class="inline-block mb-4 relative z-10 scribble"
      >
        L'asso {{ ASSOCIATION_NAME }}
      </Heading>
      <p class="m-0">
        Tout connaître sur nous, l'association n'aura plus aucun <br class="hidden m:inline">
        secret pour vous !
      </p>
    </section>
    <section class="mt-12 m:mt-24 grid grid-cols-1 l:grid-cols-2 items-center">
      <NuxtImg
        src="/images/association/team2022.webp"
        :alt="`Photo de l'équipe ${ASSOCIATION_NAME} ${Number(EDITION) - 1}`"
        class="l:w-4/5 rounded-lg"
        preload
        sizes="sm:100vw lg:80vw"
      />
      <div class="mb-100 xxxl:w-2/3 mt-10 l:mt-0">
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
          Un petit groupe de <br class="hidden m:inline"> bénévoles <span class="relative z-10">bordelais</span> !
        </Heading>
        <p class="mt-4 font-normal">
          Nous avons à cœur de vous proposer un évènement fédérateur, convivial
          et de grande ampleur. Notre objectif est de permettre à l'ensemble des
          membres de la communauté IT de se rassembler au sein d'une journée de
          conférences dédiées à l'ensemble des métiers du web, et ce depuis 2014
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
    </section>
  </div>
</template>

<style scoped lang="postcss">
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
  background: url("/images/drawings/yellow_scribbles.webp") center no-repeat;
  background-size: cover;
  }
</style>
