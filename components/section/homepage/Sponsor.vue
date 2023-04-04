<script setup lang="ts">
import { Heading, HeadingSection, ButtonSecondary } from "#components";
</script>

<template>
  <section
    id="become-sponsor"
    class="section flex flex-col justify-between items-start bg-bdxio-blue-light text-bdxio-font-light"
  >
    <div>
      <HeadingSection
        level="2"
        class="text-bdxio-font-light text-subtitle"
      >
        sponsors
      </HeadingSection>
      <Heading
        level="3"
        class="title text-bdxio-font-light"
      >
        Embarquez avec nous dans l'aventure&nbsp;!
      </Heading>
      <p>
        Vous souhaitez devenir sponsor de cette nouvelle édition&nbsp;? <br>
        En cliquant sur le bouton ci-dessous vous trouverez toutes les
        informations nécessaires.
      </p>
    </div>
    <ButtonSecondary
      color="grey"
      disabled
    >
      Non disponible
    </ButtonSecondary>
  </section>
</template>
