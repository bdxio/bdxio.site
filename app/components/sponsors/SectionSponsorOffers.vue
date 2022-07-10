<template>
  <section class="section section-sponsor-offers" id="offers">
    <section-title tag="h3" class="text-align--center title">Les offres</section-title>
    <flex-container gutter-m class="offers">
      <flex-item
        v-for="(offer, index) in offers"
        :key="`${offer.label}-${offer.id}`"
        xs12
        s6
        l3
        class="offer"
        :class="getOfferClasses(offer.full, index.toString())"
      >
        <span class="offer__name">{{ offer.label }}</span>
        <span class="offer__price">{{ offer.price }} €</span>
        <p class="offer__description">
          {{ offer.description }}
        </p>
      </flex-item>
    </flex-container>
  </section>
</template>

<script>
export default {
  name: "SectionSponorOffers",
  props: {
    offers: {
      type: Array,
      required: true
    }
  },
  methods: {
    getOfferClasses(full, id) {
      let classes = full ? "soldout" : "";

      if (id === "0") {
        classes += " purple";
      } else if (id === "1") {
        classes += " green";
      } else if (id === "2") {
        classes += " yellow";
      } else if (id === "3") {
        classes += " orange";
      }

      return classes;
    }
  }
};
</script>

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
      background: url("~/assets/img/drawings/purple_underline.png") no-repeat;
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

      &__name {
        display: block;
        font-weight: $font-weight-bold;
        margin-bottom: $spc-xs;
        text-transform: uppercase;
        font-size: 20px;
        font-size: 20px;
        letter-spacing: 3px;
      }

      &__price {
        font-size: 30px;
        font-weight: $font-weight-bold;
        font-family: $font-family-title;
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
          background: $purple;
          font-size: 15px;
          padding: 5px 10px;
          font-weight: $font-weight-bold;
        }
      }

      &.purple {
        .offer__name {
          color: $purple;
        }
        &.soldout:after {
          background: $purple;
        }
      }

      &.green {
        .offer__name {
          color: $green;
        }

        &.soldout:after {
          background: $green;
        }
      }

      &.yellow {
        .offer__name {
          color: $yellow;
        }
        &.soldout:after {
          background: $yellow;
        }
      }

      &.orange {
        .offer__name {
          color: $orange;
        }
        &.soldout:after {
          background: $orange;
        }
      }
    }
  }
}
</style>
