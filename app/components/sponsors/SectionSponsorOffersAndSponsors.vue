<template>
  <section class="section section-sponsor-offers" id="offers">
    <h3 class="title">Les <span class="before">offres</span> et <span class="after">sponsors 2022</span></h3>
    <div class="offers">
      <flex-container gutter-m v-for="(offer, index) in offers" :key="`${offer.label}-${offer.id}`" class="offer">
        <flex-item xs12 s4 class="offer__infos" :class="getOfferClasses(offer.full, index.toString())">
          <h4 class="offer__name">{{ offer.label }}</h4>
          <span class="offer__price">{{ offer.price }} €</span>
          <p class="offer__description">
            {{ offer.description }}
          </p>
        </flex-item>
        <flex-item s8 class="offer__sponsors" v-if="offer.sponsors.data.length">
          <div
            v-for="({ attributes }, index) in offer.sponsors.data"
            :key="`sponsor-${index}`"
            class="offer__sponsors__sponsor"
          >
            <a :href="attributes.url" target="_blank" class="offer__sponsors__sponsor__link">
              <img
                class="offer__sponsors__sponsor__image"
                :src="makeSponsorImageUrl(attributes.logo.data.attributes.formats)"
                :alt="`Logo de ${attributes.name}`"
              />
            </a>
          </div>
        </flex-item>
      </flex-container>
    </div>
  </section>
</template>

<script>
import { formatStrapiData } from "~/helpers";

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
    },
    makeSponsorImageUrl({ large = null, medium = null }) {
      if (!medium || !large) {
        console.error("No image found, need at least large (1000px) or medium (750px) image width");
        return;
      }

      if (medium && medium.url) {
        console.log(`${this.$config.cmsBaseUrl}${medium.url}`)
        return `${this.$config.cmsBaseUrl}${medium.url}`;
      }

      return `${this.$config.cmsBaseUrl}${large.url}`;
    }
  },
  formatData(data) {
    return formatStrapiData(data);
  }
};
</script>

<style lang="scss" scoped>
.section-sponsor-offers {
  background: $white;
  .title {
    .before {
      @include positionRelative;

      &::before {
        content: "";
        width: 130px;
        height: 45px;
        position: absolute;
        z-index: -1;
        background: url("~/assets/img/drawings/purple_underline.png") no-repeat;
        background-size: contain;
        bottom: -40px;
      }
    }

    .after {
      @include positionRelative;

      &::after {
        content: "";
        width: 100px;
        height: 110px;
        position: absolute;
        z-index: -1;
        background: url("~/assets/img/drawings/yellow_heart.png") no-repeat;
        background-size: contain;
        bottom: -40px;
        right: -70px;
      }
    }
  }
  .offers {
    margin-top: 75px;
    .offer {
      margin-bottom: $spc-xxl;
      display: flex;

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

      &__infos {
        .soldout {
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

      &__sponsors {
        display: grid;
        grid-template-columns: repeat(4, 210px);
        grid-template-rows: repeat(1, 210px);
        grid-gap: 30px;
        padding-top: 40px;
        overflow-x: auto;
        overflow-y: hidden;
        align-self: center;
        padding-top: 0;

        &__sponsor {
          &__link {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            @include positionRelative;
          }

          &__image {
            width: 100%;
            object-fit: cover;
            @include positionAbsolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
</style>
