<template>
  <div class="section section-annual-theme" id="annual-theme">
    <flex-item s12 m4 l5 class="text-container">
      <section-title section tag="h2">Thème 2022</section-title>
      <section-title tag="h3" color="light">
        Cette année les femmes sont à l'honneur&nbsp;!
      </section-title>
      <p>
        À l'occasion de la 7ème édition de BDX I/O, nous avons choisi de mettre
        en avant : Les femmes célèbres dans l'IT.
        <br />
        <br />Le thème n'est pas obligatoire pour participer, mais il est là
        pour aider les sponsors à choisir des animations, inspirer les
        conférenciers sur les contenus et leurs présentations et donner une
        unité à la conférence.
      </p>
    </flex-item>
    <flex-item s12 m8 l7 class="section-annual-theme__portraits">
      <div class="portrait elizabethfeinler">
        <img
          src="/annual-theme/elizabethfeinler.png"
          alt="Portrait de Elizabeth Feinler"
        />
      </div>
      <div class="portrait maryallenwilkes">
        <img
          src="/annual-theme/maryallenwilkes.png"
          alt="Portrait de Mary Allen Wilkes"
        />
      </div>
      <div class="portrait katherinecolemangoblejohnson">
        <img
          src="/annual-theme/katherinecolemangoblejohnson.png"
          alt="Portrait de Katherine Coleman Goble Johnson"
        />
      </div>
      <div class="portrait feifei">
        <img src="/annual-theme/feifei.png" alt="Portrait de Feifei" />
      </div>
    </flex-item>
  </div>
</template>

<style lang="scss" scoped>
.section-annual-theme {
  display: flex;
  flex-direction: column;
  background-color: $primary-dark;
  color: $light-font;

  @include mobileFirst(m) {
    justify-content: space-between;
    flex-direction: row;
  }

  &__portraits {
    display: grid;
    grid-template-columns: repeat(4, 210px);
    grid-template-rows: repeat(1, 210px);
    grid-gap: 30px;
    padding-top: 40px;
    overflow-x: auto;
    overflow-y: hidden;

    @include mobileFirst(m) {
      margin-top: 0;
      overflow: hidden;
      grid-template-columns: repeat(2, 210px);
      grid-template-rows: repeat(2, 210px);
      justify-content: center;
    }

    &__img {
      width: 100%;
      height: 100%;
    }

    & .portrait {
      @include positionRelative;
    }

    & .elizabethfeinler {
      &:after {
        content: "";
        display: block;
        top: -20px;
        left: -15px;
        width: 244px;
        height: 245px;
        position: absolute;
        background: url("~/assets/img/drawings/fond1.png") center no-repeat;
        background-size: cover;
      }
    }
    & .katherinecolemangoblejohnson {
      &:after {
        content: "";
        display: block;
        top: -20px;
        left: -15px;
        width: 244px;
        height: 245px;
        position: absolute;
        background: url("~/assets/img/drawings/fond3.png") center no-repeat;
        background-size: cover;
      }
    }
    & .maryallenwilkes {
      &:after {
        content: "";
        display: block;
        top: -20px;
        left: -15px;
        width: 244px;
        height: 245px;
        position: absolute;
        background: url("~/assets/img/drawings/fond2.png") center no-repeat;
        background-size: cover;
      }
    }
    & .feifei {
      &:after {
        content: "";
        display: block;
        top: -20px;
        left: -15px;
        width: 244px;
        height: 245px;
        position: absolute;
        background: url("~/assets/img/drawings/fond4.png") center no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>
