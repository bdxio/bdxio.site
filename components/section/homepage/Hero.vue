<script setup lang="ts">
import { Heading, NuxtImg } from "#components";
import { EDITION } from "~/services/constants";
</script>

<template>
  <header class="flex flex-col items-center bg-bdxio-blue-dark text-bdxio-light text-center p-section">
    <Heading
      level="1"
      class="text-bdxio-light !mb-0 text-4xl m:text-[42px]"
    >
      En {{ EDITION }},<br> Nous sommes de retour&nbsp;!
    </Heading>
    <NuxtImg
      src="/images/drawings/line-yellow.webp"
      alt=""
      :aria-hidden="true"
      class="-m-5 mb-4"
      preload
      width="450"
      height="71"
    />
    <p class="mb-3 text-[28px]">
      On se retrouve au Palais des Congrès <br>de Bordeaux Lac
    </p>
    <time
      class="font-title text-title text-bdxio-light italic p-10 m:p-16 circle"
      datetime="2023-11-10"
    >
      10/11/2023
    </time>
    <p class="font-title text-bdxio-light mt-4 text-3xl m:text-[32px]">
      Et on a hâte de vous y (re)voir&nbsp;!
    </p>
  </header>
</template>

<style scoped lang="css">
.circle {
  background: url("/images/drawings/circle-purple.webp") no-repeat center / contain;
}
</style>
