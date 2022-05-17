<template functional>
  <section class="bourse">
    <div class="section about-us">
      <section-title tag="h2"
        >Qu'est-ce que <span class="nowrap">BDX I/O</span> ?</section-title
      >
      <p>
        BDX I/O est un conférence bordelaise sur le thème de la programmation et
        de ses métiers annexes.
        <br />Lors de l'édition 2020, nous avons reçu plus de 850 passionné·e·s
        lors d'une journée de découvertes et de bonne humeur !
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionAbout",
};
</script>

<style lang="scss" scoped>
.bourse {
  background: url("~/assets/img/place_de_la_bourse.png") no-repeat left bottom;
  background-size: 100%;
  padding-bottom: 300px;

  .about-us {
    margin-left: 0;
    background-color: $light;

    @include mobileFirst(s) {
      background-position-x: left;
      background-position-y: center;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 55%;
      padding-left: 0;

      &::before {
        content: "";
        position: absolute;
        left: -50px;
        width: 50px;
        height: 100%;
        // rgb(246,242,232) = $light
        background: linear-gradient(
          90deg,
          rgba(246, 242, 232, 0) 0%,
          rgba(246, 242, 232, 1) 85%
        );
      }
    }
  }

  @include mobileFirst(s) {
    background-position: left center;
    background-size: 50%;
    padding-bottom: 0;
    display: flex;
    justify-content: flex-end;
  }

  @include mobileFirst(l) {
    background-size: 45%;
  }
}
</style>
