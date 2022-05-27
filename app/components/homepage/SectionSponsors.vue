<template>
  <div class="section section-sponsors">
    <section-title tag="h2">Ils nous soutiennent</section-title>
    <flex-container class="sponsors">
      <a href="https://www.atinternet.com/en/" target="_blank" class="sponsor">
        <img
          src="~/assets/img/sponsors/at-internet.png"
          alt="logo du sponsor AT Internet"
        />
      </a>
      <a href="https://apside.com/" target="_blank" class="sponsor">
        <img
          src="~/assets/img/sponsors/apside.png"
          alt="logo du sponsor Apside"
        />
      </a>
      <a href="https://astekgroup.fr/" target="_blank" class="sponsor">
        <img
          src="~/assets/img/sponsors/astek.webp"
          alt="logo du sponsor Astek"
        />
      </a>
      <a href="https://www.groupe-creative.fr/" target="_blank" class="sponsor">
        <img
          src="~/assets/img/sponsors/groupe-creative.png"
          alt="logo du sponsor Groupe Creative"
        />
      </a>
      <a
        href="https://www.groupeonepoint.com/fr/"
        target="_blank"
        class="sponsor"
      >
        <img
          src="~/assets/img/sponsors/onepoint.png"
          alt="logo du sponsor One Point"
        />
      </a>
    </flex-container>
  </div>
</template>

<script>
export default {
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
  gap: 20px;

  @include mobileFirst(m) {
    gap: 90px;
  }

  .sponsors {
    display: flex;
    flex-wrap: wrap;
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
      margin-left: -30px;
      margin-top: -20px;
      position: absolute;
      z-index: -1;
      background: url("~/assets/img/drawings/purple_triangle.png") no-repeat;

      @include mobileFirst(s) {
        margin-left: 0px;
      }

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
    @include transition;

    & img {
      width: 80%;
      object-fit: contain;
      filter: grayscale(1);
    }

    &:hover {
      filter: grayscale(0);
    }
  }
}
</style>
