<script setup lang="ts">
import { SectionTitle } from "#components";
</script>

<template>
  <section class="section text-bdxio-font-dark bg-white section-themes">
    <div
      no-gutter
      class="flex justify-between-xs align-center-m"
    >
      <div
        class="text-container basis-full m:basis-4/12 l:basis-5/12"
      >
        <SectionTitle
          section
          tag="h2"
          class="relative z-relative mr-[20px] before:z-negative m:before:-top-[20px] m:before:-left-[50px] m:before:w-[120px] m:before:h-[70px] title"
        >
          thématique
        </SectionTitle>
        <SectionTitle
          tag="h3"
          class="relative title"
        >
          Quels seront les thèmes abordés&nbsp;?
        </SectionTitle>
        <p>
          BDX I/O propose des conférences autour de 7 thématiques différentes,
          avec des durées différentes et pour tous les niveaux : Vous trouverez
          forcément votre bonheur&nbsp;!
        </p>
      </div>
      <div
        class="after:hidden basis-full m:basis-8/12 l:basis-7/12 flex relative z-relative gap-4 items-center px-6 py-5 m:after:visible m:grid m:justify-center m:grid-cols-homegpage-categories-m m:px-5 m:pt-3 m:pb-7 overflow-hidden xxl:grid-cols-homegpage-categories-xxl items"
      >
        <div class="flex items-center justify-center h-[200px] font-bold bg-white m:h-[136px] card">
          <span class="uppercase text-center w-[150px] mx-0 my-[30px] py-[30px] px-0 leading-[30px] bg-center bg-no-repeat bg-contain theme--1">Frontend</span>
        </div>
        <div class="flex items-center justify-center h-[200px] font-bold bg-white m:h-[136px] card">
          <span class="uppercase text-center w-[150px] mx-0 my-[30px] py-[30px] px-0 leading-[30px] bg-center bg-no-repeat bg-contain theme--2">Backend</span>
        </div>
        <div class="flex items-center justify-center h-[200px] font-bold bg-white m:h-[136px] card">
          <span class="uppercase text-center w-[150px] mx-0 my-[30px] py-[30px] px-0 leading-[30px] bg-center bg-no-repeat bg-contain theme--3">Big Data & IA</span>
        </div>
        <div class="flex items-center justify-center h-[200px] font-bold bg-white m:h-[136px] card">
          <span class="uppercase text-center w-[150px] mx-0 my-[30px] py-[30px] px-0 leading-[30px] bg-center bg-no-repeat bg-contain theme--4">Design & UX</span>
        </div>
        <div class="flex items-center justify-center h-[200px] font-bold bg-white m:h-[136px] card">
          <span class="uppercase text-center w-[150px] mx-0 my-[30px] py-[30px] px-0 leading-[30px] bg-center bg-no-repeat bg-contain theme--5">Cloud & Dev.Sec.Ops</span>
        </div>
        <div class="flex items-center justify-center h-[200px] font-bold bg-white m:h-[136px] card">
          <span class="uppercase text-center w-[150px] mx-0 my-[30px] py-[30px] px-0 leading-[30px] bg-center bg-no-repeat bg-contain theme--6">Methodo & Architecture</span>
        </div>
        <div class="flex items-center justify-center h-[200px] font-bold bg-white m:h-[136px] card">
          <span class="uppercase text-center w-[150px] mx-0 my-[30px] py-[30px] px-0 leading-[30px] bg-center bg-no-repeat bg-contain theme--7">Hors piste</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.title:before {
  content: "";
  position: absolute;
  top: -37px;
  left: -19px;
  width: 110px;
  height: 60px;
  background: url("/images/drawings/cyan_scribble_2.png") center no-repeat;
  background-size: contain;
}

.items:after {
  content: "";
  z-index: -1;
  width: 140px;
  height: 140px;
  position: absolute;
  bottom: 114px;
  right: -10px;
  background: url("/images/drawings/yellow_citation.png") center no-repeat;
  background-size: contain;
} 

.theme--1 {
  background-image: url("/images/drawings/themes/theme-1.png");
}
.theme--2 {
  background-image: url("/images/drawings/themes/theme-2.png");
}
.theme--3 {
  background-image: url("/images/drawings/themes/theme-3.png");
}
.theme--4 {
  background-image: url("/images/drawings/themes/theme-4.png");
}
.theme--5 {
  position: relative;
  z-index: 1;
}
  .theme--5::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    z-index: -1;
    background-image: url("/images/drawings/themes/theme-5.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
.theme--6 {
  background-image: url("/images/drawings/themes/theme-6.png");
}
.theme--7 {
  background-image: url("/images/drawings/themes/theme-7.png");
}
</style>
