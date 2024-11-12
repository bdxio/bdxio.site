<script setup lang="ts">
import { EDITION } from "~/services/constants";

const { $featureFlags } = useNuxtApp();
</script>

<template>
  <section class="p-section w-full m:w-1/2 flex flex-col justify-between items-start bg-bdxio-yellow-base">
    <div>
      <HeadingSection
        level="2"
        class="text-xl"
      >
        PARTICIPANTS
      </HeadingSection>
      <Heading level="3">
        Vous aussi, rejoignez le navire&nbsp;!
      </Heading>
      <p>Rejoignez-nous au Palais des Congrès pour cette édition {{ EDITION }}.</p>
    </div>
    <LinkSecondary
      v-if="$featureFlags.pages.ticketing.links.ticketing"
      type="link"
      color="grey"
      to="/ticketing"
      class="flex flex-row items-center"
      aria-label="lien vers la billetterie - Nouvelle fenêtre"
    >
      Billetterie
    </LinkSecondary>
    <p
      v-else
      class="italic text-md mt-4"
    >
      Billetterie fermée
    </p>
  </section>
</template>
