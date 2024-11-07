<script setup lang="ts">
import { ASSOCIATION_NAME } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

const { edition } = defineProps<{
  edition: Edition
}>();

</script>

<template>
  <header class="flex flex-col items-center bg-bdxio-blue-dark text-bdxio-light text-center p-section">
    <Heading
      level="1"
      class="text-bdxio-light !mb-0 text-4xl m:text-[42px]"
    >
      Êtes-vous prêt(e) pour {{ ASSOCIATION_NAME }} {{ edition.year }}&nbsp;?
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
      On se retrouve au <a
        href="https://goo.gl/maps/aScUymM4T4DqeBvz8"
        target="_blank"
        aria-label="lien vers le palais des congrès sur google maps - Nouvelle fenêtre"
        class="text-bdxio-blue-light"
      >Palais des Congrès</a> de Bordeaux Lac
    </p>
    <div class="flex gap-4 items-center mt-10">
      <LinkPrimary
        type="link"
        color="light"
        href="https://app.imagina.com/bdx-io"
        title="lien vers l'application Imagina - Nouvelle fenêtre"
        class="flex items-center"
        new-window
      >
        Télécharger l'application Imagina
      </LinkPrimary>
      <LinkPrimary
        v-if="$featureFlags.pages.live"
        type="link"
        color="white"
        href="/live"
        aria-label="Lien vers la page live"
      >
        Voir le live
        <div class="live" />
      </LinkPrimary>
    </div>
  </header>
</template>

<style scoped lang="css">
.circle {
  background: url("/images/drawings/circle-purple.webp") no-repeat center / contain;
}

.live {
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  animation-name: pulse;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes pulse {
  0% {
    box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);
  }
  65% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);
  }
  90% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);
  }
}

</style>
