<template>
  <section class="section section-themes">
    <flex-container no-gutter class="justify-between-xs align-center-m">
      <flex-item s12 m4 l5 class="text-container">
        <section-title section tag="h2">thématique</section-title>
        <section-title tag="h3" class="title"
          >Quels seront les thèmes abordés&nbsp;?</section-title
        >
        <p>
          BDX I/O propose des conférences autour de 7 thématiques différentes,
          avec des durées différentes et pour tous les niveaux : Vous trouverez
          forcément votre bonheur&nbsp;!
        </p>
      </flex-item>
      <flex-item s12 m8 l7 class="items">
        <div class="theme-item">
          <span class="theme theme--1">Frontend</span>
        </div>
        <div class="theme-item">
          <span class="theme theme--2">Backend</span>
        </div>
        <div class="theme-item">
          <span class="theme theme--3">Big Data & IA</span>
        </div>
        <div class="theme-item">
          <span class="theme theme--4">Design & UX</span>
        </div>
        <div class="theme-item">
          <span class="theme theme--5">Cloud & Dev.Sec.Ops</span>
        </div>
        <div class="theme-item">
          <span class="theme theme--6">Methodo & Architecture</span>
        </div>
        <div class="theme-item">
          <span class="theme theme--7">Hors piste</span>
        </div>
      </flex-item>
    </flex-container>
  </section>
</template>

<script>
export default {
  name: "SectionThemes",
};
</script>

<style lang="scss" scoped>
.section-themes {
  color: $primary-dark;
  background-color: $white;

  .title {
    @include positionRelative;
    margin-right: 20px;

    &:before {
      content: "";
      position: absolute;
      @include z-index(negative);
      top: -37px;
      left: -19px;
      width: 110px;
      height: 60px;

      background: url("~/assets/img/drawings/cyan_scribble_2.png") center
        no-repeat;
      background-size: contain;

      @include mobileFirst(m) {
        top: -20px;
        left: -50px;
        width: 120px;
        height: 70px;
      }
    }
  }

  .theme {
    text-transform: uppercase;
    text-align: center;
    width: 150px;
    margin: 0 30px;
  }

  .items {
    gap: $spc-m;
    display: flex;
    overflow: auto;
    align-items: center;
    padding: $spc-xl $spc-l;

    @include positionRelative;

    @include mobileFirst(m) {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      padding: $spc-l $spc-s $spc-l $spc-xxl;
      overflow: hidden;

      &:after {
        content: "";
        @include z-index(negative);
        width: 140px;
        height: 140px;
        position: absolute;
        bottom: 114px;
        right: -10px;
        background: url("~/assets/img/drawings/yellow_citation.png") center
          no-repeat;
        background-size: contain;
      }
    }

    @include mobileFirst(xxl) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .theme-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    box-shadow: 0px 7px 29px rgba(36, 36, 87, 0.1);
    border-radius: 8px;
    font-weight: 700;
    background-color: $white;

    @include mobileFirst(m) {
      height: 136px;
    }

    .theme {
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      padding: 30px 0;
      line-height: 30px;
      &--1 {
        background-image: url("~/assets/img/drawings/themes/theme-1.png");
      }
      &--4 {
        background-image: url("~/assets/img/drawings/themes/theme-4.png");
      }
      &--5 {
        position: relative;
        z-index: 1;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.4;
          z-index: -1;
          background-image: url("~/assets/img/drawings/themes/theme-5.png");
          background-repeat: no-repeat;
          background-size: contain;
        }
      }
      &--6 {
        background-image: url("~/assets/img/drawings/themes/theme-6.png");
      }
    }
  }

  .themes {
    display: flex;
    gap: 20px;
  }
}
</style>
