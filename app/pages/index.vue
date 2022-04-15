<template>
  <main class="bdx-grid-6-2">
    <header class="bdx-grid-el-1-1-to-2-3">
      <h1>En 2022,<br />Nous sommes de retour !</h1>
      <p>On se retrouve au Palais des congrès de Bordeaux Lac</p>
      <h1>02/12/2022</h1>
      <h2>Et on a hâte de vous y (re)voir !</h2>
    </header>
    <section class="background-primary text-light bdx-grid-el-2-1-to-3-3">
      <div class="numbers-title">
        <h2>Bordeaux Developers eXperience</h2>
        <p>en quelques chiffres</p>
      </div>
      <div class="numbers-content bdx-grid-2-4">
        <VCounter :value="5" />
        <VCounter :value="40" />
        <VCounter :value="15" />
        <VCounter :value="900" :step="7" />
        <div>
          <h4>Amphis</h4>
          <p>On se retrouve au Palais des congrès de Bordeaux Lac</p>
        </div>
        <div>
          <h4>Conférences</h4>
          <p>On se retrouve au palais des congrès de Bordeaux Lac</p>
        </div>
        <div>
          <h4>Communautés</h4>
          <p>On se retrouve au Palais des congrès de Bordeaux Lac</p>
        </div>
        <div>
          <h4>Devs</h4>
          <p>On se retrouve au Palais des congrès de Bordeaux Lac</p>
        </div>
      </div>
    </section>
    <section class="bdx-grid-el-3-1 flex-centered">
      <img class="bourse-image" src="~/assets/img/place_de_la_bourse.png" alt="Illustration de la Place de la Bourse à Bordeaux" />
    </section>
    <section class="bdx-grid-el-3-2 about-us">
      <h2 class="subsection-title">Qu'est-ce que BDX I/O ?</h2>
      <p>
        BDX I/O est un conférence bordelaise sur le thème de la programmation et de ses métiers annexes.
        <br />Lors de l'édition 2020, nous avons reçu plus de 850 passionné·e·s lors d'une journée de découvertes et de bonne humeur !
      </p>
    </section>
    <section class="bdx-grid-el-4-1 text-light subsection">
      <h2 class="subsection-light-title">SPONSORS</h2>
      <h3 class="subsection-title">Embarquez avec nous dans l'aventure !</h3>
      <p>
        Vous souhaitez devenir sponsor de cette nouvelle édition ? <br />
        En cliquant sur le bouton ci-dessous vous trouverez toutes les informations nécessaires.
      </p>
      <button class="bdx-button outlined-light">Devenir sponsor</button>
    </section>
    <section class="bdx-grid-el-4-2 subsection text-dark">
      <h2 class="subsection-light-title">SPEAKERS</h2>
      <h3 class="subsection-title">Vous aussi, rejoignez le navire !</h3>
      <p>
        Vous avez un talk à proposer ? Des idées à partager ?
        <br />Rejoignez notre équipe de speakers pour cette édition 2022.
      </p>
      <button class="bdx-button outlined">Devenir speaker</button>
    </section>
  </main>
</template>

<script>
import VCounter from "~/components/VCounter.vue";

export default {
  name: "HomePage",
  head() {
    return {
      script: [
        {
          src: "https://platform.twitter.com/widgets.js",
          type: "text/javascript",
          charset: "utf-8",
          async: true,
        },
      ],
    };
  },
  components: {
    VCounter,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2em;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1:last-of-type {
    font-style: italic;
  }

  h2 {
    text-align: center;
    font-size: 1.5em;
  }

  p {
    max-width: 15em;
    font-size: 1.3em;
    text-align: center;
  }
}

.numbers-title {
  text-align: center;
  margin: 2em 0;

  h2 {
    font-size: 1.5em;
    font-family: Lato;
    margin-bottom: 0.2em;
  }

  p {
    font-size: 1.2em;
    margin-top: 0;
  }
}

.numbers-content {
  text-align: center;
  padding: 0 4em 4em;

  span {
    font-family: Merriweather;
    font-size: 4em;
  }

  div {
    padding: 0 5em;

    h4 {
      font-family: Merriweather;
      font-size: 1.4em;
      margin: 1em;
    }

    p {
      max-width: 8em;
      margin: 0 auto;
    }
  }
}

.about-us {
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    max-width: 25em;
  }
}

.bourse-image {
  width: 40vw;
  margin: 1em;
}

.subsection {
  padding: 4em;
  background: $secondary;

  &:last-of-type {
    background: $grey;
  }
}

.subsection-light-title {
  font-weight: 300;
  font-family: Lato;
  font-size: 1.4em;
}

.subsection-title {
  font-size: 1.8em;
}
</style>
