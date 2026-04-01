<script setup lang="ts">
import { LOCATION } from "~/services/constants";
import type { Edition } from "@bdxio/bdxio.types";

const { edition } = defineProps<{
  edition: Edition;
}>();

const location = getEditionLocation(edition);
</script>

<template>
  <span v-if="location === LOCATION.ENSEIRB">à
    <a
      href="https://maps.app.goo.gl/dZMB4YFLcWm3jmTx6"
      target="_blank"
      aria-label="lien vers l'ENSEIRB-MATMECA' sur Google Maps - Nouvelle fenêtre"
      class="text-bdxio-blue-light"
    >l'ENSEIRB-MATMECA</a>
    de Talence
  </span>
  <span v-else>
    au
    <a
      href="https://goo.gl/maps/aScUymM4T4DqeBvz8"
      target="_blank"
      aria-label="lien vers le Palais des congrès sur Google Maps - Nouvelle fenêtre"
      class="text-bdxio-blue-light"
    >Palais des Congrès</a>
    de Bordeaux Lac
  </span>
</template>
