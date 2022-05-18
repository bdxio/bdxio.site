<template functional>
  <section class="section section-themes">
    <flex-container
      no-gutter
      class="content"
    >
      <flex-item
        s12
        m3
        class="text-container"
      >
        <section-title tag="h3">thématique</section-title>
        <section-title tag="h2">Quels seront les thèmes abordés ?</section-title>
        <p>
          BDX I/O propose des conférences autour de 7 thématiques différentes,
          avec des durées différentes et pour tous les niveaux : Vous trouverez
          forcément votre bonheur !
        </p>
      </flex-item>
      <flex-item
        s12
        m9
        class="items"
      >
        <div class="theme-item"><span class="theme">Frontend</span></div>
        <div class="theme-item"><span class="theme">Backend</span></div>
        <div class="theme-item"><span class="theme">Big Data & IA</span></div>
        <div class="theme-item"><span class="theme">Design & UX</span></div>
        <div class="theme-item">
          <span class="theme">Cloud & Dev.Sec.Ops</span>
        </div>
        <div class="theme-item">
          <span class="theme">Methodo & Architecture</span>
        </div>
        <div class="theme-item"><span class="theme">Hors piste</span></div>
      </flex-item>
    </flex-container>
  </section>
</template>

<script>
import FlexContainer from "~/components/layout/grid/Flex-container";
import FlexItem from "~/components/layout/grid/Flex-item";
import SectionTitle from "~/components/SectionTitle";
export default {
  components: { SectionTitle, FlexContainer, FlexItem },
  name: "SectionThemes",
};
</script>

<style lang="scss" scoped>
.section-themes {
  color: $primary-dark;
  background-color: $white;

  .content {
    justify-content: space-between;
  }

  .theme {
    text-transform: uppercase;
    text-align: center;
    width: 150px;
    margin: 0 30px;
  }

  .items {
    display: flex;
    gap: 20px;
    overflow: auto;
    padding: 40px 20px;

    @include mobileFirst(m) {
      flex-wrap: wrap;
    }
  }

  .theme-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    box-shadow: 0px 7px 29px rgba(36, 36, 87, 0.1);
    border-radius: 8px;
    font-weight: 700;
    background-color: $white;

    @include mobileFirst(m) {
      height: 136px;
    }
  }

  .themes {
    display: flex;
    gap: 20px;
  }
}
</style>
