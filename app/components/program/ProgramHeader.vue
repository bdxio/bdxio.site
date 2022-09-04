<template>
  <div class="section section-program">
    <header class="section-program__header">
      <section-title tag="h1" class="section-program__header__title"> Le programme de la journée </section-title>
      <a class="button button-icon button-secondary button-secondary--light" href="#" target="_blank">
        Télécharger en PDF
      </a>
    </header>
  </div>
</template>

<script>
export default {
  name: "associationSectionPresentation",
  computed: {
    showProgramme() {
      return this.$showProgramme ?? false;
    }
  }
};
</script>

<style lang="scss" scoped>
.section-program {
  background-color: $white;
  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__title {
      @include positionRelative;
      margin-bottom: $spc-m;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 92px;
        height: 63px;
        z-index: -1;
        background: url("~/assets/img/drawings/purple_highlight.png") center no-repeat;
      }

      &:before {
        left: -92px;
        top: -40px;
        transform: rotate(-90deg);
      }

      &:after {
        right: -92px;
        top: -30px;
        transform: rotate(60deg);
      }
    }
  }

  &__body {
    margin-top: 100px;
    justify-content: space-between;

    &__content {
      margin-bottom: 100px;
      margin-top: $spc-m;

      @include mobileFirst(l) {
        max-width: 500px;
        margin-bottom: 0;
      }

      @include mobileFirst(xl) {
        max-width: 650px;
      }

      &__pre-title {
        color: $green;
      }

      &__title {
        margin: $spc-s 0;

        .boxed {
          position: relative;

          &::after {
            content: "";
            width: 240px;
            height: 100px;
            position: absolute;
            z-index: 0;
            background: url("~/assets/img/drawings/green_box.png") center no-repeat;
            background-size: cover;
            top: -10px;
            left: -20px;
          }
        }
      }

      &__description {
        margin-top: $spc-m;
      }

      .button {
        margin-top: $spc-xxxl;
      }
    }

    &__imgs {
      display: flex;
      gap: $spc-m;

      &__column {
        width: 50%;
      }
      .picture {
        width: 100%;
        margin-bottom: $spc-m;
      }
    }
  }
}
</style>
