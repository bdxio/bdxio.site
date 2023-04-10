<script setup lang="ts">
import { Heading } from "#components";
</script>

<template>
  <div
    class="section flex flex-col items-center bg-bdxio-blue-dark text-bdxio-font-light text-center gap-[20px]
      m:gap-[90px] section-sponsors"
  >
    <Heading
      level="2"
      class="relative z-10 s:after:ml-0 m:after:ml-[50px] triangle"
    >
      Ils nous soutiennent
    </Heading>
    <div class="flex flex-wrap justify-center gap-[10px] s:gap-[30px] m:gap-[60px]">
      <a
        href="https://www.atinternet.com/en/"
        target="_blank"
        class="bg-white bg-center bg-contain bg-no-repeat bg-origin-content w-[172px] h-[172px] flex items-center
          justify-center"
      >
        <img
          src="/images/sponsors/at-internet.png"
          alt="logo du sponsor AT Internet"
          class="w-[80%] object-contain grayscale hover:grayscale-0"
        >
      </a>
      <a
        href="https://apside.com/"
        target="_blank"
        class="bg-white bg-center bg-contain bg-no-repeat bg-origin-content w-[172px] h-[172px] flex items-center
          justify-center"
      >
        <img
          src="/images/sponsors/apside.png"
          alt="logo du sponsor Apside"
          class="w-[80%] object-contain grayscale hover:grayscale-0"
        >
      </a>
      <a
        href="https://astekgroup.fr/"
        target="_blank"
        class="bg-white bg-center bg-contain bg-no-repeat bg-origin-content w-[172px] h-[172px] flex items-center
          justify-center"
      >
        <img
          src="/images/sponsors/astek.webp"
          alt="logo du sponsor Astek"
          class="w-[80%] object-contain grayscale hover:grayscale-0"
        >
      </a>
      <a
        href="https://www.groupe-creative.fr/"
        target="_blank"
        class="bg-white bg-center bg-contain bg-no-repeat bg-origin-content w-[172px] h-[172px] flex items-center
          justify-center"
      >
        <img
          src="/images/sponsors/groupe-creative.png"
          alt="logo du sponsor Groupe Creative"
          class="w-[80%] object-contain grayscale hover:grayscale-0"
        >
      </a>
      <a
        href="https://www.groupeonepoint.com/fr/"
        target="_blank"
        class="bg-white bg-center bg-contain bg-no-repeat bg-origin-content w-[172px] h-[172px] flex items-center
          justify-center"
      >
        <img
          src="/images/sponsors/onepoint.png"
          alt="logo du sponsor One Point"
          class="w-[80%] object-contain grayscale hover:grayscale-0"
        >
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.triangle::after {
  content: "";
  width: 60px;
  height: 87px;
  margin-left: -30px;
  margin-top: -20px;
  position: absolute;
  z-index: -1;
  background: url("/images/drawings/purple_triangle.png") no-repeat;
}
</style>
