<script setup lang="ts">
import { Heading, HeadingSection, LinkSecondaryNuxt } from "#components";
import { useNuxtApp } from "#imports";

const { $SHOW_LINK_SPONSORING } = useNuxtApp();
</script>

<template>
  <section class="p-section flex flex-col items-start bg-bdxio-blue-dark text-bdxio-light">
    <div>
      <HeadingSection
        level="2"
        class="text-bdxio-light text-subtitle"
      >
        sponsors
      </HeadingSection>
      <Heading
        level="3"
        class="title text-bdxio-light"
      >
        Embarquez avec nous dans l'aventure&nbsp;!
      </Heading>
      <p>
        Vous souhaitez devenir sponsor de cette nouvelle édition&nbsp;? <br>
        En cliquant sur le bouton ci-dessous vous trouverez toutes les
        informations nécessaires.
      </p>
    </div>
    <LinkSecondaryNuxt
      v-if="$SHOW_LINK_SPONSORING"
      to="/sponsors"
      color="white"
      class="mt-8"
    >
      Devenir sponsor
    </LinkSecondaryNuxt>
    <p
      v-else
      class="italic text-md mt-4"
    >
      Sponsoring fermé
    </p>
  </section>
</template>
