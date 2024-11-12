<script setup lang="ts">
const { $featureFlags } = useNuxtApp();
</script>

<template>
  <section class="p-section w-full m:w-1/2 flex flex-col items-start bg-bdxio-blue-dark text-bdxio-light">
    <div>
      <HeadingSection
        level="2"
        class="text-bdxio-light text-xl"
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
    <LinkSecondary
      v-if="$featureFlags.pages.sponsors.links.downloadPdf"
      type="nuxt"
      to="/sponsors"
      color="white"
      class="mt-8"
    >
      Devenir sponsor
    </LinkSecondary>
    <p
      v-else
      class="italic text-md mt-4"
    >
      Sponsoring fermé
    </p>
  </section>
</template>
