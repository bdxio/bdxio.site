<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Room } from "@bdxio/bdxio.types";

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.live) {
  throw createError({ statusCode: 404 });
}

useHead({
  title: `We're live | ${ASSOCIATION_NAME}`,
});

const { data }: { data: Ref<Room[]> } = await useAPI("/rooms", {
  params: {
    "filters[iframeId][$notNull]": "true",
    "sort": "name:asc",
  },
});
</script>

<template>
  <main>
    <section class="p-section">
      <Heading
        level="1"
        class="!relative !z-10 title w-fit mx-auto"
      >
        Le live
      </Heading>
      <ul
        v-if="data.length"
        class="flex flex-wrap gap-10 justify-center my-8"
      >
        <li
          v-for="room in data"
          :key="room.id"
        >
          <div class="">
            {{ room.name }}
          </div>
          <iframe
            width="450"
            height="250"
            :src="`https://www.youtube.com/embed/${room.iframeId}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </li>
      </ul>
      <p v-else>
        Pas de live pour le moment !
      </p>
    </section>
  </main>
</template>

<style scoped lang="css">
.title::after {
  content: "";
  display: block;
  width: 140px;
  height: 70px;
  position: absolute;
  right: -100px;
  bottom: -30px;
  z-index: -1;
  background-image: url("/images/drawings/yellow_scribbles.webp");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
