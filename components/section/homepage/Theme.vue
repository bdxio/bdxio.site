<script setup lang="ts">
import { Heading, HeadingSection } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";
</script>

<template>
  <div
    class="p-section flex flex-col bg-bdxio-blue-dark text-bdxio-font-light m:justify-between m:flex-row"
  >
    <div class="w-full m:w-5/12">
      <HeadingSection
        level="2"
        class="text-bdxio-font-light text-subtitle"
      >
        Thème {{ EDITION }}
      </HeadingSection>
      <Heading
        level="3"
        class="text-bdxio-font-light"
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
    <div class="w-full m:w-5/12 flex justify-center item-center mt-16 m:mt-0">
      <!-- @TODO: Uncomment and fill src + alt attributes -->
      <!-- <img
        src=""
        alt=""
        class="object-contain"
      > -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.elizabethfeinler::after {
  content: "";
  display: block;
  top: -20px;
  left: -15px;
  width: 244px;
  height: 245px;
  position: absolute;
  background: url("/images/drawings/fond1.png") center no-repeat;
  background-size: cover;
}

.katherinecolemangoblejohnson::after {
  content: "";
  display: block;
  top: -20px;
  left: -15px;
  width: 244px;
  height: 245px;
  position: absolute;
  background: url("/images/drawings/fond3.png") center no-repeat;
  background-size: cover;
}

.maryallenwilkes::after {
  content: "";
  display: block;
  top: -20px;
  left: -15px;
  width: 244px;
  height: 245px;
  position: absolute;
  background: url("/images/drawings/fond2.png") center no-repeat;
  background-size: cover;
}

.feifei::after {
  content: "";
  display: block;
  top: -20px;
  left: -15px;
  width: 244px;
  height: 245px;
  position: absolute;
  background: url("/images/drawings/fond4.png") center no-repeat;
  background-size: cover;
}
</style>
