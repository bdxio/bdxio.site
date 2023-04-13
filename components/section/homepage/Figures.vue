<script setup lang="ts">
import { Counter } from "#components";
</script>

<template>
  <section class="grid grid-cols-homepage-key-concepts m:grid-cols-homepage-key-concepts-m section-key-concepts">
    <div class="picture picture-amphi" />
    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark px-4
          py-4 relative info-amphis card-1"
    >
      <p class="block m-0 font-bold text-[82px] font-title leading-none">
        <Counter :value="5" />
      </p>
      <p class="block font-title text-bold text-[30px] m-3">
        Amphis
      </p>
      <p class="block m-0 mb-4">
        Toujours une conf à votre goût !
      </p>
    </div>
    <div class="picture picture-conversation" />
    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark pr-4
          py-4 relative info-themes card-2"
    >
      <p class="block m-0 font-bold text-[82px] font-title leading-none">
        <Counter :value="7" />
      </p>
      <p class="block font-title text-bold text-[30px] m-3">
        Thématiques
      </p>
      <p class="block m-0 mb-4">
        Du dev, de la méthodo jusqu'au design
      </p>
    </div>
    <div class="picture picture-mascotte" />
    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark pr-4
        py-4 relative info-conferences card-3"
    >
      <p class="block m-0 relative z-10 font-bold text-[82px] font-title leading-none">
        <Counter :value="40" />
      </p>
      <p class="block font-title text-bold text-[30px] m-3">
        conférences
      </p>
      <p class="block m-0 mb-4">
        Une répartition à 50% de bordelais&nbsp;!
      </p>
    </div>
    <div class="picture picture-mascotte2" />
    <div class="picture picture-speaker show-s" />
    <div
      class="flex flex-col items-center justify-center bg-white box-border text-center text-bdxio-blue-dark pr-4
          py-4 relative info-attendees card-4"
    >
      <p class="block m-0 font-bold text-[82px] font-title leading-none">
        <Counter
          :value="900"
          :step="25"
        />
      </p>
      <p class="block font-title text-bold text-[30px] m-3">
        Participants
      </p>
      <p class="block m-0 mb-4">
        Réunis autour d’une ambiance familliale
      </p>
    </div>
    <div class="picture picture-big-amphi" />
  </section>
</template>

<style lang="scss" scoped>
.card-3>.key::after {
  position: absolute;
  content: "";
  display: block;
  background: url("/images/drawings/yellow_circle_2.png") center no-repeat;
  background-size: contain;
  width: 170px;
  height: 100px;
  left: -30px;
  top: 0;
  z-index: -1;
}

.section-key-concepts {
  grid-template-areas:
    "pic-amphi data-amphis"
    "data-themes pic-conversation"
    "pic-mascotte data-conferences"
    "data-attendees pic-speaker";

  @media screen and (min-width: theme('screens.m')) {
    grid-template-areas:
      "pic-amphi pic-amphi data-amphis pic-conversation pic-conversation pic-conversation"
      "data-themes pic-mascotte pic-mascotte data-conferences pic-mascotte2 pic-mascotte2"
      "pic-speaker data-attendees pic-big-amphi pic-big-amphi pic-big-amphi pic-big-amphi";
  }
}

.section-key-concepts:after {
  content: "";
  display: block;
  position: absolute;
  z-index: 10;
}

.card-1:after {
  content: "";
  position: absolute;
  width: 200px;
  height: 80px;
  top: 25%;
  left: 0;
  transform: translateX(-40%) translateY(-30%);
  background: url("/images/drawings/cyan_scribble_4.png") center no-repeat;
  background-size: contain;
}

.card-2:after {
  content: "";
  position: absolute;
  width: 150px;
  height: 100px;
  top: 25%;
  right: 100px;
  transform: translateX(40%) translateY(-50%);
  background: url("/images/drawings/orange_highlight_2.png") center no-repeat;
  background-size: contain;

  @media screen and (min-width: theme('screens.m')) {
    right: 0;
  }
}

.card-4:after {
  content: "";
  position: absolute;
  width: 160px;
  height: 120px;
  top: 30%;
  right: 100px;
  transform: translateX(30%) translateY(-50%);
  background: url("/images/drawings/blue_arrow_2.png") center no-repeat;
  background-size: contain;

  @media screen and (min-width: theme('screens.m')) {
    right: 0;
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

  @media screen and (min-width: theme('screens.s')) {
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
  background-image: url("/concepts/5/ùconcept-img-5.webp");
  grid-area: pic-speaker;
}

.picture-mascotte2 {
  background-image: url("/concepts/4/concept-img-4.webp");
  grid-area: pic-mascotte2;
  display: none;

  @media screen and (min-width: theme('screens.m')) {
    display: block;
    background-position-y: 0;
  }

}

.picture-big-amphi {
  background-image: url("/concepts/6/concept-img-6.webp");
  grid-area: pic-big-amphi;
  display: none;

  @media screen and (min-width: theme('screens.m')) {
    display: block;
  }
}
</style>
