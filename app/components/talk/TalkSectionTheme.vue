<template>
  <section class="section-themes">
    <div class="theme-item">
      <span :class="`theme${themeClass}`" style="font-size: 30px; line-height: 40px; width: 250px">{{ category }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "TalkSectionTheme",
  props: {
    category: {
      type: String,
      required: true
    }
  },
  computed: {
    themeClass() {
      switch (this.category) {
        case "Frontend":
          return " theme--1";
        case "Design & UX":
          return " theme--4";
        case "Cloud & DevSecOps":
          return " theme--5";
        case "Méthodo & Architecture":
          return " theme--6";
        default:
          return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/theme";
</style>
