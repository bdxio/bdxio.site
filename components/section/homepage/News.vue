<script setup lang="ts">
import { Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";
</script>

<template>
  <section class="section flex flex-col gap-[50px] text-bdxio-blue-dark m:gap-[80px] m:items-center">
    <Heading
      tag="h2"
      class="text-center mt-0 mb-5 l:mb-[80px]"
    >
      Les dernières actualités
    </Heading>
    <div class="flex overflow-x-auto gap-[35px]">
      <div class="flex flex-col max-w-[310px]">
        <img
          src="/images/team.png"
          :alt="`Photographie de l'équipe ${ASSOCIATION_NAME}`"
          class="max-w-[310px] mb-4"
        >
        <span class="mb-1 font-bold text-[30px] leading-9">Title 1</span>
        <span class="font-normal leading-8">
          Exemple de description d’une actualité très intéressante qui est
          arrivée recemment
        </span>
      </div>
      <div class="flex flex-col max-w-[310px]">
        <img
          src="/images/team.png"
          :alt="`Photographie de l'équipe ${ASSOCIATION_NAME}`"
          class="max-w-[310px] mb-4"
        >
        <span class="mb-1 font-bold text-[30px] leading-9">Title 2</span>
        <span class="font-normal leading-8">
          Exemple de description d’une actualité très intéressante qui est
          arrivée recemment
        </span>
      </div>
      <div class="flex flex-col max-w-[310px]">
        <img
          src="/images/team.png"
          :alt="`Photographie de l'équipe ${ASSOCIATION_NAME}`"
          class="max-w-[310px] mb-4"
        >
        <span class="mb-1 font-bold text-[30px] leading-9">Title 3</span>
        <span class="font-normal leading-8">
          Exemple de description d’une actualité très intéressante qui est
          arrivée recemment
        </span>
      </div>
    </div>
  </section>
</template>