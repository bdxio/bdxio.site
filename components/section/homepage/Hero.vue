<script setup lang="ts">
import { Heading } from "#components";
import { EDITION } from "~/services/constants";
</script>

<template>
  <header class="flex flex-col items-center bg-bdxio-blue-dark text-bdxio-font-light text-center section">
    <Heading
      level="1"
      class="text-bdxio-font-light !mb-0"
    >
      En {{ EDITION }},<br> Nous sommes de retour&nbsp;!
    </Heading>
    <img
      src="/images/drawings/line-yellow.png"
      alt="Illustration d'une ligne jaune"
      class="-m-5 mb-4"
    >
    <p class="mb-3">
      On se retrouve au Palais des Congrès <br>de Bordeaux Lac
    </p>
    <!-- @TODO : Change this date -->
    <time
      class="font-title text-4xl m:text-5xl text-bdxio-font-light italic p-10 m:p-16 circle"
      datetime="2023-xx-xx"
    >
      xx/xx/2023
    </time>
    <p class="text-2xl m:text-3xl text-bdxio-font-light mt-4">
      Et on a hâte de vous y (re)voir&nbsp;!
    </p>
  </header>
</template>

<style scoped>
.circle {
  background: url("/images/drawings/circle-purple.png") no-repeat center / contain;
}
</style>
