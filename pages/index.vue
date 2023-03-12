<script setup lang="ts">
// @ts-nocheck
import { definePageMeta, useHead } from "#imports";
import {
  HomepageSectionHero,
  HomepageSectionKeyConcepts,
  HomepageSectionAbout,
  HomepageSectionAnnualTheme,
  HomepageSectionThemes,
  HomepageSectionSpeaker,
  HomepageSectionSponsor,
} from "#components";

definePageMeta({ layout: "homepage" });
useHead({ title: "BDX I/O" });
</script>

<template>
  <main>
    <HomepageSectionHero />
    <HomepageSectionKeyConcepts />
    <HomepageSectionAbout />
    <HomepageSectionAnnualTheme />
    <HomepageSectionThemes />
    <div no-gutter>
      <div s12 m6 class="sponsor-container">
        <HomepageSectionSponsor />
      </div>
      <div s12 m6 class="speaker-container">
        <HomepageSectionSpeaker />
      </div>
    </div>
  </main>
</template>

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
