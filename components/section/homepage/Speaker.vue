<script setup lang="ts">
import { useNuxtApp } from "#imports";
import { Heading, HeadingSection, IconOpenNewWindow, LinkSecondary } from "#components";
import { EDITION } from "~/services/constants";

const { $SHOW_LINK_CFP } = useNuxtApp();
</script>

<template>
  <section class="p-section flex flex-col justify-between items-start bg-bdxio-yellow-base w-full">
    <div>
      <HeadingSection
        level="2"
        class="text-subtitle"
      >
        Speakers
      </HeadingSection>
      <Heading level="3">
        Vous aussi, rejoignez le navire&nbsp;!
      </Heading>
      <p>
        Vous avez un talk à proposer&nbsp;? Des idées à partager&nbsp;?
        <br>Rejoignez notre équipe de speakers pour cette édition {{ EDITION }}.
      </p>
    </div>
    <LinkSecondary
      v-if="$SHOW_LINK_CFP"
      color="grey"
      to="https://conference-hall.io/public/event/VORL07zbTZ8CBB8kOVgq"
      target="_blank"
      class="flex flex-row items-center"
      aria-label="lien vers le CFP (call for paper) pour devenir speaker - Nouvelle fenêtre"
    >
      Devenir speaker
      <IconOpenNewWindow
        color="#373739"
        border-color="#373739"
        class="ml-2"
      />
    </LinkSecondary>
    <p
      v-else
      class="italic text-md"
    >
      Inscriptions bientôt ouvertes
    </p>
  </section>
</template>
