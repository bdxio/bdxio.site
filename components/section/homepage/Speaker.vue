<script setup lang="ts">
import type { Edition } from "~/services/constants";

const props = defineProps<{
  edition?: Edition;
}>();

const edition = props.edition || useEdition();
const { $featureFlags } = useNuxtApp();
</script>

<template>
  <section class="p-section flex flex-col justify-between items-start bg-bdxio-yellow-base w-full">
    <div>
      <HeadingSection
        level="2"
        class="text-xl"
      >
        Speakers
      </HeadingSection>
      <Heading level="3">
        Vous aussi, rejoignez le navire&nbsp;!
      </Heading>
      <p>
        Vous avez un talk à proposer&nbsp;? Des idées à partager&nbsp;?
        <br>Rejoignez notre équipe de speakers pour cette édition {{ edition }}.
      </p>
    </div>
    <LinkSecondary
      v-if="$featureFlags.links.cfp"
      type="link"
      color="grey"
      to="https://conference-hall.io/public/event/VORL07zbTZ8CBB8kOVgq"
      class="flex flex-row items-center"
      aria-label="lien vers le CFP (call for paper) pour devenir speaker - Nouvelle fenêtre"
      new-window
    >
      Devenir speaker
    </LinkSecondary>
    <p
      v-else
      class="italic text-md"
    >
      Inscriptions clôturées
    </p>
  </section>
</template>
