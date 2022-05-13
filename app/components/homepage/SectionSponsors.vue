<template functional>
  <div class="section-sponsors">
    <h2 class="title">Ils nous soutiennent</h2>
    <flex-container class="sponsors">
      <div class="sponsor"><img
          src="~/assets/img/sponsors/at-internet.png"
          alt="logo du sponsor AT Internet"
        /></div>
      <div class="sponsor"><img
          src="~/assets/img/sponsors/apside.png"
          alt="logo du sponsor Apside"
        /></div>
      <div class="sponsor"><img
          src="~/assets/img/sponsors/astek.webp"
          alt="logo du sponsor Astek"
        /></div>
      <div class="sponsor"><img
          src="~/assets/img/sponsors/groupe-creative.png"
          alt="logo du sponsor Groupe Creative"
        /></div>
    </flex-container>
  </div>
</template>

<script>
import FlexContainer from "../layout/grid/Flex-container.vue";
export default {
  components: { FlexContainer },
  name: "SectionSponsors",
};
</script>

<style lang="scss" scoped>
.section-sponsors {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $primary-dark;
  color: $light-font;
  text-align: center;
  padding: 55px 30px 80px;
  gap: 20px;

  @include mobileFirst(m) {
    gap: 90px;
    padding: 85px 50px 135px;
  }

  .sponsors {
    justify-content: center;
    gap: 10px;

    @include mobileFirst(s) {
      gap: 30px;
    }

    @include mobileFirst(m) {
      gap: 60px;
    }
  }

  .title {
    position: relative;

    &::after {
      content: "";
      width: 60px;
      height: 87px;
      margin-left: 20px;
      margin-top: -30px;
      position: absolute;
      background: url("~/assets/img/bdx_drawings/purple_triangle.png") no-repeat;

      @include mobileFirst(m) {
        margin-left: 50px;
      }
    }
  }

  .sponsor {
    background-color: $white;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-origin: content-box;
    width: 172px;
    height: 172px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 80%;
      object-fit: contain;
    }
  }
}
</style>
