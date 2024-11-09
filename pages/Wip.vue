<script setup lang="ts">
import { ASSOCIATION_NAME, PREVIOUS_EDITION } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

useHead({ title: ASSOCIATION_NAME });
definePageMeta({ layout: "empty" });

const { $featureFlags } = useNuxtApp();

if (!$featureFlags.pages.wip) {
  throw createError({ statusCode: 404 });
}

const { data }: { data: Ref<Edition[]> } = await useAPI("/editions", { params: {
  "filters[year][$eq]": PREVIOUS_EDITION,
  "fields[0]": "youtubePlaylistUrl",
  "fields[1]": "picturesGalleryUrl",
} });

if (!data.value.length) {
  throw createError({ statusCode: 400, message: "Edition not found in CMS" });
}

const { youtubePlaylistUrl, picturesGalleryUrl } = data.value[0];
</script>

<template>
  <main class="flex flex-col items-center justify-center ">
    <header
      class="flex flex-col items-center  text-bdxio-light
  text-center p-section"
    >
      <Heading
        level="1"
        class="text-bdxio-light !mb-0 text-4xl m:text-[42px]"
      >
        La conférence technologique <br>bordelaise revient bientôt&nbsp;!
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
      <p class="mb-3 italic text-2xl font-light">
        BDX I/O {{ PREVIOUS_EDITION }} c’est terminé ! On vous remercie tous <br>
        chaleureusement pour votre présence et <br>votre soutien.
      </p>
      <div
        v-if="youtubePlaylistUrl || picturesGalleryUrl"
        class="mt-12 flex flex-col items-center md:flex-row gap-8"
      >
        <LinkSecondary
          v-if="picturesGalleryUrl"
          type="link"
          color="white"
          :to="picturesGalleryUrl"
          class="flex items-center"
          :aria-label="`lien vers la galerie des photos de ${ASSOCIATION_NAME} ${PREVIOUS_EDITION}  - Nouvelle fenêtre`"
          new-window
        >
          Galerie photos
        </LinkSecondary>
        <LinkPrimary
          v-if="youtubePlaylistUrl"
          type="link"
          color="light"
          class="flex items-center"
          :href="youtubePlaylistUrl"
          :aria-label="`lien vers la playlist youtube du replay de l'édition ${PREVIOUS_EDITION} de
        ${ASSOCIATION_NAME} - Nouvelle fenêtre`"
          new-window
        >
          Replay {{ PREVIOUS_EDITION }}
        </LinkPrimary>
      </div>
    </header>
  </main>
</template>
