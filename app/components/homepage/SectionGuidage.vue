<template functional>
  <section class="guidage">
    <div class="text-container">
      <div class="infos">
        <SectionTitle title="Guidage" />
        <h2 class="subsection-title">Comment rejoindre<br />l'évènement ?</h2>

        <div class="address-container">
          <span class="title">Palais des congrès</span>
          <span class="description">Avenue Jean Gabriel Domergue <br /> 33300 BORDEAUX</span>
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
      <span class="legend">À seulement 10 min de Bordeaux !</span>
    </div>
  </section>
</template>

<script>
import SectionTitle from "../SectionTitle";

export default {
  name: "SectionGuidage",
  components: {
    SectionTitle,
  },
};
</script>


<style lang="scss" scoped>
.guidage {
  .text-container {
    position: relative;
    margin: 2em;
    background-color: $light;
  }

  .subsection-title {
    white-space: nowrap;
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
    top: 0;
    right: 0;
  }

  .infos {
    position: relative;
    max-width: 50%;
    background-color: $light;
  }

  @include mobileFirst(s) {
    .text-container {
      background: url("~/assets/img/illustration_palais_congres.png") no-repeat;
      background-position-x: right;
      background-size: contain;

      .infos::after {
        content: "";
        position: absolute;
        right: -50px;
        top: 0px;
        width: 50px;
        height: 100%;
        // rgb(246,242,232) = $light
        background: linear-gradient(
          270deg,
          rgba(246, 242, 232, 0) 0%,
          rgba(246, 242, 232, 1) 85%
        );
      }
    }
  }
}
</style>