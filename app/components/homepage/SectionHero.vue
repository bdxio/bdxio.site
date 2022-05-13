<template functional>
  <header class="section-hero">
    <h1 class="section-hero__title">En 2022,<br />Nous sommes de retour !</h1>
    <p class="section-hero__place">
      On se retrouve au Palais des Congrès <br />
      de Bordeaux Lac
    </p>
    <time
      class="section-hero__date"
      datetime="2022-12-02"
    >02/12/2022</time>
    <h2 class="section-hero__invitation">Et on a hâte de vous y (re)voir !</h2>
  </header>
</template>

<script>
export default {
  name: "SectionHero",
};
</script>

<style lang="scss" scoped>
.section-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $primary-dark;
  color: $light-font;
  text-align: center;
  padding: 100px 0;

  &__title {
    font-size: 2.625rem; // 42px
    position: relative;
    margin-top: 0;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      width: 400px;
      height: 50px;
      background: url("~/assets/img/bdx_drawings/yellow_line_1.png") no-repeat
        center / cover;
    }
  }

  &__place {
    font-size: 1.75rem; //28px
  }

  &__date {
    font-size: $font-size-title;
    font-family: $font-family-title;
    font-weight: $font-weight-bold;
    font-style: $font-style-italic;
    padding: 3.125rem; //50px
    background: url("~/assets/img/bdx_drawings/purple_circle.png") no-repeat
      center / contain;
  }

  &__invitation {
    font-size: 2rem; //32px
    margin-bottom: 0;
  }
}
</style>
