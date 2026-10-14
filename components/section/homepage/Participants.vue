<script setup lang="ts">
import { TICKETING_URL } from '~/services/constants';
import type { Edition } from '~/types';

const { edition } = defineProps<{
  edition: Edition;
}>();

const { $featureFlags } = useNuxtApp();
</script>

<template>
  <section
    class="p-section w-full m:flex-1 flex flex-col justify-between items-start bg-bdxio-yellow-base"
  >
    <div>
      <HeadingSection level="2" class="text-xl"> PARTICIPANTS </HeadingSection>
      <Heading level="3"> Vous aussi, rejoignez le navire&nbsp;! </Heading>
      <p>Rejoignez-nous <ItemLocationSpanWithLink :edition="edition" /> pour cette édition {{ edition.year }}.</p>
    </div>
    <LinkSecondary
      v-if="$featureFlags.pages.ticketing.links.ticketing"
      type="link"
      color="grey"
      :to="TICKETING_URL"
      target="_blank"
      class="flex flex-row items-center mt-8"
      aria-label="lien vers la billetterie - Nouvelle fenêtre"
    >
      Billetterie
    </LinkSecondary>
    <p v-else class="italic text-md mt-4">Billetterie fermée</p>
  </section>
</template>
