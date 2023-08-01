<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { Heading, HeadingSection, IconOpenNewWindow, LinkSecondary } from "#components";
import { EDITION } from "~/services/constants";

const { $SHOW_LINK_BILLETERIE } = useNuxtApp();
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
      v-if="$SHOW_LINK_BILLETERIE"
      color="grey"
      to="https://www.billetweb.fr/bdxio-2023"
      target="_blank"
      class="flex flex-row items-center"
      aria-label="lien vers la billetterie - Nouvelle fenêtre"
    >
      Billetterie
      <IconOpenNewWindow
        color="#373739"
        border-color="#373739"
        class="ml-2 mt-1"
      />
    </LinkSecondary>
    <p
      v-else
      class="italic text-md"
    >
      Billetterie fermée
    </p>
  </section>
</template>
