<template >
  <header class="section section-hero">
    <h1 class="section-hero__title">En 2022,<br />Nous sommes de retour !</h1>
    <div class="section-hero__place">
      On se retrouve au Palais des Congrès <br />
      de Bordeaux Lac
    </div>
    <time
      class="section-hero__date"
      datetime="2022-12-02"
    >02/12/2022</time>
    <section-title
      tag="h2"
      class="section-hero__invitation"
    >Et on a hâte de vous y (re)voir !</section-title>
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
  // padding: $spc-l;

  &__title {
    position: relative;
    font-size: 35px;
    margin-top: 0;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 150px;
      height: 30px;
      right: 20px;
      bottom: -20px;
      background: url("~/assets/img/drawings/yellow_line_1.png") no-repeat
        center / cover;
    }
  }

  &__place {
    font-size: 28px;
    font-weight: $font-weight-light;
    margin: $spc-s $spc-l;
  }

  &__date {
    font-size: 35px;
    font-family: $font-family-title;
    font-weight: $font-weight-bold;
    font-style: $font-style-italic;
    padding: 50px; //50px
    background: url("~/assets/img/drawings/purple_circle.png") no-repeat center /
      contain;
  }

  &__invitation {
    font-size: 24px;
    margin-bottom: 0;
  }

  // @include mobileFirst(s) {
  //   padding: $spc-l 80px;
  // }

  @include mobileFirst(m) {
    // padding: 100px 0;
    &__title {
      font-size: 42px;

      &:after {
        width: 400px;
        height: 50px;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__date {
      font-size: 40px;
      padding: 60px;
    }

    &__invitation {
      font-size: 32px;
    }
  }
}
</style>
