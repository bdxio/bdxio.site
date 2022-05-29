<template>
  <section class="section section-sponsor-call">
    <div>
      <section-title section tag="h2" color="light">sponsors</section-title>
      <section-title tag="h3" class="title" color="light"
        >Embarquez avec nous dans l'aventure&nbsp;!</section-title
      >
      <p>
        Vous souhaitez devenir sponsor de cette nouvelle édition&nbsp;? <br />
        En cliquant sur le bouton ci-dessous vous trouverez toutes les
        informations nécessaires.
      </p>
    </div>

    <button class="button outlined-light">
      <NuxtLink to="/sponsors">Devenir sponsor</NuxtLink>
    </button>
  </section>
</template>

<script>
export default {
  name: "SectionSponsor",
};
</script>

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
