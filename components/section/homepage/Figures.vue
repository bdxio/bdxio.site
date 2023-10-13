<script setup lang="ts">
import { Counter } from "#components";
</script>

<template>
  <section class="grid grid-rows-4 grid-cols-2 m:grid-rows-2 m:grid-cols-12">
    <NuxtImg
      src="/images/conferences/home-1.png"
      class="w-full h-full object-cover inline-flex row-start-1 col-start-1 col-end-2 m:col-start-1 m:col-end-5 max-h-[280px]"
      loading="lazy"
    />
    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark p-4 row-start-1 col-start-2 col-end-3 m:row-start-1 m:col-start-5 m:col-end-7 max-h-[280px]"
    >
      <p class="m-0 font-bold text-5xl xs:text-[82px] font-title leading-none">
        <Counter :value="7" />
      </p>
      <p class="font-title text-bold text-3xl m-3">Thématiques</p>
      <p class="m-0 mb-4">Du dev, de la méthodo jusqu'au design</p>
    </div>
    <NuxtImg
      src="/images/conferences/home-2.webp"
      class="w-full h-full object-cover inline-flex row-start-2 col-start-2 col-end-3 m:row-start-1 m:col-start-7 m:col-end-11 max-h-[280px]"
      loading="lazy"
      height=""
    />
    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark p-4 row-start-2 col-start-1 col-end-2 m:row-start-1 m:col-start-11 m:col-end-13 max-h-[280px]"
    >
      <p class="m-0 font-bold text-5xl xs:text-[82px] font-title leading-none">
        <Counter :value="6" />
      </p>
      <p class="font-title text-bold text-3xl m-3">Amphis</p>
      <p class="m-0 mb-4">Toujours une conf à votre goût !</p>
    </div>
    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark p-4 row-start-3 col-start-2 col-end-3 m:row-start-2 m:col-start-1 m:col-end-3 max-h-[280px]"
    >
      <p class="m-0 font-bold text-5xl xs:text-[82px] font-title leading-none">
        <Counter :value="50" />
      </p>
      <p class="font-title text-bold text-3xl m-3">Conférences</p>
      <p class="m-0 mb-4">Une répartition à 50% de bordelais&nbsp;!</p>
    </div>

    <NuxtImg
      src="/images/conferences/home-3.webp"
      class="w-full h-full object-cover inline-flex row-start-3 col-start-1 col-end-2 m:row-start-2 m:col-start-3 m:col-end-7 max-h-[280px]"
      loading="lazy"
      height=""
    />

    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark p-4 row-start-4 col-start-1 col-end-2 m:row-start-2 m:col-start-7 m:col-end-9 max-h-[280px]"
    >
      <p class="m-0 font-bold text-5xl xs:text-[82px] font-title leading-none">
        <Counter :value="900" :step="25" />
      </p>
      <p class="font-title text-bold text-3xl m-3">Participant·e·s</p>
      <p class="m-0 mb-4">Réunis autour d'une ambiance familliale</p>
    </div>

    <NuxtImg
      src="/images/conferences/home-4.png"
      class="w-full h-full object-cover inline-flex row-start-4 col-start-2 col-end-3 m:row-start-2 m:col-start-9 m:col-end-13 max-h-[280px]"
      loading="lazy"
      height=""
    />
  </section>
</template>
