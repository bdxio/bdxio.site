<script setup lang="ts">
// @ts-check

import { SectionTitle } from "#components";
</script>

<template>
  <section
    id="offers"
    class="section section-sponsor-offers"
  >
    <SectionTitle
      tag="h3"
      class="text-align--center title"
    >
      Les offres
    </SectionTitle>
    <div
      gutter-m
      class="offers"
    >
      <div
        xs12
        s6
        l3
        class="offer soldout"
      >
        <span class="offer__name purple">Balthazar</span>
        <span class="offer__price">5 000 €</span>
        <p class="offer__description">
          Le pack complet du partenariat pour offrir de la visibilité à votre
          entreprise avant l’événement et avoir une expérience unique le jour J.
        </p>
      </div>
      <div
        xs12
        s6
        l3
        class="offer soldout"
      >
        <span class="offer__name green">Impériale</span>
        <span class="offer__price">2 500 €</span>
        <p class="offer__description">
          Le partenariat qui nous séduit tous ! Valorisez votre marque le jour
          de l’événement et permettez au plus grand nombre de venir échanger
          avec vous.
        </p>
      </div>
      <div
        xs12
        s6
        l3
        class="offer"
      >
        <span class="offer__name yellow">Magnum</span>
        <span class="offer__price">1 000 €</span>
        <p class="offer__description">
          Apportez votre soutien à BDX I/O avec cette offre et faite retentir
          votre nom auprès de la communauté bordelaise.
        </p>
      </div>
      <div
        xs12
        s6
        l3
        class="offer"
      >
        <span class="offer__name orange">Startup</span>
        <span class="offer__price">500 €</span>
        <p class="offer__description">
          Pour que chacun puisse nous soutenir à petit prix. Les startups
          accèdent au village startup qui comprend un mange debout dans l’espace
          pluriel le jour J.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-sponsor-offers {
  background: $white;

  .title {
    @include positionRelative;

    &::after {
      content: "";
      width: 170px;
      height: 45px;
      position: absolute;
      z-index: -1;
      background: url("/images/drawings/purple_underline.png") no-repeat;
      background-size: contain;
      right: 52%;
      bottom: -40px;
      transform: translateX(100%);
    }
  }

  .offers {
    margin-top: 75px;

    .offer {
      margin-bottom: $spc-xxl;

      @include mobileFirst(xl) {
        margin-bottom: 0;
      }

      &.soldout {
        cursor: not-allowed;
        @include positionRelative;

        .offer__name,
        .offer__price,
        .offer__description {
          opacity: 0.3;
        }

        &:after {
          content: "complet";
          text-transform: uppercase;
          width: 100px;
          height: 50px;

          font-size: 15px;
          padding: 5px 10px;
          font-weight: $font-weight-bold;
        }
      }

      &__name {
        display: block;
        font-weight: $font-weight-bold;
        margin-bottom: $spc-xs;
        text-transform: uppercase;
        font-size: 20px;
        font-size: 20px;
        letter-spacing: 3px;

        &.purple {
          color: $purple;
        }
        &.green {
          color: $green;
        }
        &.yellow {
          color: $yellow;
        }
        &.orange {
          color: $orange;
        }
      }

      &__price {
        font-size: 30px;
        font-weight: $font-weight-bold;
        font-family: $font-family-title;
      }

      &:nth-of-type(1) {
        &.soldout:after {
          background: $purple;
        }
      }
      &:nth-of-type(2) {
        &.soldout:after {
          background: $green;
        }
      }
    }
  }
}
</style>
