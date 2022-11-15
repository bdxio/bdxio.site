<template>
  <main class="section section-sponsors-2022">
    <header class="section-sponsors-2022__header">
      <section-title tag="h1" class="section-sponsors-2022__header__title">Nos sponsors 2022</section-title>
    </header>
  </main>
</template>

<script>
export default {
  name: "Sponsors2022Page",
  layout: "page",
  head() {
    return { title: "Sponsors 2022 | BDX I/O" };
  }
};
</script>

<style lang="scss" scoped>
.section-sponsors-2022 {
  background: $white;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__title {
      @include positionRelative;

      &:before {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        left: -30px;
        bottom: -10px;
        background: url("~/assets/img/drawings/blue_presentation_left.png") center no-repeat;
        background-size: cover;

        @include mobileFirst(m) {
          width: 120px;
          height: 120px;
          left: -110px;
        }
      }

      &:after {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        right: -30px;
        bottom: -10px;
        background: url("~/assets/img/drawings/blue_presentation_right.png") center no-repeat;
        background-size: cover;

        @include mobileFirst(m) {
          width: 120px;
          height: 120px;
          right: -110px;
        }
      }
    }
  }
}
</style>