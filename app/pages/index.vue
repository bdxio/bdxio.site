<template functional>
  <main>
    <section-hero />
    <section-key-concepts />

    <section class="background-primary text-light">
      <div class="numbers-title">
        <h2>Bordeaux Developers eXperience</h2>
        <p>en quelques chiffres</p>
      </div>
      <div class="numbers-content bdx-grid-2-4">
        <VCounter :value="5" />
        <VCounter :value="40" />
        <VCounter :value="15" />
        <VCounter
          :value="900"
          :step="7"
        />
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
    <section-about />

    <flex-container no-gutter>
      <flex-item
        tag="section"
        class="subsection"
        s12
      >
        <h2 class="subsection-dark-title">Quels seront les thèmes abordés ?</h2>
        <p>BDX I/O propose des conférences autour de 7 thématiques différentes, avec des durées différentes et pour tous les niveaux : Vous trouverez forcément votre bonheur !</p>
        <button class="bdx-button outlined">Voir le programme</button>
      </flex-item>
    </flex-container>

    <flex-container no-gutter>
      <flex-item
        tag="section"
        class="text-light subsection"
        s6
      >
        <h2 class="subsection-light-title">SPONSORS</h2>
        <h3 class="subsection-title">Embarquez avec nous dans l'aventure !</h3>
        <p>
          Vous souhaitez devenir sponsor de cette nouvelle édition ? <br />
          En cliquant sur le bouton ci-dessous vous trouverez toutes les informations nécessaires.
        </p>
        <button class="bdx-button outlined-light">Devenir sponsor</button>
      </flex-item>
      <flex-item
        tag="section"
        class="subsection text-dark"
        s6
      >
        <h2 class="subsection-light-title">SPEAKERS</h2>
        <h3 class="subsection-title">Vous aussi, rejoignez le navire !</h3>
        <p>
          Vous avez un talk à proposer ? Des idées à partager ?
          <br />Rejoignez notre équipe de speakers pour cette édition 2022.
        </p>
        <button class="bdx-button outlined">Devenir speaker</button>
      </flex-item>
    </flex-container>
    <section-guidage />
  </main>
</template>

<script>
import { FlexContainer, FlexItem } from "~/components/layout/grid";
import SectionHero from "~/components/homepage/SectionHero.vue";
import SectionAbout from "~/components/homepage/SectionAbout";
import SectionKeyConcepts from "~/components/homepage/SectionKeyConcepts";
import SectionGuidage from "~/components/homepage/SectionGuidage";
import SectionSponsors from "~/components/homepage/SectionSponsors";

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
    FlexContainer,
    FlexItem,
    SectionAbout,
    SectionHero,
    SectionKeyConcepts,
    SectionSponsors,
    SectionGuidage,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2em;
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

.subsection {
  padding: 4em;
  background: $secondary;
  box-sizing: border-box;
  &:last-of-type {
    background: $grey-300;
  }
}

.subsection-light-title {
  font-weight: $font-weight-light;
  font-family: Lato;
  font-size: 1.4em;
}

.subsection-title {
  font-size: 1.8em;
}
</style>
