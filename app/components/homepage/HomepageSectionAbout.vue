<template>
  <section class="section bourse">
    <div class="section about-us">
      <section-title tag="h2"
        >Qu'est-ce que <span class="nowrap">BDX I/O</span>&nbsp;?</section-title
      >
      <p>
        BDX I/O est un conférence bordelaise sur le thème de la programmation et
        de ses métiers annexes.
        <br />Lors de l'édition 2020, nous avons reçu plus de 850 passionné·e·s
        lors d'une journée de découvertes et de bonne humeur&nbsp;!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomepageSectionAbout",
};
</script>

<style lang="scss" scoped>
.bourse {
  background: url("~/assets/img/place_de_la_bourse.png") no-repeat left bottom;
  background-size: 100%;
  padding-bottom: 200px;
  overflow: hidden;

  @include mobileFirst(xs) {
    padding-bottom: 250px;
  }
  @include mobileFirst(s) {
    padding-bottom: 300px;
  }

  .about-us {
    margin-left: 0;
    background-color: $grey-100;
    box-shadow: 0px 0px 30px 20px $grey-100;

    @include mobileFirst(s) {
      background-position-x: left;
      background-position-y: center;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 55%;
      padding-left: 0;
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
