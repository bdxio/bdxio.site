<script setup lang="ts">
// @ts-nocheck
import { SectionTitle } from "#components";
</script>

<template>
  <section class="section section-themes">
    <div no-gutter class="justify-between-xs align-center-m">
      <div s12 m4 l5 class="text-container">
        <SectionTitle section tag="h2">thématique</SectionTitle>
        <SectionTitle tag="h3" class="title">
          Quels seront les thèmes abordés&nbsp;?
        </SectionTitle>
        <p>
          BDX I/O propose des conférences autour de 7 thématiques différentes,
          avec des durées différentes et pour tous les niveaux : Vous trouverez
          forcément votre bonheur&nbsp;!
        </p>
      </div>
      <div s12 m8 l7 class="items">
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
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/theme";
</style>
