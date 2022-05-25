<template>
  <section class="section guidage">
    <div class="text-container">
      <div class="infos">
        <section-title section tag="h2">Guidage</section-title>
        <section-title tag="h3"
          >Comment rejoindre<br />l'évènement ?</section-title
        >
        <div class="address-container">
          <span class="title">Palais des congrès</span>
          <span class="description"
            >Avenue Jean Gabriel Domergue <br />
            33300 BORDEAUX</span
          >
        </div>

        <div>
          <span class="title">Transport en commun :</span>
          <span class="description">Bus 15 ou Tram C</span>
        </div>

        <div>
          <span class="title">Voiture :</span>
          <span class="description">Parking gratuit sur place</span>
        </div>
      </div>
      <span class="show-m legend">À seulement 10 min de Bordeaux !</span>
    </div>
  </section>
</template>

<script>
import SectionTitle from "~/components/SectionTitle.vue";

export default {
  name: "SectionGuidage",
  components: {
    SectionTitle,
  },
};
</script>

<style lang="scss" scoped>
.guidage {
  background: url("~/assets/img/illustration_palais_congres.png") no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  background-size: contain;

  @include mobileFirst(s) {
    background-position-x: right;
  }

  .text-container {
    position: relative;
    padding-bottom: 300px;

    @include mobileFirst(s) {
      padding-bottom: 0;
    }
  }

  .subsection-title {
    margin: 30px 0;
    padding: 0;
  }

  .address-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 30px;
  }

  .title {
    line-height: 29px;
    font-weight: $font-weight-bold;
    font-size: 24px;
  }

  .description {
    line-height: 26px;
  }

  .legend {
    font-style: italic;
    position: absolute;
    right: 0;

    @include mobileFirst(s) {
      top: 0;
    }
  }

  .infos {
    position: relative;
    background-color: $light;
    box-shadow: 0px 0px 30px 20px #f6f2e8;

    @include mobileFirst(s) {
      max-width: 50%;
    }
  }
}
</style>
