<script setup lang="ts">
import { Heading } from "#components";
</script>

<template>
  <header class="flex flex-col items-center bg-bdxio-blue-dark text-bdxio-font-light text-center section section-hero">
    <h1
      class="relative z-relative text-4xl mt-0 m:text-[42px] m:after:w-[400px] m:after:h-[50px] m:after:-bottom-[40px] 
        m:after:left-2/4 m:after:-translate-x-1/2"
    >
      En 2022,<br>Nous sommes de <span class="relative z-relative underlined">retour&nbsp;!</span>
    </h1>
    <div class="font-light mx-3 my-5 text-[28px]">
      On se retrouve au Palais des Congrès <br>
      de Bordeaux Lac
    </div>
    <time
      class="text-4xl text-bdxio-font-light italic p-[50px] date m:text-[40px] m:p-[60px]"
      datetime="2022-12-02"
    >
      02/12/2022
    </time>
    <Heading
      tag="h3"
      class="text-2xl mb-0 m:text-[32px] text-bdxio-font-light"
    >
      Et on a hâte de vous y (re)voir&nbsp;!
    </Heading>
  </header>
</template>

<style lang="css" scoped>
.underlined::after {
  content: "";
  display: block;
  position: absolute;
  width: 150px;
  height: 30px;
  right: 0;
  left: 0;
  bottom: -20px;
  background: url("/images/drawings/yellow_line_1.png") no-repeat center / cover;
}

.date {
  background: url("/images/drawings/purple_circle.png") no-repeat center / contain;
}
</style>
