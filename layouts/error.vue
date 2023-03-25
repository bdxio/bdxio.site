<script setup lang="ts">
// @ts-nocheck
import { LayoutTheHeader, LayoutTheFooter } from "#components";
</script>

<template>
  <div>
    <LayoutTheHeader background="light" />
    <section class="section flex justify-center items-center w-full">
      <div class="flex flex-col items-center">
        <img
          src="/images/404-img.png"
          alt="Une illlustration représentant un ordinateur retro"
          class="w-full max-w-[500px]"
        >
        <p>
          Oups ! Il semblerait qu'une erreur soit survenue. N'hésitez pas à
          utiliser la navigation pour retourner sur le site
        </p>
      </div>
    </section>
    <LayoutTheFooter />
  </div>
</template>
