<script setup lang="ts">
// @ts-nocheck
import { defineProps } from "vue";
import { computed } from "#imports";

const categories = [
  "Frontend",
  "Backend",
  "Big Data & I.A.",
  "Design & UX",
  "Cloud & DevSecOps",
  "Méthodo & Architecture",
  "Hors-piste",
] as const;
type Category = typeof categories[number];

const props = defineProps<{
  category: Category;
}>();

const themeClass = computed(() => {
  switch (props.category) {
    case "Frontend":
      return " theme--1";
    case "Backend":
      return " theme--2";
    case "Big Data & I.A.":
      return " theme--3";
    case "Design & UX":
      return " theme--4";
    case "Cloud & DevSecOps":
      return " theme--5";
    case "Méthodo & Architecture":
      return " theme--6";
    case "Hors-piste":
      return " theme--7";
    default:
      return "";
  }
});
</script>

<template>
  <section class="section-themes">
    <div class="theme-item">
      <span
        :class="`theme${themeClass}`"
        style="font-size: 30px; line-height: 40px; width: 250px"
      >
        {{ category }}
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// @import "~/assets/styles/theme";
</style>
