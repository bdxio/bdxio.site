<script setup lang="ts">
import { Heading, HeadingSection, LinkSecondaryNuxt } from "#components";
</script>

<template>
  <section class="p-section flex flex-col justify-between items-start bg-bdxio-blue-light text-bdxio-light">
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
      to="/sponsors"
      color="white"
      class="mt-8"
    >
      Devenir sponsor
    </LinkSecondaryNuxt>
  </section>
</template>
