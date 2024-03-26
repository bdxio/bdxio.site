<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { Heading, HeadingSection, LinkSecondary } from "#components";
import { EDITION } from "~/services/constants";

const { $featureFlags } = useNuxtApp();
</script>

<template>
  <section class="p-section flex flex-col justify-between items-start bg-bdxio-yellow-base w-full">
    <div>
      <HeadingSection
        level="2"
        class="text-subtitle"
      >
        PARTICIPANTS
      </HeadingSection>
      <Heading level="3">
        Vous aussi, rejoignez le navire&nbsp;!
      </Heading>
      <p>Rejoignez-nous au Palais des Congrès pour cette édition {{ EDITION }}.</p>
    </div>
    <LinkSecondary
      v-if="$featureFlags.links.billeterie"
      type="link"
      color="grey"
      to="https://www.billetweb.fr/bdxio-2023"
      class="flex flex-row items-center"
      aria-label="lien vers la billetterie - Nouvelle fenêtre"
      new-window
    >
      Billetterie
    </LinkSecondary>
    <p
      v-else
      class="italic text-md"
    >
      Billetterie fermée
    </p>
  </section>
</template>
