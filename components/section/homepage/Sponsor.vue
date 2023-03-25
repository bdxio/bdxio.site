<script setup lang="ts">
// @ts-nocheck
import { SectionTitle } from "#components";
</script>

<template>
  <section class="section section-sponsor-call" id="become-sponsor">
    <div>
      <SectionTitle section tag="h2" color="light">sponsors</SectionTitle>
      <SectionTitle tag="h3" class="title" color="light">
        Embarquez avec nous dans l'aventure&nbsp;!
      </SectionTitle>
      <p>
        Vous souhaitez devenir sponsor de cette nouvelle édition&nbsp;? <br />
        En cliquant sur le bouton ci-dessous vous trouverez toutes les
        informations nécessaires.
      </p>
    </div>
    <button
      disabled
      class="button button-secondary button-secondary--grey disabled"
    >
      Non disponible
    </button>
  </section>
</template>

<style lang="scss" scoped>
.section-sponsor-call {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: $primary-light;
  color: $light-font;
}
</style>
