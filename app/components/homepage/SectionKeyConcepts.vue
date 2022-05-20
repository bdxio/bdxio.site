<template >
  <flex-container
    tag="section"
    class="section-key-concepts"
    no-gutter
  >
    <flex-item
      xs4
      class="section-key-concepts__img"
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="/concepts/1/concept-img-1.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcset="/concepts/1/concept-img-1.jpg"
          type="image/jpeg"
        />

        <source
          srcset="/concepts/1/concept-img-1-mobile.webp"
          type="image/webp"
        />
        <img
          src="/concepts/1/concept-img-1-mobile.jpg"
          alt="Photographie d'un amphitéâtre avec du public pendant une conférence bdx.io"
          type="image/jpeg"
        />
      </picture>
    </flex-item>
    <flex-item
      xs2
      class="section-key-concepts__card card-1"
    >
      <p class="key">
        <VCounter :value="5" />
      </p>
      <p class="concept">Amphis</p>
      <p class="content">Toujours une conf à votre goût !</p>
    </flex-item>
    <flex-item
      xs6
      class="section-key-concepts__img"
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="/concepts/2/concept-img-2.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcset="/concepts/2/concept-img-2.jpg"
          type="image/jpeg"
        />

        <source
          srcset="/concepts/2/concept-img-2-mobile.webp"
          type="image/webp"
        />
        <img
          src="/concepts/2/concept-img-2-mobile.jpg"
          alt="Photographie d'un amphitéâtre avec du public pendant une conférence bdx.io"
          type="image/jpeg"
        />
      </picture>
    </flex-item>
    <flex-item
      xs2
      class="section-key-concepts__card card-2"
    >
      <p class="key">
        <VCounter :value="7" />
      </p>
      <p class="concept">Thématiques</p>
      <p class="content">Du dev, de la méthodo jusqu'au design</p>
    </flex-item>
    <flex-item
      xs4
      class="section-key-concepts__img"
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="/concepts/3/concept-img-3.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcset="/concepts/3/concept-img-3.jpg"
          type="image/jpeg"
        />

        <source
          srcset="/concepts/3/concept-img-3-mobile.webp"
          type="image/webp"
        />
        <img
          src="/concepts/3/concept-img-3-mobile.jpg"
          alt="Photographie d'un amphitéâtre avec du public pendant une conférence bdx.io"
          type="image/jpeg"
        />
      </picture>
    </flex-item>
    <flex-item
      xs2
      class="section-key-concepts__card card-3"
    >
      <p class="key">
        <VCounter :value="40" />
      </p>
      <p class="concept">conférences</p>
      <p class="content">Une répartition à 50% de bordelais !</p>
    </flex-item>
    <flex-item
      xs4
      class="section-key-concepts__img show-m"
    >
      <picture>
        <source
          srcset="/concepts/4/concept-img-4.webp"
          type="image/webp"
        />
        <img
          src="/concepts/4/concept-img-4.jpg"
          alt="Photographie d'un amphitéâtre avec du public pendant une conférence bdx.io"
          type="image/jpeg"
        />
      </picture>
    </flex-item>
    <flex-item
      xs2
      class="section-key-concepts__img"
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="/concepts/5/concept-img-5.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcset="/concepts/5/concept-img-5.jpg"
          type="image/jpeg"
        />

        <source
          srcset="/concepts/5/concept-img-5-mobile.webp"
          type="image/webp"
        />
        <img
          src="/concepts/5/concept-img-5-mobile.jpg"
          alt="Photographie d'un amphitéâtre avec du public pendant une conférence bdx.io"
          type="image/jpeg"
        />
      </picture>
    </flex-item>
    <flex-item
      xs2
      class="section-key-concepts__card card-4"
    >
      <p class="key">
        <VCounter
          :value="900"
          :step="25"
        />
      </p>
      <p class="concept">Participants</p>
      <p class="content">Réunis autour d’une ambiance familliale</p>
    </flex-item>
    <flex-item
      xs8
      class="section-key-concepts__img show-m"
    >
      <picture>
        <source
          srcset="/concepts/6/concept-img-6.webp"
          type="image/webp"
        />
        <img
          src="/concepts/6/concept-img-6.jpg"
          alt="Photographie d'un amphitéâtre avec du public pendant une conférence bdx.io"
          type="image/jpeg"
        />
      </picture>
    </flex-item>
  </flex-container>
</template>

<script>
import { FlexContainer, FlexItem } from "~/components/layout/grid";
import VCounter from "../VCounter.vue";

export default {
  name: "SectionHero",
  components: { FlexContainer, FlexItem, VCounter },
};
</script>

<style lang="scss" scoped>
.section-key-concepts {
  &__img {
    picture {
      max-height: 290px;
      height: 100%;
      display: block;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
        @include positionRelative;
        top: 50%;
        transform: translateY(-50%);
        filter: grayscale(1);
      }
    }
  }

  &__card {
    // max-height: 290px;
    background-color: $grey-300;
    box-sizing: border-box;
    text-align: center;
    color: $primary-dark;
    padding: $spc-m $spc-m 0 $spc-m;
    @include positionRelative;
    @include z-index(absolute);

    & > p {
      display: block;
      margin: 0;

      &.key {
        font-family: $font-family-title;
        font-weight: $font-weight-bold;
        font-size: 82px;
        line-height: 1;
      }

      &.concept {
        font-family: $font-family-title;
        font-weight: $font-weight-bold;
        font-size: 30px;
        margin: $spc-s 0 $spc-xs 0;
      }

      &.content {
        margin-bottom: $spc-m;
      }
    }

    &.card-3 {
      .key {
        background: url("~/assets/img/drawings/yellow_circle_2.png") center
          no-repeat;
        background-size: contain;
      }
    }

    &:not(.card-3):after {
      content: "";
      display: block;
      @include positionAbsolute;
    }

    &.card-1:after {
      content: "";
      position: absolute;
      width: 200px;
      height: 80px;
      top: 25%;
      left: 0;
      transform: translateX(-40%) translateY(-30%);
      background: url("~/assets/img/drawings/cyan_scribble_4.png") center
        no-repeat;
      background-size: contain;
    }

    &.card-2:after {
      content: "";
      position: absolute;
      width: 150px;
      height: 100px;
      top: 25%;
      right: 100px;
      transform: translateX(40%) translateY(-50%);
      background: url("~/assets/img/drawings/orange_highlight_2.png") center
        no-repeat;
      background-size: contain;

      @include mobileFirst(m) {
        right: 0;
      }
    }

    &.card-4:after {
      content: "";
      position: absolute;
      width: 160px;
      height: 120px;
      top: 30%;
      right: 100px;
      transform: translateX(30%) translateY(-50%);
      background: url("~/assets/img/drawings/blue_arrow_2.png") center no-repeat;
      background-size: contain;

      @include mobileFirst(m) {
        right: 0;
      }
    }
  }
}
</style>
