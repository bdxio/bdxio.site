<template>
  <main>
    <section-hero />
    <section-key-concepts />
    <section-about />
    <section-themes />
    <flex-container no-gutter>
      <flex-item s12 m6 class="sponsor-container">
        <section-sponsor />
      </flex-item>
      <flex-item s12 m6 class="speaker-container">
        <section-speaker />
      </flex-item>
    </flex-container>
    <!-- <section-news /> -->
    <section-sponsors />
    <section-guidage />
  </main>
</template>

<script>
import SectionHero from "~/components/homepage/SectionHero";
import SectionAbout from "~/components/homepage/SectionAbout";
import SectionKeyConcepts from "~/components/homepage/SectionKeyConcepts";
import SectionGuidage from "~/components/homepage/SectionGuidage";
import SectionSponsors from "~/components/homepage/SectionSponsors";
// import SectionNews from "~/components/homepage/SectionNews";
import SectionThemes from "~/components/homepage/SectionThemes";
import SectionSponsor from "../components/homepage/SectionSponsor";
import SectionSpeaker from "../components/homepage/SectionSpeaker";
import FlexContainer from "../components/layout/grid/Flex-container.vue";
import FlexItem from "../components/layout/grid/Flex-item.vue";

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
    SectionAbout,
    SectionHero,
    SectionKeyConcepts,
    SectionSponsors,
    // SectionNews,
    SectionGuidage,
    SectionThemes,
    SectionSpeaker,
    SectionSponsor,
    FlexContainer,
    FlexItem,
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
  // padding: 4em;
  background: $secondary;
  box-sizing: border-box;
  &:last-of-type {
    background: $grey-300;
  }
}

.speaker-container,
.sponsor-container {
  display: flex;
  flex: 1;
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
