<script setup lang="ts">
import { Heading, HeadingSection } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";
</script>

<template>
  <div
    id="annual-theme"
    class="flex flex-col bg-bdxio-blue-dark text-bdxio-font-light m:justify-between m:flex-row section 
      section-annual-theme"
  >
    <div class="m:basis-1/3 l:basis-5/12">
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
        Cette année les femmes sont à l'honneur&nbsp;!
      </Heading>
      <p>
        À l'occasion de la 7ème édition de {{ ASSOCIATION_NAME }}, nous avons choisi de mettre
        en avant : Les femmes célèbres dans l'IT.
        <br>
        <br>Le thème n'est pas obligatoire pour participer, mais il est là
        pour aider les sponsors à choisir des animations, inspirer les
        conférenciers sur les contenus et leurs présentations et donner une
        unité à la conférence.
      </p>
    </div>
    <div
      class="m:basis-8/12 l:basis-7/12 grid grid-cols-homepage-portraits gap-4 overflow-x-auto overflow-y-hidden 
        pt-5 m:mt-0 m:overflow-hidden m:grid-cols-homepage-portraits-m m:justify-center"
    >
      <div class="relative z-relative elizabethfeinler">
        <img
          src="/annual-theme/elizabethfeinler.png"
          alt="Portrait de Elizabeth Feinler"
        >
      </div>
      <div class="relative z-relative maryallenwilkes">
        <img
          src="/annual-theme/maryallenwilkes.png"
          alt="Portrait de Mary Allen Wilkes"
        >
      </div>
      <div class="relative z-relative katherinecolemangoblejohnson">
        <img
          src="/annual-theme/katherinecolemangoblejohnson.png"
          alt="Portrait de Katherine Coleman Goble Johnson"
        >
      </div>
      <div class="relative z-relative feifei">
        <img
          src="/annual-theme/feifei.png"
          alt="Portrait de Feifei"
        >
      </div>
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
