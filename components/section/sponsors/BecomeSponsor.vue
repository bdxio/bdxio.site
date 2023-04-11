<script setup lang="ts">
import { Heading, LinkPrimary } from "#components";
</script>

<template>
  <section class="p-section flex flex-col bg-bdxio-blue-dark text-bdxio-font-light gap-[20px] overflow-hidden">
    <Heading
      level="2"
      class="text-bdxio-font-light"
    >
      Pourquoi devenir
      <span class="relative z-10 sponsor">Sponsor&nbsp;?</span>
    </Heading>
    <ul class="flex flex-wrap justify-center gap-[60px] mt-[100px]">
      <li class="flex flex-col items-center relative z-10 one">
        <p class="text-[74px] mb-5 m:mb-[50px]">
          1
        </p>
        <p class="text-center max-w-[350px]">
          Une visibilité sur le plus grand événement bordelais fédérant
          l’ensemble de la communauté digitale et IT bordelaise
        </p>
      </li>

      <li class="flex flex-col items-center relative z-10 two">
        <p class="text-[74px] mb-5 m:mb-[50px]">
          2
        </p>
        <p class="text-center max-w-[350px]">
          Être un acteur majeur en contribuant au développement de cet
          écosystème local
        </p>
      </li>

      <li class="flex flex-col items-center relative z-10 three">
        <p class="text-[74px] mb-5 m:mb-[50px]">
          3
        </p>
        <p class="text-center max-w-[350px]">
          Affirmer le dynamisme de votre structure et stimuler vos équipes
        </p>
      </li>

      <li class="flex flex-col items-center  ">
        <p
          class="text-[74px] mb-5 m:mb-[50px]
        "
        >
          4
        </p>
        <p class="text-center max-w-[350px] relative z-10 four">
          Une mise en avant de vos services, produits et compétences
        </p>
      </li>

      <li class="flex flex-col items-center relative z-10 five">
        <p class="text-[74px] mb-5 m:mb-[50px]">
          5
        </p>
        <p class="text-center max-w-[350px]">
          Rencontrer vos futurs collaborateurs, partenaires ou fournisseurs
        </p>
      </li>
    </ul>
    <LinkPrimary
      color="light"
      href="/bdxio-2023-sponsors.pdf"
      download
      class="mt-[160px] self-center"
    >
      Télécharger la plaquette
    </LinkPrimary>
  </section>
</template>

<style lang="css" scoped>
.sponsor:after {
  content: "";
  position: absolute;
  width: 230px;
  height: 125px;
  top: -42px;
  left: -30px;
  background: url("/images/drawings/orange_circle.png") no-repeat;
  background-size: cover;
}

.one:after {
  content: "";
  position: absolute;
  width: 160px;
  height: 100px;
  top: 0;
  left: 80%;
  background: url("/images/drawings/purple_arrow.png") no-repeat;
  background-size: cover;
}

.three:after {
  content: "";
  position: absolute;
  width: 160px;
  height: 100px;
  top: 0;
  left: 40%;
  background: url("/images/drawings/cyan_scribbles.png") no-repeat;
  background-size: cover;
  z-index: -1;
}

.four:after {
  content: "";
  position: absolute;
  width: 160px;
  height: 70px;
  bottom: 0;
  left: -50px;
  background: url("/images/drawings/yellow_scribbles.png") no-repeat;
  background-size: cover;
  z-index: -1;
}

.five:after {
  content: "";
  position: absolute;
  width: 55px;
  height: 70px;
  top: -30px;
  left: 60%;
  background: url("/images/drawings/orange_highlight_2.png") no-repeat;
  background-size: contain;
}
</style>
