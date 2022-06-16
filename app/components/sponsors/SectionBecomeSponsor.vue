<template>
  <section class="section section-become-sponsor">
    <section-title tag="h2"
      >Pourquoi devenir
      <span class="sponsor">Sponsor</span>&nbsp;?</section-title
    >
    <ul class="reasons">
      <li class="reason one">
        <p class="number">1</p>
        <p class="description">
          Une visibilité sur le plus grand événement bordelais fédérant
          l’ensemble de la communauté digitale et IT bordelaise
        </p>
      </li>

      <li class="reason two">
        <p class="number">2</p>
        <p class="description">
          Être un acteur majeur en contribuant au développement de cet
          écosystème local
        </p>
      </li>

      <li class="reason three">
        <p class="number">3</p>
        <p class="description">
          Affirmer le dynamisme de votre structure et stimuler vos équipes
        </p>
      </li>

      <li class="reason four">
        <p class="number">4</p>
        <p class="description">
          Une mise en avant de vos services, produits et compétences
        </p>
      </li>

      <li class="reason five">
        <p class="number">5</p>
        <p class="description">
          Rencontrer vos futurs collaborateurs, partenaires ou fournisseurs
        </p>
      </li>
    </ul>
    <a
      href="/bdxio-2022-sponsors.pdf"
      class="button button-primary button-primary--light"
      download
      >Télecharger la plaquette</a
    >
  </section>
</template>

<script>
export default {
  name: "SectionBecoreSponsor",
};
</script>

<style lang="scss" scoped>
.section-become-sponsor {
  display: flex;
  flex-direction: column;
  background-color: $primary-dark;
  color: $light-font;
  gap: 20px;
  overflow: hidden;

  .sponsor {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 230px;
      height: 125px;
      top: -42px;
      left: -30px;
      background: url("~/assets/img/drawings/orange_circle.png") no-repeat;
      background-size: cover;
    }
  }

  .reasons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 60px;

    @include mobileFirst(m) {
      justify-content: flex-start;
    }
  }

  .reason {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .number {
      font-size: 74px;
    }

    .description {
      text-align: center;
      max-width: 350px;
    }

    &.one:after {
      content: "";
      position: absolute;
      width: 160px;
      height: 100px;
      top: 20%;
      left: 80%;
      background: url("~/assets/img/drawings/purple_arrow.png") no-repeat;
      background-size: cover;
    }

    &.three:after {
      content: "";
      position: absolute;
      width: 160px;
      height: 100px;
      top: 20%;
      left: 40%;
      background: url("~/assets/img/drawings/cyan_scribbles.png") no-repeat;
      background-size: cover;
    }

    &.four:after {
      content: "";
      position: absolute;
      width: 160px;
      height: 100px;
      bottom: 0px;
      left: -50px;
      background: url("~/assets/img/drawings/yellow_scribbles.png") no-repeat;
      background-size: cover;
    }

    &.five:after {
      content: "";
      position: absolute;
      width: 75px;
      height: 100px;
      top: 0;
      left: 60%;
      background: url("~/assets/img/drawings/orange_highlight_2.png") no-repeat;
      background-size: cover;
    }
  }

  .button {
    margin-top: 160px;
    align-self: center;
  }
}
</style>
