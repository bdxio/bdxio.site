<script setup lang="ts">
import { SectionTitle, ButtonSecondary } from "#components";
</script>

<template>
  <section
    id="become-sponsor"
    class="section flex flex-col justify-between items-start bg-bdxio-blue-light text-bdxio-font-light"
  >
    <div>
      <SectionTitle
        section
        tag="h2"
        color="light"
      >
        sponsors
      </SectionTitle>
      <SectionTitle
        tag="h3"
        class="title"
        color="light"
      >
        Embarquez avec nous dans l'aventure&nbsp;!
      </SectionTitle>
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
