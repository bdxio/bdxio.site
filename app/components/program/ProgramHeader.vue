<template>
  <div class="section section-program">
    <header class="section-program__header">
      <section-title tag="h1" class="section-program__header__title"> Le programme de la journée </section-title>
      <a class="button button-icon button-secondary button-secondary--light button-sm" href="#" target="_blank">
        Télécharger en PDF
      </a>
    </header>
  </div>
</template>

<script>
export default {
  name: "programHeader"
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
}
</style>
