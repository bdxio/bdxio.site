<template >
  <main>
    <section-hero />
    <section-key-concepts />
    <section-about />
    <section-themes />

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
    <section-news />
    <section-sponsors />
    <section-guidage />
  </main>
</template>

<script>
import { FlexContainer, FlexItem } from "~/components/layout/grid";
import SectionHero from "~/components/homepage/SectionHero";
import SectionAbout from "~/components/homepage/SectionAbout";
import SectionKeyConcepts from "~/components/homepage/SectionKeyConcepts";
import SectionGuidage from "~/components/homepage/SectionGuidage";
import SectionSponsors from "~/components/homepage/SectionSponsors";
import SectionNews from "~/components/homepage/SectionNews";
import SectionThemes from "~/components/homepage/SectionThemes";

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
    SectionNews,
    SectionGuidage,
    SectionThemes,
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
