<script setup lang="ts">
import { useHead, useAPI, computed, ref } from "#imports";
import { Heading, NuxtLink, SectionTalkSpeakerPicture } from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";
import type { Ref } from "vue";
import type { Category, Talk } from "@bdxio/bdxio.types";

useHead({ title: `Talks | ${ASSOCIATION_NAME}` });

const ALL = "all";
const currentFilter = ref(ALL);

const [{ data: categories }, { data: talks }]: [{ data: Ref<Category[]> }, { data: Ref<Talk[]> }] =
  await Promise.all([
    useAPI("/categories", { params: { populate: "*" } }),
    useAPI("/talks", { params: {
      "populate": "*",
      "pagination[limit]": 100,
      "sort": "title:asc",
      "filters[edition][year][$eq]": EDITION,
      "filters[type][$eq]": "standard",
    } }),
  ]);

const filteredTalks = computed(() => {
  if (!talks.value?.length) return [];
  if (currentFilter.value === ALL) return talks.value;
  return talks.value.filter((talk) => talk.category?.id.toString() === currentFilter.value);
});

function setFilter(categoryId: string) {
  currentFilter.value = categoryId;
}
</script>

<template>
  <main class="p-section bg-white flex flex-col">
    <Heading
      level="1"
      class="title relative block mx-auto !mb-16"
    >
      Les talks
    </Heading>
    <div>
      <ul
        v-if="categories.length"
        class="flex flex-wrap justify-center gap-12 w-1/2 mx-auto mb-20"
      >
        <li
          class="text-center"
          @click="setFilter(ALL)"
        >
          <input
            :id="ALL"
            v-model="currentFilter"
            type="radio"
            :value="ALL"
            class="hidden"
            :class="{ active: currentFilter === ALL }"
          >
          <label
            :for="ALL"
            class="cursor-pointer border-black"
          >
            Tous
          </label>
        </li>
        <li
          v-for="category in categories"
          :key="`filter-${category.id}`"
          class="text-center"
          @click="setFilter(category.id.toString())"
        >
          <input
            :id="category.name"
            v-model="currentFilter"
            type="radio"
            :value="category.id.toString()"
            class="hidden"
            :class="{ active: currentFilter === category.id.toString() }"
          >
          <label
            :for="category.name"
            class="cursor-pointer"
            :style="{
              'border-color': category.color,
            }"
          >
            {{ category.name }}
          </label>
        </li>
      </ul>
      <ul class="flex flex-wrap justify-center gap-8">
        <li
          v-for="talk in filteredTalks"
          :key="`talk-${talk.id}`"
          class="flex flex-col justify-between cursor-pointer p-4 border-2 border-solid rounded-lg w-full l:w-1/5"
          :style="{
            'border-color': talk.category?.color || 'black',
          }"
        >
          <NuxtLink :to="`/talks/${talk.id}`">
            <div>
              <h2 class="text-lg">
                {{ talk.title }}
              </h2>
              <span class="font-light italic">{{ talk.level }}</span>
              <p
                v-if="talk.category?.name"
                class="font-bold"
                :style="{ color: talk.category?.color }"
              >
                {{ talk.category?.name }}
              </p>
            </div>
            <div
              v-if="talk.speakers?.length"
              class="flex"
            >
              <SectionTalkSpeakerPicture
                v-for="speaker in talk.speakers"
                :key="`speaker-${speaker.id}`"
                :speaker="speaker"
                size="small"
                class="!mr-2 mt-5"
              />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.title {
  &:before {
    content: "";
    display: block;
    width: 120px;
    height: 120px;
    position: absolute;
    left: -110px;
    bottom: -20px;
    background: url("/images/drawings/blue_presentation_left.webp") center
      no-repeat;
    background-size: cover;
  }

  &:after {
    content: "";
    display: block;
    width: 120px;
    height: 120px;
    position: absolute;
    right: -110px;
    bottom: -20px;
    background: url("/images/drawings/blue_presentation_right.webp") center
      no-repeat;
    background-size: cover;
  }
}

input:checked + label {
  padding-bottom: 5px;
  border-bottom: 3px solid;
}
</style>
