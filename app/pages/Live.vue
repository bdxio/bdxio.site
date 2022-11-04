<template>
  <main class="section section-live">
    <header class="section-live__header">
      <section-title tag="h1" class="section-live__header__title">Le live</section-title>
    </header>
    <section class="section-live__body"></section>
  </main>
</template>

<script>
export default {
  name: "LivePage",
  layout: "page",
  head() {
    return {
      title: "Live 🎥 | BDX I/O"
    };
  }
};
</script>

<style lang="scss" scoped>
.section-live {
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