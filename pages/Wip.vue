<script setup lang="ts">
import { definePageMeta, useHead, useNuxtApp, type Ref, useAPI } from "#imports";
import {
  SectionWip,
} from "#components";
import { ASSOCIATION_NAME, EDITION } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

useHead({ title: ASSOCIATION_NAME });
definePageMeta({ layout: "empty" });
const { $SHOW_PAGE_WIP } = useNuxtApp();

if (!$SHOW_PAGE_WIP) {
  throw createError({ statusCode: 404 });
}

const { data }: { data: Ref<Edition[]> } = await useAPI("/editions", { params: {
  "filters[year][$eq]": EDITION,
  "fields[0]": "youtubePlaylistUrl",
  "fields[1]": "picturesGalleryUrl",
} });

if (!data.value.length) {
  throw createError({ statusCode: 400, message: "Edition not found in CMS" });
}

</script>

<template>
  <main class="flex flex-col items-center justify-center ">
    <SectionWip
      :youtubePlaylistUrl="data[0].youtubePlaylistUrl"
      :picturesGalleryUrl="data[0].picturesGalleryUrl"
    />
  </main>
</template>
