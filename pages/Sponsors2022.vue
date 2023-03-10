<script setup lang="ts">
import { definePageMeta, useHead, useFetch, computed, inject } from "#imports";
import { formatStrapiData, shuffleArray } from "~/utils";
import { useConfig } from "~/composables";

definePageMeta({ layout: "page" });

useHead({
  title: "Sponsors 2022 | BDX I/O",
});

const { API_URL } = useConfig();

if (!inject("showSponsors2022")) {
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
}

function getOfferClass(index) {
  return ["purple", "green", "yellow", "orange"][index];
}

const { data } = await useFetch(`${API_URL}/api/item`, {
  params: { sort: "id:asc", "populate[sponsors][populate]": "*" },
});

const offers = formatStrapiData(data.value.data).map((offer) => {
  if (offer.sponsors?.data?.length) {
    offer.sponsors.data = shuffleArray(formatStrapiData(offer.sponsors.data));
  }
  return offer;
});
</script>

<template>
  <main class="section section-sponsors-2022">
    <header class="section-sponsors-2022__header">
      <section-title tag="h1" class="section-sponsors-2022__header__title"
        >Nos sponsors 2022</section-title
      >
      <p>
        L’équipe de BDX I/O tient à remercier tous les partenaires et sponsors
        pour nous permettre de vous proposer cette édition 2022.
      </p>
    </header>

    <section class="section-sponsors-2022__body">
      <ul v-if="offers.length">
        <li
          v-for="(offer, index) in offers"
          :key="`offer-${offer.id}`"
          class="offer"
          :class="getOfferClass(index)"
        >
          <section-title tag="h2" class="offer__name">{{
            offer.label
          }}</section-title>
          <ul v-if="offer.sponsors?.data.length" class="sponsors">
            <li
              v-for="sponsor in offer.sponsors.data"
              :key="sponsor.name"
              class="sponsors__sponsor card"
            >
              <a
                :href="sponsor.url || '#'"
                target="_blank"
                class="sponsors__sponsor__link"
                :title="sponsor.name"
              >
                <img
                  class="sponsors__sponsor__image"
                  :src="
                    sponsor.logo && sponsor.logo.data
                      ? sponsor.logo.data.attributes.formats.thumbnail.url
                      : 'https://www.bdxio.fr/_nuxt/img/bdxio_logo_blue.7a3769d.png'
                  "
                  :alt="`Logo de ${sponsor.name}`"
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p v-else>Pas de sponsors...</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.section-sponsors-2022 {
  background: $white;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__title {
      @include positionRelative;

      &:before {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        left: -30px;
        bottom: -10px;
        background: url("~/assets/img/drawings/blue_presentation_left.png")
          center no-repeat;
        background-size: cover;

        @include mobileFirst(m) {
          width: 120px;
          height: 120px;
          left: -110px;
        }
      }

      &:after {
        content: "";
        display: block;
        width: 80px;
        height: 80px;
        position: absolute;
        z-index: -1;
        right: -30px;
        bottom: -10px;
        background: url("~/assets/img/drawings/blue_presentation_right.png")
          center no-repeat;
        background-size: cover;

        @include mobileFirst(m) {
          width: 120px;
          height: 120px;
          right: -110px;
        }
      }
    }
  }

  &__body {
    margin-top: 100px;
    .sponsors {
      display: flex;
      grid-gap: 30px;
      flex-wrap: wrap;
      // overflow-x: auto;
      // overflow-y: hidden;
      align-self: center;
      padding: $spc-m;

      &__sponsor {
        min-width: 180px;
        min-height: 180px;
        display: block;
        margin: 0 auto;

        &__link {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          @include positionRelative;
        }

        &__image {
          width: 50%;
          @include positionAbsolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        @include mobileFirst(s) {
          min-width: 210px;
          min-height: 210px;
          margin: initial;
        }
      }
    }

    .offer {
      margin-bottom: $spc-xl;
      &__name {
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-weight: $font-weight-bold;
      }

      &.purple {
        .offer__name {
          color: $purple;
        }
      }

      &.green {
        .offer__name {
          color: $green;
        }
      }

      &.yellow {
        .offer__name {
          color: $yellow;
        }
      }

      &.orange {
        .offer__name {
          color: $orange;
        }
      }
    }
  }
}
</style>
