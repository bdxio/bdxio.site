<script setup lang="ts">
// @ts-nocheck
import { definePageMeta, useHead, useAPI, computed, useNuxtApp, createError } from "#imports";
import { Heading } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

const {$SHOW_PAGE_LIVE} = useNuxtApp();

if (!$SHOW_PAGE_LIVE) {
  throw createError({ statusCode: 404 });
}

definePageMeta({ layout: "page" });
useHead({ title: `Live 🎥 | ${ASSOCIATION_NAME}` });

const { data } = await useAPI("/rooms", {
  params: { sort: "name" },
});

const rooms = data.value
  .filter((r) => r.iframeId)
  .map(({ name, iframeId }) => ({ name, iframeId }));

const iframeDimensions = computed(() => {
  return {
    width: globalThis.window?.innerWidth,
    height: globalThis.window?.innerHeight,
  };
});
</script>

<template>
  <main class="section bg-white section-live">
    <header class="flex flex-col justify-center items-center text-center section-live__header">
      <Heading
        level="1"
        class="relative z-relative title m:before:w-[120px] m:before:h-[120px] m:before:-left-[110px]
        m:after:w-[120px] m:after:h-[120px] m:after:-right-[110px]"
      >
        Le live
      </Heading>
    </header>
    <section class="mt-[60px] m:mt-[100px] section-live__body">
      <ul
        v-if="rooms.length"
        tag="ul"
        class="flex flex-row"
        gutter-s
      >
        <li
          v-for="room in rooms"
          :key="room.name"
          class="basis-full m:basis-1/2 w-full overflow-hidden mb-8"
        >
          <div class="font-bold mb-2">
            {{ room.name }}
          </div>
          <div class="relative z-relative w-full h-0 pb-[56.25%]  room__video">
            <iframe
              :width="iframeDimensions.width"
              :height="iframeDimensions.height"
              :src="`https://www.youtube.com/embed/${room.iframeId}`"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="!absolute top-0 left-0 w-full h-full"
            />
          </div>
        </li>
      </ul>
      <p
        v-else
        class="text-center"
      >
        Aucun live actuellement, merci de réessayer pendant l'évènement
      </p>
    </section>
  </main>
</template>

<style lang="css" scoped>
.title::before {
    content: "";
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  left: -70px;
  bottom: -10px;
  background: url("/images/drawings/blue_presentation_left.png") center
    no-repeat;
  background-size: cover;
}

.title::after {
  content: "";
  display: block;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: -1;
  right: -70px;
  bottom: -10px;
  background: url("/images/drawings/blue_presentation_right.png") center
    no-repeat;
  background-size: cover;
}
</style>
