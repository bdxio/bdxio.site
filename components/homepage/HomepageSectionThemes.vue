<template>
  <section class="section section-themes">
    <flex-container no-gutter class="justify-between-xs align-center-m">
      <flex-item s12 m4 l5 class="text-container">
        <section-title section tag="h2">thématique</section-title>
        <section-title tag="h3" class="title">Quels seront les thèmes abordés&nbsp;?</section-title>
        <p>
          BDX I/O propose des conférences autour de 7 thématiques différentes, avec des durées différentes et pour tous
          les niveaux : Vous trouverez forcément votre bonheur&nbsp;!
        </p>
      </flex-item>
      <flex-item s12 m8 l7 class="items">
        <div class="theme-item card">
          <span class="theme theme--1">Frontend</span>
        </div>
        <div class="theme-item card">
          <span class="theme theme--2">Backend</span>
        </div>
        <div class="theme-item card">
          <span class="theme theme--3">Big Data & IA</span>
        </div>
        <div class="theme-item card">
          <span class="theme theme--4">Design & UX</span>
        </div>
        <div class="theme-item card">
          <span class="theme theme--5">Cloud & Dev.Sec.Ops</span>
        </div>
        <div class="theme-item card">
          <span class="theme theme--6">Methodo & Architecture</span>
        </div>
        <div class="theme-item card">
          <span class="theme theme--7">Hors piste</span>
        </div>
      </flex-item>
    </flex-container>
  </section>
</template>

<script>
export default {
  name: "HomepageSectionThemes"
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/theme";
</style>
