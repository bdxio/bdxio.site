<script setup lang="ts">
import type { Edition } from "@bdxio/bdxio.types";

const props = defineProps<{
  edition: Edition;
}>();
</script>
  
<template>
  <header class="flex flex-col items-center bg-bdxio-blue-dark text-bdxio-light text-center p-section">
    <Heading
      level="1"
      class="text-bdxio-light !mb-0 text-4xl m:text-[42px]"
    >
      BDX I/O Édition {{ props.edition.year }}
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
      Elle a eu lieu au Palais des Congrès de Bordeaux Lac<br> <br> le {{ displayDate(edition.date) }}
    </p>
    <p class="font-title text-bdxio-light mt-4 text-3xl m:text-[32px]">
      Et c'était le feu ! 🔥
    </p>
  </header>
</template>
  
  <style scoped lang="css">
.circle {
  background: url("/images/drawings/circle-purple.webp") no-repeat center / contain;
}
</style>
