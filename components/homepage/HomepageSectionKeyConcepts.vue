<template>
  <div tag="section" class="section-key-concepts" no-gutter>
    <div class="picture picture-amphi" />
    <div class="info info-amphis card-1">
      <p class="key">
        <the-counter :value="5" />
      </p>
      <p class="concept">Amphis</p>
      <p class="content">Toujours une conf à votre goût !</p>
    </div>
    <div class="picture picture-conversation" />
    <div class="info info-themes card-2">
      <p class="key">
        <the-counter :value="7" />
      </p>
      <p class="concept">Thématiques</p>
      <p class="content">Du dev, de la méthodo jusqu'au design</p>
    </div>
    <div class="picture picture-mascotte" />
    <div class="info info-conferences card-3">
      <p class="key">
        <the-counter :value="40" />
      </p>
      <p class="concept">conférences</p>
      <p class="content">Une répartition à 50% de bordelais&nbsp;!</p>
    </div>
    <div class="picture picture-mascotte2" />
    <div class="picture picture-speaker show-s" />
    <div class="info info-attendees card-4">
      <p class="key">
        <the-counter :value="900" :step="25" />
      </p>
      <p class="concept">Participants</p>
      <p class="content">Réunis autour d’une ambiance familliale</p>
    </div>
    <div class="picture picture-big-amphi" />
  </div>
</template>

<style lang="scss" scoped>
.section-key-concepts {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-areas:
    "pic-amphi data-amphis"
    "data-themes pic-conversation"
    "pic-mascotte data-conferences"
    "data-attendees pic-speaker";

  @include mobileFirst(m) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
      "pic-amphi pic-amphi data-amphis pic-conversation pic-conversation pic-conversation"
      "data-themes pic-mascotte pic-mascotte data-conferences pic-mascotte2 pic-mascotte2"
      "pic-speaker data-attendees pic-big-amphi pic-big-amphi pic-big-amphi pic-big-amphi";
  }

  picture {
    display: block;
    overflow: hidden;
    img {
      @include positionRelative;
      filter: grayscale(1);
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $white;
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
        @include positionRelative;

        &:after {
          @include positionAbsolute;
          content: "";
          display: block;
          background: url("~/assets/img/drawings/yellow_circle_2.png") center
            no-repeat;
          background-size: contain;
          width: 170px;
          height: 100px;
          left: -30px;
          top: 0;
          @include z-index(negative);
        }
      }
    }

    &:after {
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

  .info-attendees {
    grid-area: data-attendees;
  }

  .info-amphis {
    grid-area: data-amphis;
  }

  .info-themes {
    grid-area: data-themes;
  }

  .info-conferences {
    grid-area: data-conferences;
  }

  .picture {
    filter: sepia(100%) hue-rotate(198deg) saturate(190%);
    background-position: center;
    background-size: cover;

    width: 100%;
    min-height: 300px;
    display: block;

    @include mobileFirst(s) {
      min-height: auto;
      display: initial;
    }
  }

  .picture-amphi {
    background-image: url("/concepts/1/concept-img-1-mobile.jpg");
    grid-area: pic-amphi;
  }

  .picture-conversation {
    background-image: url("/concepts/2/concept-img-2.webp");
    grid-area: pic-conversation;
  }
  .picture-mascotte {
    background-image: url("/concepts/3/concept-img-3.webp");
    grid-area: pic-mascotte;
  }
  .picture-speaker {
    background-position-y: 20%;
    background-image: url("/concepts/5/concept-img-5.webp");
    grid-area: pic-speaker;
  }

  .picture-mascotte2 {
    background-image: url("/concepts/4/concept-img-4.webp");
    grid-area: pic-mascotte2;
    display: none;

    @include mobileFirst(m) {
      display: block;
      background-position-y: 0;
    }
  }

  .picture-big-amphi {
    background-image: url("/concepts/6/concept-img-6.webp");
    grid-area: pic-big-amphi;
    display: none;

    @include mobileFirst(m) {
      display: block;
    }
  }
}
</style>
