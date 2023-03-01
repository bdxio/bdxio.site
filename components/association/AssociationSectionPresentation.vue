<script lang="ts" setup>
const showProgramme = computed(() => inject("showProgramme") ?? false);
</script>

<template>
  <div class="section section-presentation">
    <header class="section-presentation__header">
      <section-title tag="h1" class="section-presentation__header__title">
        L'asso BDX I/O
      </section-title>
      <p class="margin--null">
        Tout connaître sur nous, l’asso n’aura plus aucun <br />
        secret pour vous !
      </p>
    </header>
    <flex-container
      tag="section"
      class="section-presentation__body"
      gutter-l
      align-center-xs
    >
      <flex-item xs12 m6 class="section-presentation__body__content">
        <section-title
          section
          tag="h2"
          class="section-presentation__body__content__pre-title"
          >Qui sommes nous ?</section-title
        >
        <section-title
          tag="h2"
          class="section-presentation__body__content__title"
        >
          Un petit groupe de bénévoles <span class="boxed">bordelais</span> !
        </section-title>

        <p class="section-presentation__body__content__description">
          Nous avons à cœur de vous proposer un événement fédérateur, convivial
          et de grande ampleur. Notre objectif est de permettre à l’ensemble des
          membres de la communauté IT de se rassembler au sein d’une journée de
          conférences dédiées à l’ensemble des métiers du web, et ce depuis 2014
          !
        </p>

        <nuxt-link
          v-if="showProgramme"
          to="/programme"
          class="button button-secondary button-secondary--dark"
          >Découvrir le programme 2022</nuxt-link
        >
      </flex-item>
      <flex-item xs12 m6 class="section-presentation__body__imgs">
        <div class="section-presentation__imgs__column">
          <picture>
            <source type="image/webp" srcset="/asso/pic-scene-1.webp" />
            <source type="image/jpeg" srcset="/asso/pic-scene-1.jpg" />
            <img
              src="/asso/pic-scene-1.jpg"
              alt="photo de l'équipe prise sur la scene de l'évènement"
              class="picture"
            />
          </picture>
          <picture>
            <source type="image/webp" srcset="/asso/pic-scene-2.webp" />
            <source type="image/jpeg" srcset="/asso/pic-scene-2.jpg" />
            <img
              src="/asso/pic-scene-2.jpg"
              alt="photo de l'équipe prise sur la scene de l'évènement"
              class="picture"
            />
          </picture>
        </div>
        <div class="section-presentation__imgs__column">
          <picture>
            <source type="image/webp" srcset="/asso/pic-meeting-1.webp" />
            <source type="image/jpeg" srcset="/asso/pic-meeting-1.jpg" />
            <img
              src="/asso/pic-meeting-1.jpg"
              alt="photo de l'équipe prise pendant un meeting bdx io"
              class="picture"
            />
          </picture>
          <picture>
            <source type="image/webp" srcset="/asso/pic-meeting-2.webp" />
            <source type="image/jpeg" srcset="/asso/pic-meeting-2.jpg" />
            <img
              src="/asso/pic-meeting-2.jpg"
              alt="photo de l'équipe prise pendant un meeting bdx io"
              class="picture"
            />
          </picture>
        </div>
      </flex-item>
    </flex-container>
  </div>
</template>

<style lang="scss" scoped>
.section-presentation {
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

      &:after {
        content: "";
        display: block;
        width: 150px;
        height: 70px;
        position: absolute;
        z-index: -1;
        right: -30px;
        bottom: -15px;
        transform: rotate(-20deg);
        background: url("~/assets/img/drawings/yellow_scribbles.png") center
          no-repeat;
        background-size: cover;

        @include mobileFirst(m) {
          width: 180px;
          height: 100px;
          right: -60px;
          bottom: -55px;
        }
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
            background: url("~/assets/img/drawings/green_box.png") center
              no-repeat;
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
