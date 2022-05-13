<template functional>
  <section class="bourse">
    <div class="about-us">
      <h2 class="subsection-title">Qu'est-ce que <span class="nowrap">BDX I/O</span> ?</h2>
      <p>
        BDX I/O est un conférence bordelaise sur le thème de la programmation et de ses métiers annexes.
        <br />Lors de l'édition 2020, nous avons reçu plus de 850 passionné·e·s lors d'une journée de découvertes et de bonne humeur !
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
  .about-us {
    padding: 2em;
    margin-left: 0;
    background-color: $light;
  }

  .nowrap {
    white-space: nowrap;
  }

  @include mobileFirst(s) {
    background: url("~/assets/img/place_de_la_bourse.png") no-repeat left;
    background-size: 50%;
    display: flex;
    justify-content: flex-end;

    .about-us {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 2em 2em 2em 0;
      margin-left: 55%;

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

  @include mobileFirst(m) {
    .about-us {
      padding: 4em 4em 4em 0em;
    }
  }

  @include mobileFirst(l) {
    background-size: 45%;

    .about-us {
      padding: 5em 5em 5em 0em;
    }
  }
}
</style>