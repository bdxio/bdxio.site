<script setup lang="ts">
import { Heading, NuxtImg, LinkSecondary } from "#components";
import { EDITION, ASSOCIATION_NAME } from "~/services/constants";

defineProps<{
  youtubePlaylistUrl?: string;
  picturesGalleryUrl?: string;
}>();

</script>

<template>
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
    <p class="mb-3 text-[28px] font-light">
      BDX I/O {{ EDITION }} c’est terminé ! On vous remercie tous <br>
      chaleureusement pour votre présence et <br>votre soutien.
    </p>
    <div
      v-if="youtubePlaylistUrl || youtubePlaylistUrl"
      class="mt-12 flex flex-col items-center md:flex-row gap-8"
    >
      <LinkSecondary
        v-if="picturesGalleryUrl"
        type="link"
        color="white"
        :to="picturesGalleryUrl"
        target="_blank"
        class="flex items-center"
        :aria-label="`lien vers la galerie des photos de ${ASSOCIATION_NAME} ${EDITION}  - Nouvelle fenêtre`"
      >
        Galerie photo
        <IconOpenNewWindow
          color="#FFFFFF"
          border-color="#373739"
          class="ml-2 mt-1"
        />
      </LinkSecondary>
      <LinkPrimary
        v-if="youtubePlaylistUrl"
        color="light"
        class="flex items-center"
        target="_blank"
        :href="youtubePlaylistUrl"
        :aria-label="`lien vers la playlist youtube du replay de l'édition ${EDITION} de
        ${ASSOCIATION_NAME} - Nouvelle fenêtre`"
      >
        Replay {{ EDITION }}
        <IconOpenNewWindow
          color="#FFFFFF"
          border-color="#373739"
          class="ml-2 mt-1"
        />
      </LinkPrimary>
    </div>
  </header>
</template>
