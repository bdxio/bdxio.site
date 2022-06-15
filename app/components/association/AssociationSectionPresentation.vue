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
      class="section-presentation__content"
      gutter-l
    >
      <flex-item xs12 m6>
        <section-title
          section
          tag="h2"
          class="section-presentation__content__pre-title"
          >Qui sommes nous ?</section-title
        >
        <section-title tag="h2" class="section-presentation__content__title">
          Un petit groupe de bénévoles <span class="boxed">bordelais</span> !
        </section-title>

        <p class="section-presentation__content__description">
          Nous avons à cœur de vous proposer un événement fédérateur, convivial
          et de grande ampleur. Notre objectif est de permettre à l’ensemble des
          membres de la communauté IT de se rassembler au sein d’une journée de
          conférences dédiées à l’ensemble des métiers du web, et ce depuis 2014
          !
        </p>

        <nuxt-link
          v-if="showProgramme"
          to="/programme"
          class="button outlined-dark"
          >Découvrir le programme 2022</nuxt-link
        >
      </flex-item>
      <flex-item xs12 m6> yo 2 </flex-item>
    </flex-container>
  </div>
</template>

<script>
export default {
  name: "associationSectionPresentation",
  computed: {
    showProgramme() {
      return this.$showProgramme ?? false;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-presentation {
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
        width: 180px;
        height: 100px;
        position: absolute;
        z-index: -1;
        right: -60px;
        bottom: -55px;
        transform: rotate(-20deg);
        background: url("~/assets/img/drawings/yellow_scribbles.png") center
          no-repeat;
        background-size: cover;
      }
    }
  }

  &__content {
    margin-top: 100px;

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
          z-index: -1;
          background: url("~/assets/img/drawings/green_box.png") center
            no-repeat;
          background-size: cover;
          top: -10px;
          left: -20px;
        }
      }
    }

    &__description {
      margin: $spc-m 0 $spc-xxxl 0;
    }
  }
}
</style>
